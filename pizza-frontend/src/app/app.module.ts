import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaCardComponent } from './components/pizza-card/pizza-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPizzaComponent } from './pages/add-pizza/add-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCardComponent,
    PizzaComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    NavbarComponent,
    AddPizzaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
