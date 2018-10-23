import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private orderConfirmedText: ElementFinder;

  constructor () {
    this.orderConfirmedText = $('#center_column > div > p > strong');
  }

  public async getOrderConfirmedText(): Promise<void> {
    await expect(this.orderConfirmedText.getText()).toBe('Your order on My Store is complete.');
  }
}
