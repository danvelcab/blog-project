import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AProject } from '../../../models/aproject';
import { ProjectService } from '../../../services/project.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: '[app-project-form]',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  public model: AProject;

  /**
   * Outputs
   */
  @Output()
  public succesEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private projectService: ProjectService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
  }

  new(): void {
    this.model = new AProject();
  }
  store(): void {
    this.projectService.store(this.model).subscribe(
      res => {
        this.model = res;
        this.succesEventEmitter.emit();
      },
      error => {this.errorHandlerService.showError()}
    );
  }
  edit(id: any): void {
    this.projectService.get(id).subscribe(
      res => {
        this.model = res;
      },
      error => {this.errorHandlerService.showError()}
    );
  }
  update(): void {
    this.projectService.update(this.model).subscribe(
      res => {
        this.model = res;
        this.succesEventEmitter.emit();
      },
      error => {this.errorHandlerService.showError()}
    );
  }

}
