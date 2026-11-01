import type { Locator, Page } from '@playwright/test';

export class AppNavigationComponent {
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    this.cartLink = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async logOut(): Promise<void> {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
