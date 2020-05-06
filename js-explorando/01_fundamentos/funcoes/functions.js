let showInfo = () => {
    return endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
       };
}

console.log(`O usuário mora em ${showInfo().cidade} / ${showInfo().uf}, no bairro ${showInfo().bairro}, na rua "${showInfo().rua}" com nº ${showInfo().numero}.`);