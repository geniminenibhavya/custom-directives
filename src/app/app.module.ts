import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SignalComponent } from './signal/signal.component';
import { ComponentbComponent } from './signal/componentb.component';
import { BehaviorSubComponent } from './behavior-sub/behavior-sub.component';
import { BehaviorbComponent } from './behavior-sub/behaviorb.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './create-reducer';
import { CompAComponent } from './comp-a.component';
import { CompBComponent } from './comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CapitalizePipe,
    ReactiveFormsComponent,
    SignalComponent,
    ComponentbComponent,
    BehaviorSubComponent,
    BehaviorbComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user: userReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
