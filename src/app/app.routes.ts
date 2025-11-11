import { Routes } from '@angular/router';
import { HomeComponent } from '../Features/home/home.component';
import { BuildsComponent } from '../Features/builds/builds.component';
import { ItemsComponent } from '../Features/items/items.component';
import { AboutComponent } from '../Features/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'builds', component: BuildsComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'about', component: AboutComponent}
];
