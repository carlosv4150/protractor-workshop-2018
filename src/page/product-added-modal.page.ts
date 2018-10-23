import { $, ExpectedConditions, ElementFinder, browser } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#layer_cart .button-container a');
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkoutButton), 3000);
    await this.checkoutButton.click();
  }
}
