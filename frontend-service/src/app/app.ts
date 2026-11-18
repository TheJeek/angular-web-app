import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
        <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.scss'],
  imports: [RouterOutlet]
})
export class App {
  title = 'homes';
}

