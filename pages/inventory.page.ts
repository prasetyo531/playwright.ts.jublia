import type { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly heading: Locator;
  readonly productList: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Products', exact: true });
    this.productList = page.getByTestId('inventory-list');
  }

  getProductCard(productName: string): Locator {
    return this.productList
      .getByTestId('inventory-item')
      .filter({ has: this.page.getByText(productName, { exact: true }) });
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.getProductCard(productName)
      .getByRole('button', { name: 'Add to cart', exact: true })
      .click();
  }
}
