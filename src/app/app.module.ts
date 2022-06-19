import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ComponentTwoComponent } from './components/view-encapsulation/component-two/component-two.component';
import { ComponentOneComponent } from './components/view-encapsulation/component-one/component-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ComponentTwoComponent,
    ComponentOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
