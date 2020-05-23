import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRequestPanelComponent } from './confirmation-request-panel.component';

describe('ConfirmationRequestPanelComponent', () => {
  let component: ConfirmationRequestPanelComponent;
  let fixture: ComponentFixture<ConfirmationRequestPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationRequestPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationRequestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
