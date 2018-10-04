import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { ProjectService } from '../../../../services/project.service';
import { Project } from '../../../../models/project';
import { ProjectCategory } from '../../../../models/project_category';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  selectCategory: Observable<any>;
  form: FormGroup;

  constructor(public bsModalRef: BsModalRef, private _categoryService: CategoryService, private _projectService: ProjectService, private _fb: FormBuilder) { }

  ngOnInit() {
    // Center Dialog
    document.querySelector('modal-container').classList.add('modal-center');

    this._initializeForms();
    this.selectCategory = this._categoryService.getAllCategories();
  }

  add(): void {
    var project = new Project();

    project.name = this.form.controls.name.value;

    this.form.controls.category.value.forEach(categoryID => {
      var projectCategory = new ProjectCategory();

      projectCategory.fk_category_id = categoryID;

      project.project_categories.push(projectCategory);
    });

    this._projectService.insert(project).subscribe((data) => {
      this.bsModalRef.content.success = true;
      this.bsModalRef.hide();
    }, (error) => {
      this.bsModalRef.content.success = false;
    });

  }

  private _initializeForms(): void {

    this.form = this._fb.group({
      name: [null, Validators.required],
      category: [[1], [Validators.required]],
      terms: [false, [Validators.required]]
    });

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
