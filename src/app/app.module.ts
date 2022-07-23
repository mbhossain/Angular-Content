import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ComponentTwoComponent } from './components/view-encapsulation/component-two/component-two.component';
import { ComponentOneComponent } from './components/view-encapsulation/component-one/component-one.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { ViewComponent } from './components/view-encapsulation/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ComponentTwoComponent,
    ComponentOneComponent,
    ClassBindingComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
