import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/private/project/project.component';
import { LoginComponent } from './components/public/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { LoggedInUsersGuard } from './guards/logged-in-users.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectComponent },
  {
    path: 'project', component: PrivateComponent,
    canActivate: [LoggedInUsersGuard],
    children: []
  },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
