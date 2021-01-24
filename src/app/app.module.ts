import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { LedysComponent } from './ledys/ledys.component';
import { LadyComponent } from './lady/lady.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CarsComponent,
    CarComponent,
    LedysComponent,
    LadyComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
