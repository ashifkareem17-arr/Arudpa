import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { AboutComponent } from './Components/About/about.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { SareesComponent } from './Components/gallery/sarees/sarees.component';
import { FaqsComponent } from './Components/FAQs/FAQs.component';

export const routes: Routes = [
  { path: 'Home',    component: HomeComponent }, 
  { path: 'about',   component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/sarees', component: SareesComponent },  // ✅ Sarees route
  { path: 'faqs',    component: FaqsComponent },
  { path: '',        redirectTo: '/Home', pathMatch: 'full' },
  { path: '**',      redirectTo: '/Home' }
];
