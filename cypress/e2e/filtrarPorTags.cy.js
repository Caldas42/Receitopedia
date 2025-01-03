describe('Filtrando por tags', () => {
    it('Filtrar por tag', () => {
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
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('.button').click()
        cy.get('#nome').type('bebidas')
        cy.get('[action="/criar_tag/"] > button').click()
        cy.get(':nth-child(9)').find('li').invoke('text').should('have.string', "Tag criada com sucesso!")
        cy.get('img').click()
        cy.get('.card').click()
        cy.get('#nome').type('chocolate quente')
        cy.get('#ingredientes').type('Chocolate e leite integral.')
        cy.get('#modo_preparo').type('Aqueça o leite, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').type('Bom para tomar no frio.')
        cy.get('.button').click()
        cy.get('h2').last().invoke('text').should('have.string', "chocolate quente")
        cy.get('h2').last().click()
        cy.get('#tags').then($select => {
            cy.wrap($select)
              .find('option')
              .then(options => {
                const lastOptionValue = options[options.length - 1].value;
                cy.wrap($select).select(lastOptionValue);
              });
          });
        cy.get('.add-tag-button').click()
        cy.get('.tag-container > .colored-line').invoke('text').should('have.string', "bebidas")
        cy.get('header > form > input').type('bebidas')
        cy.get('header > form > button').click()
        cy.get('td > a').invoke('text').should('have.string', "chocolate quente")
    })

    it('Criando tag já existente', () => {
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
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('.button').click()
        cy.get('#nome').type('bebidas')
        cy.get('[action="/criar_tag/"] > button').click()
        cy.get(':nth-child(9)').find('li').invoke('text').should('have.string', "Tag criada com sucesso!")
        cy.get('img').click()
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('.button').click()
        cy.get('#nome').type('bebidas')
        cy.get('[action="/criar_tag/"] > button').click()
        cy.get(':nth-child(9)').find('li').invoke('text').should('have.string', "A tag já existe.")
    })

    it('Tentando pesquisar tags sem tê-la cadastrada', () => {
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
        cy.get('header > form > input').type('bebidas geladas')
        cy.get('header > form > button').click()
        cy.get('p').invoke('text').should('have.string', "Nenhuma receita encontrada.")
    })
})