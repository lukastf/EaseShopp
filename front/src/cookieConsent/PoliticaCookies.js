import React, { useState } from 'react';
import styles from './PoliticaCookies.module.css';

function PoliticaCookies() {

    const [pageMount, setPageMount] = useState(false);

    if (!pageMount) {

    setPageMount(true);

    }

    return (
        <>
            <div className={"col-12 " + styles.titulo}>
                <h1>Politica de Cookies Easeshopp</h1>
            </div>
            <div className={"col-12 " + styles.corpo}>
                <h3>Conheça a política de Cookies da EaseShopp</h3>
                <p>
                    Este Aviso de Cookie é parte de nossa Política de Privacidade. 
                    Para mais informações sobre nós e como protegemos as informações dos usuários, 
                    conheça a Política de Privacidade da EASESHOPP.
                </p>
                <h3> Objetivo da Política de Cookies </h3>
                <p>
                    A privacidade dos usuários no site e aplicativo da EASESHOPP é extremamente relevante para nós. 
                    Por isso, o objetivo da nossa Política de Privacidade é explicar com a máxima transparência 
                    o que a EASESHOPP coleta e como utiliza as suas informações, que são coletadas para que seu 
                    acesso às nossas plataformas seja facilitado.Ao navegar por nosso site e aplicativo, 
                    você concorda com todas as condições aqui expostas, ciente de que a EASESHOPP poderá 
                    atualizar a presente Política de Privacidade a qualquer momento. Deste modo, convidamos você 
                    a sempre acessar esta página e conferir se está de acordo com eventuais alterações.
                </p>
                <h3>Cookies</h3>
                <p>
                    Ao navegar em nosso site ou aplicativo, você concorda com a coleta de dados por meio de cookies, 
                    permitindo a utilização dos dados coletados para estudo de navegação e comportamento dos usuários 
                    em nossas plataformas. Tudo para que consigamos levar uma melhor qualidade de serviços e 
                    informações a você.
                </p>
                <h3>O que são Cookies?</h3>
                <p>
                    Cookies são pequenos arquivos instalados nos computadores quando um navegador de internet 
                    é utilizado e armazenam diversas informações sobre os visitantes. É a partir dessas informações 
                    que estudamos os comportamentos de cada usuário, ajudando a melhorar e personalizar sua 
                    experiência online. Os cookies não coletam nenhuma informação capaz de identificar pessoalmente 
                    um usuário, em especial enquanto este não realizar nenhum cadastro ou login no site ou aplicativo, tendo a EASESHOPP apenas informações do seu perfil de navegação.
                    Cookies de terceiros poderão ser capturados em nosso site e aplicativo com o objetivo 
                    de acompanhar a jornada do usuário para fins publicitários, análise e conhecimento da 
                    audiência e divulgação dos dados de consumo.
                </p>
                <h3>1. Tipos de Informações Coletadas</h3>
                <p>
                    Deste modo, os cookies utilizados atualmente pela EASESHOPP coletam informações sobre:
                </p>
                <p>
                    1. As suas visitas e uso do site, como a duração e frequência da visita, 
                    jornada de navegação e visualização de páginas, entre outros dados semelhantes;
                </p>
                <p>
                    2. Qualquer outra informação que você nos envie por qualquer meio digital ou 
                    cadastro via e-mail.
                </p>
                <h3>2. Finalidade das Informações Coletadas</h3>
                <p>
                    As informações que são coletadas e enviadas por meio de nosso site e aplicativo 
                    são utilizadas para:
                </p>
                <p>1. Administrar o site, aplicativo e nossos negócios;</p>
                <p>2. Personalizar o site e aplicativo para o usuário;</p>
                <p>3. Possibilitar o uso dos serviços disponíveis em nosso site e aplicativo;</p>
                <p>4. Manter nosso site seguro e evitar fraudes;</p>
                <p>5. Entrega de anúncios;</p>
                <p>6. Prevenir problemas técnicos.</p>
                <h3>3. Prazo de Armazenamento e Bloqueio</h3>
                <p>
                    O período de armazenamento dos cookies é indeterminado, no entanto, o usuário pode apagar 
                    os cookies ao configurar o seu navegador de internet.
                    O usuário pode, ainda, bloquear a coleta de cookies por conta própria. Embora o bloqueio 
                    dos cookies afete a sua experiência de uso, como a recomendação de suas preferências, 
                    a maioria dos navegadores permite que você se recuse aceitar cookies.
                    Consulte as instruções do seu navegador de internet para aprender como ajustar ou alterar 
                    suas configurações de cookies para computadores e dispositivos móveis.
                </p>
                <h3>Contato</h3>
                <p>
                    Caso tenha alguma dúvida ou sugestão em relação a esta política, entre em contato conosco 
                    por meio do endereço de e-mail contato@easeshopp.com.br 
                    Ao utilizar este site, você concorda com a inserção desses cookies em seu computador/dispositivo 
                    para os propósitos acima.
                </p>
            </div>
        </>
    );
}

export default PoliticaCookies;