Teste develop Front-end

Frameworks utilizado AngularJs e BootStrap.

A aplicação está rodando no heroku.

arquivo "serve.js" que está na raiz, eu criei para poder arrumar o erro de porta. o heroku estava tetando pegar algumas portas que não funcionava. para resolver problema eu criei esse arquivo. Dentro do arquivo utilizei o cors e express.

teste unitário foi criado, mas não consegui rodar no meu pc está dando erro no Karma.
--------------------------------------------------------------------------------------------------
Criada a tela de login e autenticação de usuário com token usando JWT. 

Criado também proteção de rotas. Pessoas deslogadas não conseguem entrar em nenhum link fora a    /login, sem está com token validado.

dataBinding: usei o ng-bind no lugar de passar expressions( {{ }} ), para apresentar a descrição. Espero de coração que esse sirva para isso. 

Diretivas, criei o arquivo filter.js como exemplo e passei ele ao lado de uma expression usando |

components, criei 4. um para card dos herois, outro para descrição, outro para deslogar e um para pesquisar.

e sim, fiz o "back-end" dentro da serve, sei que não é o recomendado, mas como é só um teste estou provando que sei fazer as coisas e sei das melhores e piores praticas.

