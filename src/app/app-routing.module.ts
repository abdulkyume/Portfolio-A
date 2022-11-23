import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'Portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        redirectTo: 'About',
        pathMatch: 'full',
      },
      { path: 'About', component: AboutComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'Education', component: EducationComponent },
      { path: 'Skills', component: SkillsComponent },
      { path: 'Projects', component: WorksComponent },
      { path: 'Experience', component: ResumeComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'Portfolio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
