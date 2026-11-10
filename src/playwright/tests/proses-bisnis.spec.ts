import { test, expect } from '@playwright/test';

test('user admin berhasil login', async ({ page }) => {
  await page.goto('/login');
  
  // 1. Isi kredensial admin (dari ComprehensiveSeeder)
  await page.getByLabel('Email').fill('admin@joinfest.com');
  await page.getByLabel('Password').fill('password');
  
  // 2. Klik tombol login
  await page.getByRole('button', { name: /log in/i }).click();
  
  // 3. Pastikan diarahkan ke halaman admin
  // Regex /.*admin.*/i artinya: "Terdapat kata 'admin' di URL, tanpa peduli huruf besar/kecil"
  await expect(page).toHaveURL(/.*admin.*/i); 
});