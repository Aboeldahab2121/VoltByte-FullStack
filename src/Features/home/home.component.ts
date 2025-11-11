import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
  animations: [
    trigger('fadeZoomIn', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.7)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', animate('2s cubic-bezier(0.25, 1, 0.5, 1)'))
    ]),
    trigger('specFadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(10px) scale(0.9)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
      transition('hidden => visible', animate('1s ease'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  

  // Hero section properties
  fullText = 'Welcome to VoltByte - Where Performance Meets Precision';
  displayedText = '';
  imageVisible = false;
  specTopVisible = false;
  specRightVisible = false;
  specBottomVisible = false;
  specLeftVisible = false;

  // Bento grid cards
  bentoCards = [
    {
      icon: '🎮',
      title: 'Gaming Powerhouse',
      desc: 'Push limits with our elite gaming rigs engineered for extreme performance. Designed for maximum FPS, ultra settings, and fluid gameplay — these machines redefine what’s possible for competitive and immersive gaming alike.',
      size: 'large'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Gen5 NVMe drives with 10GB/s speeds',
      size: 'normal'
    },
    {
      icon: '❄️',
      title: 'Cool & Quiet',
      desc: 'Custom water cooling solutions',
      size: 'normal'
    },
    {
      icon: '🎨',
      title: 'RGB Ecosystem',
      desc: 'Immerse yourself in vibrant, synchronized RGB lighting across every component. Customize your setup with stunning effects and dynamic profiles that reflect your unique style and energy.',
      size: 'tall'
    },
    {
      icon: '💎',
      title: 'Premium Components',
      desc: 'Only the finest hardware from trusted manufacturers',
      size: 'wide'
    },
    {
      icon: '🔧',
      title: 'Expert Build',
      desc: 'Assembled by professionals',
      size: 'normal'
    }
  ];

  // Stats
  stats = [
    { number: '5000+', label: 'Builds Delivered' },
    { number: '99.8%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Expert Support' },
    { number: '3 Year', label: 'Warranty' }
  ];

  // Featured builds
  featuredBuilds = [
    {
      icon: '🚀',
      title: 'Velocity Pro',
      desc: 'The ultimate esports machine. Built for competitive gamers who demand zero compromise on performance.'
    },
    {
      icon: '🎬',
      title: 'Creator Station',
      desc: 'Render, edit, and create without limits. Designed for content creators and professionals.'
    },
    {
      icon: '💻',
      title: 'Developer Rig',
      desc: 'Compile faster, test smoother. The perfect workstation for developers and engineers.'
    }
  ];

  constructor(private renderer: Renderer2) { }

  async ngOnInit() {
    await this.typeText();
    await this.delay(300);
    this.imageVisible = true;
    await this.delay(1500);

    this.specTopVisible = true;
    await this.delay(800);
    this.specRightVisible = true;
    await this.delay(800);
    this.specBottomVisible = true;
    await this.delay(800);
    this.specLeftVisible = true;
  }

  async typeText() {
    for (let i = 0; i < this.fullText.length; i++) {
      this.displayedText += this.fullText[i];
      await this.delay(50);
    }
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Hero parallax effect
    const offset = window.scrollY * 0.3;
    document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
  }

  getBentoCardClass(size: string): string {
    switch (size) {
      case 'large': return 'card-large';
      case 'tall': return 'card-tall';
      case 'wide': return 'card-wide';
      default: return '';
    }
  }
}