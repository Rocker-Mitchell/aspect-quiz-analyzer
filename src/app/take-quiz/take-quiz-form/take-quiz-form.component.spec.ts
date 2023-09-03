import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RadioGroupHarness} from '@app/radio/radio-group/radio-group.harness';
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
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTakeQuizFormComponent],
      imports: [TakeQuizFormComponent],
    });
    fixture = TestBed.createComponent(TestTakeQuizFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
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

  it('should render questions with radios', async () => {
    const questions = [
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
    ];
    updateQuestions(questions);

    const radioHarnesses = await harnessLoader.getAllHarnesses(
      RadioGroupHarness
    );
    const radioQuestions = await Promise.all(
      radioHarnesses.map(async (group) => {
        const [legend, buttonFields] = await Promise.all([
          group.getLegendText(),
          group.getRadioButtons().then((buttons) =>
            Promise.all(
              buttons.map(async (btn) => {
                const [name, value, label] = await Promise.all([
                  btn.getName(),
                  btn.getValue(),
                  btn.getLabelText(),
                ]);
                return {name, value, label};
              })
            )
          ),
        ]);
        const id = buttonFields[0]?.name;
        buttonFields.forEach((field) => {
          expect(field.name)
            .withContext('Expected radio button names in a group to match')
            .toEqual(id);
        });
        const answers = buttonFields.reduce((acc, field) => {
          if (field.value !== null) {
            return {...acc, [field.value]: field.label};
          }
          fail(
            `Expected radio button to have defined value: ${JSON.stringify(
              field
            )}`
          );
          return acc;
        }, {} as {[key: string]: string});
        return {id, legend, answers};
      })
    );
    expect(radioQuestions).toEqual(
      questions.map((q) => ({
        ...q,
        legend: jasmine.stringContaining(q.legend),
        answers: Object.entries(q.answers).reduce(
          (acc, [value, label]) => ({
            ...acc,
            [value]: jasmine.stringContaining(label),
          }),
          {} as {[key: string]: jasmine.AsymmetricMatcher<string>}
        ),
      }))
    );
  });
});
