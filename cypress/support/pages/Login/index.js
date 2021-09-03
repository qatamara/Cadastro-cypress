//Açoes de interaçoes
//açoes :
//acessar login
//preencher login

export class Login {ss

        acessarLogin(){
            cy.visit('/login');
        }s
    
        preencherLogin(){
            cy.get('#email').type('tamara@teste.com');
            cy.get('#senha').type('123456');
        }
    
        clicarBotaoSalvar(){
             cy.get('.btn').click();
        }
    
   
    
}




