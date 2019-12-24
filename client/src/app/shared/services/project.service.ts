import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Project} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects;
  currentProject;

  constructor(private http: HttpClient) { }

  createProject(project): Observable<Project>{
    return this.http.post<Project>('/​project', project);
  }

  updateProject(){

  }

  deleteProject(){

  }

  getProjectsByUser(): Observable<Project>{
    return this.http.get<Project>('https://call-center-demo1.herokuapp.com/project/byUser')
      .pipe(
        tap((data) => {
             this.projects = data;
          }
        )
      )
  }

  selectProject(projectId) {
    return this.http.get<Project>('https://call-center-demo1.herokuapp.com/project/set/'+projectId, { withCredentials: true })
      .pipe(
        tap(() => {
            this.currentProject = this.projects.filter(p=> p['_id'] === projectId).shift();
          }
        )
      )
  }

}
