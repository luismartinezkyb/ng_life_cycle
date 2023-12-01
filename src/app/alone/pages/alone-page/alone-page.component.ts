import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styles: [
  ]
})
export class AlonePageComponent {

}
