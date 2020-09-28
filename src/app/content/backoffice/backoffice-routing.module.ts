import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
// TODO named outlet
const routes: Route[] = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./content/products/products.module')
          .then(mod => mod.ProductsModule),
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeRoutingModule {
}
