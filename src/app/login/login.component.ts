import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators,FormControl,MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

  
@Component({                      
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 {

  usernameError: boolean= false;

  constructor(public fbobj:FormBuilder,
    private router:Router) { }
  
  RohanForm=this.fbobj.group(
    {
      username: ['',[Validators.required,Validators.minLength(5)]],
      password: ['',Validators.required]

    }

  
  );
  
  
  submit(){
    this.usernameError=false;
    if(this.RohanForm.valid){
      if(this.RohanForm.controls.username.value==='Admin' && this.RohanForm.controls.password.value==='admin'){
      this.router.navigate(['/home']);
    }else {
      this.usernameError=true;
    }
    }else {

    }

  }
}





