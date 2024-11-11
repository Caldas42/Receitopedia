describe('Sugestões de receita', () => {
    it('teste 1', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('Receitopedia')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.get('.fas').click()

    })

    it('Adicionando sugestão a minhas receitas', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('Receitopedia')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('ul > :nth-child(4) > a').click()
        cy.get('.fas').click()
    })

    it(' teste 3', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('Receitopedia')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get('.fas').click()
    })
})