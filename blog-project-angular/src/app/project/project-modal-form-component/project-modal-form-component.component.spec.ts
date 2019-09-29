import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalFormComponentComponent } from './project-modal-form-component.component';

describe('ProjectModalFormComponentComponent', () => {
  let component: ProjectModalFormComponentComponent;
  let fixture: ComponentFixture<ProjectModalFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectModalFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectModalFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
