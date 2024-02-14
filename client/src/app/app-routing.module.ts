import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {AnalyticsPageComponent} from "./analytics-page/analytics-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {OrderPageComponent} from "./order-page/order-page.component";
import {CategoriesPageComponent} from "./categories-page/categories-page.component";
import {CategoriesFormComponent} from "./categories-page/categories-form/categories-form.component";
import {OrderCategoriesComponent} from "./order-page/order-categories/order-categories.component";
import {OrderPositionsComponent} from "./order-page/order-positions/order-positions.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegisterPageComponent},
          {path: '', redirectTo: 'login', pathMatch: 'full'}
        ]
      },
      {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {path: 'overview', component: OverviewPageComponent},
          {path: 'analytics', component: AnalyticsPageComponent},
          {path: 'history', component: HistoryPageComponent},
          {path: 'order', component: OrderPageComponent, children: [
              {path: '', component: OrderCategoriesComponent},
              {path: ':id', component: OrderPositionsComponent}
          ]},
          {path: 'categories', component: CategoriesPageComponent},
          {path: 'categories/new', component: CategoriesFormComponent},
          {path: 'categories/:id', component: CategoriesFormComponent},
          {path: '**', redirectTo: 'overview'},
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
