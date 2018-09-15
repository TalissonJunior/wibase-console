import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  GetAllCategories() {
    return this.http.get(environment.apiUrl + 'category').pipe(map((data: any) => {

      var response: Select[] = [];

      data.forEach((object: any) => {
        response.push({
          value: object.id,
          label: object.name
        })
      });

      return response;
    }));
  }

}
