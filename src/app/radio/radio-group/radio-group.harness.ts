import {ComponentHarness} from '@angular/cdk/testing';
import {
  RadioButtonHarness,
  RadioButtonHarnessFilters,
} from '../radio-button/radio-button.harness';

export class RadioGroupHarness extends ComponentHarness {
  static hostSelector = 'app-radio-group';

  private _legend = this.locatorFor('legend');

  async getLegendText(): Promise<string> {
    const legend = await this._legend();
    return legend.text();
  }

  /**
   * Get a list of radio buttons in the group.
   *
   * @param filter An optional filter for radio buttons returned.
   */
  async getRadioButtons(
    filter?: RadioButtonHarnessFilters
  ): Promise<RadioButtonHarness[]> {
    return this.locatorForAll(RadioButtonHarness.with(filter))();
  }

  /**
   * Get the checked radio button in the group. The first found will be
   *   returned.
   */
  async getCheckedRadioButton(): Promise<RadioButtonHarness | null> {
    const buttons = await this.getRadioButtons();
    for (const button of buttons) {
      if (await button.isChecked()) {
        return button;
      }
    }
    return null;
  }

  /**
   * Get the value of the checked radio button in the group.
   */
  async getCheckedValue(): Promise<string | null> {
    const checkedRadio = await this.getCheckedRadioButton();
    return !checkedRadio ? null : checkedRadio.getValue();
  }

  /**
   * Select a radio button in the group.
   *
   * @param filter An optional filter for radio buttons. The first match
   *   will be selected.
   */
  async checkRadioButton(filter?: RadioButtonHarnessFilters): Promise<void> {
    const buttons = await this.getRadioButtons(filter);
    if (!buttons.length) {
      throw Error(
        `Could not find radio button with filter: ${JSON.stringify(filter)}`
      );
    }
    return buttons[0].check();
  }
}
