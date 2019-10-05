import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AProject } from '../models/aproject';
import { ApiRouteHelper } from '../helpers/api-routes-helper';
import { map } from 'rxjs/internal/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(public _http: HttpClient,
              private errorHandlerService: ErrorHandlerService) {}

  // Funcion para hacer una petición, para obtener un proyecto dado un id
  get(id: any): Observable<any> {
    return this._http.get(ApiRouteHelper.getGetURL(id)).pipe(
      map(res => {
        if(res['data']) {
          return res['data'];
        } else {
          this.errorHandlerService.showError();
        }
      }),
    );
  }
  // Función para hacer una petición y obtener un listado de proyectos
  list(): Observable<AProject[]> {
    return this._http.get(ApiRouteHelper.getListURL())
      .pipe(
        map(res => {
          if(res['data']) {
            return res['data'].map(
              projectData => {return new AProject(projectData)}
            )
          } else {
            this.errorHandlerService.showError();
          }
        }),
      );
  }
  // Función para hacer una petición para guardar un proyecto
  store(project: AProject): Observable<any> {
    let params = {
      name: project.name,
      description: project.description,
      type: project.type,
      status: project.status,
    };
    return this._http.post(ApiRouteHelper.getStoreURL(), params).pipe(
      map(res => {
        if(res['data']) {
          return res['data'];
        } else {
          this.errorHandlerService.showError();
        }
      }),
    );
  }
  // Función para hacer una petición para actualizar un proyecto
  update(project: AProject): Observable<any> {
    let params = {
      name: project.name,
      description: project.description,
      type: project.type,
      status: project.status,
    }
    return this._http.put(ApiRouteHelper.getUpdateURL(project.id()), params).pipe(
      map(res => {
        if(res['data']) {
          return res['data'];
        } else {
          this.errorHandlerService.showError();
        }
      }),
    );
  }
  // Función para hacer una petición para borrar un proyecto dado un id
  delete(id: any): Observable<Object> {
    return this._http.delete(ApiRouteHelper.getDeleteURL(id));
  }
}
