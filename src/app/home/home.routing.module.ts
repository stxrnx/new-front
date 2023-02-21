import { HomeComponent } from './home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FormsDettaglioComponent } from '../forms-dettaglio/forms-dettaglio.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {path:'personal-info', component:PersonalInfoComponent},
            {path:'forms', component:FormsDettaglioComponent}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HomeRoutingModule{}