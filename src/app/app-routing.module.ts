import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'gallery/:id', component: GalleryComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
