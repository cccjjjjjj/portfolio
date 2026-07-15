import fs from "node:fs";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const screenshotDirectory = path.join(process.cwd(), "artifacts", "screenshots");

test.beforeAll(() => {
  fs.mkdirSync(screenshotDirectory, { recursive: true });
});

test("desktop homepage stays identity-only", async ({ page, browserName }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Charles Jr Ancheta",
  );
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Enter selected work/ })).toHaveCount(0);
  await expect(page.locator(".selected-work")).toHaveCount(0);
  await expect(page.locator(".home-about")).toHaveCount(0);
  await expect(page.locator(".visual-project-list")).toHaveCount(0);
  await expect(page.locator(".identity")).toBeHidden();
  await expect(page.locator(".site-footer")).toBeHidden();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  const verticalOverflow = await page.evaluate(() => document.documentElement.scrollHeight > window.innerHeight + 1);
  expect(verticalOverflow).toBe(false);
  if (browserName === "chromium") {
    await page.screenshot({ path: path.join(screenshotDirectory, "home-desktop.png"), fullPage: true });
  }
});

test("homepage remains scrollless on phone orientations", async ({ page }) => {
  for (const viewport of [{ width: 320, height: 568 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const metrics = await page.evaluate(() => ({
      horizontal: document.documentElement.scrollWidth > window.innerWidth,
      vertical: document.documentElement.scrollHeight > window.innerHeight + 1,
    }));
    expect(metrics).toEqual({ horizontal: false, vertical: false });
  }
});

test("primary navigation changes pages immediately", async ({ page }) => {
  const routes = [
    { label: "Work", path: "/work/" },
    { label: "Profile", path: "/profile/" },
    { label: "Contact", path: "/contact/" },
  ];

  for (const route of routes) {
    await page.goto("/");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: route.label }).click();
    await page.waitForURL(`**${route.path}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("route aperture responds without delaying navigation", async ({ page }) => {
  await page.goto("/");
  const workLink = page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Work" });
  await workLink.click();
  await page.waitForURL("**/work/");
  await expect(page.locator(".route-transition")).toBeAttached();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("mobile work page remains readable without hover", async ({ page, browserName }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/work/");

  await expect(page.locator(".title-project-list > li")).toHaveCount(5);
  await expect(page.locator(".project-list-index")).toHaveCount(5);
  await expect(page.locator(".project-media")).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Grace/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Embargo Breach/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Motor Risk Myths/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /ENSO Forecasting/ })).toContainText("Climate forecasting");
  await expect(page.locator(".title-project-list")).not.toContainText(/109 tests|5 views|10 myths|4 indicators|72 years/i);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  if (browserName === "chromium") {
    await page.screenshot({ path: path.join(screenshotDirectory, "work-mobile.png"), fullPage: true });
  }
});

test("profile combines experience, education, and capabilities", async ({ page, browserName }) => {
  await page.goto("/profile/");
  const curiaEntry = page.locator(".timeline li").filter({ hasText: "Curia Regis" });
  await expect(curiaEntry).toContainText("Project Management Intern");
  await expect(curiaEntry).toContainText("May 2026 · Present");
  await expect(curiaEntry.locator(".timeline-description")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Education" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Capabilities" })).toBeVisible();
  if (browserName === "chromium") {
    await page.screenshot({ path: path.join(screenshotDirectory, "profile-desktop.png"), fullPage: true });
  }
});

test("case study guides first and keeps evidence optional", async ({ page, browserName }) => {
  await page.goto("/work/poverty-forecasting/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Poverty Forecasting");
  await expect(page.locator(".journey-step")).toHaveCount(4);
  await expect(page.locator(".project-results > li")).toHaveCount(3);
  await expect(page.locator(".project-results")).toContainText("Scope");
  await expect(page.locator(".project-results")).toContainText("Finding");
  await expect(page.locator(".project-results")).toContainText("Published by Springer");
  await expect(page.locator(".project-ownership")).toContainText("Model developer and researcher");
  await expect(page.locator(".project-ownership")).toContainText("Collaborative Saint Louis University research team");
  await expect(page.locator(".project-ownership")).toContainText("2023–2026");
  await expect(page.locator(".case-evidence details")).not.toHaveAttribute("open", "");
  await expect(page.locator(".case-finding")).toContainText("Carry the limitations with the result.");
  if (browserName === "chromium") {
    await page.screenshot({ path: path.join(screenshotDirectory, "case-study-desktop.png"), fullPage: true });
  }
  await page.locator(".case-evidence summary").click();
  await expect(page.locator(".case-evidence-layout")).toContainText("Python");
  await expect(page.getByRole("link", { name: /View Springer publication/ })).toHaveAttribute(
    "href",
    "https://doi.org/10.1007/978-3-032-23515-2_43",
  );
});

test("contact form is minimal and preserves native validation", async ({ page, browserName }) => {
  await page.goto("/contact/");
  const html = await page.content();
  expect(html).toContain("mailto:charlesancheta26@gmail.com");
  expect(html).not.toContain("9299 6098");
  await expect(page.locator('.contact-form input:not([name="_gotcha"])')).toHaveCount(2);
  await expect(page.locator(".contact-form textarea")).toHaveCount(1);
  await expect(page.locator(".contact-form select")).toHaveCount(0);
  if (browserName === "chromium") {
    await page.screenshot({ path: path.join(screenshotDirectory, "contact-desktop.png"), fullPage: true });
  }

  await page.getByRole("button", { name: /Send message/ }).click();
  const name = page.getByLabel("Name");
  await expect(name).toBeFocused();
  const valid = await name.evaluate((input: HTMLInputElement) => input.validity.valid);
  expect(valid).toBe(false);
});

test("contact remains scrollless across representative viewports", async ({ page, browserName }) => {
  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 320, height: 568 },
    { width: 390, height: 844 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/contact/");
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
    const metrics = await page.evaluate(() => ({
      horizontal: document.documentElement.scrollWidth > window.innerWidth,
      vertical: document.documentElement.scrollHeight > window.innerHeight + 1,
    }));
    expect(metrics, `${viewport.width}x${viewport.height}`).toEqual({ horizontal: false, vertical: false });
    if (browserName === "chromium" && viewport.width === 390) {
      await page.screenshot({ path: path.join(screenshotDirectory, "contact-mobile.png"), fullPage: true });
    }
  }
});

test("public routes have no serious automated accessibility violations", async ({ page }) => {
  const routes = ["/", "/work/", "/work/grace/", "/profile/", "/contact/"];
  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) =>
      violation.impact === "serious" || violation.impact === "critical",
    );
    expect(serious, `${route}: ${serious.map((item) => item.id).join(", ")}`).toEqual([]);
  }
});

test("reduced motion keeps the signal field static and subtle", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".signal-field")).toBeVisible();
  await expect(page.locator(".signal-field")).toHaveCSS("opacity", "0.28");
  await expect(page.locator(".route-transition")).toBeAttached();
  await expect(page.locator(".route-transition")).toHaveCSS("opacity", "0");
  await expect(page.locator(".custom-cursor")).toHaveCount(0);
});

test("public copy contains no em dash", async ({ page }) => {
  for (const route of ["/", "/work/", "/profile/", "/contact/"]) {
    await page.goto(route);
    await expect(page.locator("body")).not.toContainText("—");
  }
});
