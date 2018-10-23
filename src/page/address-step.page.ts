import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkoutAddressButton: ElementFinder;
  constructor () {
    this.checkoutAddressButton = $('.cart_navigation button[name="processAddress"]');
  }

  public async checkoutAddress(): Promise<void> {
    await this.checkoutAddressButton.click();
  }
}
