import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TakeQuizFormComponent} from './take-quiz-form.component';

type QuestionsInput<AnswerKey extends string> =
  TakeQuizFormComponent<AnswerKey>['questions'];

@Component({
  selector: 'app-test-take-quiz-form',
  template: `<app-take-quiz-form [questions]="questions"></app-take-quiz-form>`,
})
class TestTakeQuizFormComponent {
  questions: QuestionsInput<string> = [];
}

describe('TakeQuizFormComponent', () => {
  let fixture: ComponentFixture<TestTakeQuizFormComponent>;
  let component: TestTakeQuizFormComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTakeQuizFormComponent],
      imports: [TakeQuizFormComponent],
    });
    fixture = TestBed.createComponent(TestTakeQuizFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  function updateQuestions(questions: QuestionsInput<string>) {
    component.questions = questions;
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(
      fixture.debugElement.query(By.directive(TakeQuizFormComponent))
        .componentInstance
    ).toBeAnything();
  });

  it('should render a form', () => {
    expect(element.querySelector('form')).toBeAnything();
  });

  xit('should render questions', () => {
    updateQuestions([
      {
        id: 'one',
        legend: 'Question One',
        answers: {a: 'Alfa', b: 'Beta', c: 'Charlie'},
      },
      {
        id: 'two',
        legend: 'Question Two',
        answers: {a: 'One', b: 'Two', c: 'Three'},
      },
    ]);
    // TODO query for what's rendered
  });
});
