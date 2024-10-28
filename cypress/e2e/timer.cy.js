describe('Adicionando receita', () => {
    it('Botando temporizador com sucesso', () => {
        cy.visit('/');
        cy.wait(2000)
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.wait(2000)
        cy.get('button').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('1')
        cy.get('#start-button').click

    })

    it('Cancelando o temporizador com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('5')
        cy.get('#start-button').click()
        cy.get('#cancel-button').click()
    })

    it('Botando o temporizador em 0 horas e 0 minutos', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('0')
        cy.get('#start-button').click()

    })
})