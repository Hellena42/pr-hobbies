import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HobbyDetailsComponent } from './pages/hobbies/hobby-details/hobby-details.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeInfoComponent } from './pages/home/home-info/home-info/home-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    {path: 'home-info', component: HomeInfoComponent}
  ]},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'hobbies/:id', component: HobbyDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
