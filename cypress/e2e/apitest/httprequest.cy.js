describe('Http Requests', () => {
    it("GET CALL", () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200)
    })

    it("POST CALL", () => {
        cy.request({
            method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts/',
                body: {
                    title: 'Testing Post',
                    body: "Testing the post call",
                    userId: 1
                    }
        })
        .its('status')
        .should('equal', 201)
    })

    it("PUT CALL", () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: 'Testing Post - Updated',
                body: "Testing the put call",
                userId: 1,
                id: 1
            }
        })
        .its('status')
        .should('equal', 200)
    })
})