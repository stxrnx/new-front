import {ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import {RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HomeComponent,
        PersonalInfoComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})

export class HomeModule{}