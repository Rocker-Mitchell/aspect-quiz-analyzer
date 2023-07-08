import {Component, ViewEncapsulation} from '@angular/core';
import {AppRoutingPath} from '@app/app-routing-path';

/**
 * The route for the home page.
 */
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {
  public get quizLink() {
    return '/' + AppRoutingPath.TakeQuiz;
  }
}
