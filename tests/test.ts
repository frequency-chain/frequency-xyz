import { expect, test } from '@playwright/test';

test('index page has expected content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Build at a higher Frequency')).toBeDefined();
});
