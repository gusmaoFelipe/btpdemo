## Description

NestJS Backend App that exposes a get request to front end and return contry information for a specific language. Information is available from an external Rest API (https://restcountries.com/v2/).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Endpoints
```
/countries/lang={pt}
```
*Get countries by language* 

```