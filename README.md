# Prova Dev. Estagiario LANDIX
 
Este repositório contém:
- Projeto Angular v9
- Projeto de aplicação WEB Java (RESTful Jersey API)
- Projeto Angular v9 compilado
- Banco de dados MySql exportado com alguns dados

## O que é necessário para executar o projeto

O Front end está localizado em /dist/ldxps, e seu funcionamento depende da execução de uma API de acesso aos dados (/dist/ldxps-database.sql). O banco de dados deve ser executado na porta padrão no localhost. A API é um projeto de aplicação WEB JAVA, especificado no formato RESTful Jersey, localizado em /ldxps-restful-api. O projeto deve ser executado no Netbeans IDE v8.0, JDK v8, no endereço http://localhost:8080. No caso de já existir uma API, esta deve ser executada com entry point http://localhost:8080/ldxps-restful-api/api/', com requisições de resposta retornando objetos JSON, cujos recursos serão especificados abaixo:

### Recurso vendedor

Objeto JSON de vendedor
{

  "CDVEND",
  
  "DSNOME",
  
  "CDTAB",
  
  "DTNASC"
  
}

@GET

http://localhost:8080/ldxps-restful-api/api/vendedor/

Retorna uma lista de vendedores com atributos como descrito na especificação de requisito


@GET

http://localhost:8080/ldxps-restful-api/api/vendedor/{CDVEND}

Retorna um vendedor


@POST

http://localhost:8080/ldxps-restful-api/api/vendedor/

Recebe um objeto JSON de vendedor


@PUT

http://localhost:8080/ldxps-restful-api/api/vendedor/{CDVEND}

Recebe um objeto JSON de vendedor


@DELETE

http://localhost:8080/ldxps-restful-api/api/vendedor/{CDVEND}



### Recurso cliente

Objeto JSON de cliente
{

  "CDCL",
  
  "DSNOME",
  
  "IDTIPO",
  
  "CDVEND",
  
  "DSLIM"
  
}


@GET

http://localhost:8080/ldxps-restful-api/api/cliente/

Retorna uma lista de clientes com atributos como descrito na especificação de requisito


@GET

http://localhost:8080/ldxps-restful-api/api/cliente/byVendedor/{CDVEND}

Retorna uma lista de clientes que estejam relacionados com o código CDVEND


@GET

http://localhost:8080/ldxps-restful-api/api/cliente/{CDCL}

Retorna um cliente


@POST

http://localhost:8080/ldxps-restful-api/api/cliente/

Recebe um objeto JSON de cliente


@PUT

http://localhost:8080/ldxps-restful-api/api/vendedor/{CDCL}

Recebe um objeto JSON de cliente


@DELETE

http://localhost:8080/ldxps-restful-api/api/vendedor/{CDCL}

