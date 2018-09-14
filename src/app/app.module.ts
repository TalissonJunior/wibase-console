import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule, TooltipModule, ModalModule, BsDropdownModule, TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
