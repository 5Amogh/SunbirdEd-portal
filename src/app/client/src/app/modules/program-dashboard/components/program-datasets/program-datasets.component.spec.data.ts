export let mockData = {
  programs: {
    result: [
      {
        _id: "5f34e44681871d939950bca6",
        externalId: "TN-Program-1597301830708",
        name: "TN-Program",
        description: "TN01-Mantra4Change-APSWREIS School Leader Feedback",
        role: ["PM"],
      },
      {
        _id: "5f34ec17585244939f89f90c",
        externalId: "MH-Program-1597303831605",
        name: "MH-Program",
        description: "MH01-Mantra4Change-APSWREIS School Leader Feedback",
        role: ["PM"],
      },
      {
        _id: "5f75b90454670074deacf087",
        name: "Skilling Teachers -- Google Project",
        externalId: "PGM-2948-KEF-RTLBS-INDIVIDUAL_ASSESSMENT",
        description: "This is a type of individual assessment",
        role: ["PM"],
      },
      {
        _id: "5f7f262e54670074deb99bcb",
        externalId: "PGM_NIQSA_Self_Assessment-Feb2020",
        name: "NIQSA Self Assessment",
        description:
          "This tool is used to assess schools that are part of NISA on five domains of the NIQSA quality charter.",
        role: ["PM"],
      },
    ],
  },
  solutions: {
    result: [
      {
        _id: "5f34ec17585244939f89f90d",
        isRubricDriven: true,
        externalId:
          "cbd074fa-dd11-11ea-a3bf-000d3af02677-OBSERVATION-TEMPLATE-1597303831612",
        name: "MH01-Mantra4Change-APSWREIS School Leader Feedback",
        description: "MH01-Mantra4Change-APSWREIS School Leader Feedback",
        type: "observation",
        subType: "",
      },
      {
        _id: "5fbb75537380505718640436",
        type: "improvementproject",
        isRubricDriven: false,
        subType: "",
        externalId: "7146aa30-2d67-11eb-b70e-55ade5205c81",
        name: "Health Awareness Project",
        description: "",
      },
      {
        _id: "5fbb75537380505718640437",
        type: "improvementproject",
        isRubricDriven: false,
        subType: "",
        externalId: "71471f60-2d67-11eb-b70e-55ade5205c81",
        name: "Safe School Project",
        description: "",
      },
      {
        _id: "5fbb75537380505718640438",
        type: "survey",
        isRubricDriven: false,
        subType: "",
        externalId: "71471f60-2d67-11eb-b70e-55ade5205c82",
        name: "Safe School survey",
        description: "",
      },
    ],
  },
  FormData: {
    improvementproject: [
      {
        name: "Task Detail Report",
        encrypt: true,
        datasetId: "ml-improvementproject-task-detail-report",
        roles: ["PM"],
      },
      {
        name: "Status Report",
        encrypt: false,
        datasetId: "ml-improvementproject-status-report",
        roles: ["PM"],
      },
    ],
    observation: [
      {
        name: "Question Report",
        encrypt: true,
        datasetId: "ml-observation-question-report",
        roles: ["PM"],
      },
      {
        name: "Status Report",
        encrypt: false,
        datasetId: "ml-observation-status-report",
        roles: ["PM"],
      },
    ],
    observation_with_rubric: [
      {
        name: "Task Detail Report",
        encrypt: true,
        datasetId: "ml-observation_with_rubric-task-detail-report",
        roles: ["PM"],
      },
      {
        name: "Status Report",
        encrypt: false,
        datasetId: "ml-observation_with_rubric-status-report",
        roles: ["PM"],
      },
      {
        name: "Domain Criteria Report",
        encrypt: false,
        datasetId: "ml-observation_with_rubric-domain-criteria-report",
        roles: ["PM"],
      },
    ],
    assessment: [
      {
        name: "Task Detail Report",
        encrypt: true,
        datasetId: "ml-assessment-task-detail-report",
        roles: ["PM"],
      },
      {
        name: "Status Report",
        encrypt: false,
        datasetId: "ml-assessment-status-report",
        roles: ["PM"],
      },
    ],
  },
  userProfile: {
    userId: "b2cb1e94-1a35-48d3-96dc-b7dfde252aa2",
    lastName: null,
    tcStatus: null,
    maskedPhone: null,
    rootOrgName: "CustROOTOrg10",
    roles: ["PUBLIC", "PROGRAM_MANAGER"],
    channel: "custchannel",
    updatedDate: null,
    prevUsedPhone: "",
    stateValidated: false,
    isDeleted: false,
    organisations: [
      {
        updatedBy: null,
        organisationId: "01285019302823526477",
        orgName: "CustROOTOrg10",
        addedByName: null,
        addedBy: null,
        roles: ["PUBLIC"],
        approvedBy: null,
        updatedDate: null,
        userId: "b2cb1e94-1a35-48d3-96dc-b7dfde252aa2",
        approvaldate: null,
        isDeleted: false,
        parentOrgId: null,
        hashTagId: "01285019302823526477",
        isRejected: null,
        position: null,
        id: "01302569853059072057",
        orgjoindate: "2020-05-21 08:49:17:549+0000",
        isApproved: null,
        orgLeftDate: null,
      },
    ],
    rootOrg: {
      dateTime: null,
      preferredLanguage: "English",
      approvedBy: null,
      channel: "ROOT_ORG",
      description: "Sunbird",
      updatedDate: "2017-08-24 06:02:10:846+0000",
      addressId: null,
      orgType: null,
      provider: null,
      orgCode: "sunbird",
      theme: null,
      id: "ORG_001",
      communityId: null,
      isApproved: null,
      slug: "sunbird",
      identifier: "ORG_001",
      thumbnail: null,
      orgName: "Sunbird",
      updatedBy: "user1",
      externalId: null,
      isRootOrg: true,
      rootOrgId: null,
      approvedDate: null,
      imgUrl: null,
      homeUrl: null,
      isDefault: null,
      contactDetail: "[{'phone':'213124234234','email':'test@test.com'}]",
      createdDate: null,
      createdBy: null,
      parentOrgId: null,
      hashTagId: "b00bc992ef25f1a9a8d63291e20efc8d",
      noOfMembers: 1,
      status: null,
    },
    managedBy: "8454cb21-3ce9-4e30-85b5-fade097880d8",
    provider: null,
    flagsValue: 0,
    maskedEmail: null,
    id: "b2cb1e94-1a35-48d3-96dc-b7dfde252aa2",
    tempPassword: null,
    recoveryEmail: "",
    email: "",
    identifier: "b2cb1e94-1a35-48d3-96dc-b7dfde252aa2",
    thumbnail: null,
    updatedBy: null,
    accesscode: null,
    profileSummary: null,
    phoneVerified: false,
    tcUpdatedDate: null,
    locationIds: [],
    registryId: null,
    recoveryPhone: "",
    userName: "9885632_y6nj",
    rootOrgId: "01285019302823526477",
    prevUsedEmail: "",
    firstName: "9885632",
    lastLoginTime: null,
    emailVerified: false,
    tncAcceptedOn: "2020-05-21T08:49:18.211Z",
    framework: {},
    createdDate: "2020-05-21 08:49:14:762+0000",
    phone: "",
    createdBy: null,
    currentLoginTime: null,
    userType: "OTHER",
    tncAcceptedVersion: "v1",
    status: 1,
  },
  reportListResponse: {
    ver: "1.0",
    ts: "2020-09-18T02:56:59.910+00:00",
    params: {
      resmsgid: "2823343f-65d8-4061-ad3b-53a9eb943724",
      status: "successful",
      client_key: null,
    },
    responseCode: "OK",
    result: {
      count: 2,
      jobs: [
        {
          request_id: "A09115FCBEC94CE6ACEB4D9BBFDBCBCF",
          tag: "test-tag:in.ekstep",
          job_id: "assessment-dashboard-metrics",
          requested_by: "client-2",
          requested_channel: "in.ekstep",
          status: "SUBMITTED",
          last_updated: 1599661955303,
          datasetConfig: {
            title: "report 1",
            type: "assessment-dashboard-metrics",
          },
          request_data: {
            batchFilters: ["TPD", "NCFCOPY"],
            contentFilters: {
              request: {
                filters: {
                  identifier: [
                    "do_11305960936384921612216",
                    "do_1130934466492252161819",
                  ],
                  prevState: "Draft",
                },
                sort_by: {
                  createdOn: "desc",
                },
                limit: 10000,
                fields: [
                  "framework",
                  "identifier",
                  "name",
                  "channel",
                  "prevState",
                ],
              },
            },
            reportPath: "course-progress-v2/",
          },
          attempts: 0,
          job_stats: {
            dt_job_submitted: 1599661955303,
            dt_job_completed: 1599661955303,
            execution_time: null,
          },
          downloadUrls: [],
          expires_at: 1600399619,
        },
        {
          request_id: "AE3DDC23B3F189ED2A57B567D6434BE7",
          tag: "test-tag:in.ekstep",
          job_id: "assessment-dashboard-metrics",
          requested_by: "client-1",
          requested_channel: "in.ekstep",
          status: "SUBMITTED",
          last_updated: 1599728944037,
          datasetConfig: {
            title: "report 2",
            type: "assessment-dashboard-metrics",
          },
          request_data: {
            batchFilters: ["TPD", "NCFCOPY"],
            contentFilters: {
              request: {
                filters: {
                  identifier: [
                    "do_11305960936384921612216",
                    "do_1130934466492252161819",
                  ],
                  prevState: "Draft",
                },
                sort_by: {
                  createdOn: "desc",
                },
                limit: 10000,
                fields: [
                  "framework",
                  "identifier",
                  "name",
                  "channel",
                  "prevState",
                ],
              },
            },
            reportPath: "course-progress-v2/",
          },
          attempts: 0,
          job_stats: {
            dt_job_submitted: 1599728944037,
            dt_job_completed: null,
            execution_time: null,
          },
          downloadUrls: [],
          expires_at: 1600399619,
        },
      ],
    },
  },
  districtAndOrganisations: {
    result: {
      districts: [
        {
          name: "ANANTAPUR",
          locationId: "2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03",
        },
        {
          name: "EAST GODAVARI",
          locationId: "aecac7ab-15e4-45c9-ac7b-d716444cd652",
        },
      ],
      organisations: [
        {
          orgName: "TAMILNADU",
          organisationId: "01269878797503692810",
        },
        {
          orgName: "JHS NARHARPUR",
          organisationId: "0869878797503692810",
        },
      ],
    },
  },
  reportConfig:{
    "count": 1,
    "reports": [
        {
            "reportid": "20ba7720-e350-4ec4-9bc6-2520dbf1329e",
            "title": "New Observation with rubric report New Pabitra",
            "description": "The reports provides the operational and insight charts for observation with rubric forms",
            "authorizedroles": [
                "REPORT_ADMIN",
                "ORG_ADMIN",
                "REPORT_VIEWER"
            ],
            "status": "live",
            "type": "public",
            "reportaccessurl": "\"https://staging.sunbirded.org\"/dashBoard/reports/20ba7720-e350-4ec4-9bc6-2520dbf1329e",
            "createdon": "2022-06-10T13:32:18.350Z",
            "updatedon": "2022-06-10T13:32:18.350Z",
            "createdby": "fca2925f-1eee-4654-9177-fece3fd6afc9",
            "reportconfig": {
                "files": [],
                "label": "New Observation with rubric report New Pabitra",
                "table": [],
                "title": "New Observation with rubric report New Pabitra",
                "charts": [
                    {
                        "id": "Big_Number",
                        "bigNumbers": [
                            {
                                "footer": " ",
                                "header": "Unique users who submitted form",
                                "dataExpr": "Total Unique Users"
                            },
                            {
                                "footer": " ",
                                "header": "Unique Users who started form",
                                "dataExpr": "Unique Users who started form"
                            },
                            {
                                "footer": " ",
                                "header": "Total submissions",
                                "dataExpr": "Total submissions"
                            },
                            {
                                "footer": " ",
                                "header": "Total entities observed",
                                "dataExpr": "Total entities observed"
                            }
                        ],
                        "dataSource": {
                            "ids": [
                                "ml_total_unique_users_api_testo_pabitra_new1",
                                "ml_unique_users_who_started_form_new_new_api_test_pabitra_new1",
                                "total_entities_observed_new_new_new_api_test_pabitra_new1",
                                "ml_total_submissions_api_test_pabitra_new1"
                            ],
                            "commonDimension": "Date"
                        }
                    },
                    {
                        "id": "ml_district_wise_unique_users_who_submitted_form_api_test_pabitra_new1",
                        "colors": [
                            {
                                "borderColor": "rgb(0, 199, 134)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(0, 199, 134, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 161, 29)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 161, 29, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 69, 88)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 69, 88, 0.3)"
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
                        "filters": [
                            {
                                "reference": "District name",
                                "controlType": "multi-select",
                                "displayName": "District"
                            },
                            {
                                "reference": "Program name",
                                "controlType": "multi-select",
                                "displayName": "Program"
                            },
                            {
                                "reference": "Observation name",
                                "controlType": "multi-select",
                                "displayName": "Observation"
                            }
                        ],
                        "options": {
                            "title": {
                                "text": "District-wise unique users who submitted form",
                                "display": true,
                                "fontSize": 16
                            },
                            "legend": {
                                "display": false
                            },
                            "scales": {
                                "xAxes": [
                                    {
                                        "ticks": {
                                            "autoSkip": false
                                        },
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "District name"
                                        }
                                    }
                                ],
                                "yAxes": [
                                    {
                                        "ticks": {
                                            "precision": 0,
                                            "beginAtZero": true
                                        },
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "No. of unique users"
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
                        "datasets": [
                            {
                                "label": "No of unique users",
                                "dataExpr": "No of unique users"
                            }
                        ],
                        "chartType": "bar",
                        "dataSource": {
                            "ids": [
                                "ml_district_wise_unique_users_who_submitted_form_api_test_pabitra_new1"
                            ],
                            "commonDimension": "District name"
                        },
                        "labelsExpr": "District name"
                    },
                    {
                        "id": "district_wise_no_of_submissions_vs_observation_status_new_new_new_api_test_pabitra_new1",
                        "colors": [
                            {
                                "borderColor": "rgb(0, 199, 134)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(0, 199, 134, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 161, 29)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 161, 29, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 69, 88)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 69, 88, 0.3)"
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
                        "filters": [
                            {
                                "reference": "District name",
                                "controlType": "multi-select",
                                "displayName": "District"
                            },
                            {
                                "reference": "Program name",
                                "controlType": "multi-select",
                                "displayName": "Program"
                            },
                            {
                                "reference": "Observation name",
                                "controlType": "multi-select",
                                "displayName": "Observation"
                            }
                        ],
                        "options": {
                            "title": {
                                "text": "District-wise submissions Vs observation status",
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
                                            "labelString": "District name"
                                        }
                                    }
                                ],
                                "yAxes": [
                                    {
                                        "ticks": {
                                            "precision": 0,
                                            "beginAtZero": true
                                        },
                                        "stacked": true,
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "No. of submissions"
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
                        "datasets": [
                            {
                                "label": "Submitted",
                                "dataExpr": "Completed"
                            },
                            {
                                "label": "Started",
                                "dataExpr": "Started"
                            },
                            {
                                "label": "In Progress",
                                "dataExpr": "In Progress"
                            }
                        ],
                        "chartType": "bar",
                        "dataSource": {
                            "ids": [
                                "district_wise_no_of_submissions_vs_observation_status_new_new_new_api_test_pabitra_new1"
                            ],
                            "commonDimension": "District name"
                        },
                        "labelsExpr": "District name"
                    },
                    {
                        "id": "ml_district_wise_unique_entities_observed_new_new_api_test_pabitra_new1",
                        "colors": [
                            {
                                "borderColor": "rgb(0, 199, 134)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(0, 199, 134, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 161, 29)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 161, 29, 0.3)"
                            },
                            {
                                "borderColor": "rgb(255, 69, 88)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 69, 88, 0.3)"
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
                        "filters": [
                            {
                                "reference": "District name",
                                "controlType": "multi-select",
                                "displayName": "District"
                            },
                            {
                                "reference": "Program name",
                                "controlType": "multi-select",
                                "displayName": "Program"
                            },
                            {
                                "reference": "Observation name",
                                "controlType": "multi-select",
                                "displayName": "Observation"
                            }
                        ],
                        "options": {
                            "title": {
                                "text": "District-wise unique entities observed",
                                "display": true,
                                "fontSize": 16
                            },
                            "legend": {
                                "display": false
                            },
                            "scales": {
                                "xAxes": [
                                    {
                                        "ticks": {
                                            "autoSkip": false
                                        },
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "Districts"
                                        }
                                    }
                                ],
                                "yAxes": [
                                    {
                                        "ticks": {
                                            "precision": 0,
                                            "beginAtZero": true
                                        },
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "No of entities"
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
                        "datasets": [
                            {
                                "label": "No of entities",
                                "dataExpr": "No of entities"
                            }
                        ],
                        "chartType": "bar",
                        "dataSource": {
                            "ids": [
                                "ml_district_wise_unique_entities_observed_new_new_api_test_pabitra_new1"
                            ],
                            "commonDimension": "District name"
                        },
                        "labelsExpr": "District name"
                    },
                    {
                        "id": "ml_criteria_wise_unique_entities_at_each_level_api_test_p_new1",
                        "colors": [
                            {
                                "borderColor": "rgb(255, 69, 88)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 69, 88, 0.3)"
                            },
                            {
                                "borderColor": "rgb(242, 203, 28)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(242, 203, 28, 0.3)"
                            },
                            {
                                "borderColor": "rgb(0, 199, 134)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(0, 199, 134, 0.3)"
                            },
                            {
                                "borderColor": "rgb(26, 26, 255)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(26, 26, 255, 0.3)"
                            },
                            {
                                "borderColor": "rgb(179, 0, 179)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(179, 0, 179, 0.3)"
                            }
                        ],
                        "filters": [
                            {
                                "reference": "Program name",
                                "controlType": "multi-select",
                                "displayName": "Program"
                            },
                            {
                                "reference": "Observation name",
                                "controlType": "multi-select",
                                "displayName": "Observation"
                            },
                            {
                                "reference": "District name",
                                "controlType": "multi-select",
                                "displayName": "District"
                            },
                            {
                                "reference": "Domain",
                                "controlType": "multi-select",
                                "displayName": "Domain"
                            },
                            {
                                "reference": "Criteria",
                                "controlType": "multi-select",
                                "displayName": "Criteria"
                            }
                        ],
                        "options": {
                            "title": {
                                "text": "Criteria-wise unique entities at each level",
                                "display": true,
                                "fontSize": 16
                            },
                            "legend": {
                                "display": false
                            },
                            "scales": {
                                "xAxes": [
                                    {
                                        "ticks": {
                                            "autoSkip": false,
                                            "minRotation": 0
                                        },
                                        "stacked": true,
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "Criterias"
                                        }
                                    }
                                ],
                                "yAxes": [
                                    {
                                        "ticks": {
                                            "precision": 0,
                                            "beginAtZero": true
                                        },
                                        "stacked": true,
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "No. of unique entities"
                                        }
                                    }
                                ]
                            },
                            "tooltips": {
                                "mode": "point",
                                "intersect": false,
                                "bodySpacing": 5,
                                "titleSpacing": 5
                            },
                            "responsive": true,
                            "showLastUpdatedOn": true,
                            "maintainAspectRatio": true
                        },
                        "datasets": [
                            {
                                "label": "L1",
                                "dataExpr": "L1"
                            },
                            {
                                "label": "L2",
                                "dataExpr": "L2"
                            },
                            {
                                "label": "L3",
                                "dataExpr": "L3"
                            },
                            {
                                "label": "L4",
                                "dataExpr": "L4"
                            },
                            {
                                "label": "L5",
                                "dataExpr": "L5"
                            }
                        ],
                        "chartType": "bar",
                        "dataSource": {
                            "ids": [
                                "ml_criteria_wise_unique_entities_at_each_level_api_test_p_new1"
                            ],
                            "commonDimension": "Criteria"
                        },
                        "labelsExpr": "Criteria"
                    },
                    {
                        "id": "ml_domain_wise_unique_entities_at_each_level_new_new_new_new_api_test_new_pabitra_new1",
                        "colors": [
                            {
                                "borderColor": "rgb(255, 69, 88)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(255, 69, 88, 0.3)"
                            },
                            {
                                "borderColor": "rgb(242, 203, 28)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(242, 203, 28, 0.3)"
                            },
                            {
                                "borderColor": "rgb(0, 199, 134)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(0, 199, 134, 0.3)"
                            },
                            {
                                "borderColor": "rgb(26, 26, 255)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(26, 26, 255, 0.3)"
                            },
                            {
                                "borderColor": "rgb(179, 0, 179)",
                                "borderWidth": 2,
                                "backgroundColor": "rgba(179, 0, 179, 0.3)"
                            }
                        ],
                        "filters": [
                            {
                                "reference": "District name",
                                "controlType": "multi-select",
                                "displayName": "District"
                            },
                            {
                                "reference": "Program name",
                                "controlType": "multi-select",
                                "displayName": "Program"
                            },
                            {
                                "reference": "Observation name",
                                "controlType": "multi-select",
                                "displayName": "Observation"
                            },
                            {
                                "reference": "Domain",
                                "controlType": "multi-select",
                                "displayName": "Domain"
                            }
                        ],
                        "options": {
                            "title": {
                                "text": "Domain-wise unique entities at each level",
                                "display": true,
                                "fontSize": 16
                            },
                            "legend": {
                                "display": false
                            },
                            "scales": {
                                "xAxes": [
                                    {
                                        "stacked": true,
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "Domains"
                                        }
                                    }
                                ],
                                "yAxes": [
                                    {
                                        "ticks": {
                                            "precision": 0,
                                            "beginAtZero": true
                                        },
                                        "stacked": true,
                                        "scaleLabel": {
                                            "display": true,
                                            "labelString": "No. of unique entities"
                                        }
                                    }
                                ]
                            },
                            "tooltips": {
                                "mode": "point",
                                "intersect": false,
                                "bodySpacing": 5,
                                "titleSpacing": 5
                            },
                            "responsive": true,
                            "showLastUpdatedOn": true
                        },
                        "datasets": [
                            {
                                "label": "L1",
                                "dataExpr": "L1"
                            },
                            {
                                "label": "L2",
                                "dataExpr": "L2"
                            },
                            {
                                "label": "L3",
                                "dataExpr": "L3"
                            },
                            {
                                "label": "L4",
                                "dataExpr": "L4"
                            },
                            {
                                "label": "L5",
                                "dataExpr": "L5"
                            }
                        ],
                        "chartType": "bar",
                        "dataSource": {
                            "ids": [
                                "ml_domain_wise_unique_entities_at_each_level_new_new_new_new_api_test_new_pabitra_new1"
                            ],
                            "commonDimension": "Domain"
                        },
                        "labelsExpr": "Domain"
                    }
                ],
                "filters": [
                    {
                        "reference": "Program name",
                        "controlType": "multi-select",
                        "displayName": "Program name"
                    },
                    {
                        "reference": "Observation name",
                        "controlType": "multi-select",
                        "displayName": "Observation name"
                    },
                    {
                        "reference": "District name",
                        "controlType": "multi-select",
                        "displayName": "District name"
                    },
                    {
                        "reference": "Organisation",
                        "controlType": "multi-select",
                        "displayName": "Organisation"
                    }
                ],
                "dataSource": [
                    {
                        "id": "ml_total_unique_users_api_testo_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_total_unique_users_api_testo_pabitra_new1.json"
                    },
                    {
                        "id": "ml_total_submissions_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_total_submissions_api_test_pabitra_new1.json"
                    },
                    {
                        "id": "total_entities_observed_new_new_new_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/total_entities_observed_new_new_new_api_test_pabitra_new1.json"
                    },
                    {
                        "id": "ml_district_wise_unique_users_who_submitted_form_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_district_wise_unique_users_who_submitted_form_api_test_pabitra_new1.json"
                    },
                    {
                        "id": "district_wise_no_of_submissions_vs_observation_status_new_new_new_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/district_wise_no_of_submissions_vs_observation_status_new_new_new_api_test_pabitra_new1.json"
                    },
                    {
                        "id": "ml_criteria_wise_unique_entities_at_each_level_api_test_p_new1",
                        "path": "/reports/fetch/$slug/ml_criteria_wise_unique_entities_at_each_level_api_test_p_new1.json"
                    },
                    {
                        "id": "ml_district_wise_unique_entities_observed_new_new_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_district_wise_unique_entities_observed_new_new_api_test_pabitra_new1.json"
                    },
                    {
                        "id": "ml_domain_wise_unique_entities_at_each_level_new_new_new_new_api_test_new_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_domain_wise_unique_entities_at_each_level_new_new_new_new_api_test_new_pabitra_new1.json"
                    },
                    {
                        "id": "ml_unique_users_who_started_form_new_new_api_test_pabitra_new1",
                        "path": "/reports/fetch/$slug/ml_unique_users_who_started_form_new_new_api_test_pabitra_new1.json"
                    }
                ],
                "description": "The reports provides the operational and insight charts for observation with rubric forms",
                "downloadUrl": "/reports/fetch/$slug/ml_total_unique_users_api_testo_pabitra_new1.csv"
            },
            "templateurl": null,
            "slug": "hawk-eye",
            "reportgenerateddate": "2022-05-27T00:00:00.000Z",
            "reportduration": {
                "enddate": "12-02-2020",
                "startdate": "12-02-2020"
            },
            "tags": [
                "1Bn"
            ],
            "updatefrequency": "one-time",
            "parameters": [
                "$slug"
            ],
            "report_type": "report",
            "accesspath": null,
            "visibilityflags": null,
            "isParameterized": true,
            "hashed_val": "dG4="
        }
    ]
}
};
