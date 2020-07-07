import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialModule} from './material-module';
import { GalleryComponent } from './gallery/gallery.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundfComponent } from './backgroundf/backgroundf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    FirstComponent,
    FooterComponent,
    BackgroundfComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,CarouselModule.forRoot(),MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
