# API ICONE VIRTUAL

#### deploy: https://api-icone.herokuapp.com/

#

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Objective  

Create the necessary infrastructure for the storage and collection of data of a website. This includes:  
  
- the configuration of the database with the necessary tables and relationships between them;
- the creation of an API capable of sending, collecting, and updating data;
- the creation of a webpage to showcase the API's capabilities.

# Tecnologies implemented  

In this project the following technologies, languages, and libraries were used:

- **Nestjs**
  - **Yarn** - package managemen system
  - **Typescript** - for being strictly typed 
  - **typeORM** - query builder for the communication
  - **mysql** - database management system
  - **uuid** - id generator
  - **Swagger** - for describing the REST API

# Database  

The database structure was conceived after talking with the UX team about what would be displayed on the website.

-----

## Using typeORM  

The tables were created through the node module "typeORM" using synchronize to implement the necessary columns, constraints, and relations.  
  
The `src/coonection/index.ts` file holds the information to tell typeORM where to find the desired database and its type.
  
  
![MySQL print to show created tables in the required database](/demo/DB-MySQL.png "Created tables")
![MER print to show tables in the database](/demo/MER.jpg "Created tables")  


## Writing the initial information  
  
Now we are able to input all the initial data through a single terminal command instead of needing to insert them one-by-one using the API or Postgres bank manager.  
  
  
# API REST

For the creation of the API we used the nestjs module "main.ts". With it we are able to communicate with the HTTP protocol requisitions. We separated the steps in:
- **controllers**
- **entities**
- **modules**
- **services**

## SWAGGER
  
We used "Swagger" to create a page to showcase what is possible to do with the API. In it it is shown which requests are possible.

![Possible requests to interact with each table](demo/swagger-requests.png?raw=true "Possible requests")

# Execution  
  
### To run the application first install the modules

```
yarn
```
  
### Adjust the `src/connection/index.ts` to direct to the desired database

```
    {
      host: "localhost",
      user: "your_user_here",
      password: "your_password_here",
      database: "your_database_here",
    },
```

### Start server
```
yarn start
```

### Start server with hot reload
```
yarn start:dev
```

### Start server with production mode
```
yarn start:prod
```  
  
## Desenveloper<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/micheldslive">
        <img src="https://avatars.githubusercontent.com/u/55795597?v=4" width="100" alt="Foto no GitHub"/><br>
        <sub>
          <b>Michel Domingos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
