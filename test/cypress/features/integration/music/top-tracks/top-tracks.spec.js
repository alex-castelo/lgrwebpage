describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })

  it('displays landing page by default', () => {
    cy.url().should('include', '/landing')
  })

  it('displays renders top artist albums', () => {
    cy.url().should('include', '/landing')

    cy.findByRole('link', { name: /music/i }).click()

    cy.intercept('POST', /\/api\/token/, {
      statusCode: 200,
      body: {
        token: 'fake-token',
      },
    })

    cy.intercept(
      'GET',
      '/v1/artists/4Me5uB1aAglEiE97wxIoX7/top-tracks?market=ES',
      {
        statusCode: 200,
        fixture: 'top-tracks',
      }
    )

    cy.url().should('include', '/media/music')
  })
})
