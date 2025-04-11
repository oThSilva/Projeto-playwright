export const selectors = {
    nomeInput: 'input[name="fullName"]',
    cpfInput: 'input[name="cpf"]',
    emailInput: 'input[name="email"]',
    telefoneInput: 'input[name="whatsapp"]',
    cepInput: 'input[name="postalcode"]',
    buscarCepButton: 'input[value="Buscar CEP"]',
    numeroInput: 'input[name="address-number"]',
    metodoEntrega: (metodo: string) => `.delivery-method li:has-text("${metodo}")`,
    cnhInput: 'input[type="file"]',
    submitButton: 'form button[type="submit"]',
    sucessoCadastroButton: 'button.swal2-confirm',
};

export const userData = {
    nome: 'João da Silva',
    cpf: '15437351021',
    email: 'joao.silva@teste.com',
    telefone: '11999999999',
    cep: '04534011',
    numero: '10',
    metodoEntrega: 'Moto',
    caminhoArquivoCNH: './fixtures/cnh.jpg',
};

export const urls = {
    baseUrl: 'https://buger-eats-qa.vercel.app',
    deliveryUrl: 'https://buger-eats-qa.vercel.app/deliver',
};