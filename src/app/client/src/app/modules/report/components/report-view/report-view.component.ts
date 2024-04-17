import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { DhitiService } from '@sunbird/core';
import {
  ConfigService,
  LayoutService,
  INoResultMessage,
  ResourceService,
  ToasterService,
  ILoaderMessage,
  NavigationHelperService
} from '@sunbird/shared';
import * as _ from 'lodash-es';
import { ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss'],
})
export class ReportViewComponent implements OnInit {
  state: any = {};
  segmentValue: string;
  data: any;
  config;
  error: { result: boolean; message: string };
  reportSections: any;
  filters: any;
  layoutConfiguration: any;
  public noResultMessage: INoResultMessage;
  public showComponent = true;
  public segmentfilter = false;
  public filterModal = false;
  @ViewChild('lib', { static: false }) lib: any;
  @ViewChild('modal') modal;
  selectedListCount = 0;
  name = ['filter'];
  modalFilterData: any;
  filteredData = [];
  key: any;
  questionId: any;
  public active: boolean[] = [];
  public tabs: { header: string }[] = [
    { header: this.resourceService.frmelmnts.lbl.question },
  ];
  public noResult = false;
  showLoader = true;
  public showPdf = false;
  public showEvidence = false;
  evidenceParam: any;
  public unsubscribe$ = new Subject<void>();
  loaderMessage: ILoaderMessage;
  constructor(
    private dhitiService: DhitiService,
    config: ConfigService,
    public layoutService: LayoutService,
    public location: Location,
    public resourceService: ResourceService,
    private routerParam: ActivatedRoute,
    private cdref: ChangeDetectorRef,
    public toasterService: ToasterService,
    public locations: LocationStrategy,
    private navigationhelperService: NavigationHelperService
  ) {
    this.config = config;
    this.locations.onPopState(() => {
      this.modal.deny();
   });

    //  this.state = this.router.getCurrentNavigation().extras.state;
    this.routerParam.queryParams.subscribe((data: any) => {
      this.state['entityId'] = data.entityId;
      this.state['observationId'] = data.observationId;
      this.state['entityType'] = data.entityType;
      this.state['solutionId'] = data.solutionId;
      if (data.filter) {
        this.state['filter'] = { questionId: [] };
        this.state['criteriaWise'] = false;
      }
      data.scores == 'true'
        ? (this.state['scores'] = true)
        : (this.state['scores'] = false);
      data.observation == 'true'
        ? (this.state['observation'] = true)
        : (this.state['observation'] = false);
    });

  }
  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }


  ngOnInit() {
    this.initLayout();
    this.noResultMessage = {
          messageText: 'messages.stmsg.reportNotReady',
        };
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.segmentValue = 'Questions';
    this.state['pdf'] = false;
    this.getReport();
  }

  initLayout() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.layoutService.switchableLayout().subscribe((layoutConfig) => {
      if (layoutConfig != null) {
        this.layoutConfiguration = layoutConfig.layout;
      }
    });
  }

  getReport() {
    // remove null and undefined
    this.state = _.omitBy(this.state, _.isNil);
    this.error = null;
    const config = {
      url: this.config.urlConFig.URLS.DHITI.GENERIC_REPORTS,
      data: this.state,
    };
    this.dhitiService.post(config).subscribe(
      (success: any) => {
        if (success.result === true && success.reportSections) {
          this.data = success;
          this.reportSections = this.filterBySegment();

          if (this.data.filters && !this.filters) {
            this.filters = this.data.filters;
          }

          if (this.data.filters) {
            const modalFilter = this.data.filters.filter(
              (filter) => filter.filter.type == 'modal'
            )[0];
            this.filters = this.filters.map((filter) => {
              if (filter.filter.type == 'modal') {
                filter = modalFilter;
              }
              return filter;
            });
          }
        } else {
          this.noResult = true;
          this.showLoader = false;
        }
        this.filters.forEach((element) => {
          if (element.filter.type == 'segment') {
            if (this.tabs.length == 1) {
              this.active.push(true);
              this.tabs.push({
                header: this.resourceService.frmelmnts.lbl.criteria,
              });
            }
            this.segmentfilter = true;
          }
        });
        this.showLoader = false;
      },
      (err) => {

      }
    );

    this.reportSections = [];
        const success = {
          "result": true,
          "entityType": "school",
          "entityId": "c029bb5e-c840-431f-b357-1f9a08b7d0ca",
          "entityName": "MPPS(URDU) AMADAGUR",
          "solutionName": "Leadership Self Assessment for program 1",
          "observationId": "65115fcbb257fb0008cd91c1",
          "districtName": "Ananthapuram",
          "programName": "Script testing for mandatory feilds",
          "reportSections": [
              {
                  "order": "Q1_1689164013804-1689164019989",
                  "question": "Enter the date of observation",
                  "responseType": "date",
                  "answers": [
                      "1-12-2023 1:15:0 PM"
                  ],
                  "chart": {},
                  "instanceQuestions": []
              },
              {
                  "order": "Q2_1689164013804-1689164019990",
                  "question": null,
                  "responseType": "number",
                  "answers": [
                      "1"
                  ],
                  "chart": {},
                  "instanceQuestions": []
              },
              {
                  "order": "Q3_1689164013804-1689164019991",
                  "question": "Are you currently living in the vicinity of the school?",
                  "responseType": "radio",
                  "answers": [
                      "Yes"
                  ],
                  "chart": {
                      "type": "pie",
                      "data": {
                          "labels": [
                              "Yes"
                          ],
                          "datasets": [
                              {
                                  "backgroundColor": [
                                      "#FFA971",
                                      "#F6DB6C",
                                      "#98CBED",
                                      "#C9A0DA",
                                      "#5DABDC",
                                      "#88E5B0"
                                  ],
                                  "data": [
                                      100
                                  ]
                              }
                          ]
                      },
                      "options": {
                          "responsive": true,
                          "legend": {
                              "position": "bottom",
                              "align": "start"
                          }
                      }
                  },
                  "instanceQuestions": []
              },
              {
                  "order": "Q5_1689164013804-1689164019993",
                  "question": "What type of device is available at home?",
                  "responseType": "multiselect",
                  "answers": [
                      [
                          "Simple mobile phone without internet/data pack"
                      ]
                  ],
                  "chart": {
                      "type": "horizontalBar",
                      "data": {
                          "labels": [
                              "Simple mobile phone without internet/data pack"
                          ],
                          "datasets": [
                              {
                                  "data": [
                                      100
                                  ],
                                  "backgroundColor": "#de8657"
                              }
                          ]
                      },
                      "options": {
                          "legend": false,
                          "scales": {
                              "xAxes": [
                                  {
                                      "ticks": {
                                          "min": 0,
                                          "max": 100
                                      },
                                      "scaleLabel": {
                                          "display": true,
                                          "labelString": "Responses in percentage"
                                      }
                                  }
                              ],
                              "yAxes": [
                                  {
                                      "scaleLabel": {
                                          "display": true,
                                          "labelString": "Responses"
                                      }
                                  }
                              ]
                          }
                      }
                  },
                  "instanceQuestions": []
              },
              {
                  "order": "Q6_1689164013804-1689164019993",
                  "question": "Does the child have a quiet place to study?",
                  "responseType": "radio",
                  "answers": [
                      "Yes"
                  ],
                  "chart": {
                      "type": "pie",
                      "data": {
                          "labels": [
                              "Yes"
                          ],
                          "datasets": [
                              {
                                  "backgroundColor": [
                                      "#FFA971",
                                      "#F6DB6C",
                                      "#98CBED",
                                      "#C9A0DA",
                                      "#5DABDC",
                                      "#88E5B0"
                                  ],
                                  "data": [
                                      100
                                  ]
                              }
                          ]
                      },
                      "options": {
                          "responsive": true,
                          "legend": {
                              "position": "bottom",
                              "align": "start"
                          }
                      }
                  },
                  "instanceQuestions": []
              },
              {
                  "order": "Q7_1689164013804-1689164019994",
                  "question": "Were you able to enrol your child in courses on DIKSHA?",
                  "responseType": "radio",
                  "answers": [
                      "Yes"
                  ],
                  "chart": {
                      "type": "pie",
                      "data": {
                          "labels": [
                              "Yes"
                          ],
                          "datasets": [
                              {
                                  "backgroundColor": [
                                      "#FFA971",
                                      "#F6DB6C",
                                      "#98CBED",
                                      "#C9A0DA",
                                      "#5DABDC",
                                      "#88E5B0"
                                  ],
                                  "data": [
                                      100
                                  ]
                              }
                          ]
                      },
                      "options": {
                          "responsive": true,
                          "legend": {
                              "position": "bottom",
                              "align": "start"
                          }
                      }
                  },
                  "instanceQuestions": []
              },
              {
                  "order": "Q9_1689164013804-1689164019995",
                  "question": "On basis of the responses received above,  do you think this student is a potential drop out?",
                  "responseType": "radio",
                  "answers": [
                      "Yes"
                  ],
                  "chart": {
                      "type": "pie",
                      "data": {
                          "labels": [
                              "Yes", "No", "May be","I don't know"
                          ],
                          "datasets": [
                              {
                                  "backgroundColor": [
                                      "#FFA971",
                                      "#F6DB6C",
                                      "#98CBED",
                                      "#C9A0DA",
                                      "#5DABDC",
                                      "#88E5B0"
                                  ],
                                  "data": [
                                      30,30,30,10
                                  ]
                              }
                          ]
                      },
                      "options": {
                          "responsive": true,
                          "legend": {
                              "position": "bottom",
                              "align": "start"
                          }
                      }
                  },
                  "instanceQuestions": []
              }
          ],
          "completedDate": "2023-12-13T07:45:12.436Z",
          "totalSubmissions": 1,
          "filters": [
              {
                  "order": "",
                  "filter": {
                      "type": "segment",
                      "title": "",
                      "keyToSend": "criteriaWise",
                      "data": [
                          "questionWise",
                          "criteriaWise"
                      ]
                  }
              },
              {
                  "order": "",
                  "filter": {
                      "type": "modal",
                      "title": "",
                      "keyToSend": "questionId",
                      "data": [
                          {
                              "name": null,
                              "_id": "Q2_1689164013804-1689164019990"
                          },
                          {
                              "name": "Are you currently living in the vicinity of the school?",
                              "_id": "Q3_1689164013804-1689164019991"
                          },
                          {
                              "name": "Does the child have a quiet place to study?",
                              "_id": "Q6_1689164013804-1689164019993"
                          },
                          {
                              "name": "Enter the date of observation",
                              "_id": "Q1_1689164013804-1689164019989"
                          },
                          {
                              "name": "On basis of the responses received above,  do you think this student is a potential drop out?",
                              "_id": "Q9_1689164013804-1689164019995"
                          },
                          {
                              "name": "Were you able to enrol your child in courses on DIKSHA?",
                              "_id": "Q7_1689164013804-1689164019994"
                          },
                          {
                              "name": "What type of device is available at home?",
                              "_id": "Q5_1689164013804-1689164019993"
                          }
                      ]
                  }
              }
          ],
          "responseCode": "OK"
      }
        this.data = success;
          this.reportSections = this.filterBySegment();

          if (this.data.filters && !this.filters) {
            this.filters = this.data.filters;
          }

          if (this.data.filters) {
            const modalFilter = this.data.filters.filter(
              (filter) => filter.filter.type == 'modal'
            )[0];
            this.filters = this.filters.map((filter) => {
              if (filter.filter.type == 'modal') {
                filter = modalFilter;
              }
              return filter;
            });
          }
  }

  gotoSolutionListPage() {
    this.location.back();
  }

  filterBySegment() {
    if (this.segmentValue == 'Questions') {
      const reportSections = [{ questionArray: this.data.reportSections }];
      return reportSections;
    }

    return this.data.reportSections;
  }

  getData(element) {
    const data = {
      values: element.chart.data.datasets[0].data,
    };
    return data;
  }

  getconfig(element) {
    const config = {
      labels: _.get(element,'chart.data.labels'),
      datasets: [{ data: _.get(element,'chart.data.datasets[0].data'),label:_.get(element,'chart.data.labels[0]') }],
      options: _.get(element,'chart.options'),
      colors: [
        { backgroundColor: _.get(element,'chart.data.datasets[0].backgroundColor') },
      ]
    };
    return config;
  }

  handleParameterChange(event) {
    this.state['submissionId'] = _.get(event, 'value._id');
    this.getReport();
  }

  segmentChanged(segment) {
    segment === 'Criteria'
      ? (this.state.criteriaWise = true)
      : (this.state.criteriaWise = false);
    this.state.filter = null;
    this.modalFilterData = null;
    this.segmentValue = segment;
    this.getReport();
  }

  openFile(file) {
    window.open(file.url, '_blank');
  }

  filterModalPopup(data, keyToSend) {
    this.key = keyToSend;
    this.modalFilterData ? null : (this.modalFilterData = data);
    let filteredData;
    if (this.state.filter && this.state.filter.length) {
      filteredData = this.state.filter[keyToSend];
    } else {
      filteredData = data.map((d) => d._id);
    }

    this.state.criteriaWise ? 'criteria' : 'question';
    this.filteredData = filteredData;
    this.selectedListCount = this.modalFilterData.length;
    this.filterModal = true;
  }

  public closeModal() {
    this.filterModal = false;
  }

  onQuestionClick(id) {
    if (this.filteredData.includes(id)) {
      const indexOfQuestion = this.filteredData.indexOf(id);
      this.filteredData.splice(indexOfQuestion, 1);
    } else {
      this.filteredData.push(id);
    }
  }

  applyFilter() {
    if (!this.filteredData.length) {
      const msgData =
        this.segmentValue == 'Questions'
          ? 'messages.smsg.selectquestions'
          : 'messages.smsg.selectcriteria';
      this.toasterService.error(_.get(this.resourceService, msgData));
    } else {
      this.state.filter = {};
      this.state.filter[this.key] = this.filteredData;
      this.getReport();
      this.filterModal = false;
    }
  }

  async download() {
    const url: any = await this.callApi();
    window.location.href = url;
  }

  callApi() {
    return new Promise((resolve, reject) => {
      const payload = Object.assign({}, this.state, { pdf: true }); // will not change state obj
      const config = {
        url: this.config.urlConFig.URLS.DHITI.GENERIC_REPORTS,
        data: payload,
      };
      this.dhitiService.post(config).subscribe((res: any) => {
        if (res.status != 'success' && !res.pdfUrl) {
          reject();
        }
        resolve(res.pdfUrl);
      });
    });
  }

  async getAllEvidence(element) {
    this.questionId = element.order;
    const payload = {
      submissionId: this.state.submissionId,
      observationId: this.state.observationId,
      entityId: this.state.entityId,
      questionId: element.order,
      entityType: this.state.entityType,
      solutionId: this.state.solutionId,
    };
    this.evidenceParam = payload;
    this.showEvidence = true;
  }

  modalClose(event) {
    this.showEvidence = false;
  }

  selectedTabChange(event) {
    const { tabHeader } = _.get(event, 'tab.textLabel');
    tabHeader && this.segmentChanged(tabHeader);
  }
  goBack() {
    this.navigationhelperService.goBack();
  }

}
