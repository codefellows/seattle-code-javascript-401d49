# Postgres / Sequelize / Sqlite3

## Whiteboard

[today's Freehand](https://projects.invisionapp.com/freehand/document/5CMFYy1XK)

## Code Review

- Validator test

## Postgres Commands

- start postgres (if necessary)
- type `psql` to get to the postgres interface
- list databases: `\l`
- quit: `\q`
- change collection (use different DB): \c database-name
- show database tables: \dt
- show all contents of database: \d
- see contents of table: SELECT * FROM "customers";
- another see contents of table: TABLE "customers";

## npm libraries

`npm i pg sequelize sequelize-cli sqlite3`

## sequelize scripts

```
"db:config": "sequelize init:config",
"db:create": "sequelize db:create"
```

See class [README](./) for more postgres details!
