import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy, RouterLink } from '@angular/router';
import { HomePage } from './home/home.page'
import { UserComponent } from './components/user/user.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TaxPipe } from './pipes/tax.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcComponent } from './components/calc/calc.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    HomePage, 
    UserComponent, 
    CalcComponent,
    LoginComponent

],
  imports: [
    BrowserModule, 
    TaxPipe, 
    IonicModule.forRoot(),
     AppRoutingModule, 
     HighlightDirective,
     ReactiveFormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }