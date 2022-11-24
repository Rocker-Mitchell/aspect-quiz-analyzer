import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavLink} from '@app/nav-link/nav-link';
import {NavLinkService} from '@app/nav-link/nav-link.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit {
  public navLinks: NavLink[] = [];

  constructor(private readonly navLinkService: NavLinkService) {}

  public ngOnInit(): void {
    this.navLinks = this.navLinkService.getNavLinks();
  }
}
