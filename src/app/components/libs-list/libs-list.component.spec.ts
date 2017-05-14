import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibsListComponent } from './libs-list.component';

describe('LibsListComponent', () => {
  let component: LibsListComponent;
  let fixture: ComponentFixture<LibsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
