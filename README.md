# FoodExplorerBackEnd

*DESCRIÇÃO*
O esta api foi desenvolvida para atender a aplicação de um desenvolvimento onde há cadastro de produtos e pedidos de produtos do lado do usuário.
A aplicação se baseia em um estilo de ifood, onde o administrador ou dono cadastra seus produtos para que o usuário possa entrar, montar seu carrinho e fazer seu pedido.

*DESENVOLVIMENTO*
A api foi desenvolvida utilizando o nodejs e express mantendo tanto o frontend e o backend da aplicação em codigo javascript
a aplicação está desenvolvida e separada por pastas de maneira bem estruturada e explicativa.

*PASTAS*

*Controller*
A pasta de controller contem todos os controllers da aplicação, ou seja uma pasta onde tenha todos os arquivos que são chamados pelas rotas da api.

*Database*
Esta pasta contem a pasta knex onde esta as migrations e a o arquivo de conexão com o banco de dados utilizando o query builder knex.

*Config*
A pasta config tem alguns arquivos de configuração para o multer que sera o upload de imagens ou arquivos em geral, e as configurações do token onde utilizaremos o jwt para autenticação.

*Middlewares*
Pasta contendo os middlewares de autenticação para verificar se o usuário esta autenticado.
Podendo também conter outros middlewares em caso de necessidade ou escalonamento.

*Providers*
São os responsaveis por prover algo, ou seja , nesta aplicação é responsavel por pegar os uploads de arquivos e mover para a pasta de arquivos fixas, ou deletar arquivos.
Também podendo ser adicionado novos providers em caso de necessidade ou escalonamento.

*Routes*
Pasta de routes contem todos as rotas e o index principal das rotas de api para esta aplicação.

*Utils*
a pasta de utils nesta aplicação foi utilizada para fazer o controle de tratativa de erros ou possíveis avisos que gostariamos de passar para nosso front end, e ate mesmo impedir que a aplicação pare por falta de tratamento de erros.

*Tmp*
A pasta temp contem os uploads temporarios onde o provider ira pegar os arquivos e mover para a pasta uploads que fica no interior desta pasta.



*QUERY BUILDER KNEX*
O Knex foi utilizado como o query builder, ele resumidamente escreve comandos sql traduzindo de banco para banco, sabemos que o sql é um padrão de escrito entre os bancos.
Porém podemos variar em alguns bancos, o knex nos permite realizar se necessário a migração de banco sem a necessidade de ter que reescrever o código sql, ou seja traduzindo as escritas para os bancos.

CASO HAJA INTERESSE NO KNEX VISITE A DOCUMENTAÇÃO PARA SABER MAIS.
https://knexjs.org/

*BANCO DE DADOS*
O banco utilizado nesta aplicação é o postgre, particularmente eu gosto muito deste SGBD , acho robusto e facil de se trabalhar.

*.ENV.EXEMPLE*
Como utilizei um banco de dados pessoal utilizei as variaveis de ambiente para ocultar minhas credenciais, porém deixei um arquivo .env.exemple onde mostra as variaveis necessarias para que a aplicação seja inicida.

*DEPENDENCIAS*
bcryptjs - utilizado para criptografrar a senha ou verificar a mesma ao ser enviada para o db
cors - responsavel por melhorar e permitir a comunicação entre o back e frontend
dotenv - utilizada para utilização de variaveis de ambient.
express - utilizado para desenvolver a api.
express-async-errors - utilizada para os tratamentos e envios de erros
jsonwebtoken - utilizada para criação do token de autenticação da aplicação
knex - query builder de comunicação com o banco de dados
multer - utilizado para manipular arquivos.
pg - utilizado para comunicar com o postgre
pm2 - utilizado para startar ou projeto , melhor dizendo, para deixar a aplicação rodando, em algum caso de erro o pm2 reiniciará a aplicação sem a necessidade de intervenção.

*CONTRIBUIÇÕES*
A aplicação do frontend ainda precisa de algumas telas, como controle do status do produto, você pode contribuir para esse backend montando rotas e personalizando da maneira que achar melhor.
Deixarei o link do frontend no fim do readme para que possa utiliza-lo e realizar as melhorias que melhor definir.
Ficarei muito em feliz em ver as contribuições com este projeto.

*AGRADECIMENTOS*
Desde já agradeço por ler o readme e ter interesse nesta aplicação.
É uma aplicação muito simples e é claro, se ainda não conhece as dependencias utilizadas, com certeza vale a pena se aprofundar para entender a aplicação e se desenvolver ainda mais.

*CONTATO*
abaixo segue o link do meu linkdin para networking ou qualquer dúvida ou sugestão que tenha na aplicação.
https://www.linkedin.com/in/lucas-ribeiro-95256a140/

*LINK FRONTEND*
https://github.com/LucasBackend/FEFRONTFINAL


