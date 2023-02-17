import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
{path:"", redirectTo:"home",pathMatch:"full"},
{
  path:"home",
  loadChildren: ()=> import("./home/home.module").then(m=>m.HomeModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
