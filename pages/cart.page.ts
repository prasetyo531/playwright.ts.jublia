import type { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly heading: Locator;
  readonly items: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Your Cart', exact: true });
    this.items = page.getByTestId('cart-list').getByTestId('inventory-item');
    this.checkoutButton = page.getByTestId('checkout');
    this.continueShoppingButton = page.getByTestId('continue-shopping');
  }

  getItem(productName: string): Locator {
    return this.items.filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async removeProduct(productName: string): Promise<void> {
    await this.getItem(productName)
      .getByRole('button', { name: 'Remove', exact: true })
      .click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
