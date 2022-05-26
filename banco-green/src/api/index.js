import axios from "axios";

const apiUrl = "https://api-contas-trade4devs.herokuapp.com";
const PATHS = {
    GET: {
        ALL_ACCOUNTS: "/conta",
        BALANCE: "/conta/saldo/",
        TRANSACTIONS: "/conta/extrato/",
    },
    CREATE: {
        ACCOUNT: "/conta",
        TRANSACTION: "/conta/operacao",
    },
    LOGIN: "/login",
};

const TEST_USER_CPF = "12345678912";

export async function getAllAccounts() {
    const resp = await axios.get(apiUrl + PATHS.GET.ALL_ACCOUNTS);
    return resp;
}

export async function getBalance(CPF = TEST_USER_CPF) {
    const resp = await axios.get(apiUrl + PATHS.GET.BALANCE + CPF);
    return resp.data.saldo;
}

export async function getTransactions(CPF = TEST_USER_CPF) {
    const resp = await axios.get(apiUrl + PATHS.GET.TRANSACTIONS + CPF);
    return resp.data.operacoes;
}

export async function login(email, password) {
    const myHeaders = {
        "Content-type": "application/json;charset=UTF-8",
    };
    const obj = {
        email,
        senha: password,
    };
    const myConf = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(obj),
    };

    const resp = await axios.post(apiUrl + PATHS.LOGIN, myConf);
    return resp;
}

export async function createAccount(name, email, password, phone, date, CPF) {
    const myHeaders = {
        "Content-type": "application/json;charset=UTF-8",
    };
    const obj = {
        nome: name,
        email: email,
        senha: password,
        telefone: phone,
        dataNascimento: date,
        cpf: CPF,
    };
    const myConf = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(obj),
    };
    const resp = await axios.post(apiUrl + PATHS.CREATE.ACCOUNT, myConf);
    return resp;
}

export async function createTransaction(origin, destiny, value) {
    const myHeaders = {
        "Content-type": "application/json;charset=UTF-8",
    };
    const obj = {
        remetente: origin,
        destinatario: destiny,
        valor: value,
    };
    const myConf = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(obj),
    };
    const resp = await axios.post(apiUrl + PATHS.CREATE.TRANSACTION, myConf);
    return resp;
}
