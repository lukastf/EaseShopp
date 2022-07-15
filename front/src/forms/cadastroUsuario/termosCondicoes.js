import React from 'react';
import { siteUrl } from '../../config';

const termosCondicoes = (cadastro) => {

    let miau = false;

    console.log(cadastro.state.editar)

    if (cadastro.state.editar) {

        return (<></>);
    }

    const accTermos = (e) => {

        let disabled = "disabled";

        if (e.target.checked) 
            disabled = "";

        cadastro.setState({
            buttonDisabled: disabled
        });
    }

    return (
    <div className="col-12 text-center justify-content-center mt-3">

        <h4 className="my-5">Termos e Condições de Contrato</h4>

        <div className="jumbotron overflow-auto" style={{height: "20rem"}}>

            EASE SHOPP INTERMEDIACAO DE NEGOCIOS LTDA, pessoa jurídica de direito privado, inscrita no CNPJ nº 36.983.467/0001-46, com sede na Rua João José Lucania Fernandes, nº 123, sala 03, Conjunto Habitacional São Deocleciano, na cidade de São José do Rio Preto/SP, CEP 15.057-200; uma empresa de tecnologia que tem como foco a atividade de intermediação e agenciamento de serviços e negócios em geral, que tem como um de seus objetivos a facilitação de compras e vendas de produtos via internet. Pensando nisso disponibiliza a seus parceiros a possibilidade de utilização da plataforma de “marketplace” EASE SHOPP para anunciarem e venderem produtos. 

            Em cumprimento ao Decreto Federal nº 7962/2013, neste ato e por esta forma, por meio deste instrumento, apresenta abaixo as condições gerais para utilização da plataforma de compra e venda de produtos no site http://www.easeshopp.com.br.

            1.OBJETIVO: O objetivo deste contrato é apresentar para os parceiros do EASE SHOPP as condições gerais para anunciarem e venderem seus produtos através do site http://www.easeshopp.com.br/.

            2. CAPACIDADE PARA CADASTRAR E COMPRAR NO WEBSITE: Os produtos colocados a venda no “site” estão disponíveis para compra apenas por pessoas que tenham capacidade legal para contratá‐los. Não podem cadastrar‐se e efetuar a compra dos produtos e serviços oferecidos nessa modalidade, pessoas que não gozem da plena capacidade, nos termos dos arts. 3° e 4° do Código Civil (lei 10.406/02).

            3. CADASTRO: Apenas será confirmado o cadastramento do interessado que preencher todos os campos do cadastro. O futuro usuário deverá completá‐lo com as informações exatas, precisas e verdadeiras, e assume o compromisso de atualizar os dados sempre que neles ocorrer alguma alteração.

            4. DA FORMA DE PAGAMENTO: O pagamento poderá ser efetuado através de boleto bancário e/ou cartão de EASESHOPP ou cartão de crédito das bandeiras constantes do anúncio ou oferta do produto ou serviço.

            5. DO PREÇO E CONDIÇÕES DE PAGAMENTOS: Os preços e condições de pagamento são exclusivos para compra via internet e podem sofrer variações se comparados com preços praticados em lojas físicas. 

            5.1. As ofertas são válidas até o término dos estoques para internet previamente anunciados pelos parceiros vendedores. As vendas estarão sempre sujeitas à análise e confirmação de dados.

            6. DA ENTREGA: Depois de calcular o frete, o site irá calcular automaticamente o prazo de entrega (dias úteis) que passa a valer após o 1º dia útil após o recebimento do e‐mail de confirmação da sua compra. 
            6.1. As entregas são realizadas de segunda à sexta‐feira das 8h às 21h, e é fundamental que tenha alguém no endereço indicado. Cabendo ao consumidor conferir sempre a nota fiscal e os produtos no ato da entrega.
            6.2. No ato da entrega, não nos responsabilizamos por desmontagens, subir escadas/elevadores ou transporte por guincho para apartamentos. Eventuais despesas são de responsabilidade do cliente. 
            6.3. Confira as dimensões do produto e certifique‐se de que passará normalmente por elevadores, portas e/ou corredores de sua moradia. 
            6.4. O recebimento poderá ser feito por porteiros, secretarias, familiares ou qualquer responsável por recebimento de mercadorias no endereço indicado, mediante assinatura do comprovante de entrega e apresentação de documento. 
            6.5. Caso alguma dessas pessoas não esteja autorizada a receber o seu pedido, avise‐a para que você seja comunicado imediatamente e possa receber pessoalmente a mercadoria, caso contrário, o entregador deixará com a pessoa que se dispor a receber e estiver no endereço indicado na nota fiscal.
            6.6. Caso haja dificuldade de entrega na 1ª tentativa (destinatário ausente, dificuldade na localização do endereço etc.), será realizada mais 01 (uma) tentativa, com intervalo de até 02 (dois) dias úteis.
            6.7. Se a entrega não for concretizada nesta nova tentativa, o produto voltará para o local de origem. Para qualquer uma das situações, você será notificado por email.
            6.8. O cliente poderá optar pelo agendamento da entrega. No momento o agendamento de entrega está disponível apenas para o estado de São Paulo ou para localidades previamente informadas no anúncio.
            6.9. O agendamento poderá ser realizado logo após a escolha da forma de pagamento. Não será possível alterar a data do agendamento após concluir a compra. 
            6.10. O agendamento é feito por período. É você quem decidirá qual o período mais adequado para receber seu pedido: entre manhã, tarde ou noite.
            6.11. Para o sucesso do seu agendamento é imprescindível que as informações de endereço e telefone do seu cadastro estejam atualizadas. No caso de insucesso de entrega, você deverá entrar em contato imediatamente com nossa Central de Atendimento para que possamos melhor lhe auxiliar.
            7. TROCA E DEVOLUÇÃO POR ARREPENDIMENTO OU DESISTÊNCIA: Caso o consumidor deseje trocar ou desistir da compra após a entrega, terá o direito de devolver o(s) produto(s) e receber a restituição do valor pago ou trocar pelo item desejado. 
            7.1. O prazo para troca ou desistência da compra é de 07 (sete) dias corridos a contar do dia seguinte do recebimento do produto, conforme estipula o Código de Defesa do Consumidor em seu artigo 49. 
            7.2. A troca ou cancelamento somente será realizado caso o produto esteja em sua embalagem original, sem indícios de mau uso, sem violação do lacre original do fabricante (em produtos de  categorias como Eletrônicos, Informática, Telefonia), acompanhado de nota fiscal, manual e todos os seus acessórios. 
            7.3. Para que a troca ou cancelamento seja realizado, o produto passará por análise técnica dentro de até 05 (cinco) dias úteis, contando a partir do recebimento do produto em nosso centro de distribuição. Caso o produto atenda às exigências acima, será possível a realização da troca ou cancelamento.
            7.4. Se for solicitado o cancelamento da compra, a restituição do valor pago será conforme opções de pagamento abaixo: Cartão de crédito: após a análise do produto em nosso centro de distribuição será solicitado o estorno do débito à administradora do seu cartão. 
            7.5. O estorno das parcelas pagas poderá ocorrer em até 02 (duas) faturas subsequentes, pois dependendo da data do vencimento da fatura, o estorno poderá ocorrer no mês seguinte à solicitação de cancelamento. Lembramos que esse procedimento é de responsabilidade da administradora do cartão.
            7.6. Boleto bancário: após a análise do produto a restituição será feita pelo vendendor em sua conta corrente em até 10 (dez) dias úteis.
            7.7. Débito on‐line: após a análise do produto a restituição será feita em sua conta corrente em até 10 (dez) dias úteis.
            7.8. Caso seu cancelamento não tenha sido aprovado após a análise pelo fato do produto não estar nas condições listadas acima, será devolvido sem consulta prévia.

            8. MONTAGEM: A EASE SHOPP  e os PARCEIROS VENDEDORES não oferecem serviços de montagem de móveis, equipamentos e instalações. Este serviço é de responsabilidade do cliente, que deve contratar uma empresa terceira ou um prestador de serviços para tal finalidade.

            9. AVARIA: Ao receber o pedido (produto adquirido), certifique‐se das condições dos itens.
            9.1. Caso detecte a avaria no ato da entrega, recuse o recebimento do produto, faça uma pequena anotação no verso da nota fiscal ou no comprovante de entrega explicando a recusa e especificando a avaria detectada, e notifique imediatamente a Central de Atendimento.
            9.2. Se a avaria for detectada após a entrega do produto, o parceiro vendedor se responsabiliza pela troca ou cancelamento, contudo será necessário que o produto esteja em sua embalagem original, sem indícios de mau uso, sem violação do lacre original do fabricante (em produtos de categorias como Eletrônicos, Informática, Telefonia), acompanhado de nota fiscal, manual e todos os seus acessórios para que seja feita a substituição por outro produto da mesma espécie (mesmo modelo). 
            9.3. O prazo para entrar em contato com nossa Central de Atendimento é de 07 (sete) dias corridos a contar do dia seguinte ao recebimento do produto. A troca ou cancelamento do pedido somente será realizado após análise do produto pelo parceiro vendedor (conforme item 7.1). O prazo total para a troca irá variar de acordo com a região onde a coleta e a nova entrega serão realizadas.

            10. PRODUTO COM DEFEITO FUNCIONAL: A solicitação de troca deverá ser comunicada ao PARCEIRO VENDEDOR via canal de atendimento ao cliente em até 7 (sete) dias corridos, a contar do dia seguinte ao recebimento do produto. 
            10.1. Dentro desse prazo o cliente tem o direito de solicitar a troca, desde que o produto esteja na embalagem original, sem indícios de mau uso, sem violação do lacre original do fabricante (em caso de computadores e notebooks), acompanhado de nota fiscal, manual e todos os seus acessórios. 
            10.2. O prazo para coleta do produto será informado via e‐mail, chat ou telefone. 
            10.3. Os produtos serão analisados pelo PARCEIRO VENDEDOR podendo ser devolvidos sem consulta prévia no caso de descumprimento dos critérios listados acima ou se não for constatado o defeito mencionado. 
            10.4. O prazo total para a troca irá variar de acordo com a região onde a coleta e a nova entrega serão realizadas. Se o produto apresentar defeito após 07 (sete) dias corridos a contar do dia seguinte ao recebimento do produto, mas dentro do prazo de garantia do fabricante, o adquirente/consumidor deverá entrar em contato com o fornecedor para comunicar o fato e obter esclarecimentos. Se desejar poderá também se dirigir a uma das Assistências Técnicas ou Postos Autorizados credenciados pelo próprio fabricante, indicadas no manual enviado juntamente coma nota fiscal. Caso não consiga contato com o fabricante, avise a Central de Atendimento ao Cliente.
            10.5. Esclarecemos que é assegurado ao fornecedor/fabricante sanar o vício do produto, por ele fornecido, no prazo máximo de 30 dias, conforme previsto no artigo 18, § 1º do Código de Defesa do Consumidor. Caso este prazo seja extrapolado, é de seu direito a substituição do produto; o cancelamento da venda ou ainda o abatimento proporcional de seu preço.
            11. PRODUTO EM DESACORDO COM O PEDIDO: Caso receba algum produto em desacordo com o seu pedido, o consumidor deverá recusar a entrega, fazer uma pequena anotação no verso da nota fiscal ou comprovante de entrega explicando a recusa, e entrar em contato imediatamente com a Central de Atendimento. 
            11.1. Após a recusa, o item retornará ao remetente e assim que finalizado o processo de troca ele reenviará o produto correto de acordo com o prazo para entrega na região.
            11.2. Caso identifique o erro após o recebimento, o consumidor não deverá abrir o lacre original da caixa e/ou produto e entrar em contato imediatamente com a Central de Atendimento informando os dados constantes na etiqueta que estiver na caixa do produto. O prazo para coleta do produto será informado via e-mail, chat ou telefone. Após o retorno do item e finalização do processo de troca o remetente reenviará o produto correto de acordo com o prazo para entrega na região.
            11.3. Caso o produto esteja indisponível no estoque do PARCEIRO VENDEDOR o cliente/consumidor poderá substituí‐lo por outro no mesmo valor ou solicitar o cancelamento da compra. Se o produto escolhido para troca for de valor superior, a diferença será cobrada em parcela única através da forma escolhida para pagamento.

            12. TROCAS PARA O ESTADO DE SÃO PAULO: Para sua comodidade, ao comprar um produto no site EASE SHOPP é possível efetuar a troca por insatisfação ou arrependimento também em qualquer loja física do PARCEIRO VENDEDOR dentro do Estado de São Paulo. O prazo para realizar a troca através da loja física também é de até 07 (sete) dias corridos a contar do dia seguinte ao recebimento do produto, sendo assim, deverá dirigir‐se à loja física dentro desse prazo.
            12.1. Para executar a troca, é necessária a apresentação da Nota Fiscal de compra.
            12.2. Importante: o produto a ser trocado não poderá apresentar defeito funcional e devera estar de acordo com a nota fiscal, caso contrário solicite a troca através do nosso site.

            13. AUTORIZAÇÃO DE ARMAZENAMENTE E UTILIZAÇÃO DE DADOS PESSOAIS. O cliente/consumidor ao se cadastrar no site EASE SHOPP autoriza imediatamente o uso e o armazenamente de suas informações pessoais, bem como, o tratamento na forma disciplinada na forma da Lei Federal n. 13.709/2018.  

            13. FORO E LEGISLAÇÃO APLICÁVEL: Todos os itens deste termo serão regidos pelas leis da Republica Federativa do Brasil. Para todos os assuntos referentes à sua interpretação e cumprimento, as partes se submeterão ao foro da cidade de São José do Rio Preto/SP, exceção feita a reclamações apresentadas por usuários que se enquadrarem no conceito legal de consumidores, que poderão submeter ao foro de seu domicilio.
        </div>

        <div className="col-12 col-md-3 justify-content-start">
            <a 
                className="btn btn-link" 
                href={siteUrl + "/TERMO_DE_CONTRATO_EASESHOPP_CONSUMIDORES.pdf"}
                //onClick={this.sendForm} 
                //disabled={this.state.buttonDisabled} 
                download> Baixar termos em PDF
            </a>
        </div>

        <div className="row form-check mr-3">
            <input 
                className="form-check-input" 
                type="checkbox" 
                defaultValue="" 
                id="termos" 
                value={miau}
                onChange={accTermos} 
                required 
            />
            <label className="form-check-label" htmlFor="termos">
                Aceito termos e condições
            </label>
        </div>
    </div>
    );

}

export default termosCondicoes;