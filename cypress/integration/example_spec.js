describe('Ngrx Query', function(){
  beforeEach(function(){
    // Visiting our app before each test removes any state build up from
    // previous tests. Visiting acts as if we closed a tab and opened a fresh one
    cy.visit('http://localhost:4200')
    cy.window().then((win) => {
      cy.spy(win.console, "log")
    });
  })
  context('Request', function(){
    it('should make a request', () => {
      cy.get('#isShown').click()
      cy.get('nq-ranger-list')
        .should('contain', 'Jason')
        .should('contain', 'Zack')
        .should('contain', 'Trini')
        .should('contain', 'Kimberly')
        .should('contain', 'Billy')
    })
  })
})
