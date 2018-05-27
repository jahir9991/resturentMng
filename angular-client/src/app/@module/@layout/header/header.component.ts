import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleNav: boolean = false;

  constructor() {}

  ngOnInit() {}
  navbarToggle() {
    this.toggleNav = !this.toggleNav;
  }
}
