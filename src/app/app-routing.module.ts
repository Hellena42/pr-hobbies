import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DressesComponent } from './pages/dresses/dresses.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HobbyDetailsComponent } from './pages/hobbies/hobby-details/hobby-details.component';
import { HomeComponent } from './pages/home/home.component';
// import { AuthGuard } from './shared/guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: DressesComponent},
  {path: 'login', component: LoginPageComponent},
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
