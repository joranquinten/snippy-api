# Snippy API
This repository builds the Express backend for the Snippy application.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### MongoDB
Make sure you have [MongoDB](https://www.mongodb.com/) installed and fill the following `ENV` variables:
- DB_USER
- DB_PASSWORD
- DB_URL
- MONGODB_URI # Example: mongodb://localhost/local

#### Auth0
Auth0 is used for authentication. You can set up an account (developers account is fine) at [Auth0](https://auth0.com/) and register the following `ENV` variables:
- AUTH0_CLIENT_ID
- AUTH0_DOMAIN
- AUTH0_API_ID
- AUTH0_CLIENT_SECRET

If you follow the initial setup and register an application, you will find these in your account.

### Installing
Just run `npm install` to install all the dependencies.

---

## Development

### Running tests
Not done yet, be gentle!

### Deployment
Not done yet, so only run locally 🙈

---
## Background

### Built with
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Auth0](https://auth0.com/)

### Contributing
Easy-peasy! Notify the owner via an issue, submit a Pull Request and if you pass the sanity check, the PR will be merged. See [Contributing.md](Contributing.md) for details.

### Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/joranquinten/snippy-api/tags).

## Authors
**Joran Quinten**

## License
This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).