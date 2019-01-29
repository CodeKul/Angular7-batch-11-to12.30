import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
