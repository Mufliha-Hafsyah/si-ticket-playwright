import { test, expect } from '@playwright/test';

test('berpindah halaman aplikasi ticketing', async ({ page }) => {
  // 1. Buka halaman depan (Landing Page)
  await page.goto('/');
  // Pastikan halaman depan termuat (misal ngecek ada tombol 'Login' atau teks tertentu)
  await expect(page.getByRole('link', { name: /log in/i }).first()).toBeVisible();
  
  // 2. Pindah ke halaman katalog event
  await page.goto('/events');
  // Cek apakah URL berubah (opsional)
  await expect(page).toHaveURL(/.*events.*/i);
  
  // 3. Kembali ke halaman login
  await page.goto('/login');
  await expect(page.getByRole('button', { name: /log in/i })).toBeVisible();
});