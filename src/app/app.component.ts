import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ItemsComponent } from "./items/items.component";
import { BuildsComponent } from "./builds/builds.component";

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
