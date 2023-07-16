import {CommonModule} from '@angular/common';
import {Component, Input, ViewEncapsulation} from '@angular/core';

/**
 * The form for the aspect quiz.
 */
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-take-quiz-form',
  templateUrl: './take-quiz-form.component.html',
  styleUrls: ['./take-quiz-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TakeQuizFormComponent<AnswerKey extends string> {
  @Input({required: true}) questions: {
    id: string;
    legend: string;
    answers: Record<AnswerKey, string>;
  }[] = [];
}
