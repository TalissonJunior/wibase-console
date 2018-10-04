import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  bsModalRef: BsModalRef;
  projects: Array<Project>;

  constructor(private _projectService: ProjectService, private _bsModalService: BsModalService) {
    this.projects = new Array<Project>();
  }

  ngOnInit() {
    this.GetAllProjects();
  }

  GetAllProjects() {
    this._projectService.getAllProjects().subscribe((data: Array<Project>) => {
      this.projects = data;
    }, (error) => {
      // Todo
    });
  }

  AddProject() {
    this.bsModalRef = this._bsModalService.show(ProjectDialogComponent, Object.assign({}, { ignoreBackdropClick: true} as ModalOptions));

     // On Modal Close
     this._bsModalService.onHide.subscribe((data) => {
      if (this.bsModalRef.content.success) {
        this.GetAllProjects();
      }
    });
  }

}
