import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FooterModule} from '@app/footer/footer.module';
import {HeaderModule} from '@app/header/header.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
