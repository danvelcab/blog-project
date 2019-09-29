import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmateActionModalComponentComponent } from './confirmate-action-modal-component.component';

describe('ConfirmateActionModalComponentComponent', () => {
  let component: ConfirmateActionModalComponentComponent;
  let fixture: ComponentFixture<ConfirmateActionModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmateActionModalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmateActionModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
