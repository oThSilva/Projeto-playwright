import { chromium, Browser, BrowserContext, Page } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

async function initBrowser(): Promise<void> {
    browser = await chromium.launch({
        headless: false,
        slowMo: 100,
    });
}

async function createContext(): Promise<void> {
    context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
        recordVideo: { dir: 'videos/' },
    });
    page = await context.newPage();
}

async function closeBrowser(): Promise<void> {
    await context?.close();
    await browser?.close();
}

export { initBrowser, createContext, closeBrowser, page };