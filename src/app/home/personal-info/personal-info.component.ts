import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,Validators } from '@angular/forms';
import { numeroTelefono } from '../../validators/phones.validator';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  show: boolean = false;

  message : string = '';


   form = this.fb.group({
     name:['',{
       validators: [Validators.required],
       updateOn:'blur'
     }],
     email:['',{
       validators: [Validators.required, Validators.email],
       updateOn:'blur'
     }],
     phones : this.fb.array([
      this.fb.control('+39 ',[Validators.required, numeroTelefono(14)])
     ])
   });

   get nome(){
    return this.form.controls['name'];
  }

  get email(){
    return this.form.controls['email'];
  }

  get phones(){
    return this.form.controls["phones"] as FormArray;
  }

  constructor(private fb : FormBuilder, private router : Router) {
  }

  ngOnInit(): void {
  
  }

  onSubmit(){
  }

   addPhone(){
    const telefono = this.fb.control('+39 ',[Validators.required, numeroTelefono(14)]);

    if(this.phones.length < 5){
      this.phones.push(telefono);
    } else{
      this.message = 'pippo';
    }
   }

   removePhone(i : number){
    this.phones.removeAt(i);
   }
}
