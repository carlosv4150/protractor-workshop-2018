import { $, browser, ElementFinder } from 'protractor';

export class IFramePage {
  private iframe: ElementFinder;
  private titleElement: ElementFinder;

  constructor () {
    this.iframe = $('#IF1');
    this.titleElement = $('#content h1');
  }

  public async setHeight(height:string): Promise<void> {
    await browser
    .executeScript(`document.querySelector("#IF1").setAttribute('height', ${height});`);
  }

  public getHeight() {
    return browser.executeScript('return arguments[0].height', this.iframe);
  }

  public getTitle() {
    return browser.executeScript('return arguments[0].tagName', this.titleElement);
  }

  public moveToFirstIframe() {
    return browser.switchTo().frame(this.iframe.getWebElement());
  }

  public moveOutOfIframe() {
    return browser.switchTo().defaultContent();
  }
}
