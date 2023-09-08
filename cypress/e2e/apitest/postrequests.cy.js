const { equal } = require("assert")

describe("Post Requests", () => {
    it("1st way to call a post request", () => {
        const requestBody = {
            tourist_name: "Ton",
            tourist_email: "esample5@sample.com",
            tourist_location: "Switzerland"
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
        .its('status')
        .should('equal', 201)

    })
    it.only("2nd way to call a post request", () => {
        cy.fixture('tourist').then((data) =>{
            cy.request({
                method: 'POST', 
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: data
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_email).to.eq(data.tourist_email)
                expect(response.body).has.property('tourist_name', data.tourist_name)
                expect(response.body).to.have.property('tourist_location', data.tourist_location)
            })
        })
    })

})