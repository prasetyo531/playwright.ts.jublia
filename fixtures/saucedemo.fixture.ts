import { expect, test as base } from '@playwright/test';
import { AppNavigationComponent } from '../components/app-navigation.component.js';
import { CartPage } from '../pages/cart.page.js';
import { CheckoutPage } from '../pages/checkout.page.js';
import { InventoryPage } from '../pages/inventory.page.js';
import { LoginPage } from '../pages/login.page.js';

type SauceDemoFixtures = {
  appNavigation: AppNavigationComponent;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  inventoryPage: InventoryPage;
  loginPage: LoginPage;
};

export const test = base.extend<SauceDemoFixtures>({
  appNavigation: async ({ page }, use) => {
    await use(new AppNavigationComponent(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
