import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $;

@Component({
  selector: 'app-confirmate-action-modal',
  templateUrl: './confirmate-action-modal.component.html',
  styleUrls: ['./confirmate-action-modal.component.css']
})
export class ConfirmateActionModalComponent implements OnInit {
  /**
   * Inputs
   */
  @Input()
  public modal_id: any; // Id del modal
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
