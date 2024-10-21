describe('Adicionando receita', () => {
    it('Adicionando uma receita com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('admin')
        cy.get('#password').type('123cjpv')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#nome').type('chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "chocolate quente")
    })

    it('Adicionando uma receita com nome maior que o', () => {
        cy.visit('/');
        cy.get('#username').type('admin')
        cy.get('#password').type('123cjpv')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#nome').type('Sopa feita na casa da minha avó muito gostosa eu adorava essa sopa boa demais. A última vez que comi faz muitos anos, quero fazer para o natal.')
        cy.get('#ingredientes').type('Carne, legumes e água.')
        cy.get('#modo_preparo').type('Refogue a carne e os legumes e acrescente a água. Deixe cozinhando por 30min e está pronto.')
        cy.get('#comentarios').type('Minha sopa favorita.')
        cy.get('.button').click()
        
    })

    it('cenario3', () => {
        //steps do cenario3
    })
})