describe('Sugestões de receita', () => {
    it('teste 1', () => {

    })

    it('Adicionando sugestão a minhas receitas', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('ul > :nth-child(4) > a').click()
    })

    it(' teste 3', () => {

    })
})