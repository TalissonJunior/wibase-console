import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  selectCategory: Observable<Array<Select>>;
  form: FormGroup;

  constructor(public bsModalRef: BsModalRef, private projectService: ProjectService, 
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
    this.selectCategory = this.projectService.getAllCategories();
  }

  add(): void {
  }

  isFormFieldInvalid(field: string): boolean {
    return this.form.controls[field].invalid && this.form.controls[field].touched;
  }

  private createForms(): void {

    this.form = this.fb.group({
      name: [null, Validators.required],
      category: [null, [Validators.required]],
      terms: [false, [Validators.required]]
    });

    // Listener
    this.form.controls.terms.valueChanges.subscribe(value => {
      if (value) {
        this.form.controls.terms.setErrors(null);
      }
      else {
        this.form.controls.terms.setErrors({ 'required': true });
      }
    });

  }

}
