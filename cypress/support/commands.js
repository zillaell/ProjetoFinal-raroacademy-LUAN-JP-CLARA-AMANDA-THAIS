// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registroUser', function (nome, email, senha) {
    return cy.request({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
        body: {
            name: nome,
            email: email,
            password: senha
        }
    })
    // .then(function (response) {
    //     const id = response.body.id;
    //     return id;
         
    // });
});
Cypress.Commands.add('logarUser', function (email, senha) {
    return cy.request({
        method: 'POST',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login',
        body: {
            email: email,
            password: senha
        }
    })
    // .then(function (response) {
    //     var token = response.body.accessToken;
    //     cy.log(token);
    //     return token;
    // });  
});
Cypress.Commands.add('promoverCritico', (token) => {
    cy.request({
        method: 'PATCH',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/apply',
        headers: {
            Authorization: 'Bearer ' + token
        }
    }) 
});
Cypress.Commands.add('promoverAdmin', function (token) {
    return cy.request({
        method: 'PATCH',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin',
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
});
Cypress.Commands.add('criarFilme', function (token) {
    return cy.fixture('criaFilme.json').then(function (filmeCriado) {
        cy.request({
            method: 'POST',
            url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/movies',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: filmeCriado,
        }).then(function (response) {
            var idFilmeNovo = response.body.id;
            return idFilmeNovo;
        });
    });
});
Cypress.Commands.add('criarFilme2', function (token) {
    return cy.fixture('criaFilme.json').then(function (filmeCriado) {
        cy.request({
            method: 'POST',
            url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/movies',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: filmeCriado,
        });
    });
})

Cypress.Commands.add('criarReview', function (token, idFilme) {
    return cy.request({
        method: 'POST',
        url: '/api/users/review',
        headers: {
            Authorization: 'Bearer ' + token
        },
        body: {
            movieId: idFilme,
            score: 4,
            reviewText: "Mais do que bacana, Bacanudo!!"
        }
    });
});
Cypress.Commands.add('criarReview2', function (token, idFilme) {
    return cy.request({
        method: 'POST',
        url: '/api/users/review',
        headers: {
            Authorization: 'Bearer ' + token
        },
        body: {
            movieId: idFilme,
            score: 2,
            reviewText: "Ruim, poderia ser melhor"
        }
    });
});
Cypress.Commands.add('buscarFilmeId', function(id, token){
    return cy.request({
        method: 'GET',
        url: '/api/movies/' + id,
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
});
Cypress.Commands.add('deletaUsuario', function (id, token) {
    return cy.request({
        method: 'DELETE',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/' + id,
        headers: {
            Authorization: 'Bearer ' + token
        }
    });
});
///////////////////// WEB //////////////////////////////////
Cypress.Commands.add('deleteFilme', function (id, token) {
    return cy.request({
        method: 'DELETE',
        url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/movies/' + id,
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
});