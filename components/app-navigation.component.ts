import type { Locator, Page } from '@playwright/test';

export class AppNavigationComponent {
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  private readonly menuButton: Locator;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutButton = page.getByRole('button', { name: 'Logout', exact: true });
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async logOut(): Promise<void> {
    await this.menuButton.click();
    await this.logoutButton.click();
  }
}
