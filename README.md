# Warhammer Work Experience

## Introduction

This repository contains a nextjs app for organising warhammer 40k collections, and a local databse for storing the data.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Docker](https://www.docker.com/) - Containerisation platform

Run `npm install` to install all dependencies.
Run `cd web && npm install` to install all dependencies for the web app.

Install the following via brew:

```
brew install postgresql
brew tap sqitchers/sqitch
brew install sqitch --with-postgres-support --with-sqlite-support
```

### Running the app

Run `npm run start-backend` to start the database.
Run `npm run start-frontend` to start the web app.
Run `npm run db-migrate` to migrate the database.

### Adding a new migration

Run `sqitch add <name> -n 'description'` to add a new migration.

### Cleaning the database

Run `npm run db-clean` to clean the database.

Test Message
