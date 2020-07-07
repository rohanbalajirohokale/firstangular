import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nager';

  public isNotLogin:boolean=false;

   constructor(private router:Router){
     router.events.subscribe(route=>{
       console.log("rout===",router.url);
        if(router.url=='/login'){
          this.isNotLogin=false;
        }else{
          this.isNotLogin=true;
        }
     })
   }
}
