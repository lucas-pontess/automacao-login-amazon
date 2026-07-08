import {Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly emailInput = '#ap_email_login';
    private readonly continueButton = '#continue input';

    constructor(page: Page) {
        super(page);
    }
    
    async navigate(): Promise<void> {
        await this.navigateTo('/ap/signin')
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.locator(this.emailInput).fill(email);
    }

    async clickContinue(): Promise<void> {
        await this.page.locator(this.continueButton).click();

    }
}