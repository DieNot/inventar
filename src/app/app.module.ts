import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { ComputerComponent } from './shared/component/computer/computer.component';
import { ScreenComponent } from './shared/component/screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputerListComponent,
    ComputerComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
