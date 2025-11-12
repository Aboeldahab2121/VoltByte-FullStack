import { Component, HostListener, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../app/auth.service';
import { LucideAngularModule , UserIcon} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule,RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  readonly userIcon = UserIcon;

  // Navbar visibility
  navbarVisible = true;
  lastScroll = 0;
  
  // Dropdown
  dropdownOpen = false;
  @ViewChild('userMenu', { static: true }) userMenu!: ElementRef;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private authService: AuthService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const offset = window.scrollY * 0.3;
    document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);

    const currentScroll = window.scrollY;
    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.navbarVisible = false;
      this.dropdownOpen = false;
    } else {
      this.navbarVisible = true;
    }
    this.lastScroll = currentScroll;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.userMenu && !this.userMenu.nativeElement.contains(event.target as Node)) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
    this.cdr.detectChanges();
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  logout() {
    this.authService.logout()
  }
}