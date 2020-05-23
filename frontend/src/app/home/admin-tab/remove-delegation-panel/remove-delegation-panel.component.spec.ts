import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDelegationPanelComponent } from './remove-delegation-panel.component';

describe('RemoveDelegationPanelComponent', () => {
  let component: RemoveDelegationPanelComponent;
  let fixture: ComponentFixture<RemoveDelegationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDelegationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDelegationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
