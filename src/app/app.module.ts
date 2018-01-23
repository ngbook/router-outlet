import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Layout1Component } from './components/layout1/layout1.component';
import { Layout2Component } from './components/layout2/layout2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { CommonComponent } from './components/common/common.component';

@NgModule({
    declarations: [
        AppComponent,
        Layout1Component,
        Layout2Component,
        NotFoundComponent,
        MainComponent,
        CommonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
