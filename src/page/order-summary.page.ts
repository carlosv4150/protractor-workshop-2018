import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('.cart_navigation span');
  }

  public async proceedCheckout(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
