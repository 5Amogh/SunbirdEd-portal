
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { FlagConentplayerComponent } from './flag-conentplayer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule, ToasterService, ResourceService, NavigationHelperService } from '@sunbird/shared';
import { PlayerService, UserService, LearnerService, ContentService, CoreModule } from '@sunbird/core';
import * as mockData from './flag-contentplayer.componemt.spec.data';
import { PlayerHelperModule } from '@sunbird/player-helper';
import { TelemetryService } from '@sunbird/telemetry';
import { configureTestSuite } from '@sunbird/test-util';

const testData = mockData.mockRes;
describe('FlagConentplayerComponent', () => {
  let component: FlagConentplayerComponent;
  let fixture: ComponentFixture<FlagConentplayerComponent>;
  const resourceBundle = {
    messages: {
      imsg: { m0027: 'Something went wrong' },
      stmsg: { m0025: 'error' },
      fmsg: { m0025: 'error', m0015: 'error', },
      smsg: { m0008: 'Discard contnet sucessfully' }
    },
    frmelmnts: {
      btn: {
        tryagain: 'tryagain',
        close: 'close'
      },
      lbl: {
        description: 'description'
      }
    }
  };
  configureTestSuite();
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlagConentplayerComponent],
      imports: [HttpClientTestingModule,
        CoreModule, PlayerHelperModule, RouterTestingModule, SharedModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ResourceService, ToasterService, NavigationHelperService, TelemetryService,
        { provide: ResourceService, useValue: resourceBundle }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagConentplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should throw error if content api throws error', () => {
    const playerService = TestBed.inject(PlayerService);
    const resourceService = TestBed.inject(ResourceService);
    resourceService.messages = resourceBundle.messages;
    resourceService.frmelmnts = resourceBundle.frmelmnts;
    spyOn(playerService, 'getContent').and.returnValue(observableThrowError(testData.errorRes));
    component.getContent();
    expect(component.playerConfig).toBeUndefined();
    expect(component.showError).toBeTruthy();
    expect(component.errorMessage).toBe(resourceService.messages.stmsg.m0009);
  });

  it('should call  content api and return content data', () => {
    const playerService = TestBed.inject(PlayerService);
    const userService:any = TestBed.inject(UserService);
    const resourceService = TestBed.inject(ResourceService);
    resourceService.messages = resourceBundle.messages;
    resourceService.frmelmnts = resourceBundle.frmelmnts;
    spyOn(playerService, 'getContent').and.returnValue(observableOf(testData.sucessRes));
    userService._userProfile = { 'organisations': ['01229679766115942443'] };
    userService.guestUserProfile = {
      name: 'guest',
      formatedName: 'Guest',
      framework: {
        board: ['State (Tamil Nadu)'],
        medium: ['English'],
        gradeLevel: ['Class 4'],
        subject: [],
        id: 'tn_k-12_5',
      },
    };
    component.getContent();
    fixture.detectChanges();
    expect(component.contentData).toBeDefined();
    expect(component.showError).toBeFalsy();
    expect(component.showLoader).toBeFalsy();
  });

  it('should call discardContentFlag api', () => {
    const playerService = TestBed.inject(PlayerService);
    const contentService = TestBed.inject(ContentService);
    const resourceService = TestBed.inject(ResourceService);
    const toasterService:any = TestBed.inject(ToasterService);
    resourceService.messages = resourceBundle.messages;
    const requestData = {
      'request': {}
    };
    spyOn(contentService, 'post').and.callFake(() => observableOf(testData.sucessRes));
    component.discardContentFlag();
    fixture.detectChanges();
    expect(component.showLoader).toBeTruthy();
  });

});
