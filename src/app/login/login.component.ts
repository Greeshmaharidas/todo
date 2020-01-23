import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private router: Router,private formBuilder:FormBuilder,private userService:UserService)  {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('',[
        Validators.required,Validators.email,
        Validators.minLength(3)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3)

      ])
    });
  }


  get(name){
    return this.loginForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
  }

ngOnInit() {
  }

  view(){
    //this.errorService.showError();
    this.router.navigate(['todo']);
    //this.router.navigateByUrl('/todo');
  }

login(){
  this.userService.login(this.loginForm.value)
  .subscribe(data=>{
    console.log("success",data);
    this.router.navigate(['todo']);
  },err=>{
    alert(err.error.message);
  });
}
}



