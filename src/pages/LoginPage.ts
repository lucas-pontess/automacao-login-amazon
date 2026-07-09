import {Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly emailInput = '#ap_email_login';
    private readonly continueButton = '#continue input';
    private readonly signInLink = '#nav-link-accountList-nav-line-1';
    private readonly cookieBanner = '#sp-cc-accept';

    constructor(page: Page) {
        super(page);
    }
    
    async navigate(): Promise<void> {
        await this.navigateTo('/');
        await this.handlecookieBanner();
        await this.page.locator(this.signInLink).click();
    }

    private async handlecookieBanner(): Promise<void> {
        const banner = this.page.locator(this.cookieBanner);
        if(await banner.isVisible({timeout: 3000}).catch(() => false)) {
            await banner.click();
        }
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.locator(this.emailInput).fill(email);
    }

    async clickContinue(): Promise<void> {
        await this.page.locator(this.continueButton).click();

    }
}