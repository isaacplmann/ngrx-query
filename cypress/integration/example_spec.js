describe('Ngrx Query', function () {
  beforeEach(function () {
    // Visiting our app before each test removes any state build up from
    // previous tests. Visiting acts as if we closed a tab and opened a fresh one
    cy.visit('http://localhost:4200')
  })
  context('Request', function () {
    it('should make a request', () => {
      cy.get('#isShown').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"status": 200')
      cy.get('nq-ranger-list')
        .should('contain', 'Jason')
        .should('contain', 'Zack')
        .should('contain', 'Trini')
        .should('contain', 'Kimberly')
        .should('contain', 'Billy')
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"queryCount": 1')
      cy.get('#listRefresh').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 2')
      cy.get('#isShown').click()
      cy.get('#isShown').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 2')
    })
    it('should handle unstable network', () => {
      cy.contains('Busy').click()
      cy.get('#isShown').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": false')
        .should('contain', '"queryCount": 2')
      cy.contains('On').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 3')
      cy.get('nq-ranger-list')
        .should('contain', 'Jason')
        .should('contain', 'Zack')
        .should('contain', 'Trini')
        .should('contain', 'Kimberly')
        .should('contain', 'Billy')
    })
    it('should handle network errors', () => {
      cy.contains('Error').click()
      cy.get('#isShown').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 1')
        .should('contain', '"status": 500')
      cy.contains('On').click()
      cy.get('#isShown').click()
      cy.get('#isShown').click()
      cy.get('[id=\'{"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 2')
      cy.get('nq-ranger-list')
        .should('contain', 'Jason')
        .should('contain', 'Zack')
        .should('contain', 'Trini')
        .should('contain', 'Kimberly')
        .should('contain', 'Billy')
    })
  })
  context('Mutate', function () {
    beforeEach(() => {
      cy.get('#isShown').click()
    })
    it('should make a mutation', () => {
      cy.get('#name').type('Tommy', {
        force: true
      })
      cy.get('#color').type('green', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"green","name":"Tommy"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 1')
      cy.get('nq-ranger-list')
        .should('contain', 'Tommy')
      cy.get('#name').type('John', {
        force: true
      })
      cy.get('#color').type('teal', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"teal","name":"John"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 1')
      cy.get('nq-ranger-list')
        .should('contain', 'Tommy')
        .should('contain', 'John')
    })
    it('should handle unstable network', () => {
      cy.contains('Busy').click()
      cy.get('#name').type('Tommy', {
        force: true
      })
      cy.get('#color').type('green', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"green","name":"Tommy"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 1')
        .should('contain', '"status": 429')
      cy.get('nq-ranger-list')
        .should('not.contain', 'Tommy')
      cy.contains('On').click()
      cy.get('#name').type('Tommy', {
        force: true
      })
      cy.get('#color').type('green', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"green","name":"Tommy"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 2')
        .should('contain', '"status": 200')
      cy.get('nq-ranger-list')
        .should('contain', 'Tommy')
    })
    it('should handle network errors', () => {
      cy.contains('Error').click()
      cy.get('#name').type('Tommy', {
        force: true
      })
      cy.get('#color').type('green', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"green","name":"Tommy"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 1')
        .should('contain', '"status": 500')
      cy.get('nq-ranger-list')
        .should('not.contain', 'Tommy')
      cy.contains('On').click()
      cy.get('#name').type('Tommy', {
        force: true
      })
      cy.get('#color').type('green', {
        force: true
      })
      cy.get('#add').click();
      cy.get('[id=\'{"body":{"color":"green","name":"Tommy"},"url":"/api/rangers"}\']')
        .should('contain', '"isFinished": true')
        .should('contain', '"queryCount": 2')
        .should('contain', '"status": 200')
      cy.get('nq-ranger-list')
        .should('contain', 'Tommy')
    })
  })
})
