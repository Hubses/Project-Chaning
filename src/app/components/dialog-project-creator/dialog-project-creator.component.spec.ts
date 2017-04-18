import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectCreatorComponent } from './dialog-project-creator.component';

describe('DialogNameComponent', () => {
  let component: DialogProjectCreatorComponent;
  let fixture: ComponentFixture<DialogProjectCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProjectCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
