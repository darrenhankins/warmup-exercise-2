# warmup-exercise-2
`Galvanize/Exercises/warmup-exercise-2`

https://www.youtube.com/watch?v=0psqtKr6ZHg&feature=youtu.be

#### Express/Knex Setup
```terminal
$ express --git --hbs
$ yarn add knex pg
$ knex init
$ yarn add dotenv
$ touch .env
$ touch .env.sample
$ echo .env >> .gitignore

$ yarn add global nodemon
$ yarn add bcrypt


```
knexfile.js

```js
require("dotenv").load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postres://localhost/database-name'
  }
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // }
};
```

---

#### Database Connection
db/knex.js
```js
var config = require("./knexfile")[process.env.NODE_ENV || "development"];
module.exports = require("knex")(config);

```
---

#### Routes

  - ./auth/index.js
  - ./db/query.js
  - app.js

```js
var auth = require('./auth');

app.use('/auth', auth);


```

---

#### Testing with Postman

```
$ nodemon

```

  - POST (set request method)
  - http://localhost:3000/auth/signup (api url)
  - "raw" "JSON (applicatioin/json)"

  ```
{ "password": "test10", "email": "test@test10.com" }

  ```
