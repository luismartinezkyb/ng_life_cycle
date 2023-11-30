import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'mini-map-component',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{
  @Input()
  public lngLat?: [number, number]

  public map?: Map;
  @ViewChild('map') divMap?:ElementRef;
  


  ngAfterViewInit(): void {
    if(!this.lngLat) throw Error('Image cant be loaded');
    if(!this.divMap) throw new Error('El elemento html is required');
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom,
      scrollZoom:false,
      interactive:false
    });
    //IMPLEMENTAR UN LOADER 
    new Marker()
    .setLngLat(this.lngLat)
    .addTo(this.map)
  }
}
