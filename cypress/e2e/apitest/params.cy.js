describe('API testing', () => {
    it('Pass query parameters', () => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            qs: { page: 2}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })

    })
})