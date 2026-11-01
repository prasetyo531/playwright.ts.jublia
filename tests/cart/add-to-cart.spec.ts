import { expect, test } from '@/fixtures/saucedemo.fixture.js';
import { standardUser } from '@/test-data/users.js';
import { products } from '@/test-data/products.js';

test.beforeEach(async ({ loginPage }) => {
  await test.step('Sign in as the standard user', async () => {
    await loginPage.open();
    await loginPage.signIn(standardUser);
  });
});

test('standard user can add a product to the cart', async ({
  appNavigation,
  cartPage,
  inventoryPage,
}) => {
  await test.step('Add the backpack and verify the cart badge', async () => {
    await inventoryPage.addProductToCart(products.backpack.name);
    await expect(appNavigation.cartBadge).toHaveText('1');
  });

  await test.step('Verify the backpack is in the cart', async () => {
    await appNavigation.openCart();
    await expect(cartPage.getItem(products.backpack.name)).toBeVisible();
  });
});
