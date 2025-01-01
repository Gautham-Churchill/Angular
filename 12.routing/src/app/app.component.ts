import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '12. routing';

  constructor(private router: Router) {}

  naviagetToNote() {
    this.router.navigate(['notes']);
  }
}
