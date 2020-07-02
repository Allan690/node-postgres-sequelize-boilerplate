## Node-Sequelize-Postgres Boilerplate

This is the boiler plate you can adapt to set up a Node.js application with Postgres and Sequelize as the ORM:


## Installation
Assuming you have Yarn and Node installed on your machine:

Create a `.env` file at the root of your directory and fill in the values in the `sample-env` file given, which is at the root of the project directory.

Then run:
```bash
yarn install # to install dev dependencies
```

To start the dev server, you can run:
```
yarn start:dev #starts the app in development mode
```
To run the app in a production environment:

```bash
yarn start # this builds the app and runs it
```

There are some more commands you can explore in the `package.json` file. Such as running migrations, rolling back the database etc.
