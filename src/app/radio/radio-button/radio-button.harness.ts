import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  BaseHarnessFilters,
  ComponentHarness,
  HarnessPredicate,
} from '@angular/cdk/testing';

/**
 * Options to filter radio button harness instances.
 */
export interface RadioButtonHarnessFilters extends BaseHarnessFilters {
  /** Filter to instances with name attributes equal to the given. */
  name?: string;
  /** Filter to instances with value attributes equal to the given. */
  value?: string;
  /** Filter to instances with checked attributes equal to the given. */
  checked?: boolean;
  /** Filter to instances with labels matching the given. */
  label?: string | RegExp;
}

export class RadioButtonHarness extends ComponentHarness {
  static hostSelector = 'app-radio-button';

  /**
   * Get a `HarnessPredicate` for searching for radio buttons.
   *
   * @param options Options to filter radio button instances.
   * @returns a `HarnessPredicate` configured with the given options.
   */
  static with(
    options: RadioButtonHarnessFilters = {}
  ): HarnessPredicate<RadioButtonHarness> {
    return new HarnessPredicate(RadioButtonHarness, options)
      .addOption(
        'name',
        options.name,
        async (harness, name) => (await harness.getName()) === name
      )
      .addOption(
        'value',
        options.value,
        async (harness, value) => (await harness.getValue()) === value
      )
      .addOption(
        'checked',
        options.checked,
        async (harness, checked) => (await harness.isChecked()) == checked
      )
      .addOption('label', options.label, (harness, label) =>
        HarnessPredicate.stringMatches(harness.getLabelText(), label)
      );
  }

  private _input = this.locatorFor('input');
  private _label = this.locatorFor('label');

  async getName(): Promise<string | null> {
    const input = await this._input();
    return input.getAttribute('name');
  }

  async getValue(): Promise<string | null> {
    const input = await this._input();
    return input.getProperty('value');
  }

  async isChecked(): Promise<boolean> {
    const input = await this._input();
    const checked = await input.getProperty('checked');
    return coerceBooleanProperty(checked);
  }

  /**
   * Select the radio button to mark it checked.
   */
  async check(): Promise<void> {
    const isChecked = await this.isChecked();
    if (!isChecked) {
      const label = await this._label();
      return label.click();
    }
  }

  async getLabelText(): Promise<string> {
    const label = await this._label();
    return label.text();
  }
}
