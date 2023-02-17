import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit { 

  signupForm : FormGroup;

  // form = this.fb.group({
  //   name:['',{
  //     validators: [Validators.required, Validators.minLength(4)],
  //     updatOn:'blur'
  //   }],
  //   email:['',{
  //     validators: [Validators.required, Validators.email],
  //     updateOn:'blur'
  //   }],
  //   phone:['',{
  //     validators: [Validators.required, Validators.maxLength(8)]
  //   }]
  // })

  constructor(private fb : FormGroup) {
    this.signupForm = this.fb
  }

  ngOnInit(): void {
     this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required ,Validators.email]),
      phone: new FormControl(null, Validators.maxLength(8))
     })
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  // get nome(){
  //   return this.form.controls['name'];
  // }

  // get email(){
  //   return this.form.controls['email'];
  // }

  // get phone(){
  //   return this.form.controls['phone'];
  // }
}
