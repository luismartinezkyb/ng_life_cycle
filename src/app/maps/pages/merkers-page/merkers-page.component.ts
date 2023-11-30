import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LngLat, Marker } from 'mapbox-gl';
import { Map } from 'mapbox-gl';

interface MarkerAndColor{
  color:string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-merkers-page',
  templateUrl: './merkers-page.component.html',
  styles: [
    `#map {
      width: 100wv;
      height: 100vh;
    }`,
    `
    .list-group {
      position:fixed;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    `
  ]
})
export class MerkersPageComponent implements AfterViewInit{
  // ngOnInit(): void {
  //   const markersFromLocalStorage = localStorage.getItem('markers');

  //   if(!markersFromLocalStorage) return;
  // }

  public map?: Map;
  public lngLat: LngLat = new LngLat(-100.82,20.53);
  public markers: MarkerAndColor[] = [];

  @ViewChild('map') divMap?:ElementRef;

  ngAfterViewInit(): void {
    
    if(!this.divMap) throw new Error('El elemento html is required');
    
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    // this.mapListeners()

    //PODEMOS CREAR UN ELEMENTO HTML EN LOS MAPAS PARA PODER MOSTRARLOS

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Luis Martinez';
    // const marker = new Marker({color:'red'})
    // .setLngLat(this.lngLat)
    // .addTo(this.map);
    this.loadFromLocalStorage()
  }
  createMarker(){
    const mapa=this.map;
    if(!mapa) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = mapa.getCenter()
    //Agregamos un marker
    this.addMarker(lngLat, color)
    
  }

  addMarker(lngLat: LngLat, color: string){
    const mapa=this.map;
    if(!mapa) return;
    const marker = new Marker({
      draggable:true,
      color
    })
    .setLngLat(lngLat)
    .addTo(mapa)
    //AGREGAMOS EL MARKER AL ARREGLO DEL MARKER
    this.markers.push({color, marker});
    this.saveToLocalStorage(this.markers.toString())
  }

  //ELIMINAR MARKER
  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveToLocalStorage(this.markers.toString())
    
  }

  //IR HACIA UN MARKADOR
  goToMarker(index:number){
    const currentMarker = this.markers[index].marker;

    this.map?.flyTo({
      zoom:14,
      center: currentMarker.getLngLat(),
    })

  }
  // :PlainMarker[] | null
  loadFromLocalStorage():void{
    const plainMarkersString = localStorage.getItem('markers');

    if(!plainMarkersString) return;
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    if(!plainMarkers)return;

    plainMarkers.forEach(marker=>{
      const [lng, lat] = marker.lngLat
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, marker.color)
    });
  }

  saveToLocalStorage(value:string| null){
    if(!value) localStorage.clear();

    const plainMarker: PlainMarker[] = this.markers.map(({color, marker})=>({
      color,
      lngLat:marker.getLngLat().toArray()
    }))
    
    
    localStorage.setItem('markers', JSON.stringify(plainMarker));
  }
  ngOnDestroy(): void {
    this.map?.remove();
    this.saveToLocalStorage(null)
  }
}
