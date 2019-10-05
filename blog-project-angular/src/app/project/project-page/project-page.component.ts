import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalFormComponent } from '../../commons/modal-form/modal-form.component';
import { FormAction } from '../../../models/form-action';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectTableComponent } from '../project-table/project-table.component';
import { ConfirmateActionModalComponent } from '../../commons/confirmate-action-modal/confirmate-action-modal.component';
import { ProjectService } from '../../../services/project.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  /**
   * ViewChild
   */
  @ViewChild(ModalFormComponent) modalFormComponent;
  @ViewChild(ConfirmateActionModalComponent) confirmateActionModalComponent;
  @ViewChild(ProjectFormComponent) projectFormComponent;
  @ViewChild(ProjectTableComponent) projectTableComponent;

  /**
   * Component attr
   */
  public action: FormAction;
  public auxId: any;

  constructor(private projectService: ProjectService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
  }

  create(): void {
    this.action = FormAction.CREATE;
    this.projectFormComponent.new();
    this.modalFormComponent.open();
  }
  /**
   * Recibe el evento del componente de la tabla y llama al componente modal para abrirlo
   * @param id
   */
  edit(id: any): void {
    this.action = FormAction.EDIT;
    this.projectFormComponent.edit(id);
    this.modalFormComponent.open();
  }
  delete(id: any): void {
    this.auxId = id;
    this.action = FormAction.DELETE;
    this.confirmateActionModalComponent.open();
  }
  getModalTitle(): string {
    if(this.action == FormAction.CREATE) {
      return "Creación de proyecto";
    } else if(this.action == FormAction.EDIT) {
      return "Edición de proyecto";
    } else {
      return null;
    }
  }

  /**
   * Este evento se recoge del modal (al darle al botón de guardar del modal)
   */
  submit(): void {
    if(this.action == FormAction.CREATE) {
      this.projectFormComponent.store();
    } else if(this.action == FormAction.EDIT) {
      this.projectFormComponent.update();
    }
  }

  onSuccessForm(): void {
    /**
     * Cuando la operación de guardado es exitosa, cerramos el modal y hacemos un list para que se actualice la  tabla
     */
    this.modalFormComponent.close();
    this.projectTableComponent.list();
  }
  /**
   *
   */
  confirmationSubmit(): void {
    this.projectService.delete(this.auxId).subscribe(
      res => {
        this.onSuccessConfirmation();
      },
      error => {this.errorHandlerService.showError()}
    );
  }
  onSuccessConfirmation(): void {
    /**
     * Cuando la operación de borrado es exitosa, cerramos el modal y hacemos un list para que se actualice la  tabla
     */
    this.confirmateActionModalComponent.close();
    this.projectTableComponent.list();
  }

}
