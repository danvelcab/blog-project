import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableComponentComponent } from './project-table-component.component';

describe('ProjectTableComponentComponent', () => {
  let component: ProjectTableComponentComponent;
  let fixture: ComponentFixture<ProjectTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
