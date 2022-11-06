import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderNavComponent} from './header-nav/header-nav.component';
import {HeaderComponent} from './header.component';

@NgModule({
  declarations: [HeaderComponent, HeaderNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
