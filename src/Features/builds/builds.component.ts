import { Component } from "@angular/core";
import { Item } from "../items/Item";
import { trigger, transition, style, animate } from "@angular/animations";
import {
  LucideAngularModule,
  FileIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  HeartIcon,
  LUCIDE_ICONS,
  HeartPlusIcon,
} from "lucide-angular";

@Component({
  selector: "app-builds",
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: "./builds.component.html",
  styleUrl: "./builds.component.css",
  animations: [
    trigger("listAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px) scale(0.98)" }),
        animate(
          "400ms cubic-bezier(0.25, 0.8, 0.25, 1)",
          style({ opacity: 1, transform: "translateY(0) scale(1)" })
        ),
      ]),
    ]),
  ],
})
export class BuildsComponent {
  filledHearts = new Set<number>();

  toggleHeart(event: Event, itemId: number) {
    event.preventDefault();
    if (this.filledHearts.has(itemId)) {
      this.filledHearts.delete(itemId);
    } else {
      this.filledHearts.add(itemId);
    }
  }

  isHeartFilled(itemId: number): boolean {
    return this.filledHearts.has(itemId);
  }

  recommended: Item[] = [
    {
      id: 1,
      title: "Creator Pro Build",
      image: "/recommended_builds/1.png",
      price: 1899,
      category_id: 1,
      quantity: 3,
    },
    {
      id: 2,
      title: "Budget Gamer Build",
      image: "/recommended_builds/2.png",
      price: 899,
      category_id: 2,
      quantity: 5,
    },
    {
      id: 3,
      title: "Silent Editing Rig",
      image: "/recommended_builds/3.png",
      price: 1299,
      category_id: 3,
      quantity: 2,
    },
    {
      id: 4,
      title: "RGB Water Beast",
      image: "/recommended_builds/4.png",
      price: 1599,
      category_id: 1,
      quantity: 4,
    },
  ];

  trending: Item[] = [
    {
      id: 6,
      title: "AI Creator Station",
      image: "/trending_builds/1.png",
      price: 2499,
      category_id: 4,
      quantity: 2,
    },
    {
      id: 7,
      title: "RGB Dragon Build",
      image: "/trending_builds/2.png",
      price: 2199,
      category_id: 1,
      quantity: 3,
    },
    {
      id: 8,
      title: "Silent Beast",
      image: "/trending_builds/3.png",
      price: 1799,
      category_id: 3,
      quantity: 2,
    },
  ];
}
