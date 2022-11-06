import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, RouterModule, HomepageRoutingModule],
  exports: [HomepageComponent],
})
export class HomepageModule {}
