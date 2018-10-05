import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Project } from '../models/project';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    getAllProjects(): Observable<any> {
        return this.http.get(environment.apiUrl);
    }

    getAllCategories(): Observable<Array<Select>> {
        return this.http.get<Array<Category>>(environment.apiUrl + '/category').pipe(map((categories) => {
            var response: Select[] = [];

            categories.forEach((category) => {
                response.push({
                    value: category._id,
                    label: category.name
                })
            });
            
            return response;
        }));
    }

    insert(model: Project): Observable<any> {
        return this.http.post(environment.apiUrl + 'project', model);
    }

}
