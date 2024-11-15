import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './common/components/startpage/startpage.component';
import { ContactusComponent } from './common/components/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: StartpageComponent }, // Default route
  { path: 'contact-us', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
