import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { checkoutInformation } from '../../test-data/checkout.js';
import { products } from '../../test-data/products.js';
import { standardUser } from '../../test-data/users.js';

test('standard user can complete checkout', async ({
  appNavigation,
  cartPage,
  checkoutPage,
  inventoryPage,
  loginPage,
}) => {
  await loginPage.open();
  await loginPage.signIn(standardUser);
  await inventoryPage.addProductToCart(products.backpack.name);
  await appNavigation.openCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillInformation(checkoutInformation);
  await checkoutPage.continueToOverview();
  await checkoutPage.finishOrder();

  await expect(checkoutPage.confirmationHeading).toHaveText('Thank you for your order!');
});
