import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationPanelComponent } from './delegation-panel.component';

describe('DelegationPanelComponent', () => {
  let component: DelegationPanelComponent;
  let fixture: ComponentFixture<DelegationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
