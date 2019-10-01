import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Projects } from '@angular/cli/lib/config/schema';
import { ProjectService } from '../../../services/project.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { map, reduce } from 'rxjs/internal/operators';
import { ModalFormComponent } from '../../commons/modal-form/modal-form.component';
import { AProject } from '../../../models/aproject';

@Component({
  selector: '[app-project-table]',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {

  /**
   * Datos del listado
   */
  public projects: AProject[];

  /**
   * Outputs
   */
  @Output()
  public editEventEmitter: EventEmitter<any> = new EventEmitter(); // Para emitir el evento de edición
  @Output()
  public deleteEventEmitter: EventEmitter<any> = new EventEmitter(); // Para emitir el evento de borrado

  constructor(private projectService: ProjectService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.list(); // En el inicio del componente inicializamos el listado
  }

  /**
   * Esta función hace la petición al servidor para traernos los datos del listado
   */
  list(): void {
    this.projectService.list().subscribe(
      res => {this.projects = res},
      error => {this.errorHandlerService.showError()}
    );
  }

  /**
   * Emitimos el evento hacia la página
   * @param id
   */
  edit(id: any): void {
    this.editEventEmitter.emit(id);
  }
  delete(id: any): void {
    this.deleteEventEmitter.emit(id);
  }
}
