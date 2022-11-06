import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TakeQuizRoutingModule} from './take-quiz-routing.module';
import {TakeQuizComponent} from './take-quiz.component';

@NgModule({
  declarations: [TakeQuizComponent],
  imports: [CommonModule, TakeQuizRoutingModule],
  exports: [TakeQuizComponent],
})
export class TakeQuizModule {}
