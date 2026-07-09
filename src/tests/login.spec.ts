import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';

test.describe('Amazon Login Page', () => {

  test('should display email field on login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await expect(page.locator('#ap_email_login')).toBeVisible();
  });

  test('should fill email and click continue', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.fillEmail(users.valid.email);
    await loginPage.clickContinue();

    await expect(page).toHaveURL(/signin/);
  });

  test('should show error for empty email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.clickContinue();

    await expect(page.getByText('Insira seu número de celular ou e-mail')).toBeVisible();
  });

});
