
import React from 'react';

const QuemSomos = () => {

    return (
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Quem Somos</h1>
            </div>
            <div className="col-12 text-left">
                <p style={{marginTop:"2rem"}}>
                    <span style={{marginLeft:"2rem"}}></span>A EaseShopp é uma empresa especializada na 
                    área de marketplace indoor, que promove otimização, facilidade de compras e liberdade 
                    aos clientes. Ela veio em ótima hora para possibilitar que você use nosso cartão e 
                    seus benefícios livremente em nosso site, contando com uma grande variedade de produtos 
                    disponíveis para uma compra segura e descomplicada, que com certeza suprirão as suas 
                    necessidades e expectativas.A EaseShopp teve início em abril de 2020, sua sede em 
                    São José do Rio Preto, como objetivo facilitar as compras e dar liberdade aos clientes, 
                    e capacidade de usar seus benefícios de forma livre.
                </p>
                {/*
                O Marketing Place (EaseShopp) teve início em abril de 2020, 
                    tendo sua sede em São José do Rio Preto, tendo como objetivo facilitar as compras e 
                    dar liberdade aos clientes, dando a capacidade de usar seus benefícios de forma livre.
                    Além disso o EaseShopp também realiza trabalhos referentes à tecnologia e automação 
                    comercial, como criação e desenvolvimento de sites, infraestrutura de redes e 
                    monitoramento (para empresas).
                <p>
                    <b>Missão:</b> Proporcionar a liberdade de compra para as pessoas.
                </p>
                <p>
                    <b>Visão:</b> Atuar com excelência em todo território nacional.
                </p>
                <p>
                    <b>Valores:</b> Confiança, integridade, compromisso e responsabilidade.
                </p>*/}
            </div>
            <div className="col-12 text-center mt-5">
                <img src="missao.png" alt="" />
            </div>
        </div>
    );
}

export default QuemSomos;