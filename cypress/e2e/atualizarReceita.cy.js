describe('Atualizando receita', () => {
    it('atualizando receita com sucesso', () => {
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
        cy.get('#lapis').click()
        cy.get('#nome').clear().type('chocolate frio')
        cy.get('#modo_preparo').clear().type('Deixe o leite esfriar, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').clear().type('Bom para tomar no calor.')
        cy.get('.button').click()
    })

    it('Esquecendo de colocar os ingredientes logo depois de apagar os ingredientes antigos', () => {
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
        cy.get('#lapis').click()
        cy.get('#nome').clear().type('chocolate frio')
        cy.get('#ingredientes').clear()
        cy.get('#modo_preparo').clear().type('Deixe o leite esfriar, acrescente o chocolate e misture bem.')
        cy.get('#comentarios').clear().type('Bom para tomar no calor.')
        cy.get('.button').click()
    })

    it('Esquecendo de colocar o modo de preaparo logo depois de ter apagado o modo de preparo antigo', () => {
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
        cy.get('#lapis').click()
        cy.get('#nome').clear().type('chocolate frio')
        cy.get('#modo_preparo').clear()
        cy.get('#comentarios').clear().type('Bom para tomar no calor.')
        cy.get('.button').click()
    })
})