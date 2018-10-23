import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutAddressButton: ElementFinder;
  constructor () {
    this.checkoutAddressButton = $('#center_column > form > p > button > span');
  }

  public async checkoutAddress(): Promise<void> {
    await this.checkoutAddressButton.click();
  }
}
