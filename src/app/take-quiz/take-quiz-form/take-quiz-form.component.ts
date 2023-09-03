import {CommonModule} from '@angular/common';
import {Component, Input, ViewEncapsulation} from '@angular/core';
import {RadioButtonComponent} from '@app/radio/radio-button/radio-button.component';
import {RadioGroupComponent} from '@app/radio/radio-group/radio-group.component';

/**
 * The form for the aspect quiz.
 */
@Component({
  standalone: true,
  imports: [CommonModule, RadioGroupComponent, RadioButtonComponent],
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
