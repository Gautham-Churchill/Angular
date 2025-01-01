import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title: string = 'About Page';

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params) => {
      const projectId = params['projectId'];
      console.log(projectId);
    })
  }
}
