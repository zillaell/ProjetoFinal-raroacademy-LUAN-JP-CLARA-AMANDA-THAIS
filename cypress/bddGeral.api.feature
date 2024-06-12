#CADASTRO DE USUARIO
Funcionalidade: Cadastro de usuário

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que o usuario acessa a funcionalidade de cadastro

Cenário: Registrar Usuário com sucesso
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo nome
  Quando informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo email
  Quando informar um novo nome
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário sem inserir o campo senha
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário com email já cadastrado
  Quando informar um novo nome
  E informar um e-mail já em uso
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: validar o tipo de usuário criado
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
# Cenário: tentativa de registrar usuário com formato inválido sem nome utilizador
#   Quando informar um nome nulo
#   E informar um novo e-mail 
#   E informar uma nova senha
#   E confirmar operação
#   Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário com emoji no nome 
  Quando informar um novo nome contendo emoji
  E informar um novo e-mail 
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com emoji na senha  
  Quando informar um novo nome 
  E informar um novo e-mail 
  E informar uma nova senha contendo emoji
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com alfabeto alternativo no nome, email e senha   
  Quando informar um novo nome contendo alfabeto alternativo
  E informar um novo e-mail contendo alfabeto alternativo
  E informar uma nova senha contendo alfabeto alternativo
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com fonte alternativa no nome e senha  
  Quando informar um novo nome contendo fonte alternativa
  E informar um novo e-mail 
  E informar uma nova senha contendo fonte alternativa
  E confirmar operação
  Então o usuário deverá ser cadastrado

Cenário: tentativa de registrar usuário com formato inválido com emoji no email 
  Quando informar um nome nulo
  E informar um novo e-mail contendo emoji
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido com fonte alternativa no email 
  Quando informar um nome nulo
  E informar um novo e-mail contendo fonte alternativa
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado

Cenário: tentativa de registrar usuário com formato inválido sem @
  Quando informar um novo nome
  E informar um novo e-mail sem @
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido sem domínio
  Quando informar um novo nome
  E informar um novo e-mail sem dominio
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com formato inválido sem .com
  Quando informar um novo nome
  E informar um novo e-mail sem .com
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com email com 4 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 4 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
##################################### BUG ###############################
Cenário: tentativa de registrar usuário com email com 5 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 5 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
#########################################################################
Cenário: tentativa de registrar usuário com email com 60 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com 60 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com email com mais de 60 dígitos
  Quando informar um novo nome
  E informar um novo e-mail com mais de 60 digitos
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 1 dígito
  Quando informar um novo nome com 1 digito
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 100 dígitos
  Quando informar um novo nome com 100 digitos
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com nome com 101 dígitos
  Quando informar um novo nome com 1 digito
  E informar um novo e-mail
  E informar uma nova senha
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 5 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 5 digitos
  E confirmar operação
  Então o usuário não deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 6 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 6 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 12 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 12 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado
Cenário: tentativa de registrar usuário com senha com 13 dígitos
  Quando informar um novo nome
  E informar um novo e-mail
  E informar uma nova senha com 13 digitos
  E confirmar operação
  Então o usuário deverá ser cadastrado
#########################################################################
#########################################################################
#CENARIOS ADICIONAIS:
# 悲しみ - funciona no nome, email e senha
# ♞👽 - funciona no nome e senha
# ♞👽 - não funciona no email.
# 🅒🅐🅝🅘🅑🅐🅛 - funciona no nome e senha
# 🅒🅐🅝🅘🅑🅐🅛 - não funciona no email.
########################################################################
########################################################################

                       # TORNAR USUARIO ADMIN

Funcionalidade: Tornar Admin

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que  usuario acessa a funcionalidade de tornar Admin

  
Cenário: deve ser possível tornar usuario comum em admin
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando confirmar operação
  Então o usuário deverá se tornar admin

Cenário: deve ser possível tornar usuario crítico em admim
  Dado que está autenticado no site
  E que é um usuario do tipo crítico
  Quando confirmar operação
  Então o usuário deverá se tornar admin

Cenário: deve ser possível identificar a review de um usuario admin
  Dado que está autenticado no site
  E que é um usuario do tipo admin
  Quando fizer a review de um filme
  E buscar o filme por id
  Então a review deve indicar que foi feita por um usuario adimin

Cenário: deve ser possível identificar a review de um usuario comum mesmo mudando posteriormente para admin
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de um filme
  E tornar-se admin
  E buscar o filme por id
  Então a review deve indicar que foi feita por um usuario comum

############################# BAD REQUEST ###################################

Cenário: Não deve ser possível tornar usuario em admin sem que esteja autenticado
  Dado que não está autenticado no site
  E que é um usuario do tipo comum
  Quando confirmar operação
  Então o usuário não deverá se tornar admin

#########################################################################
#########################################################################

                          # LISTAR USUÀRIO

Funcionalidade: Listar usuário

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que usuario acessa a funcionalidade de Listar usuario

Cenário: deve ser possível acessar a listagem de usuário sendo um usuário do tipo admin
  Dado que está autenticado no site
  E que é um usuario do tipo admin
  Quando fizer a listagem de usuários
  Então deve aparecer os usuários cadastrados no site
  E deve aparecer suas informações

############################ BAD REQUEST ###################################

Cenário: não deve ser possível acessar a listagem de usuário sendo um usuário do tipo comum
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a listagem de usuários
  Então não deve aparecer os usuários cadastrados no site
  E não deve aparecer suas informações

Cenário: não deve ser possível acessar a listagem de usuário sendo um usuário do tipo crítico
  Dado que está autenticado no site
  E que é um usuario do tipo crítico
 Quando fizer a listagem de usuários
  Então não deve aparecer os usuários cadastrados no site
  E não deve aparecer suas informações

Cenário: não deve ser possível acessar a listagem de usuário sem estar autenticado
  Dado que não está autenticado no site
  Quando fizer istagem de usuário 
  Então não deve aparecer o usuário corresponsente cadastrados no site
  E não deve aparecer suas informações


####################################################################
####################################################################

                            # PESQUISAR USUARIO POR ID

Funcionalidade: Pesquisar usuario por id

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que o usuario acessa a funcionalidade de Pesquisar usuario por id

Cenário: deve ser possível achar outros usuário na pesquisa por ID sendo um usuário do tipo admin
  Dado que está autenticado no site
  E que é um usuario do tipo admin
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o usuário corresponsente cadastrados no site
  E deve aparecer suas informações

Cenário: deve ser possível achar o proprio usuário na pesquisa por ID sendo um usuário do tipo critico
  Dado que está autenticado no site
  E que é um usuario do tipo critico
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o proprio usuário corresponsente cadastrados no site
  E deve aparecer suas informações

Cenário: deve ser possível achar o proprio usuário na pesquisa por ID sendo um usuário do tipo comum
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o proprio usuário corresponsente cadastrados no site
  E deve aparecer suas informações

Cenário: deve ser possível o retorno 200 mesmo sem achar outros usuário na pesquisa por ID sendo um usuário do tipo admin
  Dado que está autenticado no site
  E que é um usuario do tipo admin
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o usuário corresponsente cadastrados no site
  E deve aparecer suas informações

################################## BAD REQUEST ###################################

Cenário: não deve ser possível acessar o Pesquisar outro usuario por id sendo um usuário do tipo comum
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o usuário corresponsente cadastrados no site
  E não deve aparecer suas informações

Cenário: não deve ser possível acessar o Pesquisar outro usuario por id sendo um usuário do tipo crítico
  Dado que está autenticado no site
  E que é um usuario do tipo crítico
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o usuário corresponsente cadastrados no site
  E não deve aparecer suas informações

Cenário: não deve ser possível acessar o Pesquisar outro usuario por id sem estar autenticado
  Dado que não está autenticado no site
  Quando fizer a pesquisa de usuários por ID
  Então deve aparecer o usuário corresponsente cadastrados no site
  E não deve aparecer suas informações


###################################################################################
###################################################################################

                            # REVIEW DE FILME 

Funcionalidade: Review de Filme

Contexto: o usuario deve ter acessado a funcionalidade
  Dado que usuario acessa a funcionalidade de review de filme

Cenário: deve ser possível fazer review de filme sendo usuario do tipo crítico
  Dado que está autenticado no site
  E que é um usuario do tipo critico
  Quando fizer a review de filme
  Então deve ser possível fazer a review de um filme

Cenário: deve ser possível fazer review de filme sendo usuario do tipo admin
  Dado que está autenticado no site
  E que é um usuario do tipo admin
  Quando fizer a review de filme
  Então deve ser possível fazer a review de um filme

Cenário: deve ser possível fazer review de filme sendo usuario do tipo comum
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme
  Então deve ser possível fazer a review de um filme

Cenário: deve ser possível fazer review de filme com nota e texto de 500 caracteres.
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com texto com 500 caracteres
  Então deve ser possível fazer a review de um filme
################################## BUG ############################################
Cenário: deve ser possível fazer review de filme somente com nota
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme só com nota
  Então deve ser possível fazer a review de um filme
###################################################################################
Cenário: deve ser possível fazer review de filme com nota 1
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com nota 1
  Então deve ser possível fazer a review de um filme

Cenário: deve ser possível fazer review de filme com nota 5
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com nota 5
  Então deve ser possível fazer a review de um filme

Cenário: não deve ser possível criar 2 reviews de um filme por usuário, apenas atualizar a mesma.
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme 2 vezes
  Então não deve ser possível criar a review de um filme 2 vezes
  Mas deve atualizar

################################## BAD REQUEST ####################################

Cenário: não deve ser possível fazer review de filme sem estar autenticado
  Dado que é um usuario do tipo comum
  Quando fizer a review de filme
  Então não deve ser possível fazer a review de um filme

Cenário: não deve ser possível fazer review de filme sem nota
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme sem nota
  Então não deve ser possível fazer a review de um filme

Cenário: não deve ser possível fazer review de filme com nota 0
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com nota 0
  Então não deve ser possível fazer a review de um filme

Cenário: não deve ser possível fazer review de filme com nota 6
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com nota 6
  Então não deve ser possível fazer a review de um filme

#################################### BUG ##########################################
Cenário: não deve ser possível fazer review de filme com nota sem ser valor inteiro
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com nota 2.5
  Então não deve ser possível fazer a review de um filme
###################################################################################

Cenário: não deve ser possível fazer review de filme texto com 501 caracteres.
  Dado que está autenticado no site
  E que é um usuario do tipo comum
  Quando fizer a review de filme com texto com 501 caracteres
  Então não deve ser possível fazer a review de um filme

###################################################################################
###################################################################################


4. Ao escrever uma avaliação, os detalhes devem ser refletidos imediatamente
para o filme avaliado;

