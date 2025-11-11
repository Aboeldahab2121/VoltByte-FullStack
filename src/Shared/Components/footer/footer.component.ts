import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, FileIcon, FacebookIcon, TwitterIcon, InstagramIcon} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  readonly FileIcon = FileIcon;
  readonly FacebookIcon = FacebookIcon;
  readonly TwitterIcon = TwitterIcon;
  readonly InstagramIcon = InstagramIcon;

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;

    if (emailInput && emailInput.value) {
      // Here you would typically call a service to handle the subscription
      console.log('Newsletter subscription for:', emailInput.value);

      // Show success message (you can implement a toast/notification service)
      alert('Thank you for subscribing!');

      // Reset form
      form.reset();
    }
  }

}
