import { expect, test } from '@/fixtures/saucedemo.fixture.js';
import { products } from '@/test-data/products.js';
import { standardUser } from '@/test-data/users.js';

test.beforeEach(async ({ inventoryPage, loginPage }) => {
  await test.step('Sign in and add the backpack', async () => {
    await loginPage.open();
    await loginPage.signIn(standardUser);
    await inventoryPage.addProductToCart(products.backpack.name);
  });
});

test('standard user can remove a product from the cart', async ({
  appNavigation,
  cartPage,
}) => {
  await test.step('Remove the backpack from the cart', async () => {
    await appNavigation.openCart();
    await cartPage.removeProduct(products.backpack.name);
  });

  await test.step('Verify the cart is empty and the badge is absent', async () => {
    await expect(cartPage.items).toHaveCount(0);
    await expect(appNavigation.cartBadge).toHaveCount(0);
  });
});
