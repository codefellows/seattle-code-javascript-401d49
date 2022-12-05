# Basic Authentication

## Encoding vs Encryption

both are transformations

What does encoding mean:

- a transformation of text that uses a standard communication method.  Base64 is what we'll use.
- not necessarily secure.  can be encoded and decoded

Why encode?  When we encrypt we send `username:password`, specifically the colon will not hash (encrypt).  We need to first encode the auth string so that we can encrypt the auth string.

What does encryption mean?
- hides information from everyone using salt and pepper
  - can only be decrypted with a key
  - salt: random noise / filter
  - pepper: secret variable
  - we will use bcrypt
  - we can hash a password more than once


### Application Structure (proposed)

> NOTE: The majority of our work for this server will be done within the `src/auth` folder. The rest of the system should be generic express. Why? It's our intention to be able to "lift" the `auth` folder and "drop" it into any other server (such as our API server) and be able to use authorization to "protect" those CRUD routes. This makes our entire auth system very modular. Think of `index.js` and `server.js` as nothing more than the basics to get a server started, with 100% of the actual logic living within the `auth` module
```text
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── auth.router.test.js
│   ├── basic-auth.test.js
│   ├── 404.test.js
├── src
│   ├── auth
│   │   ├── middleware
│   │   │   ├── basic.js
│   │   ├── models
│   │   │   ├── index.js
│   │   │   ├── users-model.js
│   │   ├── router.js
│   ├── middleware
│   │   ├── 404.js
│   │   ├── 500.js
│   │   ├── model-finder.js
│   ├── server.js
├── index.js
└── package.json
```
