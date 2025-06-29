import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path:'home',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path:'create',component:CreateComponent},
    {path:'homes',component:HomeComponent}
];
