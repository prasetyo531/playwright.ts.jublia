import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { standardUser } from '../../test-data/users.js';

test('standard user can log out', async ({ appNavigation, loginPage }) => {
  await test.step('Sign in as the standard user', async () => {
    await loginPage.open();
    await loginPage.signIn(standardUser);
  });

  await test.step('Log out from the app menu', async () => {
    await appNavigation.logOut();
  });

  await test.step('Verify the login form is available', async () => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });
});
