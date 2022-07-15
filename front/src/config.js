
export const siteUrl = "http://localhost:3000";
export const serverUrl = "http://localhost:3001";
export const serverFrete = "http://localhost:3002/usuarios/calcularFrete";

//export const siteUrl = "https://easeshopp.com.br";
//export const serverUrl = "https://easeshopp.com.br:81";
//export const serverFrete = "https://easeshopp.com.br:82/usuarios/calcularFrete";

export const carrinhoSessionTime = () => {
    let dataAtual = new Date().getTime();
    let dezDias = 10 * 24 * 60 * 60 * 1000;
    let session = dataAtual + dezDias;
    return session;
} // 10 dias

export const usuarioSessionTime = () => {
    let dataAtual = new Date().getTime();
    let cincoHoras = 5 * 60 * 60 * 1000;
    let session = dataAtual + cincoHoras;
    return session;
} // 5 horas

export const currentDateTime = () => {
    let dataAtual = new Date().getTime();
    return dataAtual;
}

export const key = "autoLoginFalseGentleGiantBBKing";