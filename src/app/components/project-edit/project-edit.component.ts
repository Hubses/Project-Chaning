import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnChanges {

  public projectForm: FormGroup = this.fb.group({});

  @Input() public project: entities.IProject;
  @Input() public frameworks: string[];
  @Input() public taskrunners: string[];
  @Input() public libs: string[];

  @Output() public onUpdateProject: EventEmitter<entities.IProject> = new EventEmitter();

  public constructor(
    private fb: FormBuilder,
  ) { };

  public ngOnInit(): void { };

  public ngOnChanges(changes: SimpleChanges): void {

    if (this.project && this.libs && this.taskrunners && this.frameworks) {
      console.log(this.project);
      this.createForm(this.project);
    }
  }

  public updateProject(project: entities.IProject): void {
    let formProject = this.projectForm.getRawValue();
    let newProject = {
      name: formProject.name,
      framework: formProject.framework,
      $key: project.$key,
      options: {
        taskrunner: formProject.taskrunner,
        libs: ['']
      }
    };
    this.onUpdateProject.emit(newProject);
  }

  private createForm(project: entities.IProject): void {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      framework: ['', Validators.required],
      taskrunner: '',
      // libs: ['']
    });

    // fill data from source
    this.projectForm.patchValue({
      name: project.name,
      framework: project.framework,
      taskrunner: project.options.taskrunner,
      // options: {
      //   libs: this.options.libs
      // }
    });
  }
}
