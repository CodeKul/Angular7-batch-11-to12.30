import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SmallFirstComponent } from './first/small-first/small-first.component';
import { BtCardComponent } from './bt-card/bt-card.component';
import { JumboComponent } from './bt-card/jumbo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MixCardComponent } from './mix-card/mix-card.component';
import { InterComComponent } from './inter-com/inter-com.component';
import { ProgressComponent } from './inter-com/progress.component';
import { ButtonComponent } from './inter-com/button.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './viewchild/contentchild.component';
import { DirectiveComponent } from './directive/directive.component';
import { SampleDirective } from './directive/sample.directive';
import { ObservableComponent } from './observable/observable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SmallFirstComponent,
    BtCardComponent,
    JumboComponent,
    DatabindingComponent,
    MixCardComponent,
    InterComComponent,
    ProgressComponent,
    ButtonComponent,
    ViewchildComponent,
    ContentchildComponent,
    DirectiveComponent,
    SampleDirective,
    ObservableComponent,
    LifecycleComponent,
    PipesComponent,
    CustompipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
