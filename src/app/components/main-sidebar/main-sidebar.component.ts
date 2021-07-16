import {Component, OnInit} from '@angular/core';

declare interface RouterInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouterInfo[] = [
  {
    path: '/',
    title: 'Main',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '#',
    title: 'Blog',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '#',
    title: 'Log in',
    icon: 'icon-pin',
    class: ''
  },
  {
    path: '#',
    title: 'Register',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '#',
    title: 'Profile',
    icon: 'icon-single-02',
    class: ''
  }
];

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
