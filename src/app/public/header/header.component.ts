// header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false;

  constructor(private router: Router) { }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    console.log("Menu Active:", this.menuActive);
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(`/${route}`);
  }
}

