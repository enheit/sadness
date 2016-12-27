import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GalleryComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
