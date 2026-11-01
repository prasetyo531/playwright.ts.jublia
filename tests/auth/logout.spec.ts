import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { standardUser } from '../../test-data/users.js';

test('standard user can log out', async ({ appNavigation, loginPage }) => {
  await loginPage.open();
  await loginPage.signIn(standardUser);
  await appNavigation.logOut();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.submitButton).toBeVisible();
});
