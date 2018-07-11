import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SideBarComponent, NavBarComponent],
  exports: [SideBarComponent, NavBarComponent]
})
export class CoreModule { }
