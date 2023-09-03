import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RadioButtonComponent} from './radio-button.component';
import {RadioButtonHarness} from './radio-button.harness';

@Component({
  selector: 'app-test-radio-button',
  template: `<app-radio-button [name]="name" [value]="value">
    {{ content }}
  </app-radio-button>`,
})
class TestRadioButtonComponent {
  name = 'testName';
  value = 'testValue';
  content = 'Test content';
}

@Component({
  selector: 'app-test-checked-radio-buttons',
  template: `<app-radio-button
      [name]="definedAttributeName"
      [value]="'dan'"
      checked
    >
      Checked attribute
    </app-radio-button>
    <app-radio-button
      [name]="trueStringAttributeName"
      [value]="'tsan'"
      checked="true"
    >
      Checked string attribute
    </app-radio-button>
    <app-radio-button
      [name]="falseStringAttributeName"
      [value]="'fsan'"
      checked="false"
    >
      Unchecked string attribute
    </app-radio-button>
    <app-radio-button
      [name]="boundInputName"
      [value]="'bin'"
      [checked]="boundInputValue"
    >
      Bound checked input
    </app-radio-button>`,
})
class TestCheckedRadioButtonsComponent {
  readonly definedAttributeName = 'definedAttribute';
  readonly trueStringAttributeName = 'trueStringAttribute';
  readonly falseStringAttributeName = 'falseStringAttribute';
  readonly boundInputName = 'boundAttribute';
  boundInputValue = false;
}

describe('RadioButtonComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestRadioButtonComponent,
        TestCheckedRadioButtonsComponent,
      ],
      imports: [RadioButtonComponent],
    });
  });

  describe('radio button', () => {
    let fixture: ComponentFixture<TestRadioButtonComponent>;
    let component: TestRadioButtonComponent;
    let element: HTMLElement;
    let harness: RadioButtonHarness;

    beforeEach(async () => {
      fixture = TestBed.createComponent(TestRadioButtonComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      fixture.detectChanges();
      const harnessLoader = TestbedHarnessEnvironment.loader(fixture);
      harness = await harnessLoader.getHarness(RadioButtonHarness);
    });

    it('should create', () => {
      expect(
        fixture.debugElement.query(By.directive(RadioButtonComponent))
          .componentInstance
      ).toBeAnything();
    });

    it('should render radio input with a label', () => {
      // expect input-in-label style to associate label with input
      const labelEl = element.querySelector('label');
      expect(labelEl).withContext('Expected label element').toBeAnything();
      expect(labelEl?.querySelector('input[type=radio]'))
        .withContext('Expected radio input element')
        .toBeAnything();
    });

    it('should render content in label', async () => {
      expect(component.content.length)
        .withContext('Expected non-empty content to test for')
        .toBeGreaterThan(0);
      const text = await harness.getLabelText();
      expect(text).toEqual(component.content);
    });

    it('should apply name attribute on input', async () => {
      // NB the name attribute is desired so browsers recognize radio groups,
      //  supporting keyboard navigation
      expect(component.name.length)
        .withContext('Expected non-empty name to test for')
        .toBeGreaterThan(0);
      const name = await harness.getName();
      // TODO should harness not be used since this is important enough for an NB?
      expect(name).toEqual(component.name);
    });

    it('should apply value attribute on input', async () => {
      expect(component.value.length)
        .withContext('Expected non-empty value to test for')
        .toBeGreaterThan(0);
      const value = await harness.getValue();
      expect(value).toEqual(component.value);
    });
  });

  describe('checked input', () => {
    let fixture: ComponentFixture<TestCheckedRadioButtonsComponent>;
    let component: TestCheckedRadioButtonsComponent;
    let harnessLoader: HarnessLoader;

    beforeEach(async () => {
      fixture = TestBed.createComponent(TestCheckedRadioButtonsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      harnessLoader = TestbedHarnessEnvironment.loader(fixture);
    });

    it('should parse defined attribute', async () => {
      const harness = await harnessLoader.getHarness(
        RadioButtonHarness.with({name: component.definedAttributeName})
      );
      const isChecked = await harness.isChecked();
      expect(isChecked).toBeTrue();
    });

    it('should parse true string attribute', async () => {
      const harness = await harnessLoader.getHarness(
        RadioButtonHarness.with({name: component.trueStringAttributeName})
      );
      const isChecked = await harness.isChecked();
      expect(isChecked).toBeTrue();
    });

    it('should parse false string attribute', async () => {
      const harness = await harnessLoader.getHarness(
        RadioButtonHarness.with({name: component.falseStringAttributeName})
      );
      const isChecked = await harness.isChecked();
      expect(isChecked).toBeFalse();
    });

    it('should parse bound input', async () => {
      const harness = await harnessLoader.getHarness(
        RadioButtonHarness.with({name: component.boundInputName})
      );
      let isChecked = await harness.isChecked();
      expect(isChecked)
        .withContext("Expected 'checked' to reflect bound value")
        .toBe(component.boundInputValue);

      component.boundInputValue = !component.boundInputValue;
      fixture.detectChanges();
      isChecked = await harness.isChecked();
      expect(isChecked)
        .withContext("Expected 'checked' to reflect toggled bound value")
        .toBe(component.boundInputValue);
    });
  });
});
