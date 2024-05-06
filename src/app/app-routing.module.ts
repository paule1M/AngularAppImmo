import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { AppartementComponent } from './appartement/appartement.component';

const routes: Routes = [
      {path: 'residence', component: ResidencesComponent},
      {path: 'appartement/:id', component: AppartementComponent},
   //   {path: '', redirectTo: 'residence', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
