import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { products } from '../../test-data/products.js';
import { standardUser } from '../../test-data/users.js';

test('standard user can remove a product from the cart', async ({
  appNavigation,
  cartPage,
  inventoryPage,
  loginPage,
}) => {
  await loginPage.open();
  await loginPage.signIn(standardUser);
  await inventoryPage.addProductToCart(products.backpack.name);
  await appNavigation.openCart();

  await cartPage.removeProduct(products.backpack.name);

  await expect(cartPage.items).toHaveCount(0);
  await expect(appNavigation.cartBadge).toHaveCount(0);
});
