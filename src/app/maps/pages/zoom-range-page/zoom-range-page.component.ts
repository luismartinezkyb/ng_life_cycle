import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';
import { interval } from 'rxjs';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styles: [
    `#map {
      width: 100wv;
      height: 100vh;
    }`,
    `
    .floating-range{
      position:fixed;
      bottom: 20px;
      left: 20px;
      z-index: 999;
      width: 500px;
      background-color:white;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.1)
    }
    `,
    `
    .floating-content{
      display:flex;
      align-items: center;
      
    }
    `
  ]
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  public zoom: number = 9;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-74.5, 40);

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {
    
    if(!this.divMap) throw new Error('El elemento html is required');
    
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners()
  }

  mapListeners(){
    const mapa = this.map;
    if(!mapa) throw new Error('The map is required');

    mapa.on('zoom', (ev)=>{
      this.zoom = parseInt(mapa.getZoom().toFixed(0))
    })
    // mapa.on('zoomend', (ev)=>{
    //   if(mapa.getZoom()<18) return;
    // })

    mapa.on('move', ()=>{
      // console.log(mapa.getCenter())

      const {lng, lat} = mapa.getCenter();
      this.lngLat = mapa.getCenter();

      // this.lngLat ={
      //   lat:mapa.getCenter().lat,
      //   lng:mapa.getCenter().lng,
      // }
    })
  }



  setZoom(newZoom: number): void {
    const actualZoom = this.zoom + newZoom;
    this.zoom  = actualZoom
    this.map?.setZoom(actualZoom);
  }

  zoomChanged(value:string){
    const zoomTo=parseInt(value)
    this.zoom = zoomTo;
    this.map?.setZoom(zoomTo);

  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
