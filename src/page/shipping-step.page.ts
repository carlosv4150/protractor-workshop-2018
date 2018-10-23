import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheck: ElementFinder;
  private checkoutShippingButton: ElementFinder;

  constructor () {
    this.termsOfServiceCheck = $('#cgv');
    this.checkoutShippingButton = $('#form > p > button > span');
  }

  public async acceptTerms(): Promise<void> {
    await this.termsOfServiceCheck.click();
  }

  public async proceedCheckoutShipping(): Promise<void> {
    await this.checkoutShippingButton.click();
  }
}
