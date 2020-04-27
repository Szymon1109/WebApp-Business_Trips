import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwdPanelComponent } from './change-pwd-panel.component';

describe('ChangePwdPanelComponent', () => {
  let component: ChangePwdPanelComponent;
  let fixture: ComponentFixture<ChangePwdPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwdPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
