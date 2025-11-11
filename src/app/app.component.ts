import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ItemsComponent } from "../Features/items/items.component";
import { BuildsComponent } from "../Features/builds/builds.component";
import { NavbarComponent } from "../Shared/Components/navbar/navbar.component";
import { FooterComponent } from "../Shared/Components/footer/footer.component";
import { LoginComponent } from "../Core/login/login.component";
import { RegisterComponent } from "../Core/register/register.component";
import { AboutComponent } from "../Features/about/about.component";
import { HomeComponent } from "../Features/home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ItemsComponent, BuildsComponent, NavbarComponent, FooterComponent, LoginComponent, RegisterComponent, AboutComponent, HomeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "VoltByte-Website";
}
