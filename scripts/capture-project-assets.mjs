import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const root = process.cwd();
const outputRoot = path.join(root, "public", "images", "projects");
const graceRoot = path.join(root, "resources", "projects", "grace", "design-screens");
const vastFile = String.raw`C:\Users\Legion\OneDrive - Singapore Management University\Attachments\3. April Term\3. Visual Analytics\Website\ISSS608-VAA\_site\TH_EX\TH_EX02\TH_EX02.html`;

fs.mkdirSync(path.join(outputRoot, "grace"), { recursive: true });
fs.mkdirSync(path.join(outputRoot, "vast"), { recursive: true });

const browser = await chromium.launch();

for (const screen of ["home", "detail", "deadlines"]) {
  const page = await browser.newPage({ viewport: { width: 620, height: 1060 }, deviceScaleFactor: 1.5 });
  await page.goto(pathToFileURL(path.join(graceRoot, `${screen}.html`)).href);
  await page.locator(".phone").screenshot({
    path: path.join(outputRoot, "grace", `${screen}.png`),
  });
  await page.close();
}

const vastPage = await browser.newPage({ viewport: { width: 1500, height: 1000 }, deviceScaleFactor: 1.25 });
await vastPage.goto(pathToFileURL(vastFile).href, { waitUntil: "load", timeout: 120_000 });
await vastPage.waitForSelector(".girafe svg", { timeout: 120_000 });
const widgets = vastPage.locator(".girafe");
const count = await widgets.count();
const selections = [
  { index: 0, name: "timeline" },
  { index: Math.min(3, count - 1), name: "leak-chain" },
  { index: Math.min(5, count - 1), name: "network" },
];

for (const selection of selections) {
  await widgets.nth(selection.index).screenshot({
    path: path.join(outputRoot, "vast", `${selection.name}.png`),
  });
}

await vastPage.close();
await browser.close();

console.log(`Captured ${3 + selections.length} project visuals.`);
