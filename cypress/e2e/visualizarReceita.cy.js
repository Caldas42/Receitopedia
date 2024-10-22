describe('visualizar receita', () => {
    it('Visualizando receita com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#nome').type('Chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('h2').last().click()
        cy.get('h1').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('#card > :nth-child(3)').last().invoke('text').should('have.string', "Chocolate e leite integral.")
        cy.get('#card > :nth-child(5)').last().invoke('text').should('have.string', "Aqueça o leite, acrescente o chocolate e misture bem.")
        cy.get('#card > :nth-child(7)').last().invoke('text').should('have.string', "Bom para tomar no frio.")
    })

    it('cenario2', () => {
        //steps do cenario2
    })

    it('cenario3', () => {
        //steps do cenario3
    })
})