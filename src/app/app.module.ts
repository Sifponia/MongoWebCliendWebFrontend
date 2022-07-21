



import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ConectorComponent} from './body/conector/conector.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: '**', redirectTo: 'body'}

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    ConectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

