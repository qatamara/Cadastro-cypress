//1) eu importei o cypress
/// <reference types="cypress" />




describe('-deve acessar site sr barriga- e realizar o login',()=> {
    beforeEach( ()=>{
        cy.visit('/login');
        
      
        //cy.get('#email').type('tamara@teste.com');
        //cy.get('#senha').type('123456');

       // cy.get('.btn').click();
        cy.get('.alert').should('contain','Bem vindo');

    })

    //escopo de teste
    it.skip('deve criar conta sem informar nome',()=>{

        //homePage.clicarBotaoConta();
        //homePage.clicarAdcionar();
        //homePage.deveCriarContaSemInformarNome();
        //entrar em conta
        //e clicar botao salvar(não informando nome)
        //validar mensagem
        


        //cy.get('.dropdown-toggle').click();
       // cy.get('.dropdown-menu > :nth-child(1) > a').click();

       // cy.get('.btn').click();
        cy.get('.alert').should('contain','Informe o nome da conta');
      
    })
    it.skip('deve conseguir criar uma conta com sucesso',()=>{
        //deve clicar contas
        //opcao adcionar conta
        //informar nome da conta
        //clicar salvar
        //validar mensagem sucesso

        homePage.clicarBotaoConta();
        homePage.clicarAdcionar();
        homePage.deveCriarContaComSucesso();
        //cy.get('.dropdown-toggle').click();
        //cy.get('.dropdown-menu > :nth-child(1) > a').click();
       // cy.get('#nome').type('maximiliano');

       // cy.get('.btn').click();
        
        //cy.get('.alert').should('contain','Conta adicionada com sucesso!');
        


    })
    it.skip('deve apresentar as contas no listar',()=>{
        //clicar no contas
        //escolher opção listar

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        
        cy.get('body').should('contain','Conta');
        
        

    })
    it.skip('deve conseguir alterar uma conta, mensagem de sucesso remoção',() =>{


        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();


        let titular = "maximiliano";
        clicaralterarConta("Harry Styles");
        cy.get('#nome').clear().type('Harry Styles teste !');

        cy.get('.btn').click();

        cy.get('.alert').should('contain','Conta alterada com sucesso!');

    
        
        
        //cy.xpath(`//td[text()='${titular}']/../td[2]/a[1]/span`).click();
        // delete - cy.xpath('//td[text()="Aron Piper"]/../td[2]/a[2]/span').click();


        //cy.get('#tabelaContas').contains('Justin').parent();
        ////td[text()='']/td/span
       // cy.xpath('[href="/removerConta?id=758631"]').click();
       // cy.xpath('td[text()="Aron Piper"]/td/span').click();
        
        //cy.get('td.tabelaContas').contains('alterando conta').should('have.attr','href','/editarConta');
       


    })

    function clicaralterarConta(titular){
        cy.xpath(`//td[text()='${titular}']/../td[2]/a[1]/span`).click();

    }

    it.skip('deve conseguir remover uma conta',()=>{

        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        let titular = "Aron Piper";
        clicarRemoverConta("Aron Piper");

        //cy.get('#tabelaContas');
        //cy.get('[href="/removerConta?id=758631"] > .glyphicon').click();
        //cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
       // cy.get('[href="/removerConta?id=780861"] > .glyphicon').click();


        cy.get('.alert').should('contain','Conta removida com sucesso!');
      

    })
    function clicarRemoverConta(titular){
        cy.xpath(`//td[text()='${titular}']/../td[2]/a[2]/span`).click();

    }
    

    it.skip('deve conseguir criar movimentação e validar mensagens de erro ',()=> {

        //localizar opcao criar movimentação
        //clicar em salvar 
        //deve validar mensagens erro

        cy.get('#navbar > ul > li:nth-child(3) > a').click();
        cy.get('.btn').click();

        //validando mensagem erro

        cy.get('.alert').should('contain','Data da Movimentação é obrigatório','Data do pagamento é obrigatório','Descrição é obrigatório','Interessado é obrigatório','Valor é obrigatório');

    })
    it.skip('deve enviar campo valor diferente de numero- validar mensagem de erro',()=> {
        //criar movimentação
        //enviar campo valor : caracteres != numero
        //validar mensagem de erro

        cy.get('#navbar > ul > li:nth-child(3) > a').click();
        cy.get('#tipo');
        cy.get('#data_transacao').type('02/09/2021');
        cy.get('#data_pagamento').type('20/10/2021');
        cy.get('#descricao').type('teste');
        cy.get('#interessado').type('seu Teste');
        cy.get('#valor').type('#%*');
        cy.get('.btn').click();

        cy.get('.alert').should('contain','Valor deve ser um número');

    })
    it.skip('deve conseguir criar uma movimentação - validar mensagem de sucesso', () => {
        //criar movimentaçao
        //validar msg de sucesso

        cy.get('#navbar > ul > li:nth-child(3) > a').click();
        cy.get('#tipo');
        cy.get('#data_transacao').type('20/11/2021');
        cy.get('#data_pagamento').type('20/11/2021');
        cy.get('#descricao').type('teste');
        cy.get('#interessado').type('seu Teste');
        cy.get('#valor').type('10000');
        cy.get('.btn').click();
    })

    it.skip('deve conseguir validar movimentacao da conta cadastrada',() =>{
        //acessar resumo mensal
        //mapear os elementos mes e ano e botao

        cy.get(':nth-child(4) > a').click();
        cy.get('#mes').select('Agosto');
        cy.get('#ano').select('2021');
        
        cy.get('.btn').click();

        
    

        
    })

    
})

