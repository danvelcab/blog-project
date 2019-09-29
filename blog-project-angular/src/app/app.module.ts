import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { ProjectTableComponentComponent } from './project/project-table-component/project-table-component.component';
import { ProjectModalFormComponentComponent } from './project/project-modal-form-component/project-modal-form-component.component';
import { ProjectFormComponentComponent } from './project/project-form-component/project-form-component.component';
import { ConfirmateActionModalComponentComponent } from './commons/confirmate-action-modal-component/confirmate-action-modal-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    ProjectTableComponentComponent,
    ProjectModalFormComponentComponent,
    ProjectFormComponentComponent,
    ConfirmateActionModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
