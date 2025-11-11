import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ItemsComponent } from "../Features/items/items.component";
import { BuildsComponent } from "../Features/builds/builds.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ItemsComponent, BuildsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "VoltByte-Website";
}
