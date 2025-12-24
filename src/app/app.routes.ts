import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Contact } from './pages/contact/contact';
import { Cyber } from './pages/cyber/cyber';
import { Devops } from './pages/devops/devops';
import { Cloud } from './pages/cloud/cloud';
import { Dataengineering } from './pages/dataengineering/dataengineering';

export const routes: Routes = [
    {path:'home',component:Home},
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    {path:'about',component:About},
    {path:'service',component:Service},
    {path:'contact',component:Contact},
    {path:'cyber',component:Cyber},
    {path:'devops',component:Devops},
    {path:'cloud',component:Cloud},
    {path:'dataengineering',component:Dataengineering},



];
