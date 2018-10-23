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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToListView();
    await productListPage.addToCart();
    await productAddedModalPage.goToCheckout();
    await orderSummaryPage.proceedCheckout();
    await signInStepPage.fillLoginForm();
    await addressStepPage.checkoutAddress();
    await shippingStepPage.acceptTerms();
    await shippingStepPage.proceedCheckoutShipping();
    await bankPaymentPage.goToBankPayment();
    await paymentStepPage.confirmOrder();
    await summaryStepPage.getOrderConfirmedText();
  });
});
