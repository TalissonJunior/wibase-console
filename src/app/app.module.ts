import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule, TooltipModule, ModalModule, BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectDialogComponent } from './components/project/project-dialog/project-dialog.component';
import { MessageValidatorComponent } from './components/utilities/message-validator/message-validator.component';
import { AdminFormDirective } from './directives/admin-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    FooterComponent,
    ProjectDialogComponent,
    MessageValidatorComponent,
    AdminFormDirective,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  entryComponents: [
    ProjectDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
