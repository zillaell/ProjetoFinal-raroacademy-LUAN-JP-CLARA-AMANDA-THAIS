function criarUsuario() {
    return {
      nameM: faker.person.fullName(),
      emailM: faker.internet.email(),
      passwordM: faker.internet.password({ length: 10 }),
    };
  };

export default class ListarFilmesPage {

    //PAGINA HOME DE LISTAR FILMES//
    linkLogin = '[href="/login"]';
    linkProfile = '[href="/profile"]';
    inputPesquisa = '.search-input';
    b_Pesquisa = '.search-button';
    b_Logo = '.logo';
    catalogoFilmes = '.search-movie-container';
    carrosselFilmes = '.featured-movies > .carousel-container > .carousel-data';
    movieCard = '.movie-card';


    // PAGINA DE DETALHES DO FILME//
    movieTitle = '.movie-details-title';
    avaliacaoAudiencia = '.movie-score-info > :nth-child(1)';
    avaliacaoCritica = '.movie-score-info > :nth-child(2)';
    movieDescription = '.movie-detail-description';
    movieData = '.movie-grid > :nth-child(2) > :nth-child(4)';
    movieTempo = '.movie-grid > :nth-child(2) > :nth-child(5)';
    movieGenero = ':nth-child(2) > :nth-child(6)';
    movieImagem = '.w-full';

    clickLinkLogin() {
        cy.get(this.linkLogin).should('be.visible').click();
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).should('be.visible').click();
    }

    typeLogin(email, senha) {
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSenha).type(senha);
        this.clickButtonLogin();
    }
    clickMovieCard() {
        cy.get(this.movieCard).should('be.visible').eq(0).click();
    }
    usuarioMocante(){
        return cy
        .request('POST','https://raromdb-3c39614e42d4.herokuapp.com/api/users',{
                "name": "Jotaro",
                "email": ffakerPT_BR.internet.email().toLowerCase({length: 10}),
                "password": "123456"
              }
         ).then((response)=>{
            response.body;
            expect(response.body).to.be.an('object');
            expect(response.body).have.property('type');
            expect(response.body.type).to.equal(0);
            cy.log(response.body.type);
         });
    }
    filmeMocante(){
        return cy
        .request('POST','https://raromdb-3c39614e42d4.herokuapp.com/api/users',{
                "name": "Jotaro",
                "email": ffakerPT_BR.internet.email().toLowerCase({length: 10}),
                "password": "123456"
              }
         ).then((response)=>{
            response.body;
            expect(response.body).to.be.an('object');
            expect(response.body).have.property('type');
            expect(response.body.type).to.equal(0);
            cy.log(response.body.type);
         });
    }
}