import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuActive = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    console.log("Menu Active:", this.menuActive);
  }
}

