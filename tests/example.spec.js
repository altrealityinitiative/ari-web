import base, { expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const test = base.extend({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .exclude("#commonly-reused-element-with-known-issue");

    await use(makeAxeBuilder);
  },
});

export { test, expect };

test("example using custom fixture", async ({ page, makeAxeBuilder }) => {
  await page.goto("https://www.altrealityinitiative.com/");

  const accessibilityScanResults = await makeAxeBuilder()
    // Automatically uses the shared AxeBuilder configuration,
    // but supports additional test-specific configuration too
    .include("#specific-element-under-test")
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
