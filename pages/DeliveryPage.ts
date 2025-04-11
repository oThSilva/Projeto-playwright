import { Page } from 'playwright';
import { selectors, urls } from '../constants';
import { takeScreenshot } from '../helpers/screenshot';

export class DeliveryPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(): Promise<void> {
        await this.page.goto(urls.deliveryUrl);
    }

    async fillName(name: string): Promise<void> {
        await this.page.fill(selectors.nomeInput, name);
    }

    async fillCPF(cpf: string): Promise<void> {
        await this.page.fill(selectors.cpfInput, cpf);
    }

    async fillEmail(email: string): Promise<void> {
        await this.page.fill(selectors.emailInput, email);
    }

    async fillPhone(phone: string): Promise<void> {
        await this.page.fill(selectors.telefoneInput, phone);
    }

    async fillPostalCode(postalCode: string): Promise<void> {
        await this.page.fill(selectors.cepInput, postalCode);
        await this.page.click(selectors.buscarCepButton);
        // Esperar o preenchimento automático dos campos de endereço
        await this.page.waitForTimeout(1000);
    }

    async fillAddressNumber(number: string): Promise<void> {
        await this.page.fill(selectors.numeroInput, number);
    }

    async selectDeliveryMethod(method: string): Promise<void> {
        await this.page.click(selectors.metodoEntrega(method));
    }

    async uploadCNH(filePath: string): Promise<void> {
        const fileChooser = await this.page.setInputFiles(selectors.cnhInput, filePath);
    }

    async submitForm(): Promise<void> {
        await this.page.click(selectors.submitButton);
    }

    async confirmSuccess(): Promise<boolean> {
        try {
            await this.page.waitForSelector(selectors.sucessoCadastroButton, { timeout: 5000 });
            await takeScreenshot(this.page, 'success-registration');
            await this.page.click(selectors.sucessoCadastroButton);
            return true;
        } catch (error) {
            await takeScreenshot(this.page, 'registration-error');
            return false;
        }
    }

    async fillAllFields(data: {
        nome: string;
        cpf: string;
        email: string;
        telefone: string;
        cep: string;
        numero: string;
        metodoEntrega: string;
        caminhoArquivoCNH: string;
    }): Promise<void> {
        await this.fillName(data.nome);
        await this.fillCPF(data.cpf);
        await this.fillEmail(data.email);
        await this.fillPhone(data.telefone);
        await this.fillPostalCode(data.cep);
        await this.fillAddressNumber(data.numero);
        await this.selectDeliveryMethod(data.metodoEntrega);
        await this.uploadCNH(data.caminhoArquivoCNH);
    }
}