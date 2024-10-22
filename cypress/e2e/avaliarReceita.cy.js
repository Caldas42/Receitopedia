describe('Avaliar receita', () => {
    it('Avaliar a receita com apenas uma estrela com sucesso', () => {
        cy.visit('/');
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
        cy.get('h2').last().then(($el) => {
            const text = $el.text();
            expect(text).to.contain("chocolate quente");
            $el.click();
        });
        cy.get('[for="1-star"]').click()
        cy.get('.rate-btn').click()
    })

    it('Avaliar a receita com cinco estrelas com sucesso', () => {
        it('Avaliar a receita com apena uma estrela com sucesso', () => {
            cy.visit('/');
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
            cy.get('h2').last().then(($el) => {
                const text = $el.text();
                expect(text).to.contain("chocolate quente");
                $el.click();
            });
            cy.get('[for="5-stars"]').click()
            cy.get('.rate-btn').click()
        })
    })

    it('Esquecendo de clicar nas estrelas e avaliando', () => {
        
    })
})