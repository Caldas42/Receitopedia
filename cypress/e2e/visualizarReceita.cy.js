describe('visualizar receita', () => {
    it('Visualizando receita com comentário com sucesso', () => {
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
        cy.get('#nome').type('Chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('h2').last().click()
        cy.get('h1').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('#card > :nth-child(6)').last().invoke('text').should('have.string', "Chocolate e leite integral.")
        cy.get('#card > :nth-child(8)').last().invoke('text').should('have.string', "Aqueça o leite, acrescente o chocolate e misture bem.")
        cy.get('#card > :nth-child(10)').last().invoke('text').should('have.string', "Bom para tomar no frio.")
    })

    it('Visualizando receita sem comentário com sucesso', () => {
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
        cy.get('#nome').type('Chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('h2').last().click()
        cy.get('h1').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('#card > :nth-child(6)').last().invoke('text').should('have.string', "Chocolate e leite integral.")
        cy.get('#card > :nth-child(8)').last().invoke('text').should('have.string', "Aqueça o leite, acrescente o chocolate e misture bem.")
    })

    it('Visualizando receita avaliada com sucesso', () => {
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
        cy.get('#nome').type('Chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('h2').last().click()
        cy.get('h1').last().invoke('text').should('have.string', "Chocolate quente")
        cy.get('#card > :nth-child(6)').last().invoke('text').should('have.string', "Chocolate e leite integral.")
        cy.get('#card > :nth-child(8)').last().invoke('text').should('have.string', "Aqueça o leite, acrescente o chocolate e misture bem.")
        cy.get('#card > :nth-child(10)').last().invoke('text').should('have.string', "Bom para tomar no frio.")
        cy.get('[for="5-stars"]').click()
        cy.get('.rate-btn').click()
        cy.get('.recipe-link').last().find('.stars > :nth-child(1)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(2)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(3)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(4)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.recipe-link').last().find('.stars > :nth-child(5)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('h2').last().click()
        cy.get('.show-star-rating > :nth-child(1)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.show-star-rating > :nth-child(2)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.show-star-rating > :nth-child(3)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.show-star-rating > :nth-child(4)').should('have.attr', 'style').and('include', 'color:#ffc107');
        cy.get('.show-star-rating > :nth-child(5)').should('have.attr', 'style').and('include', 'color:#ffc107');
    })
})