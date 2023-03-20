import { PageNotFoundComponent } from './main-page/responsePages/page-not-found/page-not-found.component';
import { SucessComponent } from './main-page/responsePages/sucess/sucess.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  { path: 'success', component: SucessComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
