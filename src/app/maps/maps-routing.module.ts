import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MerkersPageComponent } from './pages/merkers-page/merkers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children:[
      { path: 'fullscreen', component: FullScreenPageComponent},
      { path: 'zoom-range', component: ZoomRangePageComponent},
      { path: 'markers', component: MerkersPageComponent},
      { path: 'properties', component: PropertiesPageComponent},
      { path: '**', redirectTo:'fullscren'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
