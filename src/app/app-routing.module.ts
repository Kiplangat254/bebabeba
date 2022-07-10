import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComingComponent } from './coming/coming.component';
import { DetailsComponent } from './details/details.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'City', component: CityComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'coming', component: ComingComponent },
	{ path: 'details', component: DetailsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
