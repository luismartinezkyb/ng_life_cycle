import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  name:string;
  route:string;
}

@Component({
  standalone:true,
  selector: 'maps-side-menu',
  imports:[CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: [
    'li{ cursor: pointer; transition: 0.3s all}',
    `
    ul{
      position:fixed;
      top: 20px;
      left: 20px;
      z-index: 999;
    }
    `
  ] 
})
export class SideMenuComponent {
  public menuItems: MenuItem[]= [
    { route: '/maps/fullscreen', name: 'FullScreen'},
    { route: '/maps/zoom-range', name: 'Zoom-Range'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/properties', name: 'Properties'},
    { route: '/alone', name: 'Alone'},
  ]
}
