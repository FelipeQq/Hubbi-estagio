<p align="center">
  <img src="https://github.com/FelipeQq/Hubbi-estagio/blob/main/logo-.png" height="160" width="220" alt="UPAR LOGO HUBBI" />
</p>

<h1 align="center">Estágio Hubbi</h1>
<p align="center">Teste de desenvolvimento web</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#tecnologias-utilizadas">Tecnologias</a> • 
 <a href="#executando-o-projeto">Execução do Projeto</a>
</p>

## Layout WEB
<img  width="100%" src="https://github.com/FelipeQq/Hubbi-estagio/blob/main/gif-app.gif">

# Sobre

<p>
  Basicamente o desafio é consumir uma API gratuita, que fornece dados da grande franquia Star Wars.
  
  O projeto foi desenvolvido utilizando ReactJS e Bootstrap. Para consumo da API foi usado o axios, onde permitiu o recebimento dos dados.
  
  No processo de lista os personagens, percebi que a API só fornece 10 objetos por página, logo, tive que fazer a lógica para realizar a paginação e assim consumir todos os dados. Além de colocar algumas características extras como Altura e Peso dos personagens.
  
  Ao realizar o mesmo processo com as naves e armas, percebi que a API não fornece nenhum endpoint para as armas, tornando impossível o consumo desses dados. Entretanto, realizei o consumo das naves e inseri algumas características como modelo, quem fabricou e quandidade de passageiros.
  
  As características optei por realizar de forma dinâmica onde o usuário pode ocultar e mostrar as informações através de um botão.
  
  Para a idéia da autenticação usei o React-DOM e o Context-API, passando como usuário="admin" e senha="admin".
  
  Todo o processo foi um grande desafio e fico feliz por tê-lo concluido.
  
  
  Desafio:
- Criar um repositório no Github
- Criar um novo projeto React ou Angular
- Fazer uma aplicação que consuma a API https://swapi.dev/ e realize as seguintes:
      a) lista os personagens;
      b) lista todas as naves e armas;
      c) tem uma página de detalhes para cada nave;
      d) login usando JWT (simples) mas que permita usuários acessar uma página restrita (detalhes das aeronaves)
- Se puder, inclua o Material-UI ou Bootstrap no projeto
- Usuários podem listar personagens e tipos e habilidades mas só pode ver os detalhes do personagem se estiver logado na aplicação
- Se quiser incluir outras funcionalidades, sinta-se à vontade
</p>

<p>A aplicação simula um delivery, onde permite o cliente escolher o produto e inserir o endereço para entrega.</p>

# Tecnologias utilizadas

## Front end
- HTML / CSS / Bootstrap
- ReactJS

# Executando o projeto

```bash
# clonar repositório
git clone https://github.com/FelipeQq/Hubbi-estagio.git

# instalar dependências
npm install

# Na pasta do projeto
npm start
```

# Autor

Felipe Queiroz

https://www.linkedin.com/in/felipe-queiroz-384b13187/
