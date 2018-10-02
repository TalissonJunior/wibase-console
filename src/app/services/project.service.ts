import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../models/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    getAllProjects() {
        return this.http.get(environment.apiUrl + 'project');
    }

    insert(model: Project) {
        return this.http.post(environment.apiUrl + 'project', model);
    }

}
