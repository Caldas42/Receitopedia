describe('Sugestões de receita', () => {
    it('Adicionando sugestão a minhas receitas', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.get('.fas').click()
        cy.wait(2000)
        cy.get('img').click()
        cy.get('h2').last().invoke('text').should('have.string', "Brigadeiro")

    })

    it('Tentando adicionar sugestão que já foi adicionada', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.get('.fas').click()
        

    })

    it('Visualizar receita sugerida', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.get('.fas').click()
        cy.wait(2000)
        cy.get('img').click()
        cy.get('h2').last().click()
        cy.get('h1').last().invoke('text').should('have.string', "Brigadeiro")
        cy.get('#card > :nth-child(6)').last().invoke('text').should('have.string', "faça tudo")
        cy.get('#card > :nth-child(8)').last().invoke('text').should('have.string', "tudoooooo")
        cy.get('#card > :nth-child(10   )').last().invoke('text').should('have.string', "")
        cy.wait(2000)
    })
})