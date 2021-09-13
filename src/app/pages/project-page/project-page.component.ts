import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  donationValues: string[] = ['R$ 10,00', 'R$ 20,00', 'R$ 50,00', 'outro valor'];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public shareTo(facebook: string): void {
    // do something
  }
}
