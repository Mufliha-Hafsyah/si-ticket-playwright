import { test, expect } from '@playwright/test';

test('user admin berhasil login', async ({ page }) => {
  await page.goto('/login');
  
  await page.locator('input[name="email"]').fill('admin@joinfest.com');
  await page.locator('input[name="password"]').fill('password');
  await page.getByRole('button', { name: /masuk/i }).click();
  
  // Cek apakah masuk ke admin ATAU ke verifikasi email (tanda login sukses)
  await expect(page).toHaveURL(/.*(admin|verify-email).*/i, { timeout: 10000 }); 
});