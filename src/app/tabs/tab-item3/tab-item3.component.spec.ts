import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItem3Component } from './tab-item3.component';

describe('TabItem3Component', () => {
  let component: TabItem3Component;
  let fixture: ComponentFixture<TabItem3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItem3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
