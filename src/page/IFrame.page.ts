import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private iframe: ElementFinder;

  constructor () {
    this.iframe = $('#IF1');
  }

  public async setHeight(height:string): Promise<void> {
    browser.executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public getHeight() {
    return browser.executeScript('return arguments[0].height', this.iframe);
  }
}
