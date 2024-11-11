describe('Avaliar receita', () => {
    it('Avaliar a receita com uma estrela com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
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
        cy.get('[for="1-star"]').click()
        cy.get('.rate-btn').click()
        cy.get('.recipe-link').last().find('.stars > :nth-child(1)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(2)').should('have.attr', 'style').and('not.include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(3)').should('have.attr', 'style').and('not.include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(4)').should('have.attr', 'style').and('not.include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(5)').should('have.attr', 'style').and('not.include', 'color:#ffc107');
    })

    it('Reavaliando uma receita com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
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
        cy.get('[for="5-stars"]').click()
        cy.get('.rate-btn').click()
        cy.get('.recipe-link').last().find('.stars > :nth-child(1)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(2)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(3)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(4)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(5)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('h2').last().click()
        cy.get('[for="4-stars"]').click()
        cy.get('.rate-btn').click()
        cy.get('.recipe-link').last().find('.stars > :nth-child(1)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(2)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(3)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(4)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(5)').should('have.attr', 'style').and('not.include', 'color:#ffc107');
    })

    it('Esquecendo de clicar nas estrelas e avaliando', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
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
        cy.get('.rate-btn').click()
        cy.get('.error').invoke('text').should('have.string', "Por favor, selecione uma avaliação")
    })
})