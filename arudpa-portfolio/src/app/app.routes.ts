import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { AboutComponent } from './Components/About/about.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { FaqsComponent } from './Components/FAQs/FAQs.component';

export const routes: Routes = [
  { path: 'Home',    component: HomeComponent }, 
  { path: 'about',   component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faqs',    component: FaqsComponent },
  { path: '**',      redirectTo: '' }
];