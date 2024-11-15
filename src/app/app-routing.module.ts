import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './common/components/startpage/startpage.component';
import { ContactusComponent } from './common/components/contactus/contactus.component';
import { MobiltComponent } from './common/components/mobilt/mobilt.component';

const routes: Routes = [
  { path: '', component: StartpageComponent }, // Default route
  { path: 'contact-us', component: ContactusComponent },
  { path: 'mobilt', component: MobiltComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
