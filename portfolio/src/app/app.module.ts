import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
