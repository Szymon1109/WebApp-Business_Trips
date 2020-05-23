import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserPanelComponent } from './remove-user-panel.component';

describe('RemoveUserPanelComponent', () => {
  let component: RemoveUserPanelComponent;
  let fixture: ComponentFixture<RemoveUserPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveUserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
