import {Component, ViewEncapsulation} from '@angular/core';
import {AppRoutingPath} from '@app/app-routing-path';

interface HeaderNavLinkData {
  link: string;
  displayText: string;
}

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent {
  public readonly navLinks: HeaderNavLinkData[] = [
    {
      link: '/' + AppRoutingPath.TakeQuiz,
      displayText: 'Take the Quiz',
    },
    {
      link: '/' + AppRoutingPath.ExplainAnalysis,
      displayText: 'How it Works',
    },
  ];
}
