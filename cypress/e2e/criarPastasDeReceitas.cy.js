describe('Criar pastas de receitas ', () => {
    it('Criando uma pasta', () => {
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
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('.create-folder-link').click()
        cy.get('#nomenav').type('Bebidas quentes')
        cy.get('#botao').click()
        cy.get('h2').last().invoke('text').should('have.string', "Bebidas quentes")
    })

    it('Adicionando receita a pasta', () => {
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
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('.create-folder-link').click()
        cy.get('#nomenav').type('Bebidas quentes')
        cy.get('#botao').click()
        cy.get('h2').last().invoke('text').should('have.string', "Bebidas quentes")
        cy.get('.add-receita-form').last().find('select').then($select => {
            cy.wrap($select)
              .find('option')
              .then(options => {
                const lastOptionValue = options[options.length - 1].value;
                cy.wrap($select).select(lastOptionValue);
              });
          });
        cy.get('.add-receita-form').last().find('button').click()
        cy.get('h1').invoke('text').should('have.string', "chocolate quente")
        cy.get(':nth-child(2) > a').click()
        cy.get('h2').last().click()
    })

    it('Esquecendo de colocar o nome da pasta ao cria-la', () => {
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
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('.create-folder-link').click()
        cy.get('#botao').click()
        cy.get('#nomenav').invoke('text').should('have.string', "")
    })
})