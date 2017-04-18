import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItem2Component } from './tab-item2.component';

describe('TabbItem2Component', () => {
  let component: TabItem2Component;
  let fixture: ComponentFixture<TabItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
