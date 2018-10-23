import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, BankPaymentPage, PaymentStepPage,
  ProductListPage, ProductAddedModalPage, OrderSummaryPage, ShippingStepPage,
  SignInStepPage, SummaryStepPage} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToListView();
    await(browser.sleep(3000));
    await productListPage.addToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.goToCheckout();
    await(browser.sleep(3000));
    await orderSummaryPage.proceedCheckout();
    await(browser.sleep(5000));
    await signInStepPage.fillLoginForm();
    await(browser.sleep(3000));
    await addressStepPage.checkoutAddress();
    await(browser.sleep(3000));
    await shippingStepPage.acceptTerms();
    await(browser.sleep(3000));
    await shippingStepPage.proceedCheckoutShipping();
    await(browser.sleep(3000));
    await bankPaymentPage.goToBankPayment();
    await(browser.sleep(3000));
    await paymentStepPage.confirmOrder();
    await(browser.sleep(3000));
    await summaryStepPage.getOrderConfirmedText();
  });
});
