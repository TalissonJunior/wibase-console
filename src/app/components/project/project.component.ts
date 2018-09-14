import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Array<Project>;

  constructor(private _projectService: ProjectService) {
    this.projects = new Array<Project>();
  }

  ngOnInit() {
    this.GetAllProjects();
  }

  GetAllProjects() {
    this._projectService.GetAllProjects().subscribe((data: Array<Project>) => {
      this.projects = data;
    }, (error) => {
      // Todo
    });
  }

}
