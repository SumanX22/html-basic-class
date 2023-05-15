import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { AddPizzaComponent } from './pages/add-pizza/add-pizza.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'add-pizza', component: AddPizzaComponent },
  { path: 'edit-pizza', component: AddPizzaComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
