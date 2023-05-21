/// <reference types= "cypress" />
describe ("Testes para a página de candidatura", ()=>{
    beforeEach(()=> {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')//comando para tira print do test
    })

    it('Deve preencher o formulário de inscrição corretamente', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Fernando Viana')
        cy.get('input[name="email"]').type('fernandovianadossantos2001@gmail.com')
        cy.get('input[name="telefone"]').type('92 992779859')
        cy.get('input[name="endereco"]').type('Rua React Router Dom nº123 - Manaus /AM')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo)=>{
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
  
})