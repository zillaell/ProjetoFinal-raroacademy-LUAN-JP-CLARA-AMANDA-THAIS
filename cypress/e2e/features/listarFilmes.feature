# language: pt

Funcionalidade: Listar Filmes

Contexto: Acesso à área de cadastro de usuários
    Dado que o usuário acessa o site

Cenário: deve ser possível Listar Filmes com sucesso sem estar autenticado
  Quando acessa a funcionalidade de Listar Filmes
  Então deve ser possível Listar Filmes

# Cenário: deve ser possível Listar Filmes com sucesso estando autenticado
#   Dado que está autenticado no site
#   Quando acessa a funcionalidade de Listar Filmes
#   Então deve ser possível Listar Filmes

# Cenário: deve ser possível Listar Filmes e ver as informações do filme
#   Dado que está autenticado no site
#   Quando acessa a funcionalidade de Listar Filmes
#   Então deve ser possível Listar Filmes
#   E deve ser possível ver as informações correspondentes de um filme

# Cenário: deve ser possível  visualizar o Listar Filmes Por ordem de cadastro
#   Dado que está autenticado no site
#   Quando acessa a funcionalidade de Listar Filmes
#   Então deve ser possível Listar Filmes por ordem de cadastro

# Cenário: deve ser possível  visualizar o Listar Filmes Por ordem de nota
#   Dado que está autenticado no site
#   Quando acessa a funcionalidade de Listar Filmes
#   Então deve ser possível Listar Filmes por ordem de nota

# Cenário: deve ser possível visualizar o Listar Filmes e explora-los em otra paginação
#   Dado que está autenticado no site
#   Quando acessa a funcionalidade de Listar Filmes
#   Então deve ser possível Listar Filmes 
#   E deve ser possível explora-los em outra paginação

#################### BAD REQUEST ###################################

# 1. Qualquer tipo de usuário, logado ou não, pode consultar a lista de filmes
# sem restrições;

# 2. Deve ser possível visualizar informações sumarizadas do filme, como
# título, descrição e nota além de uma imagem de capa que represente o
# filme ;

# 3. Na versão Web deve ser possível visualizar filmes com duas opções de
# ordenação: Por ordem de cadastro e por nota (filmes mais avaliados primeiro);

# 4. Na versão Web deve existir uma opção de paginação para que o usuário
# possa explorar todos os filmes cadastrados;

# 5. O usuário deve conseguir consultar mais detalhes do filme ao interagir com
# um dos filmes exibidos na listagem.

