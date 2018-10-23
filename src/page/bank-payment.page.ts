import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('a.bankwire');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPaymentButton.click();
  }
}
