import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {  UserService} from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
    }, {validator: this.checkPasswords });
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { passwordNotSame: true }     
  }
  ngOnInit() {
  }

  get(name){
    return this.registerForm.get(name);
  }
  hasError(name){
    return this.get(name).errors && (this.get(name).dirty || this.get(name).touched)
  }
  register(){
   this.userService.register(this.registerForm.value)
   .subscribe(data=>{
     console.log("success",data);
     this.router.navigate(['/login'])
   },err=>{
     alert(err.error.message);
   });
}
}
