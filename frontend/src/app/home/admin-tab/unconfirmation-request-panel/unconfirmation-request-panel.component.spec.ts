import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmationRequestPanelComponent } from './unconfirmation-request-panel.component';

describe('UnconfirmationRequestPanelComponent', () => {
  let component: UnconfirmationRequestPanelComponent;
  let fixture: ComponentFixture<UnconfirmationRequestPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmationRequestPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmationRequestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
