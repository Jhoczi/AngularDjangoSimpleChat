import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import {CheckboxControlValueAccessor, FormsModule} from "@angular/forms";

// NEW
import { RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        //AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: '', component: ChatComponent },
          { path:'join', component: JoinComponent },
        ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
