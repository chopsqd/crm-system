import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginPageComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
