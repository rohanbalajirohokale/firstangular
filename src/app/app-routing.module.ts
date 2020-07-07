import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundfComponent } from './backgroundf/backgroundf.component';
import { FirstComponent } from './first/first.component';



const routes: Routes = [
  /* {path:"",component:LoginComponent}, */
  {
    path: "",
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login", component: LoginComponent
  },
  //{ path: "", component: FirstComponent },
  //{ path: "first", component: FirstComponent },

  { path: "", component: BackgroundfComponent },
  // { path: "student",  loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: "home", component: BackgroundfComponent },


  {
    path: 'gallery', component: GalleryComponent
  }, { path: 'about', component: AboutComponent }, { path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
