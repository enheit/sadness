import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  id: number;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  toGalleryPage(): void {
    this.router.navigate(['/gallery', this.id]);
  }

  toRandomPage(): void {
    this.router.navigate(['/random]']);
  }
}
