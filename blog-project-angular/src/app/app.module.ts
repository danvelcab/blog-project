import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from './project/project-page/project-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectTableComponent } from './project/project-table/project-table.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ConfirmateActionModalComponent } from './commons/confirmate-action-modal/confirmate-action-modal.component';
import { ModalFormComponent } from './commons/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    ProjectTableComponent,
    ProjectFormComponent,
    ConfirmateActionModalComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
