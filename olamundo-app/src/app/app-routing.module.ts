import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CristoComponent} from "./cristo/cristo.component";
import {LajinhaComponent} from "./lajinha/lajinha.component";
import {PrincipalComponent} from "./principal/principal.component";

const routes: Routes = [
  {path: 'cristo', component: CristoComponent},
  {path: 'lajinha', component: LajinhaComponent},
  {path: '',component:PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
