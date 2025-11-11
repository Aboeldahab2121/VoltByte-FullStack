import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // Navbar visibility
  navbarVisible = true;
  lastScroll = 0;


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Hero parallax effect
    const offset = window.scrollY * 0.3;
    document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);

    // Navbar hide/show
    const currentScroll = window.scrollY;
    if (currentScroll > this.lastScroll && currentScroll > 100) {
      this.navbarVisible = false;
    } else {
      this.navbarVisible = true;
    }
    this.lastScroll = currentScroll;

  }

}
