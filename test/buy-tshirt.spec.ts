import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, PaymentStepPage,
  ProductListPage, ProductAddedModalPage, OrderSummaryPage, ShippingStepPage,
  SignInStepPage, SummaryStepPage} from '../src/page';

describe('Given a shopping page', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });
  describe('When I want to buy a T-shirt', () => {

    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const productListPage: ProductListPage = new ProductListPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.goToListView();
      await productListPage.addToCart();
      await productAddedModalPage.goToCheckout();
      await orderSummaryPage.proceedCheckout();
    });
    describe('And I log in into the application ', () => {

      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.fillLoginForm();
      });

      describe('And I select the default address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.checkoutAddress();
        });

        describe('And I pay to the bank', () => {
          beforeAll(async () => {
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await shippingStepPage.acceptTerms();
            await shippingStepPage.proceedCheckoutShipping();
            await bankPaymentPage.goToBankPayment();
            await paymentStepPage.confirmOrder();
          });

          it('Then should be bought a t-shirt', async () => {
            const summaryStepPage: SummaryStepPage = new SummaryStepPage();
            await summaryStepPage.getOrderConfirmedText();
          });
        });
      });
    });
  });
});
