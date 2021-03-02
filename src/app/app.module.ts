import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { HobbyDetailsComponent } from './pages/hobbies/hobby-details/hobby-details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeInfoComponent } from './pages/home/home-info/home-info/home-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    HomeComponent,
    HobbiesComponent,
    HobbyDetailsComponent,
    HomeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
