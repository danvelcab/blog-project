import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $;

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  /**
   * Inputs
   */
  @Input()
  public modal_id: any; // Id del modal
  @Input()
  public title: string; // Título del modal

  /**
   * Outputs
   */
  @Output()
  public submitEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  open(): void {
    $('#' + this.modal_id).modal('show');
  }
  close(): void {
    $('#' + this.modal_id).modal('hide');
  }
  submit(): void {
    this.submitEventEmitter.emit();
  }
}
