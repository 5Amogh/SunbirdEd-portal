import { Component, OnInit } from '@angular/core';
import {
  COLUMN_TYPE,
  LayoutService,
  ResourceService,
  ConfigService,
} from '@sunbird/shared';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ObservationService, ObservationUtilService } from '@sunbird/core';
import { Location } from '@angular/common';
import { ComponentDeactivate } from '../guard/can-deactivate.guard';
import { AssessmentInfo, Evidence, IAssessmentDetails, Section, SlQuestionnaireService } from '@shikshalokam/sl-questionnaire';
import { QuestionnaireService } from '../questionnaire.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent
  extends ComponentDeactivate
  implements OnInit {
  pageTitleSrc = 'Observation Form';
  svgToDisplay = 'textbooks-banner-img.svg';
  layoutConfiguration: any;
  FIRST_PANEL_LAYOUT;
  SECOND_PANEL_LAYOUT;
  questionnaireForm: UntypedFormGroup;
  sections: Section[];
  evidence: any;
  queryParams: any;
  assessmentInfo: any = {
    "entityProfile": {
        "_id": "2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03",
        "entityType": "district",
        "entityTypeId":'f76dcf5-e43b-4f71-a3f2-c8f19e1fce03'
    },
    "solution": {
        "_id": "6564904b15793100084d5c9d",
        "externalId": "5ebe11fe-8d23-11ee-bd39-ac12038f3f22-OBSERVATION-TEMPLATE_CHILD",
        "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
        "description": "Testing observation for production",
        "registry": [],
        "captureGpsLocationAtQuestionLevel": false,
        "enableQuestionReadOut": false,
        "scoringSystem": null,
        "isRubricDriven": false,
        "pageHeading": "Domains",
        "criteriaLevelReport": false
    },
    "program": {
        "_id": "6560424c924add0008cfc991",
        "isAPrivateProgram": false,
        "externalId": "Test_Staging_Api_test_Regration_6.0_allresurce_staging_test1_Test_for_fix",
        "name": "Test for fix Staging Api testing with script",
        "description": "Test for fix Staging Api testing with script Test for fix",
        "imageCompression": {
            "quality": 10
        },
        "requestForPIIConsent": true
    },
    "assessment": {
        "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
        "description": "Testing observation for production",
        "externalId": "5ebe11fe-8d23-11ee-bd39-ac12038f3f22-OBSERVATION-TEMPLATE_CHILD",
        "pageHeading": "Domains",
        "submissionId": "65af90e963db3c00085edffd",
        "evidences": [
            {
                "code": "OB",
                "sections": [
                    {
                        "code": "S1",
                        "questions": [
                            {
                                "_id": "",
                                "question": "",
                                "isCompleted": "",
                                "showRemarks": "",
                                "options": "",
                                "sliderOptions": "",
                                "children": "",
                                "questionGroup": "",
                                "fileName": "",
                                "instanceQuestions": "",
                                "isAGeneralQuestion": "",
                                "autoCapture": "",
                                "allowAudioRecording": "",
                                "prefillFromEntityProfile": "",
                                "entityFieldName": "",
                                "isEditable": "",
                                "showQuestionInPreview": "",
                                "deleted": "",
                                "remarks": "",
                                "value": "",
                                "usedForScoring": "",
                                "questionType": "",
                                "canBeNotApplicable": "",
                                "visibleIf": "",
                                "validation": "",
                                "dateFormat": "",
                                "externalId": "",
                                "tip": "",
                                "hint": "",
                                "responseType": "pageQuestions",
                                "modeOfCollection": "",
                                "accessibility": "",
                                "rubricLevel": "",
                                "sectionHeader": "",
                                "page": "p1",
                                "questionNumber": "",
                                "updatedAt": "",
                                "createdAt": "",
                                "__v": "",
                                "createdFromQuestionId": "",
                                "evidenceMethod": "",
                                "payload": "",
                                "startTime": "",
                                "endTime": "",
                                "gpsLocation": "",
                                "file": "",
                                "pageQuestions": [
                                    {
                                        "_id": "6564904b15793100084d5c74",
                                        "question": [
                                            "Enter the date of observation",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true,
                                            "max": "",
                                            "min": ""
                                        },
                                        "dateFormat": "DD-MM-YYYY",
                                        "externalId": "Q1_1701089351624-1701089355867",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "date",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "1",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.427Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c13",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "date",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c75",
                                        "question": [
                                            "Are you currently living in the vicinity of the school?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true,
                                            "IsNumber": "true"
                                        },
                                        "externalId": "Q2_1701089351624-1701089355868",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "number",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "2",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.436Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c19",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "number",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c76",
                                        "question": [
                                            "Are you currently living in the vicinity of the school?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Yes"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "No"
                                            },
                                            {
                                                "value": "R3",
                                                "label": "a"
                                            },
                                            {
                                                "value": "R4",
                                                "label": "b"
                                            },
                                            {
                                                "value": "R5",
                                                "label": "c"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [
                                            "6564904b15793100084d5c77"
                                        ],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "externalId": "Q3_1701089351624-1701089355869",
                                        "tip": "Use the name of the locality where the school is",
                                        "hint": "",
                                        "responseType": "radio",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "3",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.444Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c1f",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "radio",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c77",
                                        "question": [
                                            "Are you planning to come back?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Yes"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "No"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": [
                                            {
                                                "operator": "===",
                                                "value": [
                                                    "R2"
                                                ],
                                                "_id": "6564904b15793100084d5c76"
                                            }
                                        ],
                                        "validation": {
                                            "required": false
                                        },
                                        "externalId": "Q4_1701089351624-1701089355869",
                                        "tip": "",
                                        "hint": "This becomes a risk if the answer is no",
                                        "responseType": "radio",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "4",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.451Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c25",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "radio",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c78",
                                        "question": [
                                            "What type of device is available at home?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": true,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Simple mobile phone without internet/data pack"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "Smart phone with internet/data pack"
                                            },
                                            {
                                                "value": "R3",
                                                "label": "Smart phone without internet/data pack"
                                            },
                                            {
                                                "value": "R4",
                                                "label": "TV"
                                            },
                                            {
                                                "value": "R5",
                                                "label": "Radio"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "file": {
                                            "required": true,
                                            "type": [
                                                "image/jpeg",
                                                "docx",
                                                "pdf",
                                                "ppt"
                                            ],
                                            "minCount": 0,
                                            "maxCount": 10,
                                            "caption": "FALSE"
                                        },
                                        "externalId": "Q5_1701089351624-1701089355870",
                                        "tip": "",
                                        "hint": "The devices that are available or can be easily arranged in the household.",
                                        "responseType": "multiselect",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "5",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.460Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c2c",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "multiselect",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c79",
                                        "question": [
                                            "Does the child have a quiet place to study?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": true,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Yes"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "No"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "externalId": "Q6_1701089351624-1701089355870",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "radio",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "6",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.469Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c32",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "radio",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c7a",
                                        "question": [
                                            "Were you able to enrol your child in courses on DIKSHA?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Yes"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "No"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [
                                            "6564904b15793100084d5c7b"
                                        ],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "externalId": "Q7_1701089351624-1701089355874",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "radio",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "7",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.476Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c38",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "radio",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c7b",
                                        "question": [
                                            "What are the challenges that you are facing in enrolment?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": true,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Not able to use the app"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "Not aware of classrooms on DIKSHA"
                                            },
                                            {
                                                "value": "R3",
                                                "label": "Not aware of the enrolment process in the classroom"
                                            },
                                            {
                                                "value": "R4",
                                                "label": "Not aware of enrolment process in the courses"
                                            },
                                            {
                                                "value": "R5",
                                                "label": "Don’t find the courses useful"
                                            },
                                            {
                                                "value": "R6",
                                                "label": "Others"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": [
                                            {
                                                "operator": "===",
                                                "value": [
                                                    "R2"
                                                ],
                                                "_id": "6564904b15793100084d5c7a"
                                            }
                                        ],
                                        "validation": {
                                            "required": true
                                        },
                                        "externalId": "Q8_1701089351624-1701089355874",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "multiselect",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "8",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.484Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c3e",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "multiselect",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c7c",
                                        "question": [
                                            "On basis of the responses received above,  do you think this student is a potential drop out?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": true,
                                        "options": [
                                            {
                                                "value": "R1",
                                                "label": "Yes"
                                            },
                                            {
                                                "value": "R2",
                                                "label": "No"
                                            }
                                        ],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "externalId": "Q9_1701089351624-1701089355875",
                                        "tip": "Fill this based on the  parents' answers",
                                        "hint": "",
                                        "responseType": "radio",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p1",
                                        "questionNumber": "9",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.493Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c45",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c95",
                                            "responseType": "radio",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    }
                                ]
                            },
                            {
                                "_id": "",
                                "question": "",
                                "isCompleted": "",
                                "showRemarks": "",
                                "options": "",
                                "sliderOptions": "",
                                "children": "",
                                "questionGroup": "",
                                "fileName": "",
                                "instanceQuestions": "",
                                "isAGeneralQuestion": "",
                                "autoCapture": "",
                                "allowAudioRecording": "",
                                "prefillFromEntityProfile": "",
                                "entityFieldName": "",
                                "isEditable": "",
                                "showQuestionInPreview": "",
                                "deleted": "",
                                "remarks": "",
                                "value": "",
                                "usedForScoring": "",
                                "questionType": "",
                                "canBeNotApplicable": "",
                                "visibleIf": "",
                                "validation": "",
                                "dateFormat": "",
                                "externalId": "",
                                "tip": "",
                                "hint": "",
                                "responseType": "pageQuestions",
                                "modeOfCollection": "",
                                "accessibility": "",
                                "rubricLevel": "",
                                "sectionHeader": "",
                                "page": "p2",
                                "questionNumber": "",
                                "updatedAt": "",
                                "createdAt": "",
                                "__v": "",
                                "createdFromQuestionId": "",
                                "evidenceMethod": "",
                                "payload": "",
                                "startTime": "",
                                "endTime": "",
                                "gpsLocation": "",
                                "file": "",
                                "pageQuestions": [
                                    {
                                        "_id": "6564904b15793100084d5c7d",
                                        "question": [
                                            "Add the student interview responses",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [
                                            {
                                                "_id": "6564904b15793100084d5c7e",
                                                "question": [
                                                    "When did you last take a course on Diksha?",
                                                    ""
                                                ],
                                                "isCompleted": false,
                                                "showRemarks": false,
                                                "options": [],
                                                "sliderOptions": [],
                                                "children": [],
                                                "questionGroup": [
                                                    "A1"
                                                ],
                                                "fileName": [],
                                                "instanceQuestions": [],
                                                "isAGeneralQuestion": false,
                                                "autoCapture": true,
                                                "allowAudioRecording": false,
                                                "prefillFromEntityProfile": false,
                                                "entityFieldName": "",
                                                "isEditable": true,
                                                "showQuestionInPreview": false,
                                                "deleted": false,
                                                "remarks": "",
                                                "value": "",
                                                "usedForScoring": "",
                                                "questionType": "auto",
                                                "canBeNotApplicable": "false",
                                                "visibleIf": "",
                                                "validation": {
                                                    "required": true,
                                                    "max": "",
                                                    "min": ""
                                                },
                                                "dateFormat": "DD-MM-YYYY",
                                                "externalId": "Q11_1701089351624-1701089355877",
                                                "tip": "",
                                                "hint": "",
                                                "responseType": "date",
                                                "modeOfCollection": "onfield",
                                                "accessibility": "No",
                                                "rubricLevel": "",
                                                "sectionHeader": "",
                                                "page": "p2",
                                                "questionNumber": "10a",
                                                "updatedAt": "2023-11-27T12:49:15.885Z",
                                                "createdAt": "2023-11-27T12:49:15.508Z",
                                                "__v": 0,
                                                "createdFromQuestionId": "6564904b15793100084d5c51",
                                                "evidenceMethod": "OB",
                                                "payload": {
                                                    "criteriaId": "6564904b15793100084d5c96",
                                                    "responseType": "date",
                                                    "evidenceMethod": "OB",
                                                    "rubricLevel": ""
                                                },
                                                "startTime": "",
                                                "endTime": "",
                                                "gpsLocation": "",
                                                "file": ""
                                            },
                                            {
                                                "_id": "6564904b15793100084d5c7f",
                                                "question": [
                                                    "How would you rate the course taken?",
                                                    ""
                                                ],
                                                "isCompleted": false,
                                                "showRemarks": false,
                                                "options": [],
                                                "sliderOptions": [],
                                                "children": [],
                                                "questionGroup": [
                                                    "A1"
                                                ],
                                                "fileName": [],
                                                "instanceQuestions": [],
                                                "isAGeneralQuestion": false,
                                                "autoCapture": false,
                                                "allowAudioRecording": false,
                                                "prefillFromEntityProfile": false,
                                                "entityFieldName": "",
                                                "isEditable": true,
                                                "showQuestionInPreview": false,
                                                "deleted": false,
                                                "remarks": "",
                                                "value": "",
                                                "usedForScoring": "",
                                                "questionType": "auto",
                                                "canBeNotApplicable": "false",
                                                "visibleIf": "",
                                                "validation": {
                                                    "required": true,
                                                    "max": "5",
                                                    "min": "1"
                                                },
                                                "externalId": "Q12_1701089351624-1701089355877",
                                                "tip": "",
                                                "hint": "",
                                                "responseType": "slider",
                                                "modeOfCollection": "onfield",
                                                "accessibility": "No",
                                                "rubricLevel": "",
                                                "sectionHeader": "",
                                                "page": "p2",
                                                "questionNumber": "10b",
                                                "updatedAt": "2023-11-27T12:49:15.885Z",
                                                "createdAt": "2023-11-27T12:49:15.517Z",
                                                "__v": 0,
                                                "createdFromQuestionId": "6564904b15793100084d5c58",
                                                "evidenceMethod": "OB",
                                                "payload": {
                                                    "criteriaId": "6564904b15793100084d5c96",
                                                    "responseType": "slider",
                                                    "evidenceMethod": "OB",
                                                    "rubricLevel": ""
                                                },
                                                "startTime": "",
                                                "endTime": "",
                                                "gpsLocation": "",
                                                "file": ""
                                            },
                                            {
                                                "_id": "6564904b15793100084d5c80",
                                                "question": [
                                                    "How many courses have you taken?",
                                                    ""
                                                ],
                                                "isCompleted": false,
                                                "showRemarks": false,
                                                "options": [],
                                                "sliderOptions": [],
                                                "children": [],
                                                "questionGroup": [
                                                    "A1"
                                                ],
                                                "fileName": [],
                                                "instanceQuestions": [],
                                                "isAGeneralQuestion": false,
                                                "autoCapture": false,
                                                "allowAudioRecording": false,
                                                "prefillFromEntityProfile": false,
                                                "entityFieldName": "",
                                                "isEditable": true,
                                                "showQuestionInPreview": false,
                                                "deleted": false,
                                                "remarks": "",
                                                "value": "",
                                                "usedForScoring": "",
                                                "questionType": "auto",
                                                "canBeNotApplicable": "false",
                                                "visibleIf": "",
                                                "validation": {
                                                    "required": true,
                                                    "IsNumber": "true"
                                                },
                                                "externalId": "Q13_1701089351624-1701089355879",
                                                "tip": "",
                                                "hint": "",
                                                "responseType": "number",
                                                "modeOfCollection": "onfield",
                                                "accessibility": "No",
                                                "rubricLevel": "",
                                                "sectionHeader": "",
                                                "page": "p2",
                                                "questionNumber": "10c",
                                                "updatedAt": "2023-11-27T12:49:15.885Z",
                                                "createdAt": "2023-11-27T12:49:15.525Z",
                                                "__v": 0,
                                                "createdFromQuestionId": "6564904b15793100084d5c5f",
                                                "evidenceMethod": "OB",
                                                "payload": {
                                                    "criteriaId": "6564904b15793100084d5c96",
                                                    "responseType": "number",
                                                    "evidenceMethod": "OB",
                                                    "rubricLevel": ""
                                                },
                                                "startTime": "",
                                                "endTime": "",
                                                "gpsLocation": "",
                                                "file": ""
                                            },
                                            {
                                                "_id": "6564904b15793100084d5c81",
                                                "question": [
                                                    "Which courses did you go through?",
                                                    ""
                                                ],
                                                "isCompleted": false,
                                                "showRemarks": false,
                                                "options": [],
                                                "sliderOptions": [],
                                                "children": [],
                                                "questionGroup": [
                                                    "A1"
                                                ],
                                                "fileName": [],
                                                "instanceQuestions": [],
                                                "isAGeneralQuestion": false,
                                                "autoCapture": false,
                                                "allowAudioRecording": false,
                                                "prefillFromEntityProfile": false,
                                                "entityFieldName": "",
                                                "isEditable": true,
                                                "showQuestionInPreview": false,
                                                "deleted": false,
                                                "remarks": "",
                                                "value": "",
                                                "usedForScoring": "",
                                                "questionType": "auto",
                                                "canBeNotApplicable": "false",
                                                "visibleIf": "",
                                                "validation": {
                                                    "required": false
                                                },
                                                "file": {
                                                    "required": true,
                                                    "type": [
                                                        "image/jpeg",
                                                        "docx",
                                                        "pdf",
                                                        "ppt"
                                                    ],
                                                    "minCount": 0,
                                                    "maxCount": 10,
                                                    "caption": "FALSE"
                                                },
                                                "externalId": "Q14_1701089351624-1701089355879",
                                                "tip": "",
                                                "hint": "",
                                                "responseType": "text",
                                                "modeOfCollection": "onfield",
                                                "accessibility": "No",
                                                "rubricLevel": "",
                                                "sectionHeader": "",
                                                "page": "p2",
                                                "questionNumber": "10d",
                                                "updatedAt": "2023-11-27T12:49:15.885Z",
                                                "createdAt": "2023-11-27T12:49:15.536Z",
                                                "__v": 0,
                                                "createdFromQuestionId": "6564904b15793100084d5c66",
                                                "evidenceMethod": "OB",
                                                "payload": {
                                                    "criteriaId": "6564904b15793100084d5c96",
                                                    "responseType": "text",
                                                    "evidenceMethod": "OB",
                                                    "rubricLevel": ""
                                                },
                                                "startTime": "",
                                                "endTime": "",
                                                "gpsLocation": ""
                                            }
                                        ],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true
                                        },
                                        "instanceIdentifier": "Student",
                                        "externalId": "Q10_1701089351624-1701089355876",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "matrix",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p2",
                                        "questionNumber": "10",
                                        "updatedAt": "2023-11-27T12:49:15.884Z",
                                        "createdAt": "2023-11-27T12:49:15.502Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c4b",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c96",
                                            "responseType": "matrix",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": "",
                                        "endTime": "",
                                        "gpsLocation": "",
                                        "file": ""
                                    }
                                ]
                            }
                        ],
                        "name": "Observation Question"
                    }
                ],
                "externalId": "OB",
                "tip": null,
                "name": "Observation",
                "description": null,
                "modeOfCollection": "onfield",
                "canBeNotApplicable": false,
                "notApplicable": false,
                "canBeNotAllowed": false,
                "remarks": null,
                "startTime": 1711526690550,
                "endTime": 1711541784071,
                "isSubmitted": false,
                "submissions": []
            }
        ],
        "submissions": {
            "OB": {
                "externalId": "OB",
                "answers": {
                    "6564904b15793100084d5c74": {
                        "qid": "6564904b15793100084d5c74",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Enter the date of observation",
                                ""
                            ],
                            "labels": null,
                            "responseType": "date",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690582,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "date",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c75": {
                        "qid": "6564904b15793100084d5c75",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Are you currently living in the vicinity of the school?",
                                ""
                            ],
                            "labels": null,
                            "responseType": "number",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690593,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "number",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c76": {
                        "qid": "6564904b15793100084d5c76",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Are you currently living in the vicinity of the school?",
                                ""
                            ],
                            "labels": null,
                            "responseType": "radio",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690596,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "radio",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c77": {
                        "qid": "6564904b15793100084d5c77",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Are you planning to come back?",
                                ""
                            ],
                            "responseType": "radio",
                            "filesNotUploaded": []
                        },
                        "startTime": "",
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "radio",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c78": {
                        "qid": "6564904b15793100084d5c78",
                        "value": [],
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "What type of device is available at home?",
                                ""
                            ],
                            "labels": [],
                            "responseType": "multiselect",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690603,
                        "endTime": 1711526712737,
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "multiselect",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c79": {
                        "qid": "6564904b15793100084d5c79",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Does the child have a quiet place to study?",
                                ""
                            ],
                            "labels": null,
                            "responseType": "radio",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690617,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "radio",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c7a": {
                        "qid": "6564904b15793100084d5c7a",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Were you able to enrol your child in courses on DIKSHA?",
                                ""
                            ],
                            "labels": null,
                            "responseType": "radio",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690623,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "radio",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c7b": {
                        "qid": "6564904b15793100084d5c7b",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "What are the challenges that you are facing in enrolment?",
                                ""
                            ],
                            "responseType": "multiselect",
                            "filesNotUploaded": []
                        },
                        "startTime": "",
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "multiselect",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c7c": {
                        "qid": "6564904b15793100084d5c7c",
                        "value": "",
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "On basis of the responses received above,  do you think this student is a potential drop out?",
                                ""
                            ],
                            "labels": null,
                            "responseType": "radio",
                            "filesNotUploaded": []
                        },
                        "startTime": 1711526690627,
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c95",
                        "responseType": "radio",
                        "evidenceMethod": "OB",
                        "rubricLevel": ""
                    },
                    "6564904b15793100084d5c7d": {
                        "qid": "6564904b15793100084d5c7d",
                        "value": [
                            {
                                "6564904b15793100084d5c7e": {
                                    "qid": "6564904b15793100084d5c7e",
                                    "value": "2024-03-27T12:16:09.035Z",
                                    "remarks": "",
                                    "fileName": [],
                                    "gpsLocation": "",
                                    "payload": {
                                        "question": [
                                            "When did you last take a course on Diksha?",
                                            ""
                                        ],
                                        "labels": [
                                            "2024-03-27T12:16:09.035Z"
                                        ],
                                        "responseType": "date",
                                        "filesNotUploaded": []
                                    },
                                    "startTime": 1711541767138,
                                    "endTime": 1711541769039,
                                    "criteriaId": "6564904b15793100084d5c96",
                                    "responseType": "date",
                                    "evidenceMethod": "OB",
                                    "rubricLevel": ""
                                },
                                "6564904b15793100084d5c7f": {
                                    "qid": "6564904b15793100084d5c7f",
                                    "value": 2,
                                    "remarks": "",
                                    "fileName": [],
                                    "gpsLocation": "",
                                    "payload": {
                                        "question": [
                                            "How would you rate the course taken?",
                                            ""
                                        ],
                                        "labels": [
                                            2
                                        ],
                                        "responseType": "slider",
                                        "filesNotUploaded": []
                                    },
                                    "startTime": 1711541767164,
                                    "endTime": 1711541774319,
                                    "criteriaId": "6564904b15793100084d5c96",
                                    "responseType": "slider",
                                    "evidenceMethod": "OB",
                                    "rubricLevel": ""
                                },
                                "6564904b15793100084d5c80": {
                                    "qid": "6564904b15793100084d5c80",
                                    "value": "1",
                                    "remarks": "",
                                    "fileName": [],
                                    "gpsLocation": "",
                                    "payload": {
                                        "question": [
                                            "How many courses have you taken?",
                                            ""
                                        ],
                                        "labels": [
                                            1
                                        ],
                                        "responseType": "number",
                                        "filesNotUploaded": []
                                    },
                                    "startTime": 1711541767192,
                                    "endTime": 1711541779115,
                                    "criteriaId": "6564904b15793100084d5c96",
                                    "responseType": "number",
                                    "evidenceMethod": "OB",
                                    "rubricLevel": ""
                                },
                                "6564904b15793100084d5c81": {
                                    "qid": "6564904b15793100084d5c81",
                                    "value": "2",
                                    "remarks": "",
                                    "fileName": [],
                                    "gpsLocation": "",
                                    "payload": {
                                        "question": [
                                            "Which courses did you go through?",
                                            ""
                                        ],
                                        "labels": [
                                            "2"
                                        ],
                                        "responseType": "text",
                                        "filesNotUploaded": []
                                    },
                                    "startTime": 1711541767195,
                                    "endTime": 1711541781131,
                                    "criteriaId": "6564904b15793100084d5c96",
                                    "responseType": "text",
                                    "evidenceMethod": "OB",
                                    "rubricLevel": ""
                                }
                            }
                        ],
                        "remarks": "",
                        "fileName": [],
                        "gpsLocation": "",
                        "payload": {
                            "question": [
                                "Add the student interview responses",
                                ""
                            ],
                            "labels": [
                                [
                                    {
                                        "_id": "6564904b15793100084d5c7e",
                                        "question": [
                                            "When did you last take a course on Diksha?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": true,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "2024-03-27T12:16:09.035Z",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true,
                                            "max": "",
                                            "min": ""
                                        },
                                        "dateFormat": "DD-MM-YYYY",
                                        "externalId": "Q11_1701089351624-1701089355877",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "date",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p2",
                                        "questionNumber": "10a",
                                        "updatedAt": "2023-11-27T12:49:15.885Z",
                                        "createdAt": "2023-11-27T12:49:15.508Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c51",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c96",
                                            "responseType": "date",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": 1711541767138,
                                        "endTime": 1711541769039,
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c7f",
                                        "question": [
                                            "How would you rate the course taken?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": 2,
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true,
                                            "max": "5",
                                            "min": "1"
                                        },
                                        "externalId": "Q12_1701089351624-1701089355877",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "slider",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p2",
                                        "questionNumber": "10b",
                                        "updatedAt": "2023-11-27T12:49:15.885Z",
                                        "createdAt": "2023-11-27T12:49:15.517Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c58",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c96",
                                            "responseType": "slider",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": 1711541767164,
                                        "endTime": 1711541774319,
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c80",
                                        "question": [
                                            "How many courses have you taken?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "1",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": true,
                                            "IsNumber": "true"
                                        },
                                        "externalId": "Q13_1701089351624-1701089355879",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "number",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p2",
                                        "questionNumber": "10c",
                                        "updatedAt": "2023-11-27T12:49:15.885Z",
                                        "createdAt": "2023-11-27T12:49:15.525Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c5f",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c96",
                                            "responseType": "number",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": 1711541767192,
                                        "endTime": 1711541779115,
                                        "gpsLocation": "",
                                        "file": ""
                                    },
                                    {
                                        "_id": "6564904b15793100084d5c81",
                                        "question": [
                                            "Which courses did you go through?",
                                            ""
                                        ],
                                        "isCompleted": false,
                                        "showRemarks": false,
                                        "options": [],
                                        "sliderOptions": [],
                                        "children": [],
                                        "questionGroup": [
                                            "A1"
                                        ],
                                        "fileName": [],
                                        "instanceQuestions": [],
                                        "isAGeneralQuestion": false,
                                        "autoCapture": false,
                                        "allowAudioRecording": false,
                                        "prefillFromEntityProfile": false,
                                        "entityFieldName": "",
                                        "isEditable": true,
                                        "showQuestionInPreview": false,
                                        "deleted": false,
                                        "remarks": "",
                                        "value": "2",
                                        "usedForScoring": "",
                                        "questionType": "auto",
                                        "canBeNotApplicable": "false",
                                        "visibleIf": "",
                                        "validation": {
                                            "required": false
                                        },
                                        "file": {
                                            "required": true,
                                            "type": [
                                                "image/jpeg",
                                                "docx",
                                                "pdf",
                                                "ppt"
                                            ],
                                            "minCount": 0,
                                            "maxCount": 10,
                                            "caption": "FALSE"
                                        },
                                        "externalId": "Q14_1701089351624-1701089355879",
                                        "tip": "",
                                        "hint": "",
                                        "responseType": "text",
                                        "modeOfCollection": "onfield",
                                        "accessibility": "No",
                                        "rubricLevel": "",
                                        "sectionHeader": "",
                                        "page": "p2",
                                        "questionNumber": "10d",
                                        "updatedAt": "2023-11-27T12:49:15.885Z",
                                        "createdAt": "2023-11-27T12:49:15.536Z",
                                        "__v": 0,
                                        "createdFromQuestionId": "6564904b15793100084d5c66",
                                        "evidenceMethod": "OB",
                                        "payload": {
                                            "criteriaId": "6564904b15793100084d5c96",
                                            "responseType": "text",
                                            "evidenceMethod": "OB",
                                            "rubricLevel": ""
                                        },
                                        "startTime": 1711541767195,
                                        "endTime": 1711541781131,
                                        "gpsLocation": ""
                                    }
                                ]
                            ],
                            "responseType": "matrix",
                            "filesNotUploaded": []
                        },
                        "startTime": "",
                        "endTime": "",
                        "criteriaId": "6564904b15793100084d5c96",
                        "responseType": "matrix",
                        "evidenceMethod": "OB",
                        "rubricLevel": "",
                        "countOfInstances": 1
                    }
                },
                "startTime": 1711526690550,
                "endTime": 1711541784071,
                "gpsLocation": null,
                "submittedBy": "7b351af1-bb36-4363-bdb9-b7bb7758cae6",
                "submittedByName": "abc undefined",
                "submittedByEmail": null,
                "submissionDate": "2024-03-27T12:16:24.654Z",
                "isValid": true
            }
        }
    }
}
  canLeave = false;
  constructor(
    public layoutService: LayoutService,
    public fb: UntypedFormBuilder,
    public resourceService: ResourceService,
    private activatedRoute: ActivatedRoute,
    private config: ConfigService,
    private observationService: ObservationService,
    private location: Location,
    private observationUtilService: ObservationUtilService,
    private slQService: SlQuestionnaireService,
    private questionnaireService: QuestionnaireService
  ) {
    super();
  }

  canDeactivate() {
    if (this.questionnaireForm) {
      if (this.questionnaireForm.dirty && !this.canLeave) {
        return false;
      } else {
        return true;
      }
    }
  }

  ngOnInit() {
    this.initConfiguration();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryParams = params;
      this.getQuestionnare();
    });
    this.questionnaireForm = this.fb.group({});
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  getQuestionnare() {
    const data = {
      "message": "Assessment fetched successfully",
      "status": 200,
      "result": {
          "entityProfile": {
              "_id": "2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03",
              "entityType": "district",
              "entityTypeId":'f76dcf5-e43b-4f71-a3f2-c8f19e1fce03'
          },
          "solution": {
              "_id": "6564904b15793100084d5c9d",
              "externalId": "5ebe11fe-8d23-11ee-bd39-ac12038f3f22-OBSERVATION-TEMPLATE_CHILD",
              "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
              "description": "Testing observation for production",
              "registry": [],
              "captureGpsLocationAtQuestionLevel": false,
              "enableQuestionReadOut": false,
              "scoringSystem": null,
              "isRubricDriven": false,
              "pageHeading": "Domains",
              "criteriaLevelReport": false
          },
          "program": {
              "_id": "6560424c924add0008cfc991",
              "isAPrivateProgram": false,
              "externalId": "Test_Staging_Api_test_Regration_6.0_allresurce_staging_test1_Test_for_fix",
              "name": "Test for fix Staging Api testing with script",
              "description": "Test for fix Staging Api testing with script Test for fix",
              "imageCompression": {
                  "quality": 10
              },
              "requestForPIIConsent": true
          },
          "assessment": {
              "name": "Observation without Rubrics for Testing Script for 5.1.3 hardcoded value to dynamic value",
              "description": "Testing observation for production",
              "externalId": "5ebe11fe-8d23-11ee-bd39-ac12038f3f22-OBSERVATION-TEMPLATE_CHILD",
              "pageHeading": "Domains",
              "submissionId": "65af90e963db3c00085edffd",
              "evidences": [
                  {
                      "code": "OB",
                      "sections": [
                          {
                              "code": "S1",
                              "questions": [
                                  {
                                      "_id": "",
                                      "question": "",
                                      "isCompleted": "",
                                      "showRemarks": "",
                                      "options": "",
                                      "sliderOptions": "",
                                      "children": "",
                                      "questionGroup": "",
                                      "fileName": "",
                                      "instanceQuestions": "",
                                      "isAGeneralQuestion": "",
                                      "autoCapture": "",
                                      "allowAudioRecording": "",
                                      "prefillFromEntityProfile": "",
                                      "entityFieldName": "",
                                      "isEditable": "",
                                      "showQuestionInPreview": "",
                                      "deleted": "",
                                      "remarks": "",
                                      "value": "",
                                      "usedForScoring": "",
                                      "questionType": "",
                                      "canBeNotApplicable": "",
                                      "visibleIf": "",
                                      "validation": "",
                                      "dateFormat": "",
                                      "externalId": "",
                                      "tip": "",
                                      "hint": "",
                                      "responseType": "pageQuestions",
                                      "modeOfCollection": "",
                                      "accessibility": "",
                                      "rubricLevel": "",
                                      "sectionHeader": "",
                                      "page": "p1",
                                      "questionNumber": "",
                                      "updatedAt": "",
                                      "createdAt": "",
                                      "__v": "",
                                      "createdFromQuestionId": "",
                                      "evidenceMethod": "",
                                      "payload": "",
                                      "startTime": "",
                                      "endTime": "",
                                      "gpsLocation": "",
                                      "file": "",
                                      "pageQuestions": [
                                          {
                                              "_id": "6564904b15793100084d5c74",
                                              "question": [
                                                  "Enter the date of observation",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true,
                                                  "max": "",
                                                  "min": ""
                                              },
                                              "dateFormat": "DD-MM-YYYY",
                                              "externalId": "Q1_1701089351624-1701089355867",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "date",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "1",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.427Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c13",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "date",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c75",
                                              "question": [
                                                  "Are you currently living in the vicinity of the school?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true,
                                                  "IsNumber": "true"
                                              },
                                              "externalId": "Q2_1701089351624-1701089355868",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "number",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "2",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.436Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c19",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "number",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c76",
                                              "question": [
                                                  "Are you currently living in the vicinity of the school?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Yes"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "No"
                                                  },
                                                  {
                                                      "value": "R3",
                                                      "label": "a"
                                                  },
                                                  {
                                                      "value": "R4",
                                                      "label": "b"
                                                  },
                                                  {
                                                      "value": "R5",
                                                      "label": "c"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [
                                                  "6564904b15793100084d5c77"
                                              ],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "externalId": "Q3_1701089351624-1701089355869",
                                              "tip": "Use the name of the locality where the school is",
                                              "hint": "",
                                              "responseType": "radio",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "3",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.444Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c1f",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "radio",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c77",
                                              "question": [
                                                  "Are you planning to come back?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Yes"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "No"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": [
                                                  {
                                                      "operator": "===",
                                                      "value": [
                                                          "R2"
                                                      ],
                                                      "_id": "6564904b15793100084d5c76"
                                                  }
                                              ],
                                              "validation": {
                                                  "required": false
                                              },
                                              "externalId": "Q4_1701089351624-1701089355869",
                                              "tip": "",
                                              "hint": "This becomes a risk if the answer is no",
                                              "responseType": "radio",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "4",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.451Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c25",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "radio",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c78",
                                              "question": [
                                                  "What type of device is available at home?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": true,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Simple mobile phone without internet/data pack"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "Smart phone with internet/data pack"
                                                  },
                                                  {
                                                      "value": "R3",
                                                      "label": "Smart phone without internet/data pack"
                                                  },
                                                  {
                                                      "value": "R4",
                                                      "label": "TV"
                                                  },
                                                  {
                                                      "value": "R5",
                                                      "label": "Radio"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "file": {
                                                  "required": true,
                                                  "type": [
                                                      "image/jpeg",
                                                      "docx",
                                                      "pdf",
                                                      "ppt"
                                                  ],
                                                  "minCount": 0,
                                                  "maxCount": 10,
                                                  "caption": "FALSE"
                                              },
                                              "externalId": "Q5_1701089351624-1701089355870",
                                              "tip": "",
                                              "hint": "The devices that are available or can be easily arranged in the household.",
                                              "responseType": "multiselect",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "5",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.460Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c2c",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "multiselect",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c79",
                                              "question": [
                                                  "Does the child have a quiet place to study?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": true,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Yes"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "No"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "externalId": "Q6_1701089351624-1701089355870",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "radio",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "6",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.469Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c32",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "radio",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c7a",
                                              "question": [
                                                  "Were you able to enrol your child in courses on DIKSHA?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Yes"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "No"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [
                                                  "6564904b15793100084d5c7b"
                                              ],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "externalId": "Q7_1701089351624-1701089355874",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "radio",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "7",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.476Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c38",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "radio",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c7b",
                                              "question": [
                                                  "What are the challenges that you are facing in enrolment?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": true,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Not able to use the app"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "Not aware of classrooms on DIKSHA"
                                                  },
                                                  {
                                                      "value": "R3",
                                                      "label": "Not aware of the enrolment process in the classroom"
                                                  },
                                                  {
                                                      "value": "R4",
                                                      "label": "Not aware of enrolment process in the courses"
                                                  },
                                                  {
                                                      "value": "R5",
                                                      "label": "Don’t find the courses useful"
                                                  },
                                                  {
                                                      "value": "R6",
                                                      "label": "Others"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": [
                                                  {
                                                      "operator": "===",
                                                      "value": [
                                                          "R2"
                                                      ],
                                                      "_id": "6564904b15793100084d5c7a"
                                                  }
                                              ],
                                              "validation": {
                                                  "required": true
                                              },
                                              "externalId": "Q8_1701089351624-1701089355874",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "multiselect",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "8",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.484Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c3e",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "multiselect",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c7c",
                                              "question": [
                                                  "On basis of the responses received above,  do you think this student is a potential drop out?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": true,
                                              "options": [
                                                  {
                                                      "value": "R1",
                                                      "label": "Yes"
                                                  },
                                                  {
                                                      "value": "R2",
                                                      "label": "No"
                                                  }
                                              ],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "externalId": "Q9_1701089351624-1701089355875",
                                              "tip": "Fill this based on the  parents' answers",
                                              "hint": "",
                                              "responseType": "radio",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p1",
                                              "questionNumber": "9",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.493Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c45",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c95",
                                                  "responseType": "radio",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          }
                                      ]
                                  },
                                  {
                                      "_id": "",
                                      "question": "",
                                      "isCompleted": "",
                                      "showRemarks": "",
                                      "options": "",
                                      "sliderOptions": "",
                                      "children": "",
                                      "questionGroup": "",
                                      "fileName": "",
                                      "instanceQuestions": "",
                                      "isAGeneralQuestion": "",
                                      "autoCapture": "",
                                      "allowAudioRecording": "",
                                      "prefillFromEntityProfile": "",
                                      "entityFieldName": "",
                                      "isEditable": "",
                                      "showQuestionInPreview": "",
                                      "deleted": "",
                                      "remarks": "",
                                      "value": "",
                                      "usedForScoring": "",
                                      "questionType": "",
                                      "canBeNotApplicable": "",
                                      "visibleIf": "",
                                      "validation": "",
                                      "dateFormat": "",
                                      "externalId": "",
                                      "tip": "",
                                      "hint": "",
                                      "responseType": "pageQuestions",
                                      "modeOfCollection": "",
                                      "accessibility": "",
                                      "rubricLevel": "",
                                      "sectionHeader": "",
                                      "page": "p2",
                                      "questionNumber": "",
                                      "updatedAt": "",
                                      "createdAt": "",
                                      "__v": "",
                                      "createdFromQuestionId": "",
                                      "evidenceMethod": "",
                                      "payload": "",
                                      "startTime": "",
                                      "endTime": "",
                                      "gpsLocation": "",
                                      "file": "",
                                      "pageQuestions": [
                                          {
                                              "_id": "6564904b15793100084d5c7d",
                                              "question": [
                                                  "Add the student interview responses",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [
                                                  {
                                                      "_id": "6564904b15793100084d5c7e",
                                                      "question": [
                                                          "When did you last take a course on Diksha?",
                                                          ""
                                                      ],
                                                      "isCompleted": false,
                                                      "showRemarks": false,
                                                      "options": [],
                                                      "sliderOptions": [],
                                                      "children": [],
                                                      "questionGroup": [
                                                          "A1"
                                                      ],
                                                      "fileName": [],
                                                      "instanceQuestions": [],
                                                      "isAGeneralQuestion": false,
                                                      "autoCapture": true,
                                                      "allowAudioRecording": false,
                                                      "prefillFromEntityProfile": false,
                                                      "entityFieldName": "",
                                                      "isEditable": true,
                                                      "showQuestionInPreview": false,
                                                      "deleted": false,
                                                      "remarks": "",
                                                      "value": "",
                                                      "usedForScoring": "",
                                                      "questionType": "auto",
                                                      "canBeNotApplicable": "false",
                                                      "visibleIf": "",
                                                      "validation": {
                                                          "required": true,
                                                          "max": "",
                                                          "min": ""
                                                      },
                                                      "dateFormat": "DD-MM-YYYY",
                                                      "externalId": "Q11_1701089351624-1701089355877",
                                                      "tip": "",
                                                      "hint": "",
                                                      "responseType": "date",
                                                      "modeOfCollection": "onfield",
                                                      "accessibility": "No",
                                                      "rubricLevel": "",
                                                      "sectionHeader": "",
                                                      "page": "p2",
                                                      "questionNumber": "10a",
                                                      "updatedAt": "2023-11-27T12:49:15.885Z",
                                                      "createdAt": "2023-11-27T12:49:15.508Z",
                                                      "__v": 0,
                                                      "createdFromQuestionId": "6564904b15793100084d5c51",
                                                      "evidenceMethod": "OB",
                                                      "payload": {
                                                          "criteriaId": "6564904b15793100084d5c96",
                                                          "responseType": "date",
                                                          "evidenceMethod": "OB",
                                                          "rubricLevel": ""
                                                      },
                                                      "startTime": "",
                                                      "endTime": "",
                                                      "gpsLocation": "",
                                                      "file": ""
                                                  },
                                                  {
                                                      "_id": "6564904b15793100084d5c7f",
                                                      "question": [
                                                          "How would you rate the course taken?",
                                                          ""
                                                      ],
                                                      "isCompleted": false,
                                                      "showRemarks": false,
                                                      "options": [],
                                                      "sliderOptions": [],
                                                      "children": [],
                                                      "questionGroup": [
                                                          "A1"
                                                      ],
                                                      "fileName": [],
                                                      "instanceQuestions": [],
                                                      "isAGeneralQuestion": false,
                                                      "autoCapture": false,
                                                      "allowAudioRecording": false,
                                                      "prefillFromEntityProfile": false,
                                                      "entityFieldName": "",
                                                      "isEditable": true,
                                                      "showQuestionInPreview": false,
                                                      "deleted": false,
                                                      "remarks": "",
                                                      "value": "",
                                                      "usedForScoring": "",
                                                      "questionType": "auto",
                                                      "canBeNotApplicable": "false",
                                                      "visibleIf": "",
                                                      "validation": {
                                                          "required": true,
                                                          "max": "5",
                                                          "min": "1"
                                                      },
                                                      "externalId": "Q12_1701089351624-1701089355877",
                                                      "tip": "",
                                                      "hint": "",
                                                      "responseType": "slider",
                                                      "modeOfCollection": "onfield",
                                                      "accessibility": "No",
                                                      "rubricLevel": "",
                                                      "sectionHeader": "",
                                                      "page": "p2",
                                                      "questionNumber": "10b",
                                                      "updatedAt": "2023-11-27T12:49:15.885Z",
                                                      "createdAt": "2023-11-27T12:49:15.517Z",
                                                      "__v": 0,
                                                      "createdFromQuestionId": "6564904b15793100084d5c58",
                                                      "evidenceMethod": "OB",
                                                      "payload": {
                                                          "criteriaId": "6564904b15793100084d5c96",
                                                          "responseType": "slider",
                                                          "evidenceMethod": "OB",
                                                          "rubricLevel": ""
                                                      },
                                                      "startTime": "",
                                                      "endTime": "",
                                                      "gpsLocation": "",
                                                      "file": ""
                                                  },
                                                  {
                                                      "_id": "6564904b15793100084d5c80",
                                                      "question": [
                                                          "How many courses have you taken?",
                                                          ""
                                                      ],
                                                      "isCompleted": false,
                                                      "showRemarks": false,
                                                      "options": [],
                                                      "sliderOptions": [],
                                                      "children": [],
                                                      "questionGroup": [
                                                          "A1"
                                                      ],
                                                      "fileName": [],
                                                      "instanceQuestions": [],
                                                      "isAGeneralQuestion": false,
                                                      "autoCapture": false,
                                                      "allowAudioRecording": false,
                                                      "prefillFromEntityProfile": false,
                                                      "entityFieldName": "",
                                                      "isEditable": true,
                                                      "showQuestionInPreview": false,
                                                      "deleted": false,
                                                      "remarks": "",
                                                      "value": "",
                                                      "usedForScoring": "",
                                                      "questionType": "auto",
                                                      "canBeNotApplicable": "false",
                                                      "visibleIf": "",
                                                      "validation": {
                                                          "required": true,
                                                          "IsNumber": "true"
                                                      },
                                                      "externalId": "Q13_1701089351624-1701089355879",
                                                      "tip": "",
                                                      "hint": "",
                                                      "responseType": "number",
                                                      "modeOfCollection": "onfield",
                                                      "accessibility": "No",
                                                      "rubricLevel": "",
                                                      "sectionHeader": "",
                                                      "page": "p2",
                                                      "questionNumber": "10c",
                                                      "updatedAt": "2023-11-27T12:49:15.885Z",
                                                      "createdAt": "2023-11-27T12:49:15.525Z",
                                                      "__v": 0,
                                                      "createdFromQuestionId": "6564904b15793100084d5c5f",
                                                      "evidenceMethod": "OB",
                                                      "payload": {
                                                          "criteriaId": "6564904b15793100084d5c96",
                                                          "responseType": "number",
                                                          "evidenceMethod": "OB",
                                                          "rubricLevel": ""
                                                      },
                                                      "startTime": "",
                                                      "endTime": "",
                                                      "gpsLocation": "",
                                                      "file": ""
                                                  },
                                                  {
                                                      "_id": "6564904b15793100084d5c81",
                                                      "question": [
                                                          "Which courses did you go through?",
                                                          ""
                                                      ],
                                                      "isCompleted": false,
                                                      "showRemarks": false,
                                                      "options": [],
                                                      "sliderOptions": [],
                                                      "children": [],
                                                      "questionGroup": [
                                                          "A1"
                                                      ],
                                                      "fileName": [],
                                                      "instanceQuestions": [],
                                                      "isAGeneralQuestion": false,
                                                      "autoCapture": false,
                                                      "allowAudioRecording": false,
                                                      "prefillFromEntityProfile": false,
                                                      "entityFieldName": "",
                                                      "isEditable": true,
                                                      "showQuestionInPreview": false,
                                                      "deleted": false,
                                                      "remarks": "",
                                                      "value": "",
                                                      "usedForScoring": "",
                                                      "questionType": "auto",
                                                      "canBeNotApplicable": "false",
                                                      "visibleIf": "",
                                                      "validation": {
                                                          "required": false
                                                      },
                                                      "file": {
                                                          "required": true,
                                                          "type": [
                                                              "image/jpeg",
                                                              "docx",
                                                              "pdf",
                                                              "ppt"
                                                          ],
                                                          "minCount": 0,
                                                          "maxCount": 10,
                                                          "caption": "FALSE"
                                                      },
                                                      "externalId": "Q14_1701089351624-1701089355879",
                                                      "tip": "",
                                                      "hint": "",
                                                      "responseType": "text",
                                                      "modeOfCollection": "onfield",
                                                      "accessibility": "No",
                                                      "rubricLevel": "",
                                                      "sectionHeader": "",
                                                      "page": "p2",
                                                      "questionNumber": "10d",
                                                      "updatedAt": "2023-11-27T12:49:15.885Z",
                                                      "createdAt": "2023-11-27T12:49:15.536Z",
                                                      "__v": 0,
                                                      "createdFromQuestionId": "6564904b15793100084d5c66",
                                                      "evidenceMethod": "OB",
                                                      "payload": {
                                                          "criteriaId": "6564904b15793100084d5c96",
                                                          "responseType": "text",
                                                          "evidenceMethod": "OB",
                                                          "rubricLevel": ""
                                                      },
                                                      "startTime": "",
                                                      "endTime": "",
                                                      "gpsLocation": ""
                                                  }
                                              ],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true
                                              },
                                              "instanceIdentifier": "Student",
                                              "externalId": "Q10_1701089351624-1701089355876",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "matrix",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p2",
                                              "questionNumber": "10",
                                              "updatedAt": "2023-11-27T12:49:15.884Z",
                                              "createdAt": "2023-11-27T12:49:15.502Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c4b",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c96",
                                                  "responseType": "matrix",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": "",
                                              "endTime": "",
                                              "gpsLocation": "",
                                              "file": ""
                                          }
                                      ]
                                  }
                              ],
                              "name": "Observation Question"
                          }
                      ],
                      "externalId": "OB",
                      "tip": null,
                      "name": "Observation",
                      "description": null,
                      "modeOfCollection": "onfield",
                      "canBeNotApplicable": false,
                      "notApplicable": false,
                      "canBeNotAllowed": false,
                      "remarks": null,
                      "startTime": 1711526690550,
                      "endTime": 1711541784071,
                      "isSubmitted": false,
                      "submissions": []
                  }
              ],
              "submissions": {
                  "OB": {
                      "externalId": "OB",
                      "answers": {
                          "6564904b15793100084d5c74": {
                              "qid": "6564904b15793100084d5c74",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Enter the date of observation",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "date",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690582,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "date",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c75": {
                              "qid": "6564904b15793100084d5c75",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Are you currently living in the vicinity of the school?",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "number",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690593,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "number",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c76": {
                              "qid": "6564904b15793100084d5c76",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Are you currently living in the vicinity of the school?",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "radio",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690596,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "radio",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c77": {
                              "qid": "6564904b15793100084d5c77",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Are you planning to come back?",
                                      ""
                                  ],
                                  "responseType": "radio",
                                  "filesNotUploaded": []
                              },
                              "startTime": "",
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "radio",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c78": {
                              "qid": "6564904b15793100084d5c78",
                              "value": [],
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "What type of device is available at home?",
                                      ""
                                  ],
                                  "labels": [],
                                  "responseType": "multiselect",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690603,
                              "endTime": 1711526712737,
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "multiselect",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c79": {
                              "qid": "6564904b15793100084d5c79",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Does the child have a quiet place to study?",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "radio",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690617,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "radio",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c7a": {
                              "qid": "6564904b15793100084d5c7a",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Were you able to enrol your child in courses on DIKSHA?",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "radio",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690623,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "radio",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c7b": {
                              "qid": "6564904b15793100084d5c7b",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "What are the challenges that you are facing in enrolment?",
                                      ""
                                  ],
                                  "responseType": "multiselect",
                                  "filesNotUploaded": []
                              },
                              "startTime": "",
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "multiselect",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c7c": {
                              "qid": "6564904b15793100084d5c7c",
                              "value": "",
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "On basis of the responses received above,  do you think this student is a potential drop out?",
                                      ""
                                  ],
                                  "labels": null,
                                  "responseType": "radio",
                                  "filesNotUploaded": []
                              },
                              "startTime": 1711526690627,
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c95",
                              "responseType": "radio",
                              "evidenceMethod": "OB",
                              "rubricLevel": ""
                          },
                          "6564904b15793100084d5c7d": {
                              "qid": "6564904b15793100084d5c7d",
                              "value": [
                                  {
                                      "6564904b15793100084d5c7e": {
                                          "qid": "6564904b15793100084d5c7e",
                                          "value": "2024-03-27T12:16:09.035Z",
                                          "remarks": "",
                                          "fileName": [],
                                          "gpsLocation": "",
                                          "payload": {
                                              "question": [
                                                  "When did you last take a course on Diksha?",
                                                  ""
                                              ],
                                              "labels": [
                                                  "2024-03-27T12:16:09.035Z"
                                              ],
                                              "responseType": "date",
                                              "filesNotUploaded": []
                                          },
                                          "startTime": 1711541767138,
                                          "endTime": 1711541769039,
                                          "criteriaId": "6564904b15793100084d5c96",
                                          "responseType": "date",
                                          "evidenceMethod": "OB",
                                          "rubricLevel": ""
                                      },
                                      "6564904b15793100084d5c7f": {
                                          "qid": "6564904b15793100084d5c7f",
                                          "value": 2,
                                          "remarks": "",
                                          "fileName": [],
                                          "gpsLocation": "",
                                          "payload": {
                                              "question": [
                                                  "How would you rate the course taken?",
                                                  ""
                                              ],
                                              "labels": [
                                                  2
                                              ],
                                              "responseType": "slider",
                                              "filesNotUploaded": []
                                          },
                                          "startTime": 1711541767164,
                                          "endTime": 1711541774319,
                                          "criteriaId": "6564904b15793100084d5c96",
                                          "responseType": "slider",
                                          "evidenceMethod": "OB",
                                          "rubricLevel": ""
                                      },
                                      "6564904b15793100084d5c80": {
                                          "qid": "6564904b15793100084d5c80",
                                          "value": "1",
                                          "remarks": "",
                                          "fileName": [],
                                          "gpsLocation": "",
                                          "payload": {
                                              "question": [
                                                  "How many courses have you taken?",
                                                  ""
                                              ],
                                              "labels": [
                                                  1
                                              ],
                                              "responseType": "number",
                                              "filesNotUploaded": []
                                          },
                                          "startTime": 1711541767192,
                                          "endTime": 1711541779115,
                                          "criteriaId": "6564904b15793100084d5c96",
                                          "responseType": "number",
                                          "evidenceMethod": "OB",
                                          "rubricLevel": ""
                                      },
                                      "6564904b15793100084d5c81": {
                                          "qid": "6564904b15793100084d5c81",
                                          "value": "2",
                                          "remarks": "",
                                          "fileName": [],
                                          "gpsLocation": "",
                                          "payload": {
                                              "question": [
                                                  "Which courses did you go through?",
                                                  ""
                                              ],
                                              "labels": [
                                                  "2"
                                              ],
                                              "responseType": "text",
                                              "filesNotUploaded": []
                                          },
                                          "startTime": 1711541767195,
                                          "endTime": 1711541781131,
                                          "criteriaId": "6564904b15793100084d5c96",
                                          "responseType": "text",
                                          "evidenceMethod": "OB",
                                          "rubricLevel": ""
                                      }
                                  }
                              ],
                              "remarks": "",
                              "fileName": [],
                              "gpsLocation": "",
                              "payload": {
                                  "question": [
                                      "Add the student interview responses",
                                      ""
                                  ],
                                  "labels": [
                                      [
                                          {
                                              "_id": "6564904b15793100084d5c7e",
                                              "question": [
                                                  "When did you last take a course on Diksha?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": true,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "2024-03-27T12:16:09.035Z",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true,
                                                  "max": "",
                                                  "min": ""
                                              },
                                              "dateFormat": "DD-MM-YYYY",
                                              "externalId": "Q11_1701089351624-1701089355877",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "date",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p2",
                                              "questionNumber": "10a",
                                              "updatedAt": "2023-11-27T12:49:15.885Z",
                                              "createdAt": "2023-11-27T12:49:15.508Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c51",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c96",
                                                  "responseType": "date",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": 1711541767138,
                                              "endTime": 1711541769039,
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c7f",
                                              "question": [
                                                  "How would you rate the course taken?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": 2,
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true,
                                                  "max": "5",
                                                  "min": "1"
                                              },
                                              "externalId": "Q12_1701089351624-1701089355877",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "slider",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p2",
                                              "questionNumber": "10b",
                                              "updatedAt": "2023-11-27T12:49:15.885Z",
                                              "createdAt": "2023-11-27T12:49:15.517Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c58",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c96",
                                                  "responseType": "slider",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": 1711541767164,
                                              "endTime": 1711541774319,
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c80",
                                              "question": [
                                                  "How many courses have you taken?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "1",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": true,
                                                  "IsNumber": "true"
                                              },
                                              "externalId": "Q13_1701089351624-1701089355879",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "number",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p2",
                                              "questionNumber": "10c",
                                              "updatedAt": "2023-11-27T12:49:15.885Z",
                                              "createdAt": "2023-11-27T12:49:15.525Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c5f",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c96",
                                                  "responseType": "number",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": 1711541767192,
                                              "endTime": 1711541779115,
                                              "gpsLocation": "",
                                              "file": ""
                                          },
                                          {
                                              "_id": "6564904b15793100084d5c81",
                                              "question": [
                                                  "Which courses did you go through?",
                                                  ""
                                              ],
                                              "isCompleted": false,
                                              "showRemarks": false,
                                              "options": [],
                                              "sliderOptions": [],
                                              "children": [],
                                              "questionGroup": [
                                                  "A1"
                                              ],
                                              "fileName": [],
                                              "instanceQuestions": [],
                                              "isAGeneralQuestion": false,
                                              "autoCapture": false,
                                              "allowAudioRecording": false,
                                              "prefillFromEntityProfile": false,
                                              "entityFieldName": "",
                                              "isEditable": true,
                                              "showQuestionInPreview": false,
                                              "deleted": false,
                                              "remarks": "",
                                              "value": "2",
                                              "usedForScoring": "",
                                              "questionType": "auto",
                                              "canBeNotApplicable": "false",
                                              "visibleIf": "",
                                              "validation": {
                                                  "required": false
                                              },
                                              "file": {
                                                  "required": true,
                                                  "type": [
                                                      "image/jpeg",
                                                      "docx",
                                                      "pdf",
                                                      "ppt"
                                                  ],
                                                  "minCount": 0,
                                                  "maxCount": 10,
                                                  "caption": "FALSE"
                                              },
                                              "externalId": "Q14_1701089351624-1701089355879",
                                              "tip": "",
                                              "hint": "",
                                              "responseType": "text",
                                              "modeOfCollection": "onfield",
                                              "accessibility": "No",
                                              "rubricLevel": "",
                                              "sectionHeader": "",
                                              "page": "p2",
                                              "questionNumber": "10d",
                                              "updatedAt": "2023-11-27T12:49:15.885Z",
                                              "createdAt": "2023-11-27T12:49:15.536Z",
                                              "__v": 0,
                                              "createdFromQuestionId": "6564904b15793100084d5c66",
                                              "evidenceMethod": "OB",
                                              "payload": {
                                                  "criteriaId": "6564904b15793100084d5c96",
                                                  "responseType": "text",
                                                  "evidenceMethod": "OB",
                                                  "rubricLevel": ""
                                              },
                                              "startTime": 1711541767195,
                                              "endTime": 1711541781131,
                                              "gpsLocation": ""
                                          }
                                      ]
                                  ],
                                  "responseType": "matrix",
                                  "filesNotUploaded": []
                              },
                              "startTime": "",
                              "endTime": "",
                              "criteriaId": "6564904b15793100084d5c96",
                              "responseType": "matrix",
                              "evidenceMethod": "OB",
                              "rubricLevel": "",
                              "countOfInstances": 1
                          }
                      },
                      "startTime": 1711526690550,
                      "endTime": 1711541784071,
                      "gpsLocation": null,
                      "submittedBy": "7b351af1-bb36-4363-bdb9-b7bb7758cae6",
                      "submittedByName": "abc undefined",
                      "submittedByEmail": null,
                      "submissionDate": "2024-03-27T12:16:24.654Z",
                      "isValid": true
                  }
              }
          }
      },
      "responseCode": "OK"
  }
    this.assessmentInfo = this.slQService.mapSubmissionToAssessment(
      this.assessmentInfo
    );
    this.evidence = data.result.assessment.evidences[0];
    this.evidence.startTime = Date.now();
    this.sections = this.evidence.sections;
    // const paramOptions = {
    //   url:
    //     this.config.urlConFig.URLS.OBSERVATION.GET_ASSESSMENT +
    //     `${this.queryParams.observationId}?entityId=${this.queryParams.entityId}&submissionNumber=${this.queryParams.submissionNumber}&ecmMethod=${this.queryParams.evidenceCode}`,
    // };
    // this.observationService.post(paramOptions).pipe(
    //   catchError(err => {
    //   console.log(err)
      
    //   this.assessmentInfo = data.result;
    //   this.assessmentInfo = this.slQService.mapSubmissionToAssessment(
    //     this.assessmentInfo
    //   );
    //   this.evidence = data.result.assessment.evidences[0];
    //   this.evidence.startTime = Date.now();
    //   this.sections = this.evidence.sections;
    //   throw err
    //   })

    // )
    // .subscribe(
    //   (data: IAssessmentDetails) => {
    //     this.assessmentInfo = data.result;
    //     this.assessmentInfo = this.slQService.mapSubmissionToAssessment(
    //       this.assessmentInfo
    //     );
    //     this.evidence = data.result.assessment.evidences[0];
    //     this.evidence.startTime = Date.now();
    //     this.sections = this.evidence.sections;
    //  }
    // );
  }

  initConfiguration() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.redoLayout();
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

  async onSubmit(save?) {
    const msg = save
      ? this.resourceService.frmelmnts.lbl.saveConfirm
      : this.resourceService.frmelmnts.lbl.submitConfirm;
    const userConfirm = await this.openAlert(msg, true);
    if (!userConfirm) {
      return;
    }
    const evidenceData = this.slQService.getEvidenceData(
      this.evidence,
      this.questionnaireForm.value
    );

    save ? (evidenceData['status'] = 'draft') : null;
    const profile: Object = await this.observationUtilService.getProfileDataList();
    if (!profile) {
      return;
    }
    const payload = {...profile, ...{evidence: evidenceData} };

    this.submitEvidence(payload);
  }

  submitEvidence(payload) {
    const paramOptions = {
      url:
        this.config.urlConFig.URLS.OBSERVATION.OBSERVATION_SUBMISSION_UPDATE +
        `${this.assessmentInfo.assessment.submissionId}`,
      data: payload,
    };
    this.observationService.post(paramOptions).subscribe(
      async (data) => {
        if (payload.evidence.status === 'draft') {
          this.backOrContinue();
          return;
        }
       const userResponse = await this.openAlert(
          this.resourceService.frmelmnts.lbl.successfullySubmitted
       );
        if (userResponse) {
          this.canLeave = true;
          this.location.back();
        }

      },
      (error) => {
        this.openAlert(
          payload.evidence.status === 'draft'
            ? this.resourceService.frmelmnts.lbl.failedToSave
            : this.resourceService.frmelmnts.lbl.submissionFailed
        );
      }
    );
  }

  async backOrContinue() {
    const alertMetaData = await this.observationUtilService.getAlertMetaData();
    alertMetaData.content.body.data =
      this.resourceService.frmelmnts.lbl.successfullySaved;
    alertMetaData.content.body.type = 'text';
    alertMetaData.size = 'mini';
    alertMetaData.footer.buttons.push({
      type: 'accept',
      returnValue: true,
      buttonText: this.resourceService.frmelmnts.btn.back,
    });
    alertMetaData.footer.buttons.push({
      type: 'cancel',
      returnValue: false,
      buttonText: this.resourceService.frmelmnts.lbl.continue,
    });
    alertMetaData.footer.className = 'double-btn';

    const response = await this.observationUtilService.showPopupAlert(
      alertMetaData
    );
    if (response) {
      this.canLeave = true;
      this.location.back();
    }
  }

  async openAlert(msg, showCancel = false) {
    const alertMetaData = await this.observationUtilService.getAlertMetaData();
    alertMetaData.content.body.data = msg;
    alertMetaData.content.body.type = 'text';
    alertMetaData.content.title = '';

    alertMetaData.size = 'mini';
    alertMetaData.footer.buttons.push({
      type: 'accept',
      returnValue: true,
      buttonText: showCancel
        ? this.resourceService.frmelmnts.btn.yes
        : this.resourceService.frmelmnts.btn.ok,
    });
    alertMetaData.footer.className = 'single-btn';

    if (showCancel) {
      alertMetaData.footer.buttons.push({
        type: 'cancel',
        returnValue: false,
        buttonText: this.resourceService.frmelmnts.btn.no,
      });
      alertMetaData.footer.className = 'double-btn';
    }
    return await this.observationUtilService.showPopupAlert(alertMetaData);
  }

  scrollToContent(id) {
    const element = document.getElementById(id);
    const headerOffset = 200;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  goBack() {
    this.location.back();
  }
}
