import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ViewComponent } from './components/view-encapsulation/view/view.component';

const routes: Routes = [
  { path: 'class-binding', component: ClassBindingComponent },
  { path: 'component-interaction', component: ParentComponent },
  { path: 'view-encapsulation', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }