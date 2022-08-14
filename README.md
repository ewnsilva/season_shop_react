<h1><p align="center">🛒 Season Shop v2.0 🛒</p></h1>

<p>O projeto Season Shop v2.0 é a reformulação do projeto original <a href="https://github.com/ewnsilva/season_shop">Season Shop</a>, com algumas melhorias e código totalmente reformulado, utilizando as mesmas tecnologias anteriores (HTML, Javascript e CSS), e adicionando o uso de React. A nova versão traz como objetivo o aprendizado desta ferramenta, juntamente com boas práticas de programação.</p>

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/179720299-d0e8306e-f0d8-409f-97ca-475daa8a4230.png" width= 250px>

<h2><p>:computer: Sobre</p></h2>

Está aplicação segue os mesmos conceitos que sua versão anterior, usufruindo de pequenos aprimoramentos estéticos e de um novo código. O usuário poderá adicionar ou remover os produtos do catálogo no carrinho de compras, contando com duas telas interativas. A primeira sendo a tela inicial onde o usuário poderá observar os produtos disponíveis para a compra, e na segunda tela, poderá verificar os itens no carrinho e alterar a quantidade de cada um para posteriormente confirmar a compra.

<h2><p>:rocket: Como Utilizar</p></h2>

Na tela inicial (Home), o usuário verá a lista de todos os produtos disponíveis, e poderá adicionar ao carrinho clicando com o botão esquerdo do mouse no botão verde "Adicionar ao Carrinho" que fica logo abaixo da descrição e tipo do produto.

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184556508-f1f6efe1-08fa-4647-b355-7220e24c8d5d.PNG" width="750px">

Após adicionar todos os itens desejados, eles serão exibidos ao lado direito da tela. O usuário poderá remover o item da lista de compras, pressionando com botão esquerdo do mouse no botão "X" ao lado do nome do item.

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184556510-6e1bcd8a-b3aa-48ee-ba13-183d116aca41.png" width="750px">

Depois de conferir todos os itens que foram adicionados ao carrinho, o usuário pode se encaminhar para finalizar a compra utilizando o botão "Comprar" que fica no canto inferior direito da tela, no final da aba do carrinho.

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184556511-7b1360ba-76f6-4626-acd6-f88f1e6136d8.png" width="750px">

Assim que o usuário utilizar o botão "Comprar", ele será redirecionado a página de finalização a compra. Nesta nova página, o usuário poderá remover ou alterar a quantidade de itens adicionados ao carrinho, conforme mostra a imagem a seguir. Ao alterar a quantidade de produtos, imediatamente será atualizado o valor do produto. Se for preciso adicionar novos itens ao carrinho, poderá ser acionado o botão que fica no canto superior esquerdo ("Adicionar Novos Itens") logo acima da lista de produtos, que detêm a ação de voltar a tela inicial.

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184556512-738b03f0-5029-4bee-86d6-b29d071bdbed.png" width="750px">

Ao lado direito, o usuário poderá observar uma pequena tela com fundo azul que indica o valor total dos produtos. Este valor por sua vez é modificado conforme o usuário alterar a quantidade de produtos, ou remover o mesmo da lista de compras através do botão que fica logo abaixo do valor do produto. Após o usuário conferir se todos os itens, com suas respectivas quantidades estiverem corretas, o usuário poderá clicar no botão "Confirmar Compra" que fica logo abaixo do valor total dos itens, e a seguir, será exibido uma pequena tela indicando que a compra foi realizada com sucesso

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184556513-fe4a6222-b052-49a4-af31-d50d7788ca7d.png" width="750px">

<h2><p>:hammer_and_wrench: Instalação</p></h2>

Para acessar este aplicativo, o usuário deverá possuir em seu computador pessoal as seguintes ferramentas instaladas:

* Navegador de Internet (Ex: Microsoft Edge, Google Chrome);
* Visual Studio Code;
* Git;
* Node.js.

Após instalar estas ferramentas, o terminal do seu sistema, e utilize o seguinte:

```
git clone https://github.com/ewnsilva/season_shop_react.git
```


```
cd season_shop_react
```


```
npm install
```

O comando “git clone” é utilizado para realizar uma cópia do projeto para o seu computador pessoal. A seguir vêm o comando “cd season_shop_react” que serve para levar o terminal na pasta que contêm o projeto, e o “npm install” é um comando do Node.js responsável por instalar no seu computador todas os arquivos que o aplicativo depende para funcionar da maneira correta (dependências). Após executar o “npm install”, deve aguardar até que o processo seja finalizado.

Após isso, poderá utilizar o comando “code .” dentro do diretório que o aplicativo se encontra caso queira ver o funcionamento do código. 

Caso desejar iniciar a aplicação, só utilizar o comando “npm start” que o aplicativo será executado e automaticamente será aberto o navegador web padrão do seu computador com a aplicação sendo executada. Após este comando, o terminal do seu sistema ficará semelhante a figura abaixo. Caso desejar encerrar a aplicação, o comando a ser utilizado é p Ctrl+C. Depois é só pressionar a tecla “S” e depois apertar “Enter”.

<p align="center"><img src ="https://user-images.githubusercontent.com/83819706/184557186-2311a698-9219-4977-b3c8-dea51642240c.png" width="500px">