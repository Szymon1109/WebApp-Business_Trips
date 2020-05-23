import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUnconfirmationPanelComponent } from './request-unconfirmation-panel.component';

describe('RequestUnconfirmationPanelComponent', () => {
  let component: RequestUnconfirmationPanelComponent;
  let fixture: ComponentFixture<RequestUnconfirmationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestUnconfirmationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUnconfirmationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
