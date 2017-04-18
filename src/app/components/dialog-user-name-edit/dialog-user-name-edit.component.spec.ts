import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserNameEditComponent } from './dialog-user-name-edit.component';

describe('DialogUserNameEditComponent', () => {
  let component: DialogUserNameEditComponent;
  let fixture: ComponentFixture<DialogUserNameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserNameEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserNameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
