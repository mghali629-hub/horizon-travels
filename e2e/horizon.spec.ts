import { test, expect } from '@playwright/test';

test.describe('Horizon Travels E2E Automation Suite', () => {
  test('should load landing page with hero & navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=HORIZON')).toBeVisible();
    await expect(page.locator('text=Unveil Earth’s Most Extraordinary Havens')).toBeVisible();
  });

  test('should navigate to all tours and inspect tour detail', async ({ page }) => {
    await page.goto('/tours');
    await expect(page.locator('text=World Expeditions')).toBeVisible();
  });

  test('should test itinerary page route', async ({ page }) => {
    await page.goto('/tours/1/itinerary');
    await expect(page.locator('text=Itinerary')).toBeVisible();
  });

  test('should navigate to jet charters page', async ({ page }) => {
    await page.goto('/private-jets');
    await expect(page.locator('text=HORIZON')).toBeVisible();
  });

  test('should navigate to yacht charters page', async ({ page }) => {
    await page.goto('/yacht-charters');
    await expect(page.locator('text=HORIZON')).toBeVisible();
  });

  test('should open concierge contact page and submit form', async ({ page }) => {
    await page.goto('/contact');
    await page.fill('input[placeholder*="Lord / Lady"]', 'Lord Vance');
    await page.fill('input[placeholder*="concierge@vip.com"]', 'vance@vip.com');
    await page.click('button:has-text("Submit Inquiry to Concierge")');
    await expect(page.locator('text=Inquiry Received')).toBeVisible();
  });
});
