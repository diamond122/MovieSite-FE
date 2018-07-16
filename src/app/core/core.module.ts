import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app.routing';
import { ComponentsModule } from '../components/components.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    AuthModule,
  ],
  declarations: [SideBarComponent, NavBarComponent],
  exports: [SideBarComponent, NavBarComponent, AppRoutingModule, AuthModule]
})
export class CoreModule {}
