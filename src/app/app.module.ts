import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ChartsModule } from '../../node_modules/ng2-charts';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ComponentsModule,
    HttpClientModule,
    AuthModule,
    ChartsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
