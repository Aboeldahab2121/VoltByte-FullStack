import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { trigger, transition, style, animate } from "@angular/animations";
import { ItemsService } from "../services/items.service";
import { Item } from "./Item";

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
export class ItemsComponent implements OnInit {
  constructor(private _itemsService: ItemsService) {}
  items!: Item[];
  itemsFiltered!: Item[];
  myUrl: string = "4060.jpeg";

  ngOnInit() {
    this._itemsService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.itemsFiltered = data;
        console.log(this.items);
      },
    });
  }

  filterList(searchTerm: string) {
    this.itemsFiltered = [];

    this.itemsFiltered = this.items.filter((element: Item) =>
      element.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
