describe('test1', function() {
    it('what_it_does', function() {
        cy.viewport(1536, 695)
        cy.visit('https://cadastrocars.vercel.app/')
        cy.get(':nth-child(1) > .options > .pointButton').click()
        //Nesse momento, deve clicar manualmente nos 3 pontinhos
        cy.get('.pointWindow > :nth-child(1)').click()
        cy.get('.yearField').clear().type('2020')
        cy.get('.priceField').clear().type('100000')
        cy.get('.pageLeft > .button').contains('Cadastrar').click()
        cy.get('.column.year').should('contain.text', '2020')
        cy.get('.column.price').should('contain.text', '100000')
    })
})