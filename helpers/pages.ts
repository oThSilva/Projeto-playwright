import { Page } from 'playwright';
import { DeliveryPage } from '../pages/DeliveryPage';

export function initPages(page: Page) {
    return {
        deliveryPage: new DeliveryPage(page),
    };
}