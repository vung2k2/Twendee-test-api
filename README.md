# Twendee Test API

This API provides random user data similar to randomuser.me. It is built using NestJS.

## Endpoints

Note: Wait about 1 minute for the server to start

- `GET https://twendee-test-api.onrender.com/randomuser`
  - Fetch a random user.

- `GET https://twendee-test-api.onrender.com/randomuser/list?count=5`
  - Fetch a list of 5 random users.

- `GET https://twendee-test-api.onrender.com/randomuser?gender=male`
  - Fetch a random user with the gender set to male.

- `GET https://twendee-test-api.onrender.com/randomuser?nat=US`
  - Fetch a random user with nationality set to US.

- `GET https://twendee-test-api.onrender.com/randomuser?inc=name,email`
  - Fetch a random user including only the specified fields (`name` and `email`).

- `GET https://twendee-test-api.onrender.com/randomuser?exc=phone`
  - Fetch a random user excluding the specified field (`phone`).

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
```


