import {Component, ViewEncapsulation} from '@angular/core';
import {AppRoutingPath} from '@app/app-routing-path';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public get homeLink() {
    return '/' + AppRoutingPath.Homepage;
  }
}
