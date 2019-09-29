import { Component, OnInit } from '@angular/core';
import { Projects } from '@angular/cli/lib/config/schema';
import { Project } from '../../../models/Project';
import { ProjectService } from '../../../services/project.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { map, reduce } from 'rxjs/internal/operators';

@Component({
  selector: '[app-project-table-component]',
  templateUrl: './project-table-component.component.html',
  styleUrls: ['./project-table-component.component.css']
})
export class ProjectTableComponentComponent implements OnInit {

  public projects: Project[];

  constructor(private projectService: ProjectService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.list();
  }

  list(): void {
    this.projectService.list().subscribe(
      res => {this.projects = res},
      error => {this.errorHandlerService.showError()}
    );
  }
}
