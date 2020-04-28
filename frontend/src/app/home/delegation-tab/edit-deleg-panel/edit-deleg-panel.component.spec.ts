import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegPanelComponent } from './edit-deleg-panel.component';

describe('EditDelegPanelComponent', () => {
  let component: EditDelegPanelComponent;
  let fixture: ComponentFixture<EditDelegPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
