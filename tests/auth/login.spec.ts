import { expect, test } from '../../fixtures/saucedemo.fixture.js';
import { standardUser } from '../../test-data/users.js';

test('standard user can log in and see the inventory', async ({
  page,
  loginPage,
}) => {
  await loginPage.open();
  await loginPage.signIn(standardUser);

  await expect(page).toHaveURL(/inventory\.html$/);
  await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
});
