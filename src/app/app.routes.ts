import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import { TechnologiesComponent } from './Components/technologies/technologies.component';
import { ProjectComponent } from './Components/project/project.component';
import { ProjectDetailComponent } from './Components/project/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'techno', component: TechnologiesComponent },
  { path: 'pro', component: ProjectComponent },
  { path: 'pro/:id', component: ProjectDetailComponent },
];
