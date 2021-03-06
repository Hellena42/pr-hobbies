import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { HomeInfoComponent } from './home-info/home-info/home-info.component';
import { HomeComponent } from './home.component';

@NgModule ({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent},
    ])
  ],
  declarations: [
    HomeComponent,
    HomeInfoComponent
  ],
  exports: [RouterModule]
})

export class HomeModule {

}