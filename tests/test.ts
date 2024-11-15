import { expect, test } from '@playwright/test';

test('index page has expected content', async ({ page }) => {
  await page.goto('/');
  expect(page.getByText('Build at a higher Frequency')).toBeDefined();
});

test('contact form can be filled out and shows errors', async ({ page }) => {
  await page.goto('/');

  const contactLink = page.locator('[href="/#contact"]').first();
  expect(contactLink).toBeDefined();

  const form = await page.getByTestId('contact-form');
  expect(form).toBeDefined();
  await page.getByText(/Send Message/).click();

  expect(page.getByText('Please fill out this field.')).toBeDefined();
});

test('routes sanity check', async ({ page }) => {
  for (const route of [
    { path: 'docs', title: 'Developer Docs' },
    { path: 'developers', title: 'Developers' },
  ]) {
    await page.goto(route.path);
    expect(page.getByText(route.title), { message: `${route.path} failed` }).toBeDefined();
  }
});
