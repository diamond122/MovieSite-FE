import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent, NavBarComponent],
  exports: [SideBarComponent, NavBarComponent]
})
export class CoreModule { }
