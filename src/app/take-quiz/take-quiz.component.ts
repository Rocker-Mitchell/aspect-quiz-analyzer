import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {Question, QUESTIONS_TOKEN} from '@app/questions/questions';
import {TakeQuizFormComponent} from './take-quiz-form/take-quiz-form.component';

type AnswerKey = keyof Question['answers'];

/**
 * The route for taking the aspect quiz.
 */
@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TakeQuizComponent {
  protected questions: TakeQuizFormComponent<AnswerKey>['questions'];

  constructor(@Inject(QUESTIONS_TOKEN) sourceQuestions: Question[]) {
    this.questions = sourceQuestions.map(({id, text, answers}) => ({
      id,
      legend: text,
      answers,
    }));
  }
}
