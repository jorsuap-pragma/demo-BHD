import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./onbording/onbording.module').then(m => m.OnbordingModule)
  },
  {
    path: 'onbording',
    loadChildren: () => import('./onbording/onbording.module').then(m => m.OnbordingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
