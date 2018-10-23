import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPaymentButton: ElementFinder;

  constructor () {
    this.bankPaymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPayment(): Promise<void> {
    await this.bankPaymentButton.click();
  }
}
