import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegationPanelComponent } from './edit-delegation-panel.component';

describe('EditDelegationPanelComponent', () => {
  let component: EditDelegationPanelComponent;
  let fixture: ComponentFixture<EditDelegationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
