import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
