import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CounterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styles: [
  ]
})
export class AlonePageComponent {

}
