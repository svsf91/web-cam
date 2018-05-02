import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Routing} from './app-routing.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    Routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
