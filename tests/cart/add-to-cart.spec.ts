import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { standardUser } from '../../test-data/users.js';
import { products } from '../../test-data/products.js';

test('standard user can add a product to the cart', async ({
  appNavigation,
  cartPage,
  inventoryPage,
  loginPage,
}) => {
  await loginPage.open();
  await loginPage.signIn(standardUser);

  await inventoryPage.addProductToCart(products.backpack.name);
  await expect(appNavigation.cartBadge).toHaveText('1');

  await appNavigation.openCart();
  await expect(cartPage.getItem(products.backpack.name)).toBeVisible();
});
