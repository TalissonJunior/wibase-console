import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { CategoryService } from '../../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit {
  selectCategory: Observable<any>;
  
  constructor(public bsModalRef: BsModalRef, private _categoryService: CategoryService) { }

  ngOnInit() {
    // Center Dialog
    document.querySelector('modal-container').classList.add('modal-center');

    this.selectCategory = this._categoryService.GetAllCategories();
  }

}
