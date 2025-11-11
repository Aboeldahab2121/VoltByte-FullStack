import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { trigger, transition, style, animate } from "@angular/animations";
import { ItemsService } from "../../app/services/items.service";
import { Item } from "./Item";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-items",
  standalone: true,
  imports: [MatChipsModule, CommonModule],
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
  items: Item[] = [];
  itemsFiltered: Item[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private _itemsService: ItemsService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.isLoading = true;
    this._itemsService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.itemsFiltered = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading items:', error);
        this.errorMessage = 'Failed to load items. Please try again.';
        this.isLoading = false;
      }
    });
  }

  filterList(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.itemsFiltered = [...this.items];
      return;
    }

    this.itemsFiltered = this.items.filter((element: Item) =>
      element.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
}