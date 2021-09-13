import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path:"Home",component: HomeComponent},
  {  path:"Help",component: HelpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
