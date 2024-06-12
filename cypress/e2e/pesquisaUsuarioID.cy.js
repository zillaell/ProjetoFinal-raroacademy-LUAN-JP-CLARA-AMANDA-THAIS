import { fakerPT_BR, faker } from '@faker-js/faker';


describe('Cenários de testes de Pesquisar usuário por ID', () => {
    var nome = 'Zillaell';
    var email = fakerPT_BR.internet.email().toLowerCase();;
    var senha = '123456';
    var type;
    var token;
    var token1;
    var token2;
    var token3;
    var id;
    var id0;
    var id1;
    var id2;
    var id3;
    var emaill;
    var nomex = 'Mockador';

    beforeEach(()=>{
        emaill = fakerPT_BR.internet.email().toLowerCase();
        cy.registroUser(nomex, emaill, senha).then((response)=>{
            id = response.body.id;
            type= response.body.type;
        })
    })
    afterEach(()=>{
        cy.registroUser('m'+ nome, 'mock'+ email, senha).then((response)=>{
            id2 = response.body.id;
        })
        cy.logarUser('mock'+ email, senha).then((usuario) => {
            token = usuario.body.accessToken;
            cy.promoverAdmin(token);
            cy.deletaUsuario(id, token).then((response)=>{
                expect(response.body).to.be.empty;
                expect(response.status).to.eq(204);
            });
            cy.deletaUsuario(id2, token).then((response)=>{
                expect(response.body).to.be.empty;
                expect(response.status).to.eq(204);
            });
        })
    })
    context('Cenários de Pesquisar usuário por ID com sucesso', () => {
        // afterEach(()=>{
        //     cy.deletaUsuario(id1, token).then((response)=>{
        //         expect(response.body).to.be.empty;
        //         expect(response.status).to.eq(204);
        //     });
        // })
        it('deve ser possível acessar a Pesquisar usuário por ID sendo um usuário do tipo admin',()=>{
            cy.registroUser(nome, '1'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                cy.logarUser('1'+ email, senha).then((usuario) => {
                    token = usuario.body.accessToken;
                    cy.promoverAdmin(token);
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + id,
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.have.property('id');
                        expect(response.body).to.have.property('name');
                        expect(response.body).to.have.property('type');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('active');
                        expect(response.body.id).to.eq(id);
                        expect(response.body.name).to.eq(nomex);
                        expect(response.body.email).to.eq(emaill);
                        expect(response.body.type).to.eq(type);
                        expect(response.body.id).to.not.eq(id0);    
                    })
                })
            })
        })
        it('deve ser possível achar o proprio usuário na pesquisa por ID sendo um usuário do tipo admini',()=>{
            cy.registroUser(nome, '1.1'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                type = Usuario.body.type;
                cy.logarUser('1.1'+ email, senha).then((usuario) => {
                    token1 = usuario.body.accessToken;
                    cy.promoverAdmin(token1);
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + id1,
                        headers: {
                            Authorization: 'Bearer ' + token1
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.have.property('id');
                        expect(response.body).to.have.property('name');
                        expect(response.body).to.have.property('type');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('active');
                        expect(response.body.id).to.eq(id1);
                        expect(response.body.name).to.eq(nome);
                        expect(response.body.email).to.eq('1.1'+ email);
                        expect(response.body.type).to.eq(1);
                        expect(response.body.id).to.not.eq(id);    
                    })
                })
            })
        })
        it('deve ser possível achar o proprio usuário na pesquisa por ID sendo um usuário do tipo critico',()=>{
            cy.registroUser(nome, '1.3'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                type = Usuario.body.type;
                cy.logarUser('1.3'+ email, senha).then((usuario) => {
                    token1 = usuario.body.accessToken;
                    cy.promoverCritico(token1);
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + id1,
                        headers: {
                            Authorization: 'Bearer ' + token1
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.have.property('id');
                        expect(response.body).to.have.property('name');
                        expect(response.body).to.have.property('type');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('active');
                        expect(response.body.id).to.eq(id1);
                        expect(response.body.name).to.eq(nome);
                        expect(response.body.email).to.eq('1.3'+ email);
                        expect(response.body.type).to.eq(2);
                        expect(response.body.id).to.not.eq(id);    
                    })
                })
            })
        })
        it('deve ser possível achar o proprio usuário na pesquisa por ID sendo um usuário do tipo comum',()=>{
            cy.registroUser(nome, '1.6'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                type = Usuario.body.type;
                cy.logarUser('1.6'+ email, senha).then((usuario) => {
                    token1 = usuario.body.accessToken;
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + id1,
                        headers: {
                            Authorization: 'Bearer ' + token1
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.have.property('id');
                        expect(response.body).to.have.property('name');
                        expect(response.body).to.have.property('type');
                        expect(response.body).to.have.property('email');
                        expect(response.body).to.have.property('active');
                        expect(response.body.id).to.eq(id1);
                        expect(response.body.name).to.eq(nome);
                        expect(response.body.email).to.eq('1.6'+ email);
                        expect(response.body.type).to.eq(0);
                        expect(response.body.id).to.not.eq(id);    
                    })
                })
            })
        })
        it('deve ser possível o retorno 200 mesmo sem achar outros usuário na pesquisa por ID sendo um usuário do tipo admin',()=>{
            cy.registroUser(nome, '1.9'+ email, senha).then((Usuario)=>{
                id1 = Usuario.body.id;
                cy.logarUser('1.9'+ email, senha).then((usuario) => {
                    token = usuario.body.accessToken;
                    cy.promoverAdmin(token);
                    cy.request({
                        method: 'GET',
                        url: '/api/users/' + 0,
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    }).then((response) => {
                        expect(response.status).to.be.eq(200)
                        expect(response.body).to.be.empty; 
                    })
                })
            })
        })
    })
    describe('Cenários de BAD REQUEST',()=>{
        it('não deve ser possível acessar o Pesquisar outro usuário por ID sendo um usuário do tipo comum',()=>{
            cy.registroUser(nome,'2'+ email, senha).then((Usuario)=>{
                id2= Usuario.body.id;
            })
            cy.logarUser('2'+ email, senha).then((usuario) => {
                token2 = usuario.body.accessToken;
                cy.request({
                    method: 'GET',
                    url: '/api/users/' + id,
                    headers: {
                        Authorization: 'Bearer ' + token2
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.be.eq(403)
                    expect(response.body).to.be.an('object');
                    cy.fixture('forbidden.json').then(function (forbidden) {
                        expect(response.body).to.deep.eq(forbidden)
                    });
                })
            })
        })
        it('não deve ser possível acessar o Pesquisar outro usuários por ID sendo um usuário do tipo crítico',()=>{
            cy.registroUser(nome,'3'+ email, senha).then((Usuario)=>{
                id3 = Usuario.body.id;
            })
            cy.logarUser('3'+ email, senha).then((usuario) => {
                token3 = usuario.body.accessToken;
                cy.promoverCritico(token3);
                cy.request({
                    method: 'GET',
                    url: '/api/users/' + id,
                    headers: {
                        Authorization: 'Bearer ' + token3
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.be.eq(403)
                    expect(response.body).to.be.an('object');
                    cy.fixture('forbidden.json').then(function (forbidden) {
                        expect(response.body).to.deep.eq(forbidden)
                    });
                })
            })
        })
        it('não deve ser possível acessar o Pesquisar outro usuario por id sem estar autenticado',()=>{
            cy.registroUser(nome,'4'+ email, senha).then((Usuario)=>{
                id3 = Usuario.body.id;
                cy.request({
                    method: 'GET',
                    url: '/api/users/' + id,
                    headers: {
                        Authorization: 'Bearer ' + token3
                    },
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.be.eq(403)
                    expect(response.body).to.be.an('object');
                    cy.fixture('forbidden.json').then(function (forbidden) {
                        expect(response.body).to.deep.eq(forbidden)
                    });
                })
            })
        })
    })
})