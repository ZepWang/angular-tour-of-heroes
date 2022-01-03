import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowInfo2Component } from './show-info2/show-info2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, ShowInfoComponent, HeaderComponent, ShowInfo2Component, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
