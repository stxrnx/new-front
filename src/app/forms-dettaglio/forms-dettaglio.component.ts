import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-dettaglio',
  templateUrl: './forms-dettaglio.component.html',
  styleUrls: ['./forms-dettaglio.component.css']
})
export class FormsDettaglioComponent {

form = this.fb.group({
  indirizzi: this.fb.array([])
});

  constructor(private fb: FormBuilder){}

  get indirizzi(){
    return this.form.controls["indirizzi"] as FormArray;
  }

  addIndirizzo(){
    const credenzialiVia = this.fb.group({
      via: ['Via/viale', Validators.required],
      civico:['', Validators.required],
      cap:['', Validators.required]
    })

    this.indirizzi.push(credenzialiVia);
  }

}
