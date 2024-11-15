import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './common/components/startpage/startpage.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './common/components/contactus/contactus.component';
import { MobiltComponent } from './common/components/mobilt/mobilt.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    NavbarComponent,
    FooterComponent,
    ContactusComponent,
    MobiltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
