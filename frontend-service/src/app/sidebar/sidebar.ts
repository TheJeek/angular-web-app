import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  imports: [RouterLink]
})
export class Sidebar {
  // Component logic can go here
  logClick(page: string) {
    console.log('Clicked:', page);
    // This will show in browser console when clicked
  }
}

