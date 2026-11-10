import { test, expect } from '@playwright/test';

test('user admin berhasil login', async ({ page }) => {
  await page.goto('/login');
  
  // 1. Isi form login
  await page.locator('input[name="email"]').fill('admin@joinfest.com');
  await page.locator('input[name="password"]').fill('password');
  
  // 2. Klik tombol "Masuk"
  await page.getByRole('button', { name: /masuk/i }).click();
  
  // 3. Pastikan masuk ke halaman admin (tunggu sampai 10 detik)
  await expect(page).toHaveURL(/.*admin.*/i, { timeout: 10000 }); 
});