import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnChanges {


  public projectForm: FormGroup = this.fb.group({});

  @Input() public project: entities.IProject;

  @Output() public onUpdateProject: EventEmitter<entities.IProject> = new EventEmitter();

  public frameworks = [
    'none',
    'angular2',
    'rect',
    'jquery'
  ];

  public taskrunners = [
    'gulp',
    'webpack'
  ]

  private options: entities.IOptions = {
    taskrunner: 'gulp',
    libs: ['ngrx', 'some']
  };
  public constructor(
    private fb: FormBuilder,
  ) { };

  public ngOnInit(): void { };

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.project) {
      if (!this.project.options) {
        this.project.options = this.options;
      }
      this.createForm(this.project);
    }
  }
  public updateProject(project: entities.IProject): void {
    let formProject = this.projectForm.getRawValue();
    let newProject = Object.assign({}, project);
    newProject = {
      name: formProject.name,
      framework: formProject.framework,
      $key: project.$key,
      options: {
        taskrunner: formProject.taskrunner,
        libs: formProject.options.libs
      }
    };
    this.onUpdateProject.emit(newProject);
  }

  private createForm(project: entities.IProject): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      framework: ['', Validators.required],
      taskrunner: '',
      options: {
        libs: ['']
      }
    });
    // fill data
    this.projectForm.patchValue({
      name: project.name,
      framework: project.framework,
      taskrunner: this.options.taskrunner,
      options: {
        libs: this.options.libs
      }
    });
  }
}
