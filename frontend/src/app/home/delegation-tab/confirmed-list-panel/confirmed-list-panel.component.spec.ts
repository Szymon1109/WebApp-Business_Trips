import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedListPanelComponent } from './confirmed-list-panel.component';

describe('ConfirmedListPanelComponent', () => {
  let component: ConfirmedListPanelComponent;
  let fixture: ComponentFixture<ConfirmedListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
