describe('Usando temporizador', () => {
    it('Botando temporizador com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('1')
        cy.get('#start-button').click()
        cy.wait(60000)
        cy.get('#timer-text').invoke('text').should('have.string', "Tempo esgotado!")
    })

    it('Cancelando o temporizador com sucesso', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('5')
        cy.get('#start-button').click()
        cy.get('#cancel-button').click()
        cy.get('#timer-text').invoke('text').should('have.string', "00:00:00")
    })

    it('Botando o temporizador em 0 horas e 0 minutos', () => {
        cy.visit('/');
        cy.get('#username').type('cypress2')
        cy.get('#password').type('123abc')
        cy.get('button').click()
        cy.get('ul > :nth-child(3) > a').click()
        cy.get('#minutes-input').clear().type('0')
        cy.get('#start-button').click()
        cy.get('#timer-text').invoke('text').should('have.string', "00:00:00")
    })
})