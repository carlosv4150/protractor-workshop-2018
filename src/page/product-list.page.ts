import { $$, browser, ElementArrayFinder, ElementFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementArrayFinder;

  constructor () {
    this.productList  = $$('.product-container');
  }

  private findByProduct(product: string): ElementFinder {
    return this.productList.filter((item: ElementFinder) =>
      item.$('.product-name').getText().then((text: string) => text.includes(product))).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const container = this.findByProduct(productName);

    await browser.actions().mouseMove(container.$('img')).perform();
    await container.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
