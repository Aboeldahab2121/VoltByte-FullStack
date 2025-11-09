import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-items",
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: "./items.component.html",
  styleUrl: "./items.component.css",
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
export class ItemsComponent {
  items: number[] = [1, 2, 3, 4];
  myUrl: string = "4060.jpeg";
}
