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

export async function getAllAccounts() {
    const resp = await axios.get(apiUrl + PATHS.GET.ALL_ACCOUNTS);
    return resp;
}

export async function getBalance() {
    const resp = await axios.get(apiUrl + PATHS.GET.BALANCE + "12345678912");
    return resp.data.saldo;
}

export async function getTransactions() {
    const resp = await axios.get(
        apiUrl + PATHS.GET.TRANSACTIONS + "12345678912"
    );
    return resp.data.operacoes;
}
