import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItem1Component } from './tab-item1.component';

describe('TabItem1Component', () => {
  let component: TabItem1Component;
  let fixture: ComponentFixture<TabItem1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItem1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
