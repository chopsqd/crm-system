import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegisterPageComponent},
          {path: '**', redirectTo: '/login'}
        ]
      },
      {
        path: '',
        component: MainLayoutComponent,
        children: []
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
