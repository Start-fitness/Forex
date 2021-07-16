import {Routes} from '@angular/router';
import {HomeComponent} from '../../pages/home/home.component';
import {AuthComponent} from '../../pages/auth/auth.component';
import {RegisterComponent} from '../../pages/register/register.component';


export const MainLayoutRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: AuthComponent},
  { path: 'register', component: RegisterComponent}
];
