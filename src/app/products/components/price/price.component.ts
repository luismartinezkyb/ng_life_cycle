import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input()
  public price: number = 0;

  public interval$?:Subscription;

  ngOnInit(): void {
    console.log('PRICE COMPONENT: ngOnInit')
    
    this.interval$ = interval(1000).subscribe((val)=>console.log(val))
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('PRICE COMPONENT: ngOnChanges')
  }
  ngOnDestroy(): void {
    //MANDA LLAMAR QUE SE HA ELIMINADO 
    console.log('PRICE COMPONENT: ngOnDestroy')
    this.interval$?.unsubscribe();
  }
}
