import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy, RouterLinkActive } from '@angular/router';
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
import { LocalStorageService } from './services/local-storage.service';

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
providers: [{ 
  provide: RouteReuseStrategy, 
  useClass: IonicRouteStrategy
 },
 LocalStorageService
],

  bootstrap: [AppComponent],
})
export class AppModule { }