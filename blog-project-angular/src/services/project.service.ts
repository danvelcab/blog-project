import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Project } from '../models/Project';
import { ApiRouteHelper } from '../helpers/api-routes-helper';
import { map } from 'rxjs/internal/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(public _http: HttpClient,
              private errorHandlerService: ErrorHandlerService) {}

  get(id: any): Observable<Object> {
    return this._http.get(ApiRouteHelper.getGetURL(id));
  }
  list(): Observable<Project[]> {
    return this._http.get(ApiRouteHelper.getListURL())
      .pipe(
        map(res => {
          if(res['data']) {
            return res['data'].map(
              projectData => {return new Project(projectData)}
            )
          } else {
            this.errorHandlerService.showError();
          }
        }),
      );
  }
  store(project: Project): Observable<Object> {
    return this._http.post(ApiRouteHelper.getStoreURL(), project);
  }
  update(project: Project): Observable<Object> {
    return this._http.put(ApiRouteHelper.getUpdateURL(project.id), project);
  }
  delte(id: any): Observable<Object> {
    return this._http.delete(ApiRouteHelper.getDeleteURL(id));
  }
}
