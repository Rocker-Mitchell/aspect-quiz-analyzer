import {Component, ViewEncapsulation} from '@angular/core';

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
  protected questions = [
    {
      id: 'breathblood1',
      legend:
        "Think about your life as if it's a story, and you're the main protagonist. Do you tend to view yourself as the lone hero, who along the way meets other supporting characters, who only have a tangential relation to your personal journey? Or do you view yourself as just one hero in an ever-shifting ensemble of important protagonists?",
      answers: {
        a: 'Loner hero, all the way.',
        b: 'Often lone hero. Not always.',
        c: "Either one. Can't say for sure.",
        d: 'Often part of an ensemble. Not always.',
        e: 'Part of an ensemble, all the way.',
      },
    },
    {
      id: 'breathblood2',
      legend:
        "When you want to help people accomplish something, and they don't know what they're doing, are you inclined to show them how to do it? Or are you inclined to make them feel motivated or inspired to do it?",
      answers: {
        a: 'Definitely show them.',
        b: 'Lean toward showing them.',
        c: "I'll go either way.",
        d: 'Lean toward motivating them.',
        e: 'Definitely motivate them.',
      },
    },
  ];
  // TODO source the questions from somewhere
}
