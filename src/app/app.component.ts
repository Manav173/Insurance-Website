import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/header/header.component';
import { HeroComponent } from '../app/hero/hero.component';
import {  FeaturesComponent } from '../app/features/features.component';
import {  AboutComponent } from '../app/about/about.component';
import {  ServicesComponent } from '../app/services/services.component';
import {  WhyUsComponent } from '../app/why-us/why-us.component';
import {  TeamComponent } from '../app/team/team.component';
import {  ReviewComponent } from '../app/review/review.component';
import {  BlogComponent } from '../app/blog/blog.component';
import {  SubscribeComponent } from '../app/subscribe/subscribe.component';
import {  FooterComponent } from '../app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,HeroComponent,FeaturesComponent,AboutComponent,ServicesComponent,WhyUsComponent,TeamComponent,ReviewComponent,BlogComponent,SubscribeComponent,FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance-landing-page';
}
