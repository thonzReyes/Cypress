describe("Passing header and cookies", () => {
    let token = null
    before("create access token", () =>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: 'TonTest',
                clientEmail: 'testemail'+Math.random().toString(5).substring(2)+'@gmail.com'
            }
        })
        .then((response) => {
            token = response.body.accessToken
        });
    });
})