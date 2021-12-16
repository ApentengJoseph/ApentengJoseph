import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './sectionhero/hero.component';
import { HerodetailComponent } from './sectionhero/herodetail.component';
import { SkillComponent } from './sectionhero/skill.component';
import { FooterComponent } from './sectionhero/footer.component';
import { SocialComponent } from './sectionhero/social.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HerodetailComponent,
    SkillComponent,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
