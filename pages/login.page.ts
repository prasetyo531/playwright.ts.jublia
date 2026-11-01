import type { Locator, Page } from '@playwright/test';
import type { LoginCredentials } from '../types/saucedemo.types.js';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.submitButton = page.getByTestId('login-button');
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async signIn(credentials: LoginCredentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.submitButton.click();
  }
}
