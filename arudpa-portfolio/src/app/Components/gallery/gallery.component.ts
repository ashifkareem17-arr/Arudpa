import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  readonly collections: GalleryItem[] = [
    {
      title: 'Arudpa',
      description: 'Customized Baby Frock.',
      image: '/arudpa blouse 8.jpeg'
    },
    {
      title: 'Arudpa',
      description: 'Simple Bridal Blouse.',
      image: '/arudpa blouse 5.jpeg'
    },
    {
      title: 'Arudpa',
      description: 'Hand-painted Blouse for Banaras Silk Saree.',
      image: '/arudpa blouse 7.jpeg'
    },
    {
      title: 'Arudpa',
      description: 'Custom Blouse.',
      image: '/arudpa blouse 4.jpeg'
    }
  ];
}