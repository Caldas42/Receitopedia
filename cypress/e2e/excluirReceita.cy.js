describe('Excluir receita', () => {
    it('Excluindo a receita com sucesso', () => {
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
        cy.get('.delete-btn').click()
    })

    it('Excluindo todas as receitas', () => {
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
        cy.get('.card').click()
        cy.get('#nome').type('Chocolate frio')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Não aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no calor.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "Chocolate frio")
        cy.get('.delete-all-btn').click()
    })

    it('cenario3', () => {
        //steps do cenario3
    })
})