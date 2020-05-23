import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedListPanelComponent } from './unconfirmed-list-panel.component';

describe('UnconfirmedListPanelComponent', () => {
  let component: UnconfirmedListPanelComponent;
  let fixture: ComponentFixture<UnconfirmedListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmedListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmedListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
