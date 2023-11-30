import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-page-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,  AfterViewChecked, OnDestroy {
  public isProductVisible: boolean = false;

  public currentPrice: number = 10;
  constructor(){
    //SE UTILIZA PARA INICIALIZACION
  }
  ngOnInit(): void {
    console.log('ngOnInit')
    //PRIMERA PETIFCION HTTP TIMESRS; SUBSCRIPCIONES
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    //SE UTILIZA SI NECESITAMOS ESTAR AL PENDIENTE DE LOS CAMBIOS
    //DE LOS INPUTS 
    console.log('ngOnChanges')
  }
  //NG DO CHECK AfterContentInit, Checkend, ViewInit, ViewChecket

  //Basicamente cuando suceden cambios en inputs ,propiedades
  //echar un vistazo en esas propiedades, 
  //sistema de graficas para hacer modificacioens de pantalla en 
  //el dom
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    //TENEMOS QUE LIMPIAR EL CODIGO PARA PODER DESTRUIR OBJETOS
    //Dbemos de hacer limpiezas si es que tenemos timers, 
    //Subscriptions, intervalos, etc
    console.log('ngOnDestroy')
  }
  
  increasePrice():void{
    this.currentPrice++;
  }

}
