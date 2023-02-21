import {ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import {RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';
import { FormsDettaglioComponent } from '../forms-dettaglio/forms-dettaglio.component';

@NgModule({
    declarations:[
        HomeComponent,
        PersonalInfoComponent,
        FormsDettaglioComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})

export class HomeModule{}