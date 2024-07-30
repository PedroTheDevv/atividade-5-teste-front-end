describe('test1', function() {
    it('what_it_does', function() {
        cy.viewport(1536, 695)
        cy.visit('https://cadastrocars.vercel.app/')
        cy.get('.button').contains('Cadastrar').click()
        cy.get('.brandField').select('toyota')
        cy.get('.modelField').type('Corolla')
        cy.get('.yearField').type('2011')
        cy.get('.kmField').type('100000')
        cy.get('.priceField').type('50000')
        cy.get('button').contains('Cadastrar').should('be.visible').click()
        cy.get('.column.model').should('contain.text', 'Corolla')
    })
})