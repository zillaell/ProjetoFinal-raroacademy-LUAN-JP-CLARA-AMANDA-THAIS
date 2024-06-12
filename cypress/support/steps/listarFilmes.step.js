import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ListarFilmesPage from "../pages/listarFilmes.page";
import { faker } from "@faker-js/faker";
var paginaListarFilmes = new ListarFilmesPage();
var nome = 'João Pedrin';
var email = faker.internet.email().toLowerCase();
var senha = '123456';
var id;
var token;
var movieId;

before(()=>{
    cy.registroUser(nome, email, senha).then((response)=>{
        id = response.body.id;
    })
    cy.logarUser(email, senha).then((response)=>{
        token = response.body.accessToken;
        cy.promoverAdmin(token);
        cy.criarFilme(token).then((response)=>{
            movieId = response.body.id;
        });
    });
});

after(()=>{
    //cy.deleteFilme(movieId, token);
    //cy.deletaUsuario(id,token);
});

Given('que o usuário acessa o site',()=>{
    cy.intercept('GET', '/api/movies', {
        statusCode: 200,
        fixture: 'variosFilmes.json'
    }).as('filmesMock');
    cy.visit('');
});
When('acessa a funcionalidade de Listar Filmes',()=>{
    cy.url('').should('equal','https://raromdb-frontend-c7d7dc3305a0.herokuapp.com');
});
Then('deve ser possível Listar Filmes',()=>{
    cy.wait('@getMovies');
    cy.get(paginaListarFilmes.carrosselFilmes).should('be.visible');
});

// Given('',()=>{

// });