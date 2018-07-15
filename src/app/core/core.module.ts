import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app.routing';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [SideBarComponent, NavBarComponent],
  exports: [SideBarComponent, NavBarComponent, AppRoutingModule]
})
export class CoreModule {}
