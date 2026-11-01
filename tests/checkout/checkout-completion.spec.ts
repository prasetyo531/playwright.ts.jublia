import { expect, test } from '@/fixtures/saucedemo.fixture.js';
import { checkoutInformation } from '@/test-data/checkout.js';
import { products } from '@/test-data/products.js';
import { standardUser } from '@/test-data/users.js';

test.beforeEach(async ({ appNavigation, cartPage, inventoryPage, loginPage }) => {
  await test.step('Sign in, add the backpack, and start checkout', async () => {
    await loginPage.open();
    await loginPage.signIn(standardUser);
    await inventoryPage.addProductToCart(products.backpack.name);
    await appNavigation.openCart();
    await cartPage.proceedToCheckout();
  });
});

test('standard user can complete checkout', async ({
  checkoutPage,
}) => {
  await test.step('Enter checkout information and place the order', async () => {
    await checkoutPage.fillInformation(checkoutInformation);
    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();
  });

  await test.step('Verify the order confirmation', async () => {
    await expect(checkoutPage.confirmationHeading).toHaveText('Thank you for your order!');
  });
});
