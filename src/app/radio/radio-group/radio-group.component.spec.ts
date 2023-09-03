import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RadioButtonComponent} from '../radio-button/radio-button.component';
import {RadioGroupComponent} from './radio-group.component';
import {RadioGroupHarness} from './radio-group.harness';

@Component({
  selector: 'app-test-radio-group',
  template: `<app-radio-group>
    {{ content }}
    <app-radio-button
      *ngFor="let btn of radioButtons"
      [name]="btn.name"
      [value]="btn.value"
    >
      {{ btn.label }}
    </app-radio-button>
  </app-radio-group>`,
})
class TestRadioGroupComponent {
  content = 'Test Group';

  radioButtons: Array<{name: string; value: string; label: string}> = [
    {
      name: 'testGroup',
      value: 'testValue1',
      label: 'Test Value 1',
    },
    {
      name: 'testGroup',
      value: 'testValue2',
      label: 'Test Value 2',
    },
  ];
}

describe('RadioGroupComponent', () => {
  let fixture: ComponentFixture<TestRadioGroupComponent>;
  let component: TestRadioGroupComponent;
  let element: HTMLElement;
  let harness: RadioGroupHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestRadioGroupComponent],
      imports: [RadioGroupComponent, RadioButtonComponent],
    });
    fixture = TestBed.createComponent(TestRadioGroupComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
    const loader = TestbedHarnessEnvironment.loader(fixture);
    harness = await loader.getHarness(RadioGroupHarness);
  });

  it('should create', () => {
    expect(
      fixture.debugElement.query(By.directive(RadioGroupComponent))
        .componentInstance
    ).toBeAnything();
  });

  it('should render fieldset with legend', () => {
    const fieldsetEl = element.querySelector('fieldset');
    expect(fieldsetEl).withContext('Expected fieldset element').toBeAnything();
    expect(fieldsetEl?.querySelector('legend'))
      .withContext('Expected legend element')
      .toBeAnything();
  });

  it('should render content in legend', async () => {
    expect(component.content.length)
      .withContext('Expected non-empty content to test for')
      .toBeGreaterThan(0);
    const text = await harness.getLegendText();
    expect(text).toEqual(component.content);
  });

  it('should render radio button content', async () => {
    expect(component.radioButtons.length)
      .withContext('Expected non-empty radio button data to test for')
      .toBeGreaterThan(0);
    const buttons = await harness.getRadioButtons();
    const buttonFields = await Promise.all(
      buttons.map(async (btn) =>
        Promise.all([btn.getName(), btn.getValue(), btn.getLabelText()]).then(
          ([name, value, label]) => ({name, value, label})
        )
      )
    );
    expect(buttonFields).toEqual(component.radioButtons);
  });
});
