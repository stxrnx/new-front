import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit { 



   form = this.fb.group({
     name:['',{
       validators: [Validators.required, Validators.minLength(4)],
       updatOn:'blur'
     }],
     email:['',{
       validators: [Validators.required, Validators.email],
       updateOn:'blur'
     }],
     phone : this.fb.array([
      this.fb.control('')
     ])
   });

   get nome(){
    return this.form.controls['name'];
  }

  get email(){
    return this.form.controls['email'];
  }

   get phone(){
    return this.form.get('phone') as FormArray;
  }

  constructor(private fb : FormBuilder) {
  }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log(this.form)
  }

   addPhone(){
    this.phone.push(this.fb.control(''));
   }
}
