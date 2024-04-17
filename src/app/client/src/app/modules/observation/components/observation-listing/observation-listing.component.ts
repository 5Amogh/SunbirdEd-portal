import {
  PaginationService,
  ResourceService,
  ConfigService,
  ToasterService,
  UtilService,
  BrowserCacheTtlService,
  NavigationHelperService,
  IPagination,
  LayoutService,
  COLUMN_TYPE,
  OfflineCardService,
} from '@sunbird/shared';
import {
  SearchService,
  PlayerService,
  CoursesService,
  UserService,
  OrgDetailsService,
  SchemaService,
  KendraService,
  ObservationUtilService
} from '@sunbird/core';
import { Subject } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash-es';
import {
  IInteractEventEdata,
  IImpressionEventInput,
  TelemetryService,
} from '@sunbird/telemetry';
import {
  takeUntil,
} from 'rxjs/operators';
import { CacheService } from '../../../shared/services/cache-service/cache.service';
import { ContentManagerService } from '../../../public/module/offline/services/content-manager/content-manager.service';
import {Location} from '@angular/common';
import { CslFrameworkService } from '../../../public/services/csl-framework/csl-framework.service';

@Component({
  selector: 'app-observation-listing',
  templateUrl: './observation-listing.component.html',
  styleUrls: ['./observation-listing.component.scss'],
})
export class ObservationListingComponent
  implements OnInit, OnDestroy, AfterViewInit {
  pageTitleSrc = 'resourceService?.frmelmnts?.lbl?.observation';
  svgToDisplay = 'textbooks-banner-img.svg';
  contentList: any = [];
  public unsubscribe$ = new Subject<void>();
  layoutConfiguration: any;
  contentData;
  contentName: string;
  public inViewLogs = [];
  public telemetryImpression: IImpressionEventInput;
  public cardIntractEdata: IInteractEventEdata;
  public showLoader = true;
  public initFilters = false;
  public noResultMessage;
  isDesktopApp = false;
  selectedFilters: any;
  totalCount: any = 0;
  FIRST_PANEL_LAYOUT;
  SECOND_PANEL_LAYOUT;
  public allTabData;
  config;
  searchData: any = '';
  public numberOfSections = new Array(
    this.configService.appConfig.SEARCH.PAGE_LIMIT
  );
  public paginationDetails: IPagination;
  queryParam: any = {};
  showEditUserDetailsPopup: any = true;
  payload: any;
  public limit  = 50;
  public categoryKeys;
  constructor(
    public searchService: SearchService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public paginationService: PaginationService,
    public resourceService: ResourceService,
    public toasterService: ToasterService,
    public changeDetectorRef: ChangeDetectorRef,
    public configService: ConfigService,
    public utilService: UtilService,
    public coursesService: CoursesService,
    private playerService: PlayerService,
    public userService: UserService,
    public cacheService: CacheService,
    public browserCacheTtlService: BrowserCacheTtlService,
    public orgDetailsService: OrgDetailsService,
    public navigationhelperService: NavigationHelperService,
    public layoutService: LayoutService,
    private schemaService: SchemaService,
    public contentManagerService: ContentManagerService,
    public telemetryService: TelemetryService,
    private offlineCardService: OfflineCardService,
    private kendraService: KendraService,
    config: ConfigService,
    private observationUtil: ObservationUtilService,
    private location: Location,
    public cslFrameworkService: CslFrameworkService
  ) {
    this.config = config;
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.paginationDetails = this.paginationService.getPager(0, 1, this.configService.appConfig.SEARCH.PAGE_LIMIT);
  }

  async ngOnInit() {
    this.initLayout();
    this.categoryKeys = this.cslFrameworkService.transformDataForCC();
    this.showEditUserDetailsPopup = await this.observationUtil.getProfileInfo();
     if (!this.showEditUserDetailsPopup) {
       const metaData = this.observationUtil.getAlertMetaData();
       metaData.type = 'update profile';
       metaData.isClosed = true;
       metaData.size = 'mini';
       metaData.content.title = this.resourceService.frmelmnts.lbl.updateProfileTitle;
       metaData.content.body.type = 'text';
       metaData.content.body.data = this.resourceService.frmelmnts.lbl.updateprofilecontent;
       metaData.footer.className = 'single-btn';
       metaData.footer.buttons.push(
        {
          type: 'accept',
          returnValue: true,
          buttonText: this.resourceService.frmelmnts.btn.update,
          className: 'popup-btn'
        }
        );
      const returnData = await this.observationUtil.showPopupAlert(metaData);
      if (returnData) {
        const queryParam = {
          showEditUserDetailsPopup: true
        };
       this.router.navigate(['profile'], {queryParams: queryParam});
      }
      return;
     }
     this.activatedRoute.queryParams.subscribe((params) => {
      if (params['key']) {
        this.searchData = params['key'];
        return this.fetchContentList();
      }
      this.searchData = '';
      this.fetchContentList();
    });
    this.listenLanguageChange();
  }

  async getProfileCheck() {
    await this.observationUtil.getProfileInfo()
    .then((result: any) => {
      return result;
    });
  }

  private listenLanguageChange() {
    this.resourceService.languageSelected$.pipe(takeUntil(this.unsubscribe$)).subscribe((languageData) => {
        this.setNoResultMessage();
    });
}

  private setNoResultMessage() {
    const noContentfoundSubTitle = this.utilService.transposeTerms(_.get(this.resourceService, 'frmelmnts.lbl.noContentfoundSubTitle'), 'frmelmnts.lbl.noContentfoundSubTitle', this.resourceService.selectedLang);
    const title = _.get(this.resourceService, 'messages.stmsg.m0006');
    this.noResultMessage = { title, noContentfoundSubTitle };
  }

  getDataParam() {
    this.observationUtil.getProfileDataList()
    .then((result: any) => {
      this.payload = result;
    });
  }

  back(): void {
    this.location.back();
  }

  async fetchContentList(page = 1) {
    await this.getDataParam();
    const paramOption = {
      url: this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_LISTING,
      param: { page: page, limit: this.limit, search: this.searchData },
      data: this.payload
    };

    const data = {
      "status": 200,
      "result": {
          "data": [
              {
                  "_id": "656d6416255e460008c6c056",
                  "name": "Test observation with rubrics dec test 1",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "656716b08d49470008d0fd52",
                  "solutionId": "6569cd6ec8649f0009ee5963",
                  "language": [
                      "English"
                  ],
                  "creator": "led imp",
                  "programName": "Test - Observation led improvement project (without certificate)"
              },
              {
                  "_id": "656d63c9255e460008c6bffa",
                  "name": "Test-Observation led improvement template-Prod - wtithout certificate",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "656716b08d49470008d0fd52",
                  "solutionId": "656717e3c02adb00080f459c",
                  "language": [
                      "English"
                  ],
                  "creator": "led imp",
                  "programName": "Test - Observation led improvement project (without certificate)"
              },
              {
                  "_id": "6566cccec02adb00080f33f8",
                  "name": "Observation Led IMP for Testing Script for 5.1.3 hardcoded value to dynamic value",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "65323217e488ba000873ae64",
                  "solutionId": "653b8faf18c24500081c9f6b",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "testing test"
              },
              {
                  "_id": "6566ccb9c02adb00080f33c8",
                  "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
                  "description": "Testing observation for production",
                  "entityType": "district",
                  "programId": "6560424c924add0008cfc991",
                  "solutionId": "6564904b15793100084d5c9d",
                  "language": [
                      "English"
                  ],
                  "creator": "Guest new name",
                  "programName": "Test for fix Staging Api testing with script"
              },
              {
                  "_id": "6566cc89c02adb00080f331b",
                  "name": "Observation with Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
                  "description": "Observation with Rubrics CSP OCI program 3",
                  "entityType": "school",
                  "programId": "6560424c924add0008cfc991",
                  "solutionId": "65604bb4bafc5b00081c8b68",
                  "language": [
                      "English"
                  ],
                  "creator": "Guest new name",
                  "programName": "Test for fix Staging Api testing with script"
              },
              {
                  "_id": "6565ce58b4f2fb0008469044",
                  "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
                  "description": "Testing observation for production",
                  "entityType": "district",
                  "programId": "6554bb310f8f430008749a7d",
                  "solutionId": "65604303bafc5b00081c84d9",
                  "language": [
                      "English"
                  ],
                  "creator": "Guest new name",
                  "programName": "Tech Skill Club-Digital Mela"
              },
              {
                  "_id": "652f5fcc5ccf01000873c9d3",
                  "name": "OCI-Observation without Rubrics-block",
                  "description": "obs Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "block",
                  "programId": "65251d764d04060007348af0",
                  "solutionId": "65253242d985ec0008b289db",
                  "language": [
                      "English"
                  ],
                  "creator": "Subash",
                  "programName": "OCI 6.0 Regression - ten years later, the international community met again at the World Education Forum in Dakar, Senegal, an event which drew the international community met again at the World Education "
              },
              {
                  "_id": "65251847d985ec0008b26bc4",
                  "name": "OCI-ECM_Rubric",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "651fad9b58051f00081d759e",
                  "solutionId": "65251385d985ec0008b26876",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "OCI-Parent-Child"
              },
              {
                  "_id": "651fb6f92111300008191862",
                  "name": "OCI - Parent-Child-1",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "651fad9b58051f00081d759e",
                  "solutionId": "651fb5002111300008191733",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "OCI-Parent-Child"
              },
              {
                  "_id": "6512832cc59d9f0008fbf5cb",
                  "name": "Testing observation with rubrics for Support",
                  "description": "Testing observation with rubrics for Support",
                  "entityType": "school",
                  "programId": "64abc0420c081600096fde0a",
                  "solutionId": "64abd20ec60fd10008692aba",
                  "language": [
                      "English"
                  ],
                  "creator": "Vinod",
                  "programName": "Testing program Support team Script testing"
              },
              {
                  "_id": "65115fcbb257fb0008cd91c1",
                  "name": "Leadership Self Assessment for program 1",
                  "description": "Leadership Self Assessment for program 1",
                  "entityType": "school",
                  "programId": "64ae95b798b4290008a2ab98",
                  "solutionId": "64ae98f4c60fd10008694c1c",
                  "language": [
                      "English"
                  ],
                  "creator": "Guest new name",
                  "programName": "Script testing for mandatory feilds"
              },
              {
                  "_id": "65115f9db257fb0008cd9151",
                  "name": "Observation with Rubrics CSP Program7",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "650be4aea302f0000807b2b0",
                  "solutionId": "650be503a6754a00088e6d38",
                  "language": [
                      "English"
                  ],
                  "creator": "Guest new name",
                  "programName": "6.0 CSP 7 Program already expired"
              },
              {
                  "_id": "64a3936e5c81330008b8298f",
                  "name": "ರೂಬ್ರಿಕ್ಸ್ ಇಲ್ಲದ obs 5 रूब्रिक के बिना अवलोकन 5 రూబ్రిక్స్ లేని obs 5",
                  "description": "Survey Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "school",
                  "programId": "6492968ba08e6200086f2ba8",
                  "solutionId": "6492d2335c81330008b7179e",
                  "language": [
                      "English"
                  ],
                  "creator": "Srikanth",
                  "programName": "Program Teacher – 3"
              },
              {
                  "_id": "649c24a65c81330008b7f07a",
                  "name": "Observation applicable",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "block",
                  "programId": "649c14e4e959de0008d41178",
                  "solutionId": "649c21f05c81330008b7ed2c",
                  "language": [
                      "English"
                  ],
                  "creator": "JCERT Ranchi",
                  "programName": "Not Applicable test"
              },
              {
                  "_id": "649c19375c81330008b7e8b5",
                  "name": "Observation with rubrics ECM",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "block",
                  "programId": "649c14e4e959de0008d41178",
                  "solutionId": "649c14e75c81330008b7e7ba",
                  "language": [
                      "English"
                  ],
                  "creator": "JCERT Ranchi",
                  "programName": "Not Applicable test"
              },
              {
                  "_id": "649bfd905c81330008b7e243",
                  "name": "Testing credit's and licence for observation",
                  "description": "Testing credit's and licence for observation",
                  "entityType": "school",
                  "programId": "648c3c0cd28df50009eea512",
                  "solutionId": "649bdf215c81330008b7dc1c",
                  "language": [
                      "English"
                  ],
                  "creator": "Diksha",
                  "programName": "Testing 6.0 regression program"
              },
              {
                  "_id": "649bdd145c81330008b7db26",
                  "name": "रूब्रिक के बिना अवलोकन 6",
                  "description": "Survey Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "school",
                  "programId": "6492968ba08e6200086f2ba8",
                  "solutionId": "6492c4ad5c81330008b7144e",
                  "language": [
                      "English"
                  ],
                  "creator": "Srikanth",
                  "programName": "Program Teacher – 3"
              },
              {
                  "_id": "649a7e5a5c81330008b7ac49",
                  "name": "Observation with rubrics ECM",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "64953f96955f600008e2b8ff",
                  "solutionId": "649543685c81330008b760d8",
                  "language": [
                      "English"
                  ],
                  "creator": "JCERT Ranchi",
                  "programName": "CBSE program"
              },
              {
                  "_id": "649a61125c81330008b7a35a",
                  "name": "obs with rubrics 3",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "648c1020d28df50009eea3b6",
                  "solutionId": "648c41125c81330008b69336",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "Program Teacher-1"
              },
              {
                  "_id": "644ba27e15565900084198c8",
                  "name": "Automation rubric with multiple submission - Teacher",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "programId": "6433cf2719d3920009db0451",
                  "solutionId": "6448e8f815565900084189bc",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "Automation Test Data"
              },
              {
                  "_id": "6406d8052be0b800093b5fd6",
                  "name": "observation with rubric(Multiple submission)FD830D",
                  "description": "observation with rubric(sMultiple submission)FD830D",
                  "entityType": "district",
                  "programId": "6319a4d53c40dd000978dacb",
                  "solutionId": "63848c97a1d0c60008cef488",
                  "language": [
                      "English"
                  ],
                  "creator": "Support",
                  "programName": "Testing program 5.0.2"
              },
              {
                  "_id": "6406d7fd2be0b800093b5fa6",
                  "name": "observation with rubric(single submission)FD830B",
                  "description": "observation with rubric(single submission)FD830B",
                  "entityType": "block",
                  "programId": "6319a4d53c40dd000978dacb",
                  "solutionId": "63848c6da1d0c60008cef2d0",
                  "language": [
                      "English"
                  ],
                  "creator": "Support",
                  "programName": "Testing program 5.0.2"
              },
              {
                  "_id": "63ec72612be0b800093b3e15",
                  "name": "Observation with rubrics single submissions",
                  "description": "Description of Observation with rubrics single submissions",
                  "entityType": "district",
                  "programId": "63aad08ef09e450009075d2d",
                  "solutionId": "63e4a8d42be0b800093b2688",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "Testing by dev team ap"
              },
              {
                  "_id": "63ca7e2c2be0b800093b0643",
                  "name": "ನಲಿ-ಕಲಿ ತರಗತಿಗಳ ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ ವೀಕ್ಷಣೆ",
                  "description": "Observation of Nali-kali Classroom Intraction",
                  "entityType": "school",
                  "programId": "63a54257c0b15a0009f05730",
                  "solutionId": "63a5426ca1d0c60008cf3851",
                  "language": [
                      "Kannada"
                  ],
                  "creator": "Ka Observation",
                  "programName": "ನಲಿ-ಕಲಿ ತರಗತಿಗಳ ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿ ವೀಕ್ಷಣೆ-ಕರ್ನಾಟಕ"
              },
              {
                  "_id": "63ca7a272be0b800093b062a",
                  "name": "Test-परीक्षण प्रेक्षण रिपोर्ट हॉटफिक्स-हिन्दी(Hindi)-(Observation without rubric-language[Hindi])",
                  "description": "Test-परीक्षण प्रेक्षण रिपोर्ट हॉटफिक्स-हिन्दी(Hindi)-(Observation without rubric-language[Hindi])",
                  "entityType": "district",
                  "programId": "63ad574c2b2d3b0008cc1a8a",
                  "solutionId": "63ad5768a6e88e00081152be",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "Test-परीक्षण प्रेक्षण रिपोर्ट हॉटफिक्स - हिन्दी"
              },
              {
                  "_id": "63ad7b6da6e88e0008115948",
                  "name": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)-(Observation without rubric-language[Odia])",
                  "description": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)-(Observation without rubric-language[Odia])",
                  "entityType": "district",
                  "programId": "63ad5c882b2d3b0008cc1b57",
                  "solutionId": "63ad5ca9a6e88e000811550e",
                  "language": [
                      "English"
                  ],
                  "creator": "Survey Support",
                  "programName": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)"
              },
              {
                  "_id": "63ad7b04a6e88e000811591d",
                  "name": "Test-சோதனை கண்காணிப்பு அறிக்கை hotfix - தமிழ்(Tamil)",
                  "description": "Test-சோதனை கண்காணிப்பு அறிக்கை hotfix - தமிழ்(Tamil)",
                  "entityType": "school",
                  "programId": "63ad5d8f2b2d3b0008cc1bb7",
                  "solutionId": "63ad5e41a6e88e00081155ab",
                  "language": [
                      "English"
                  ],
                  "creator": "Support",
                  "programName": "Test-சோதனை கண்காணிப்பு அறிக்கை hotfix - தமிழ்(Tamil)"
              },
              {
                  "_id": "63ad7afaa6e88e000811590b",
                  "name": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)-(Observation with rubric-language[Odia])",
                  "description": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)-(Observation with rubric-language[Odia])",
                  "entityType": "school",
                  "programId": "63ad5c882b2d3b0008cc1b57",
                  "solutionId": "63ad5c8da6e88e0008115488",
                  "language": [
                      "English"
                  ],
                  "creator": "Support",
                  "programName": "Test-ପରୀକ୍ଷଣ ପର୍ଯ୍ୟବେକ୍ଷଣ ରିପୋର୍ଟ ହଟଫିକ୍ସ - ଓଡିଆ |(Odia)"
              },
              {
                  "_id": "630608733d7d91000938dd1f",
                  "name": "CBSE-School Quality Assessment and Assurance -28th Aug",
                  "description": "To focus and enable continous school improvement CBSE has development the SQAA Framework. This is self assessment for school leaders and has 7 domains ranging from curriculaum, leadership and inclusive education to name a few.",
                  "entityType": "school",
                  "programId": "60dacb6ff595770aafd6a8e6",
                  "solutionId": "6128e42c6a37e7597db24dc7",
                  "language": [
                      "English"
                  ],
                  "creator": "CBSE",
                  "programName": "CBSE SQAA"
              },
              {
                  "_id": "630608113d7d91000938dcdf",
                  "name": "simple observation for testing – AP",
                  "description": "This is to test the new flow of genie code",
                  "entityType": "school",
                  "programId": "6124984e5435a115cac9f120",
                  "solutionId": "61249c2fe728e31651caf584",
                  "language": [
                      "English"
                  ],
                  "creator": "",
                  "programName": "Test 4.2.5 program"
              },
              {
                  "_id": "630608093d7d91000938dcca",
                  "name": "Solution with rubrics -File button – FD-429",
                  "description": "Solution with rubrics -File button -- FD-429",
                  "entityType": "school",
                  "programId": "625575f4aac5a900076825e5",
                  "solutionId": "62a1bab776ca3c000796570a",
                  "language": [
                      "English"
                  ],
                  "creator": "KEF_HP_CC_1",
                  "programName": "Testing program 4.9"
              },
              {
                  "_id": "630607d13d7d91000938dcaa",
                  "name": "Solution without rubrics -File button – FD-429",
                  "description": "An observation form for district and block mentors school visits. ",
                  "entityType": "school",
                  "programId": "625575f4aac5a900076825e5",
                  "solutionId": "62a1b61376ca3c0007965638",
                  "language": [
                      "English"
                  ],
                  "creator": "",
                  "programName": "Testing program 4.9"
              },
              {
                  "_id": "630607c33d7d91000938dc7f",
                  "name": "Simple Observation – FD 114",
                  "description": "Simple Observation – FD 114",
                  "entityType": "school",
                  "programId": "6172a6e58cf7b10007eefd21",
                  "solutionId": "617b9edf46acf400076602b2",
                  "language": [
                      "English"
                  ],
                  "creator": "",
                  "programName": "Testing 4.4"
              },
              {
                  "_id": "62b9720176ca3c000796c0f0",
                  "name": "Obs with Rub – Only slider with score",
                  "description": "This is a test with only slider question",
                  "entityType": "school",
                  "programId": "625575f4aac5a900076825e5",
                  "solutionId": "627ccf5209446e00072ccb9e",
                  "language": [
                      "English"
                  ],
                  "creator": "",
                  "programName": "Testing program 4.9"
              },
              {
                  "_id": "62614248ab4552000717a292",
                  "name": "TEACH Tool-support test",
                  "description": "This is an assessment form to be used during classroom observation.",
                  "entityType": "school",
                  "programId": "61dd77a459e49a00074aecae",
                  "solutionId": "61de68b115edfd0007d91242",
                  "language": [
                      "English"
                  ],
                  "creator": "",
                  "programName": "Testing program 4.6"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "OCI-Observation without Rubrics-state-backendTest",
                  "description": "obs Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "state",
                  "creator": "Subash",
                  "programId": "6613d15ef5b75d0007f7e266",
                  "programName": "Testingfor backend",
                  "endDate": "2025-04-10T12:58:23.216Z",
                  "link": "065939012a5646b31d3492c2514cb273",
                  "solutionId": "66168cef60496d00086f4660"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Observation Led IMP for Testing Script for 5.1.3 hardcoded value to dynamic value",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "creator": "Survey Support",
                  "programId": "6613d15ef5b75d0007f7e266",
                  "programName": "Testingfor backend",
                  "endDate": "2025-04-08T11:13:42.245Z",
                  "link": "47da54c5eff1fe756e0b638ec4afbd32",
                  "solutionId": "6613d16659db510008cad170"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Observation Without Rubric 2",
                  "description": "Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation.",
                  "entityType": "district",
                  "creator": "Automation QA",
                  "programId": "65fa76295807d90008c7c6a1",
                  "programName": "Testing subtask and tasks in project",
                  "endDate": "2024-05-29T18:29:59.000Z",
                  "link": "67911687857bae6c87cec666868af7fe",
                  "solutionId": "66056dac8048eb00089ca8f3"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Observation Without Rubric",
                  "description": "Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation.",
                  "entityType": "district",
                  "creator": "Automation QA",
                  "programId": "65fa76295807d90008c7c6a1",
                  "programName": "Testing subtask and tasks in project",
                  "endDate": "2024-05-29T18:29:59.000Z",
                  "link": "433d109b95bb186916ade0cf637c8754",
                  "solutionId": "660568d48048eb00089ca75c"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Observation Without Rubric",
                  "description": "Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation.",
                  "entityType": "district",
                  "creator": "Automation QA",
                  "programId": "65fa76295807d90008c7c6a1",
                  "programName": "Testing subtask and tasks in project",
                  "endDate": "2024-05-29T18:29:59.000Z",
                  "link": "0d08452c09cadddcedc99d8a954c47d6",
                  "solutionId": "660552268048eb00089ca712"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Observation Without Rubric",
                  "description": "Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation.",
                  "entityType": "district",
                  "creator": "Automation QA",
                  "programId": "65fa76295807d90008c7c6a1",
                  "programName": "Testing subtask and tasks in project",
                  "endDate": "2024-05-29T18:29:59.000Z",
                  "link": "badbcc793caa80aead8425bb8ff6ab27",
                  "solutionId": "660551ff8048eb00089ca6c8"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Testing Observation With rubrics template",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "creator": "Survey Support",
                  "programId": "6603efdff3c38200090d7f54",
                  "programName": "Test_CBSE program (Sunbird.)",
                  "endDate": "2025-03-28T10:42:09.881Z",
                  "link": "a65c9924a7aea7cdb2d80695edf68b60",
                  "solutionId": "660549818048eb00089ca676"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Kaushik KT obs with rubrics",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "creator": "Survey Support",
                  "programId": "65fd26c93199fb0008d8ea8f",
                  "programName": "Kaushik KT",
                  "endDate": "2024-06-01T18:29:59.000Z",
                  "link": "bf372f97a3243b4c11a5cd117f43364a",
                  "solutionId": "6604026663d43b0008180791"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Testing Observation With rubrics template",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "creator": "Survey Support",
                  "programId": "6603efdff3c38200090d7f54",
                  "programName": "Test_CBSE program (Sunbird.)",
                  "endDate": "2025-03-27T10:30:20.751Z",
                  "link": "7d26f479718e8e886b0066f957c8abde",
                  "solutionId": "6603f53c63d43b0008180543"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Testing Observation Without rubrics template",
                  "description": "Testing Observation Without rubrics template",
                  "entityType": "school",
                  "creator": "Vinod",
                  "programId": "6603efdff3c38200090d7f54",
                  "programName": "Test_CBSE program (Sunbird.)",
                  "endDate": "2025-03-27T10:13:39.119Z",
                  "link": "8565828d33740359bc24a4ea0c53876e",
                  "solutionId": "6603f15363d43b000818009b"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Obs without rubrics KT",
                  "description": "This is an assessment form to be used during classroom observation.",
                  "entityType": "school",
                  "programId": "65fd26c93199fb0008d8ea8f",
                  "programName": "Kaushik KT",
                  "endDate": "2025-03-25T06:55:17.276Z",
                  "link": "3a86f1c76c143d042efd30188e88c406",
                  "solutionId": "66011fd5d7fe7f00088d4be8",
                  "creator": ""
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "observation for testing imp flow",
                  "description": "Survey Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "school",
                  "creator": "Gagan",
                  "programId": "65eff9d80725800009778efe",
                  "programName": "New VPN testing",
                  "endDate": "2025-03-12T06:44:48.491Z",
                  "link": "674c7d472fe53665266b410660397ebf",
                  "solutionId": "65eff9e0a38f0a00088f3657"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "रूब्रिक के साथ अवलोकन 5",
                  "description": "This is a school assessment to improve the process of raising budget requirements for secondary schools in Punjab",
                  "entityType": "school",
                  "creator": "Survey Support",
                  "programId": "6492968ba08e6200086f2ba8",
                  "programName": " Program Teacher – 3",
                  "endDate": "2025-08-20T18:29:59.000Z",
                  "link": "c1c9e47c70408a4c17396854aa220230",
                  "solutionId": "6492c49b5c81330008b71390"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "Obs without rubrics  3",
                  "description": "Survey Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "school",
                  "creator": "Srikanth",
                  "programId": "648c1020d28df50009eea3b6",
                  "programName": "Program Teacher-1",
                  "endDate": "2025-08-20T18:29:59.000Z",
                  "link": "5e6da434d055e8167c72c18e7eccb9ed",
                  "solutionId": "6492ee395c81330008b72598"
              },
              {
                  "_id": "",
                  "language": [
                      "English"
                  ],
                  "name": "obs without rubrics 3",
                  "description": "Survey Form to understand the challenges that the parents are facing in getting their children enrolled in DIKSHA courses",
                  "entityType": "district",
                  "creator": "Srikanth",
                  "programId": "648c1020d28df50009eea3b6",
                  "programName": "Program Teacher-1",
                  "endDate": "2025-08-20T18:29:59.000Z",
                  "link": "9a1892285a1e2139df6715b6fa9232f6",
                  "referenceFrom": "project",
                  "solutionId": "6492d63e5c81330008b71b30"
              }
          ],
          "count": 226
      },
      "responseCode": "OK"
  }

  this.totalCount = data.result.count;
  this.paginationDetails.currentPage = page;
  this.paginationDetails = this.paginationService.getPager(
    data.result.count,
    this.paginationDetails.currentPage,
    this.limit
  );
  this.setFormat(data.result.data);
    this.kendraService.post(paramOption).subscribe(
      (data: any) => {
        this.totalCount = data.result.count;
        this.paginationDetails.currentPage = page;
        this.paginationDetails = this.paginationService.getPager(
          data.result.count,
          this.paginationDetails.currentPage,
          this.limit
        );
        this.setFormat(data.result.data);
      },
      (error) => {

      }
    );
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  public navigateToPage(page: number): void {
    if (page < 1 || page > this.paginationDetails.totalPages) {
      return;
    }
    this.fetchContentList(page);
  }

  setFormat(data) {
    const result = [];
    this.contentList = [];

    data.forEach((value) => {
      let solution_name: string = value.name;
      solution_name = (solution_name && solution_name.length) ? solution_name[0].toUpperCase() + solution_name.slice(1) : '';
      const subject: any = [];
      subject.push(value.programName);
      const obj = {
        name: solution_name,
        contentType: 'Observation',
        entityType:value.entityType,
        identifier: value.solutionId,
        solutionId: value.solutionId,
        programId: value.programId,
        metaData: {
          identifier: value.solutionId,
        },
        organization: value.creator,
        _id: value._id,
        [this.categoryKeys[2].code]: value.language,
        [this.categoryKeys[4].code]: value.programName,
      };
      if (value.creator && value.creator.length) {
        const creator: any = [];
        creator.push(value.creator);
        obj[this.categoryKeys[3].code] = creator;
      }
      result.push(obj);
      this.contentList = result;
    });
    this.showLoader = false;
  }

  initLayout() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.redoLayout();
    this.layoutService
      .switchableLayout()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((layoutConfig) => {
        if (layoutConfig != null) {
          this.layoutConfiguration = layoutConfig.layout;
        }
        this.redoLayout();
      });
  }
  redoLayout() {
    if (this.layoutConfiguration != null) {
      this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(
        0,
        this.layoutConfiguration,
        COLUMN_TYPE.threeToNine,
        true
      );
      this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(
        1,
        this.layoutConfiguration,
        COLUMN_TYPE.threeToNine,
        true
      );
    } else {
      this.FIRST_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(
        0,
        null,
        COLUMN_TYPE.fullLayout
      );
      this.SECOND_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(
        1,
        null,
        COLUMN_TYPE.fullLayout
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setTelemetryData();
      this.inView({ inview: [] });
    });
  }

  private setTelemetryData() {
    this.inViewLogs = []; // set to empty every time filter or page changes
    this.telemetryImpression = {
      context: {
        env: this.activatedRoute.snapshot.data.telemetry.env,
      },
      edata: {
        type: this.activatedRoute.snapshot.data.telemetry.type,
        pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
        uri: this.userService.slug
          ? '/' + this.userService.slug + this.router.url
          : this.router.url,
        subtype: this.activatedRoute.snapshot.data.telemetry.subtype,
        duration: this.navigationhelperService.getPageLoadTime(),
      },
    };
    this.cardIntractEdata = {
      id: 'content-card',
      type: 'click',
      pageid: this.activatedRoute.snapshot.data.telemetry.pageid,
    };
  }

  playContent(event) {
    console.log('event data from play content',event)
    const data = event.data;
    this.queryParam = {
      programId: data.programId,
      solutionId: data.solutionId,
      observationId: data._id,
      solutionName: data.name,
      programName: data.subject[0],
      entityType:data.entityType
    };
    this.router.navigate(['observation/details'], {
      queryParams: this.queryParam,
    });
  }

  public inView(event) {
    _.forEach(event.inview, (elem, key) => {
      const obj = _.find(this.inViewLogs, {
        objid: elem.data.metaData.identifier,
      });
      if (!obj) {
        this.inViewLogs.push({
          objid: elem.data.metaData.identifier,
          objtype: elem.data.metaData.contentType || 'content',
          index: elem.id,
        });
      }
    });
    if (this.telemetryImpression) {
      this.telemetryImpression.edata.visits = this.inViewLogs;
      this.telemetryImpression.edata.subtype = 'pageexit';
      this.telemetryImpression = Object.assign({}, this.telemetryImpression);
    }
  }

}
