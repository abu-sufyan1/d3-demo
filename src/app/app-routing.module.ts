import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassComponent } from './glass/glass.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '',
    component: GlassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
