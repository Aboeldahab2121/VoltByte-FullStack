import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, LucideAngularModule],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('1s ease'))
    ]),
    trigger('faqToggle', [
      state('collapsed', style({ height: '0px', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('0.3s ease'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  readonly FacebookIcon = FacebookIcon;
  readonly TwitterIcon = TwitterIcon;
  readonly InstagramIcon = InstagramIcon;

  // Hero section properties
  imageVisible = false;

  // FAQ items
  faqs = [
    {
      question: 'What makes VoltByte different from other PC builders?',
      answer: 'At VoltByte, we focus on precision engineering, using only premium components and custom configurations tailored to your needs. Our builds undergo rigorous testing to ensure peak performance, and we offer lifetime support for all our customers.',
      expanded: false
    },
    {
      question: 'How long does it take to build and ship a custom PC?',
      answer: 'Typically, our custom builds take 5-10 business days to assemble and test, followed by 2-5 days for shipping depending on your location. We provide real-time updates throughout the process.',
      expanded: false
    },
    {
      question: 'What warranty do you offer?',
      answer: 'All VoltByte systems come with a standard 3-year warranty on parts and labor. We also offer extended warranty options up to 5 years for added peace of mind.',
      expanded: false
    },
    {
      question: 'Can I upgrade my build later?',
      answer: 'Absolutely! Our designs prioritize modularity and future-proofing, making upgrades straightforward. Contact our support team for guidance on compatible components.',
      expanded: false
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and times vary by destination, and we handle all customs documentation to ensure a smooth delivery.',
      expanded: false
    }
  ];

  // Team members
  teamMembers = [
    {
      name: 'Mostafa Muhammad',
      role: 'Founder & Fullstack Developer',
      desc: 'Driven by an unquenchable thirst for tech innovation, Mostafa transformed his junior developer roots into VoltByte—a revolutionary platform uniting PC enthusiasts worldwide. With masterful fullstack expertise, he architects seamless digital experiences that turn hardware dreams into reality.',
    },
    {
      name: 'Moataz Muhammad',
      role: 'Fullstack Developer',
      desc: 'A code wizard with a flair for pixel-perfect interfaces, Moataz weaves frontend magic with backend muscle to create VoltByte\'s intuitive features. His innovative solutions keep our platform at the cutting edge, making complex PC customization feel effortlessly exciting.',
    }
  ];

  // Values
  values = [
    {
      icon: '⚡',
      title: 'Performance First',
      desc: 'We engineer every build for maximum efficiency and power, using cutting-edge components to deliver unparalleled results.'
    },
    {
      icon: '🔧',
      title: 'Quality Craftsmanship',
      desc: 'Our expert builders treat each PC as a work of art, with attention to detail in cable management, cooling, and aesthetics.'
    },
    {
      icon: '💎',
      title: 'Customer-Centric',
      desc: 'From consultation to after-sales support, we prioritize your satisfaction and build lasting relationships.'
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      desc: 'We stay ahead of tech trends to offer future-proof solutions that evolve with your needs.'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.imageVisible = true; // Trigger animations on load
  }

  toggleFaq(index: number) {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}