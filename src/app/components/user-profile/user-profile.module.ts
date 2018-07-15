import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRatesComponent } from './user-rates/user-rates.component';
import { UserChartComponent } from './user-chart/user-chart.component';
import { ProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule],
  declarations: [
    UserProfileComponent,
    UserDetailsComponent,
    UserRatesComponent,
    UserChartComponent
  ]
})
export class UserProfileModule {}
