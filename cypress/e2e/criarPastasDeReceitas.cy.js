describe('Criar pastas de receitas ', () => {
    it('Criar pastas de receitas', () => {
        cy.visit('/');
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#nome').type('chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "chocolate quente")
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('.create-folder-link').click()
        cy.get('form > [type="text"]').type('Bebidas quentes')
        cy.get('button').click()
    })

    it('esquecendo de adicionar receita para botar na pasta', () => {

    })

    it('cenario3', () => {
        
    })
})