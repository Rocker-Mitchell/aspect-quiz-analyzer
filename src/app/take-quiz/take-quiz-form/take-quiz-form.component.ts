import {CommonModule, KeyValue} from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {AnswerKeys} from '@app/questions/question';
import {QUESTIONS_TOKEN} from '@app/questions/questions.token';
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
export class TakeQuizFormComponent {
  protected questions: {
    id: string;
    legend: string;
    answers: Record<AnswerKeys, string>;
  }[] = inject(QUESTIONS_TOKEN).map(({id, text, answers}) => ({
    id,
    legend: text,
    answers,
  }));

  protected answerMarkers: Record<AnswerKeys, string> = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
  };

  protected sortAnswers(
    a: KeyValue<AnswerKeys, string>,
    b: KeyValue<AnswerKeys, string>
  ): number {
    return a.key.localeCompare(b.key);
  }
}
