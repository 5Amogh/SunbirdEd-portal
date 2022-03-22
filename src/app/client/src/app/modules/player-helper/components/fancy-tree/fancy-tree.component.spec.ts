import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { configureTestSuite } from '@sunbird/test-util';
import { FancyTreeComponent } from './fancy-tree.component';
import { ActivatedRoute } from '@angular/router';
import { TelemetryInteractDirective } from '@sunbird/telemetry';
import { of } from 'rxjs';

describe('FancyTreeComponent', () => {
  let component: FancyTreeComponent;
  let fixture: ComponentFixture<FancyTreeComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        dialCode: 'D4R4K4'
      }
    }
  };
  configureTestSuite();
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyTreeComponent ],
      providers: [ { provide: ActivatedRoute, useValue: fakeActivatedRoute } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyTreeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.nodes = {
        id: '1',
        title: 'node1',
        children: [{
          id: '1.1',
          title: 'node1.1'
        }, {
          id: '1.2',
          title: 'node1.2',
          children: [
            {
              id: '1.2.1',
              title: 'node1.2.1'
            }]
        }]
    };
    component.options = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize the telemetry data', () => {
    // arrange
    const mockFancyTree = (options) => {
      options.click(undefined, {
        node: {
          data: {}
        }
      });
    };
    component.options = {};
    component.telemetryInteractDirective = {} as TelemetryInteractDirective;
    component.telemetryInteractDirective.telemetryInteractCdata = [{id: 'D4R4K4', type: 'dialCode'}];
    spyOn(component, 'getTelemetryInteractEdata').and.stub();
    spyOn(component, 'getTelemetryInteractObject').and.stub();
    spyOn(window as any, '$').and.callFake(() => {
      return {
        fancytree: mockFancyTree
      };
    });
    spyOn(component['lazzyLoadScriptService'], 'loadScript').and.returnValue(of({}));
    // act
    component.ngAfterViewInit();
    expect(component.getTelemetryInteractEdata).toHaveBeenCalled();
    expect(component.getTelemetryInteractObject).toHaveBeenCalled();
  });
});
