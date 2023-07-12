describe('Test for Torc using cypress', () => {
	
	beforeEach(() =>{
		
		cy.visit('https://duckduckgo.com');
		cy.title().then((title)=> {
			cy.log(title);
			expect(title).to.be.equal('DuckDuckGo — Privacy, simplified.')
		})
				
	})
	
	it('Do a search in DuckDuckGo and validate the first link', () => {
		
		cy.get('[aria-label="Search with DuckDuckGo"]').should('be.visible').type(
			'The dev-friendly football API{enter}')
			
			cy.get('ol.react-results--main > li:first-child').click();
			cy.url().should('eq', 'https://www.football-data.org/' )


	})


it('Do a search in DuckDuckGo and validate that we enter football Data site', () => {
		
	cy.get('[aria-label="Search with DuckDuckGo"]').should('be.visible').type(
		'The dev-friendly football API{enter}')
	cy.get('ol.react-results--main > li').contains(' RESTful. Reliable. Free to use. Easy to integrate. Did you realize the delay in the table below? That was the time it took to make a GET').click();
	cy.url().should('include', 'https://www.football-data.org' )
	


})
})

