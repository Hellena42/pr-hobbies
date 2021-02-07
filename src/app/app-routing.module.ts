import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HobbyDetailsComponent } from './pages/hobbies/hobby-details/hobby-details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoginPageComponent},
  // {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'hobbies/:id', component: HobbyDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
