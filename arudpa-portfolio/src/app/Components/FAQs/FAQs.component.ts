import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './FAQs.component.html',
  styleUrls: ['./FAQs.component.css']
})
export class FaqsComponent { 

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  faqs = [
    { question: 'What does arudpa offer?', answer: 'We design and sell unique, high-quality dresses and sarees for everyday wear and special occasions.', open: false },
    { question: 'Do you do custom stitching?', answer: 'Yes! We can customize the fit, blouse designs, and dress styles to match your exact measurements.', open: false },
    { question: 'What fabrics do you use?', answer: 'We use breathable cottons and linens for daily comfort, and premium silks and georgettes for party wear.', open: false },
    { question: 'How should I wash my arudpa clothes?', answer: 'We recommend dry cleaning for heavy silks/party wear, and a gentle hand wash for simple cottons.', open: false },
    { question: 'How can I buy from arudpa?', answer: 'You can browse our collection online or visit us directly to place a custom order.', open: false },
  ];

  toggle(faq: any) {
    faq.open = !faq.open;
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you! We will get back to you soon.');
    this.formData = { name: '', phone: '', email: '', message: '' };
  }
}