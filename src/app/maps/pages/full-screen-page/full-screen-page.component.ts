import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styles: [
    `div {
      width: 100wv;
      height: 100vh;
      background-color:red;
    }`
  ]
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {
    
    if(!this.divMap) throw new Error('El elemento html is required');
    
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
