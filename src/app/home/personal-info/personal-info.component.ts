
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  show: boolean = false


   form = this.fb.group({
     name:['',{
       validators: [Validators.required, Validators.minLength(4)],
       updateOn:'blur'
     }],
     email:['',{
       validators: [Validators.required, Validators.email],
       updateOn:'blur'
     }],
     phones : this.fb.array([
      this.fb.control('+39 ',[Validators.required,Validators.pattern("^[0-9 +]*$"),
      Validators.minLength(13), Validators.maxLength(14)]),
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

  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
  
  }

  onSubmit(){
  }

   addPhone(){
    const telefono = this.fb.control('+39 ',[Validators.required,Validators.pattern("^[0-9 +]*$"),
    Validators.minLength(14), Validators.maxLength(14)]);

    this.phones.push(telefono);
   }
}
