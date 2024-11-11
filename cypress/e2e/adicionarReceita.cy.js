describe('Adicionando receita', () => {
    it('Adicionando uma receita com sucesso', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('.card').click()
        cy.wait(2000)
        cy.get('#nome').type('chocolate quente')
        cy.wait(2000)
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.wait(2000)
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "chocolate quente")
        cy.wait(5000)
    })

    it('Esquecendo de colocar o nome ao adicionar receita', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.wait(1000)
        cy.get('.card').click()
        cy.wait(2000)
        cy.get('#ingredientes').type('Carne, legumes e água.')
        cy.get('#modo_preparo').type('Refogue a carne e os legumes e acrescente a água. Deixe cozinhando por 30min e está pronto.')
        cy.get('#comentarios').type('Minha sopa favorita.')
        cy.wait(2000)
        cy.get('.button').click()
        cy.get('#nome').invoke('text').should('have.string', "")
        cy.wait(5000)
    })

    it('Esquecendo de colocar os ingredientes ao adicionar receita', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('.card').click()
        cy.wait(2000)
        cy.get('#nome').type('Sopa.')
        cy.get('#modo_preparo').type('Refogue a carne e os legumes e acrescente a água. Deixe cozinhando por 30min e está pronto.')
        cy.get('#comentarios').type('Minha sopa favorita.')
        cy.wait(2000)
        cy.get('.button').click()
        cy.get('#ingredientes').invoke('text').should('have.string', "")
        cy.wait(2000)
    })
})