import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  Collections = [
  { 
    title: 'Arudpa', 
    desc: 'Customized Baby Frock.', 
    image: '/arudpa blouse 8.jpeg'   // ← remove 'public/', add leading /
  },
  { 
    title: 'Arudpa', 
    desc: ' Simple Bridal Blouse.', 
    image: '/arudpa blouse 5.jpeg'    // ← replace with your actual filename
  },
  { 
    title: 'Arudpa', 
    desc: 'HandPainted Blouse for Banaras silk saree.', 
    image: '/arudpa blouse 7.jpeg'    // ← replace with your actual filename
  },
  { 
    title: 'Arudpa', 
    desc: 'Customize Blouse.', 
    image: '/arudpa blouse 4.jpeg'     // ← replace with your actual filename
  },
];
}