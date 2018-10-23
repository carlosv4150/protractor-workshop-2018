import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private orderConfirmedText: ElementFinder;

  constructor () {
    this.orderConfirmedText = $('.cheque-indent strong.dark');
  }

  public async getOrderConfirmedText(): Promise<void> {
    await expect(this.orderConfirmedText.getText()).toBe('Your order on My Store is complete.');
  }
}
