import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'imc',
    loadChildren: () =>
      import('./pages/imc/imc.module').then((m) => m.ImcPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'km-to-mi',
    loadChildren: () =>
      import('./pages/km-to-mi/km-to-mi.module').then(
        (m) => m.KmToMiPageModule
      ),
  },
  {
    path: 'temperatures',
    loadChildren: () => import('./pages/temperatures/temperatures.module').then( m => m.TemperaturesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
