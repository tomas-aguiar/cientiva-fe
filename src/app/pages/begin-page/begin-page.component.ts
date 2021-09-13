import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.scss']
})
export class BeginPageComponent implements OnInit {
  slides = [
    {image: '../../assets/images/banner-first-pic.png'},
    {image: '../../assets/images/banner-first-pic.png'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigate(['/project']).then();
  }
}
