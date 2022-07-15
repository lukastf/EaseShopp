

const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

const celularMask = value => {
    return value
    .replace(/\D/g, '')             //Remove tudo o que não é dígito
    .replace(/^(\d{2})(\d)/g, '($1) $2') //Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d)(\d{4})$/, '$1-$2')  //Coloca hífen entre o quarto e o quinto dígitos
}

const rgMask = value => {
    return value
    .replace(/\D/g,"")
    .replace(/(\d{1,2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    //.replace(/(\d{3})(\d)$/, '$1.$2')
    .replace(/(\d{1})(\d)$/, '$1-$2')
    //.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4")
}

const dataNascMask = value => {
    return value
    .replace(/\D/g,"")
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)$/, '$1/$2')
    //.replace(/(\d{2})(\d{2})(\d{4})$/,"$1/$2/$3")
}

const numberMask = value => {
    return value
    .replace(/\D/g,"")
}


const cnpjMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}


const cepMask = value => {
    return value
    .replace(/\D/g,"")
    .replace(/(\d{5})(\d)/, '$1-$2')
    //.replace(/(\d{2})(\d)$/, '$1-$2')
}

let obj = {
    cpfMask:cpfMask,
    celularMask:celularMask,
    rgMask: rgMask,
    dataNascMask: dataNascMask,
    //moneyMask: moneyMask,
    numberMask: numberMask,
    cnpjMask: cnpjMask,
    cepMask: cepMask
}

module.exports = obj;