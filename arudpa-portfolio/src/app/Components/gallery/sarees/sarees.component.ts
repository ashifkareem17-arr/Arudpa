import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Saree { id: number; name: string; price: number; image: string; }
interface Enquiry { name: string; phone: string; address: string; message: string; }

@Component({ selector: 'app-sarees', standalone: true, imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive], templateUrl: './sarees.component.html', styleUrls: ['./sarees.component.css'] })
export class SareesComponent {
  readonly sarees: Saree[] = [
    { id: 1, name: 'Emarald green with red border saree', price: 999, image: '/saree 1.png' },
    { id: 2, name: 'Apple green with purple border saree', price: 999, image: '/saree 2.png' },
    { id: 3, name: 'Cream White with purple border saree', price: 999, image: '/saree 3.png' },
    { id: 4, name: 'Lime yellow with parrot green border saree', price: 999, image: '/saree 4.png' },
    { id: 5, name: 'Peocock blue with purple border saree', price: 999, image: '/saree 5.png' },
    { id: 6, name: 'Dark Purple with emarald green border saree', price: 999, image: '/saree 6.png' },
    { id: 7, name: 'Golden yellow half saree with magenta-gold border', price: 1200, image: '/half saree 7.png' },
    { id: 8, name: 'Bright orange half saree with maroon-gold border', price: 1200, image: '/half saree 8.png' },
    { id: 9, name: 'Crimson red half saree with black-gold border', price: 1200, image: '/half saree 9.png' },
    { id: 10, name: 'Peacock blue half saree with hot pink-gold border', price: 1200, image: '/half saree 10.png' },
    { id: 11, name: 'Parrot green half saree with royal blue-gold border', price: 1200, image: '/half saree 11.png' },
    { id: 12, name: 'Deep purple half saree with turquoise-gold border', price: 1200, image: '/half saree 12.png' }    


    
  ];
  selectedSaree: Saree | null = null;
  formSubmitted = false;
  user: Enquiry = { name: '', phone: '', address: '', message: '' };
  selectSaree(saree: Saree): void { this.selectedSaree = saree; this.formSubmitted = false; setTimeout(() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })); }
  submitForm(form: NgForm): void { if (form.invalid) { form.control.markAllAsTouched(); return; } this.formSubmitted = true; form.resetForm({ name: '', phone: '', address: '', message: '' }); }
}
