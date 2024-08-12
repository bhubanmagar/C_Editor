import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesComponent } from './Components/pages/pages.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'c_editor';
}
