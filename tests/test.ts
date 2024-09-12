import { expect, test } from '@playwright/test';

test('index page has expected content', async ({ page }) => {
  await page.goto('/');
  expect(page.getByText('Build at a higher Frequency')).toBeDefined();
});

test('index page has a popout', async ({ page }) => {
  await page.goto('/');
  const popoutButton = page.getByText('Get Notified');
  expect(popoutButton).toBeDefined();

  await popoutButton.click();

  expect(page.getByText("Interested in Frequency's ecosystem?")).toBeDefined();
});
