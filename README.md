[![Build Status](https://app.travis-ci.com/knowit/fagseminar-fredrikstad-2022.svg?branch=master)](https://app.travis-ci.com/github/knowit/fagseminar-fredrikstad-2022)

# Knowit Fredrikstad Fagseminar Vår 2022

Created with [Gatsby](https://www.gatsbyjs.org/).

## Before commit

Run prettier to pretify the code.

```sh
yarn prettier
```

## Airtable-integration on build & configuring secrets

The project uses airtable.com as backend. The following environment-variable should be set to build:

- AIRTABLE_API_KEY

Because of a limitation in the airtable-plugin, a dummy-row should be populated with all fields (usersIds = 'Dummy'. This row is filtered out by the graphql-call, see [src/graphql/airtable.js](airtable.js)

## Install gatsby

```sh
npm install --global gatsby-cli
```

and install dependencies inside this folder:

```sh
yarn
```

And run from your CLI:

```sh
yarn start
```

To build, run:

```sh
yarn build
```

When pushing to master, the application is automatically deployed. Or you can look under the build-directory for the code to an AWS Lambda that triggers a Travis-build on master. Implemented with the serverless framework. The lambda is triggered by a Slash-command (https://api.slack.com/interactivity/slash-commands) from Slack.

**Important libraries used:**

- React (https://reactjs.org/)
- Gatsby (https://www.gatsbyjs.org/)
- Emotion (https://emotion.sh/)
