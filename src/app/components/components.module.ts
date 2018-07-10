import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsComponent } from './user-profile/user-details/user-details.component';
import { UserRatesComponent } from './user-profile/user-rates/user-rates.component';
import { UserChartComponent } from './user-profile/user-chart/user-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserProfileComponent, UserDetailsComponent, UserRatesComponent, UserChartComponent]
})
export class ComponentsModule { }
