import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService, IUserData, IUserProfile, LayoutService, ResourceService, ConfigService, OnDemandReportService } from '@sunbird/shared';
import { TelemetryService } from '@sunbird/telemetry';
import { Subject, Subscription } from 'rxjs';
import { KendraService, UserService, FormService, BaseReportService } from '@sunbird/core';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash-es';
import { Location } from '@angular/common';
import { map, catchError} from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { UsageService } from '../../../dashboard/services';


const PRE_DEFINED_PARAMETERS = ['$slug'];
@Component({
  selector: 'app-datasets',
  templateUrl: './program-datasets.component.html',
  styleUrls: ['./program-datasets.component.scss']
})


export class DatasetsComponent implements OnInit {

  public activatedRoute: ActivatedRoute;
  public showConfirmationModal = false;
  showPopUpModal:boolean;
  config;
  reportTypes = [];
  programs = [];
  solutions = [];
  public message = this.resourceService?.frmelmnts?.msg?.noDataDisplayed;
  instance: string;

  @ViewChild('modal', { static: false }) modal;
  popup = false;
  awaitPopUp = false;
  reportStatus = {
    'submitted': 'SUBMITTED',
    'processing': 'PROCESSING',
    'failed': 'FAILED',
    'success': 'SUCCESS',
  };

  public isProcessed = false;
  formData: Object;
  public columns = [
    { name: 'Report type', isSortable: true, prop: 'datasetConfig.title', placeholder: 'Filter report type' },
    { name: 'Request date', isSortable: true, prop: 'jobStats.dtJobSubmitted', placeholder: 'Filter request date', type: 'date' },
    { name: 'Status', isSortable: false, prop: 'status', placeholder: 'Filter status' },
    { name: 'Report link', isSortable: false, prop: 'downloadUrls', placeholder: 'Filter download link' },
    { name: 'Generated date', isSortable: true, prop: 'jobStats.dtJobCompleted', placeholder: 'Filter generated date', type: 'dateTime' },
  ];

  public onDemandReportData = [];

  downloadCSV = true;
  isColumnsSearchable = false;
  tag: string;

  reportForm = new FormGroup({
    programName: new FormControl('', [Validators.required]),
    solution: new FormControl('', [Validators.required]),
    reportType: new FormControl('', [Validators.required]),
    districtName:new FormControl(),
    organisationName:new FormControl()
  });

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  });

  programSelected: any;
  solutionSelected: any;
  districts:any;
  organisations:any;
  filter:any = [];
  newData:boolean = false;
  goToPrevLocation:boolean = true;
  chartData:any;
  chartConfig:any;
  bigConfig:any;
  tabIndex:number;
  datasource:any;
  constructor(
    activatedRoute: ActivatedRoute,
    public layoutService: LayoutService,
    public telemetryService: TelemetryService,
    public resourceService: ResourceService,
    public kendraService: KendraService,
    public userService: UserService,
    public onDemandReportService: OnDemandReportService,
    config: ConfigService,
    public toasterService: ToasterService,
    public formService: FormService,
    public router: Router,
    public location: Location,
    private usageService: UsageService
  ) {
    this.config = config;
    this.activatedRoute = activatedRoute;
  }

  layoutConfiguration: any;
  public unsubscribe$ = new Subject<void>();
  userDataSubscription: Subscription;
  /**
   * Reference of User Profile interface
   */
  userProfile: IUserProfile;
  /**
   * all user role
   */
  public userRoles: Array<string> = [];
  public userId: string;
  public selectedReport;
  public selectedSolution: string;
  
  getProgramsList() {
    const paramOptions = {
      url:
        this.config.urlConFig.URLS.KENDRA.PROGRAMS_BY_PLATFORM_ROLES + '?role=' + this.userRoles.toString()
    };
    this.kendraService.get(paramOptions).subscribe(data => {
      if (data && data.result) {
        this.programs = data.result;
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });

  }

  getSolutionList(program) {

    const paramOptions = {
      url:
        this.config.urlConFig.URLS.KENDRA.SOLUTIONS_BY_PROGRAMID + '/' + program._id + '?role=' + program.role[0]
    };
    this.kendraService.get(paramOptions).subscribe(data => {
      if (data && data.result) {
        this.solutions = data.result;
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });

  }

  getDistritAndOrganisationList() {

    const paramOptions = {
      url:
        this.config.urlConFig.URLS.KENDRA.DISTRICTS_AND_ORGANISATIONS+ '/' + this.reportForm.controls.solution.value
    };
    this.kendraService.get(paramOptions).subscribe(data => {
      if (data && data.result) {
       this.districts = data.result.districts;
       this.organisations = data.result.organisations;
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });

  }

  initLayout() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.layoutService.switchableLayout().pipe(takeUntil(this.unsubscribe$)).subscribe(layoutConfig => {
      if (layoutConfig != null) {
        this.layoutConfiguration = layoutConfig.layout;
      }
    });
  }

  ngOnInit() {
    this.showPopUpModal = true;
    this.instance = _.upperCase(this.resourceService.instance || 'SUNBIRD');
    this.userDataSubscription = this.userService.userData$.subscribe(
      (user: IUserData) => {
        if (user && !user.err) {
          this.userProfile = user.userProfile;
          this.userRoles = user.userProfile.userRoles;
          this.userId = user.userProfile.id;

        }
      });
    this.initLayout();
    this.getProgramsList();
    this.getFormDetails();
    this.chartData = {
      values: [
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "unknown",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "unknown",
            "Total Unique Users": "4.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "ANANTAPUR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "MPPS HANUMANNAHALLI",
            "Total Unique Users": "5.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "ANANTAPUR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "Staging Custodian Organization",
            "Total Unique Users": "21.1"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "CHITTOOR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "unknown",
            "Total Unique Users": "4.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "CHITTOOR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "Staging Custodian Organization",
            "Total Unique Users": "8.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "BELAGAVI CHIKKODI",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "preprod-sso",
            "Total Unique Users": "1.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "EAST GODAVARI",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "Staging Custodian Organization",
            "Total Unique Users": "2.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "GUNTUR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "unknown",
            "Total Unique Users": "2.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "ANANTAPUR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "unknown",
            "Total Unique Users": "13.0"
        },
        {
            "Program name": "3.8 Test AP program",
            "solutionId": "605084a02df993615443f06a",
            "Observation name": "multiple domain and multiple criteria 2",
            "District name": "ANANTAPUR",
            "programId": "605083ba09b7bd61555580fb",
            "Date": "2020-12-01",
            "parent_channel": "SHIKSHALOKAM",
            "Organisation": "MPPS VENGAMNAIDU COL",
            "Total Unique Users": "1.0"
        }
    ]
       
    }

this.chartConfig =  {
      "colors": [
          {
              "borderColor": "rgb(255, 69, 88)",
              "borderWidth": 2,
              "backgroundColor": "rgba(255, 69, 88, 0.3)"
          },
          {
              "borderColor": "rgb(255, 161, 29)",
              "borderWidth": 2,
              "backgroundColor": "rgba(255, 161, 29, 0.3)"
          },
          {
              "borderColor": "rgb(0, 199, 134)",
              "borderWidth": 2,
              "backgroundColor": "rgba(0, 199, 134, 0.3)"
          },
          {
              "borderColor": "rgb(242, 203, 28)",
              "borderWidth": 2,
              "backgroundColor": "rgba(242, 203, 28, 0.3)"
          },
          {
              "borderColor": "rgb(55, 70, 73)",
              "borderWidth": 2,
              "backgroundColor": "rgba(55, 70, 73, 0.3)"
          }
      ],
      "options": {
        "maintainAspectRation":false,
          "title": {
              "text": "Status of users district wise",
              "display": true,
              "fontSize": 16
          },
          "legend": {
              "display": true
          },
          "scales": {
              "xAxes": [
                  {
                      "stacked": true,
                      "scaleLabel": {
                          "display": true,
                          "labelString": "District"
                      }
                  }
              ],
              "yAxes": [
                  {
                      // "stacked": true,
                      "scaleLabel": {
                          "display": true,
                          "labelString": "No. of users",
                      },
                      "ticks":{
                        "beginAtZero":true,
                        "stepSize":30,
                        "min":0
                      }
                  }
              ]
          },
          "tooltips": {
              "mode": "x-axis",
              "intersect": false,
              "bodySpacing": 5,
              "titleSpacing": 5
          },
          "responsive": true,
          "showLastUpdatedOn": true
      },
      "labelExpr":"District name",
      "datasets": [{
        "dataExpr": "Total Unique Users",
            "label": "Total Unique Users"
      }
      ]

  };

this.bigConfig =   {
        "footer": " ",
        "header": "Unique users who submitted form",
        "dataExpr": "Total Unique Users",
        "operation":"SUM"
    }

  }
  
  public resolveParameterizedPath(path: string, explicitValue?: string): string {
    return _.reduce(PRE_DEFINED_PARAMETERS, (result: string, parameter: string) => {
      if (_.includes(result, parameter)) {
        result = _.replace(result, parameter, explicitValue);
      }
      return result;
    }, path);
  }

  public getUpdatedParameterizedPath(dataSources) {
    const explicitValue = _.get(this.reportForm,'controls.solution.value')
    return _.map(dataSources, (dataSource) => ({
      id: dataSource.id,
      path: this.resolveParameterizedPath(dataSource.path, explicitValue)
    }));
  }
  selectedTabChange(event){
    this.tabIndex = event.index;

  }
  public programSelection($event) {
    this.reportForm.reset();
    const program = this.programs.filter(data => {
      if (data._id == $event.value) {
        return data;
      }
    });
    this.solutions = [];
    this.reportTypes = [];
    this.onDemandReportData = [];
    this.getSolutionList(program[0]);
    this.reportForm.controls.programName.setValue($event.value);
    this.newData = true;
  }

  public selectSolution($event) {
    this.newData = false;
    if (this.programSelected && this.reportForm.value && this.reportForm.value['solution']) {
      const solution = this.solutions.filter(data => {
        if (data._id == $event.value) {
          return data;
        }
      });
      this.tag = solution[0]._id + '_' + this.userId;
      this.loadReports();

      const program = this.programSelected;
      this.reportForm.reset();
      this.reportForm.controls.solution.setValue($event.value);
      this.reportForm.controls.programName.setValue(program);

      if (solution[0].isRubricDriven == true && solution[0].type == 'observation') {
        const type = solution[0].type + '_with_rubric';
        this.getReportTypes(this.programSelected,type);
      } else {
        this.getReportTypes(this.programSelected,solution[0].type);
      }
      this.getDistritAndOrganisationList();
      this.datasource = [
        {
          "id": "ml-test5",
          "path": "/reports/fetch/$slug/ml-test5.json"
        },
        {
            "id": "ml_no_of_users_in_progress_api",
            "path": "/reports/fetch/$slug/ml_no_of_users_in_progress_api.json"
        },
        {
            "id": "ml_no_of_users_completed_the_project_api",
            "path": "/reports/fetch/$slug/ml_no_of_users_completed_the_project_api.json"
        },
        {
            "id": "ml_no_of_users_district_wise_api",
            "path": "/reports/fetch/$slug/ml_no_of_users_district_wise_api.json"
        },
    ]
  
    let dataSource = this.getUpdatedParameterizedPath(this.datasource);
    console.log('dataSource', dataSource);
    console.log('this.dataSource', this.datasource);
    let multipleCalls = this.downloadMultipleDataSources(dataSource)
    console.log('multiple calls', multipleCalls)

    }
  }
  public fetchDataSource(filePath: string, id?: string | number) {
    this.usageService.getData(filePath).subscribe(data => {
      console.log('data from fetchDataSource', data)
    })
  }

  public downloadMultipleDataSources(dataSources) {
    if (!dataSources.length) {
      // for India heat map scenario.
      return of([]);
    }
    const apiCalls = _.map(dataSources, (source) => {
      return this.fetchDataSource(_.get(source, 'path'), _.get(source, 'id'));
    });

    console.log('apiCalls',apiCalls)
  }
  public getReportTypes(programId,solutionType){
    this.reportTypes = [];
    let selectedProgram = this.programs.filter(program => program._id==programId);
    if(selectedProgram && selectedProgram[0]){
      console.log(selectedProgram, 'Program selected');
     let role = selectedProgram[0]['role'];
     console.log(role, 'role');
     let types = this.formData[solutionType];
     console.log(this.formData, 'form data');
     console.log(solutionType, 'Solution type');
     console.log(types,'types');
     if(types && types.length > 0){
       types.forEach(element => {
           let roleMatch = role.some(e =>  element.roles.includes(e));
           if(roleMatch){
             this.reportTypes.push(element);
           }
       });
     } 
    }
   }

  public closeModal(): void {
    this.popup = false;
  }

  public csvRequest() {
    this.popup = false;
    this.submitRequest();
  }

  public requestDataset() {
    if (this.selectedReport.encrypt == true) {
      this.popup = true;
    } else {
      this.showConfirmationModal = true;
    }
  }

  private closeConfirmationModal() {
    this.showConfirmationModal = false;
  }
  goBack() {
    this.goToPrevLocation ? this.location.back() : (this.showPopUpModal = false);
  }

  confirm(){
    this.showPopUpModal = false;
  }
  public handleConfirmationEvent(event: boolean) {
    this.closeConfirmationModal();
    if (event == true) {
      this.submitRequest();
    }
  }
  public closeConfirmModal() {
    this.awaitPopUp = false;
  }

  public resetFilter(){
    this.reportForm.reset();
    this.filter = [];
    this.districts = [];
    this.organisations = [];
    this.solutions = [];
    this.reportTypes = [];
    this.onDemandReportData = [];
    this.goToPrevLocation = false;
    this.showPopUpModal = true;
  }

  loadReports() {
    this.onDemandReportService.getReportList(this.tag).subscribe((data) => {
      if (data) {
        const reportData = _.get(data, 'result.jobs');
        this.onDemandReportData = _.map(reportData, (row) => this.dataModification(row));
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });
  }

  districtSelection($event){
    this.reportForm.controls.districtName.setValue($event.value);
  }

  organisationSelection($event){
    this.reportForm.controls.organisationName.setValue($event.value);
  }

  reportChanged(selectedReportData) {
    this.selectedReport = selectedReportData;
  }
 addFilters(){ 
    let filterKeysObj = {
    program_id:_.get(this.reportForm,'controls.programName.value'),
    solution_id:_.get(this.reportForm,'controls.solution.value'),
    programId:_.get(this.reportForm,'controls.programName.value'),
    solutionId:_.get(this.reportForm,'controls.solution.value'),
    district_externalId:_.get(this.reportForm,'controls.districtName.value')|| undefined,
    organisation_id:_.get(this.reportForm,'controls.organisationName.value')|| undefined
    }
    let keys = Object.keys(filterKeysObj);
    this.selectedReport['filters'].map(data=> {
     keys.filter(key => {
        return data.dimension == key && (data.value = filterKeysObj[key]);
      })
      if(data.value !== undefined){
        this.filter.push(data);
      }
    });
  }
  submitRequest() {
    this.addFilters();
    this.selectedSolution = this.reportForm.controls.solution.value;
    const isRequestAllowed = this.checkStatus();
    if (isRequestAllowed) {
      this.isProcessed = false;
      const config = {
        type: this.selectedReport['datasetId'],
        params: {
          filters: this.filter
        },
        title: this.selectedReport.name
      };
      const request = {
        request: {
          dataset: 'druid-dataset',
          tag: this.tag,
          requestedBy: this.userId,
          datasetConfig: config,
          output_format: 'csv'

        }
      };

      if (this.selectedReport.encrypt === true) {
        request.request['encryptionKey'] = this.passwordForm.controls.password.value;
      }

      this.onDemandReportService.submitRequest(request).subscribe((data: any) => {
        if (data && data.result) {
          if (data.result.status === this.reportStatus.failed) {
            const error =  _.get(this.resourceService, 'frmelmnts.lbl.reportRequestFailed');
            this.toasterService.error(error);
          } else {

            if (data['result'] && data['result']['requestId']) {

            const dataFound =  this.onDemandReportData.filter(function(submittedReports) {
                 if ( submittedReports['requestId'] == data['result']['requestId']) {
                  return data;
                }

              });

              if (dataFound && dataFound.length > 0) {
                this.popup = false;
                this.isProcessed = true;
                setTimeout(() => {
                  this.isProcessed = false;
                }, 5000);
                this.toasterService.error(_.get(this.resourceService, 'frmelmnts.lbl.reportRequestFailed'));
                this.passwordForm.reset();

              } else {
                data = this.dataModification(data['result']);
                const updatedReportList = [data, ...this.onDemandReportData];
                this.onDemandReportData = updatedReportList;
                this.awaitPopUp = true;
                this.passwordForm.reset();

              }
            }
          }

        }
      }, error => {
        this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
      });
      this.filter= [];
      
    } else {
      this.popup = false;
      this.isProcessed = true;
      this.filter = [];
      setTimeout(() => {
        this.isProcessed = false;
      }, 5000);
      this.toasterService.error(_.get(this.resourceService, 'frmelmnts.lbl.reportRequestFailed'));
      this.passwordForm.reset();
    }
  }

  public getFormDetails() {

    const formServiceInputParams = {
      formType: 'program-dashboard',
      formAction: 'reportData',
      contentType: 'csv-dataset',
      component: 'portal'
    };

    this.formService.getFormConfig(formServiceInputParams).subscribe((formData) => {
      if (formData) {
          this.formData = formData;
          console.log('form data function',formData)
      }
    }, error => {
      this.toasterService.error(this.resourceService.messages.emsg.m0005);
    });

  }

  checkStatus() {
    let requestStatus = true;
    const selectedReportList = [];
    _.forEach(this.onDemandReportData, (value) => {
      if (value.datasetConfig.type == this.selectedReport.datasetId  && value.datasetConfig.params.solutionId == this.selectedSolution) {
        selectedReportList.push(value);
      }
    });
    const sortedReportList = _.sortBy(selectedReportList, [(data) => {
      return data && data.jobStats && data.jobStats.dtJobSubmitted;
    }]);

    const reportListData = _.last(sortedReportList) || {};
    if (!_.isEmpty(reportListData)) {
      const isInProgress = this.onDemandReportService.isInProgress(reportListData, this.reportStatus);
      if (!isInProgress) {
        requestStatus = true;
      } else {
        requestStatus = false;
      }
    }
    return requestStatus;
  }
  onDownloadLinkFail(data) {
    const tagId = data && data.tag && data.tag.split(':');
    this.onDemandReportService.getReport(_.head(tagId), data.requestId).subscribe((data: any) => {
      if (data) {
        const downloadUrls = _.get(data, 'result.downloadUrls') || [];
        const downloadPath = _.head(downloadUrls);
        if (downloadPath) {
          window.open(downloadPath, '_blank');
        } else {
          this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
        }
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });
  }
  dataModification(row) {
    row.title = row.datasetConfig.title;
    return row;
  }

}
