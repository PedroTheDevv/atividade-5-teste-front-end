describe('test1', function() {
    it('what_it_does', function() {
        var initialLength=5;
        cy.viewport(1536, 695)
        cy.visit('https://cadastrocars.vercel.app/')
        cy.get(':nth-child(1) > .options > .pointButton').click()
        //Nesse momento, deve clicar manualmente nos 3 pontinhos
        cy.get('.pointWindow > :nth-child(2)').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Tem certeza que deseja excluir?')
            return true;
        })
        cy.get('.carItem').should('have.length', initialLength-1)
    })
})