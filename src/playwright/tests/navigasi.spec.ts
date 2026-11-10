import { test, expect } from '@playwright/test';

test('berpindah halaman aplikasi ticketing', async ({ page }) => {
  // 1. Buka halaman depan (Landing Page)
  await page.goto('/');
  // Cukup pastikan halaman ter-load (ada teks JoinFest atau form)
  await expect(page.locator('body')).toBeVisible();
  
  // 2. Pindah ke halaman login
  await page.goto('/login');
  // Pastikan form login muncul dengan mengecek input email
  await expect(page.locator('input[name="email"]')).toBeVisible();
  
  // 3. Pindah ke halaman katalog event
  await page.goto('/events');
  await expect(page).toHaveURL(/.*events.*/i);
});