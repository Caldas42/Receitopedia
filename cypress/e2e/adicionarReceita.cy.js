describe('Adicionando receita', () => {
    it('Adicionando uma receita com sucesso', () => {
        cy.visit('/usuarios/delete_cypress/');
        cy.get('.button').click()
        cy.visit('/');
        cy.get('a').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('#password_confirm').type('123abc')
        cy.get('.button').click()
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
    })

    it('Esquecendo de colocar o nome ao adicionar receita', () => {
        cy.visit('/usuarios/delete_cypress/');
        cy.get('.button').click()
        cy.visit('/');
        cy.get('a').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('#password_confirm').type('123abc')
        cy.get('.button').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#ingredientes').type('Carne, legumes e água.')
        cy.get('#modo_preparo').type('Refogue a carne e os legumes e acrescente a água. Deixe cozinhando por 30min e está pronto.')
        cy.get('#comentarios').type('Minha sopa favorita.')
        cy.get('.button').click()
        cy.get('#nome').invoke('text').should('have.string', "")
    })

    it('Esquecendo de colocar os ingredientes ao adicionar receita', () => {
        cy.visit('/usuarios/delete_cypress/');
        cy.get('.button').click()
        cy.visit('/');
        cy.get('a').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('#password_confirm').type('123abc')
        cy.get('.button').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('.card').click()
        cy.get('#nome').type('Sopa.')
        cy.get('#modo_preparo').type('Refogue a carne e os legumes e acrescente a água. Deixe cozinhando por 30min e está pronto.')
        cy.get('#comentarios').type('Minha sopa favorita.')
        cy.get('.button').click()
        cy.get('#ingredientes').invoke('text').should('have.string', "")
    })
})