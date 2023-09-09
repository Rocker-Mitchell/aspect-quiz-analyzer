import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {QUESTIONS_TOKEN} from '@app/questions/questions.token';
import {RadioGroupHarness} from '@app/radio/radio-group/radio-group.harness';
import {TakeQuizFormComponent} from './take-quiz-form.component';

describe('TakeQuizFormComponent', () => {
  let fixture: ComponentFixture<TakeQuizFormComponent>;
  let component: TakeQuizFormComponent;
  let element: HTMLElement;
  let harnessLoader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TakeQuizFormComponent],
    });
    fixture = TestBed.createComponent(TakeQuizFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeAnything();
  });

  it('should render a form', () => {
    expect(element.querySelector('form')).toBeAnything();
  });

  it('should render questions with radios', async () => {
    const sourceQuestions = TestBed.inject(QUESTIONS_TOKEN);

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
        buttonFields.forEach(({name}) => {
          expect(name)
            .withContext('Expected radio button names in a group to match')
            .toEqual(id);
        });
        const answers = buttonFields.map(({value, label}) => ({value, label}));
        return {id, legend, answers};
      })
    );

    expect(radioQuestions).toEqual(
      sourceQuestions.map(({id, text, answers}) => {
        const answersArray = Object.entries(answers)
          .map(([value, label]) => ({
            value,
            label: jasmine.stringContaining(label),
          }))
          .sort((a, b) => a.value.localeCompare(b.value));
        return {
          id,
          legend: jasmine.stringContaining(text),
          answers: answersArray,
        };
      })
    );
  });
});
