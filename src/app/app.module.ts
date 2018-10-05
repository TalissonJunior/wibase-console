import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaginationModule, TooltipModule, ModalModule, BsDropdownModule, TabsModule, defineLocale, ptBrLocale } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ToggleSidebarDirective } from './directives/toggle-sidebar.directive'
import { AdminFormDirective } from './directives/admin-form.directive';
import { MessageValidatorComponent } from './components/utilities/message-validator/message-validator.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/public/login/login.component';
import { FooterComponent } from './components/private/footer/footer.component';
import { ProjectComponent } from './components/private/project/project.component';
import { ProjectDialogComponent } from './components/private/project/project-dialog/project-dialog.component';
import { DialogDirective } from './directives/dialog.directive';

defineLocale('pt-br', ptBrLocale); 
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    FooterComponent,
    ProjectDialogComponent,
    MessageValidatorComponent,
    AdminFormDirective,
    LoginComponent,
    PrivateComponent,
    FilterPipe,
    ToggleSidebarDirective,
    DialogDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  entryComponents: [
    ProjectDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
