import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TakeQuizFormComponent} from './take-quiz-form/take-quiz-form.component';
import {TakeQuizRoutingModule} from './take-quiz-routing.module';
import {TakeQuizComponent} from './take-quiz.component';

@NgModule({
  declarations: [TakeQuizComponent],
  imports: [CommonModule, TakeQuizRoutingModule, TakeQuizFormComponent],
  exports: [TakeQuizComponent],
})
export class TakeQuizModule {}
