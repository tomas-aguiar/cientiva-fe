import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  links: any[];
  activeLinkIndex = -1;

  constructor(public router: Router) {
    this.links = [
      {
        label: 'Cientiva',
        link: '/inicio',
        index: 0
      },
      {
        label: 'Projetos',
        link: '/project',
        index: 1
      },
      {
        label: 'Quem Somos',
        link: '/quemsomos',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.link === this.router.url));
    });
  }

}
