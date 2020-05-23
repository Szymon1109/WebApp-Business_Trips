import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConfirmationPanelComponent } from './request-confirmation-panel.component';

describe('RequestConfirmationPanelComponent', () => {
  let component: RequestConfirmationPanelComponent;
  let fixture: ComponentFixture<RequestConfirmationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConfirmationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConfirmationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
