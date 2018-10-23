import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('a.standard-checkout span');
  }

  public async proceedCheckout(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
