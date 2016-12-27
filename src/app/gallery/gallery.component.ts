import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public text: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.text = this.getText(+params['id']).value);
  }

  getText(id: number): any {
    switch (id) {
      case 1: return {value: 'One'};
      case 2: return {value: 'Two'};
      case 3: return {value: 'Three'};
      default: return {value: 'Nothing'};
    }
  }
}
