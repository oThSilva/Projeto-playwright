import { Page } from 'playwright';
import fs from 'fs';
import path from 'path';

export async function takeScreenshot(page: Page, name: string): Promise<void> {
    const screenshotDir = path.join(process.cwd(), 'screenshots');

    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filePath = path.join(screenshotDir, `${name}-${timestamp}.png`);

    await page.screenshot({ path: filePath, fullPage: true });
    console.log(`Screenshot saved to: ${filePath}`);
}