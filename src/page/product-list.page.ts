import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private listButton: ElementFinder;
  private addToCarButton: ElementFinder;

  constructor () {
    this.listButton = $('.icon-th-list');
    this.addToCarButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToListView(): Promise<void> {
    await this.listButton.click();
  }

  public async addToCart(): Promise<void> {
    await this.addToCarButton.click();
  }
}
