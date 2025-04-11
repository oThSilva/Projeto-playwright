import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { initBrowser, createContext, closeBrowser, page } from '../helpers/browser';
import { initPages } from '../helpers/pages';
import { userData } from '../constants';
import { takeScreenshot } from '../helpers/screenshot';

// Aumentar o timeout padrão para 30 segundos
setDefaultTimeout(30 * 1000);

Before(async () => {
    await initBrowser();
    await createContext();
});

After(async () => {
    await closeBrowser();
});

Given('that the user is on the Burger Eats page', async () => {
    const { deliveryPage } = initPages(page);
    await deliveryPage.navigate();
    await takeScreenshot(page, 'initial-page');
});

When('all fields are filled in correctly', async () => {
    const { deliveryPage } = initPages(page);
    await deliveryPage.fillAllFields(userData);
    await takeScreenshot(page, 'filled-form');
    await deliveryPage.submitForm();
});

Then('the registration is successful', async () => {
    const { deliveryPage } = initPages(page);
    const isSuccess = await deliveryPage.confirmSuccess();
    expect(isSuccess).toBeTruthy();
});