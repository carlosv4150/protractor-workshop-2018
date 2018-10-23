import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private submitLoginButton: ElementFinder;

  constructor () {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.submitLoginButton = $('#SubmitLogin');
  }

  public async fillLoginForm(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.submitLoginButton.click();
  }

}
