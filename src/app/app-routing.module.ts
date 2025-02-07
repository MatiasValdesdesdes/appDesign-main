import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { loginGuardGuard } from './guards/login-guard.guard';

const routes: Routes = [
  {
    path: 'Login', 
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [loginGuardGuard]
  },
  {
    path: '**',
    redirectTo: 'Login',
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
