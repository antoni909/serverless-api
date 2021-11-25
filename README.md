<h1 align="center">Welcome to Serverless-API 👋</h1>
<h2 > A single resource REST API using a domain model constructed using AWS Cloud Services </h2>
<p>
  <a href="https://www.npmjs.com/package/serverless-api" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/serverless-api.svg">
  </a>
</p>

## UML

![AWS Serverless-API UML](/assets/uml.jpeg)

What is the root URL to your API?

' / '

What are the routes?

[the routes](##-Routes)

What inputs do they require?

[route input's](##-Routes)

What output do they return?

[route expects](##-Routes)

## Routes

GET /people

- input:  n/a
- expect: returns an array of objects representing the records in the database

GET /people/id

- input:  n/a
- expect: returns an object representing one record, by its id

POST /people

- input:  Given a JSON body, inserts a record into the database
- expect: returns an object representing one record, by its id

PUT /people/id
  
- input:  Given a JSON body and an ID (##), updates a record in the database
- expect: returns an object representing one record, by its id

DEL /people/id
  
- input:  Given an id (##) removes the matching record from the database
- expect: returns an empty object

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
