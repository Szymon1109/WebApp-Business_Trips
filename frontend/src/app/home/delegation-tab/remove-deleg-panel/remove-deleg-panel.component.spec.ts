import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDelegPanelComponent } from './remove-deleg-panel.component';

describe('RemoveDelegPanelComponent', () => {
  let component: RemoveDelegPanelComponent;
  let fixture: ComponentFixture<RemoveDelegPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDelegPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDelegPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
