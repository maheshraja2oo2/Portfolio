import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'app-home',
    component:HomeComponent
  },
  {
    path:'app-project',
    component:ProjectComponent
  },
  {
    path:'app-skills',
    component:SkillsComponent
  },
  {
    path:'app-about',
    component:AboutComponent
  },
  {
    path:'app-contact',
    component:ContactComponent
  },

   


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
