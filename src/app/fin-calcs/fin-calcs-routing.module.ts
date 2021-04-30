import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinCalcsPageComponent } from './fin-calcs-page/fin-calcs-page.component';


const routes: Routes = [{ path: '', component: FinCalcsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinCalcsRoutingModule { }
