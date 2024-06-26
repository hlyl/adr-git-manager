# ADR-Manager ![General cypress report](https://github.com/adr/adr-manager/workflows/General%20cypress%20report/badge.svg?branch=cypress-integration) [![GitHub license](https://img.shields.io/github/license/adr/adr-manager)](https://github.com/adr/adr-manager/blob/main/LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/adr/adr-manager)](https://github.com/adr/adr-manager/commits/main) [![GitHub issues](https://img.shields.io/github/issues/adr/adr-manager)](https://github.com/adr/adr-manager/issues) [![GitHub stars](https://img.shields.io/github/stars/adr/adr-manager)](https://github.com/adr/adr-manager/stargazers)

> A fork of Adr-manager that is customized to work based on Github as the host of the  web-based application for the efficient creation and management of [architectural decision records (ADRs)](https://adr.github.io) in Markdown (MADR)

## Description

[MADR](https://adr.github.io/madr/) is a Markdown template for quickly capturing architectural decisions.
It offers a naming scheme and template to keep the layout of recorded decisions consistent.
Each decision is stored in a separate file.
The ADR Manager currently only supports the management of MADRs stored in the folder `docs/adr` in GitHub repositories.

## Quick Start
If you merge this repo and follow the configuration steps below, the tool will be available as a Github page on
on the URL that you specify.. .in this example http://github.com/hlyl/adr-git-manager.

## Supported Browsers

Currently, the tool has been successfully tested in EDGE, Chrome and Firefox.

### Usage

1. After opening the tool, connect to GitHub. The tool needs your permission to access your GitHub repositories and email address.
2. Add a GitHub repository. If your account does not have access to a repository with MADRs, you can simply fork one, e.g., <https://github.com/JabRef/jabref> or <https://github.com/adr/adr-log>.
3. Now, you can edit any files in `docs/adr` of the GitHub repository.
   Edit existing ADRs or create new ones.
   One of the most important features is the MADR Editor that allows you to quickly draft a MADR while ensuring a consistent format.
   ![This is the MADR editor in advanced mode.](docs/img/editor-screenshot.png)
4. Do not forget to push your changes to GitHub, once you are done with editing the files.

Some technical notes:

- The `authID` (which enables the connection to GitHub) and changes to ADRs are stored in the local storage.
  That way they are not lost when you reload the page or restart the browser.
  However, changes will be lost when you either
  - Clear local storage or
  - Press the `Disconnect` button.
- The general idea is that you directly push your changes to GitHub after editing.
- During development, we may remove permissions for the OAuth App from time to time.
  Do not be surprised, if you have to give permissions repeatedly.

## Development

### Prerequisites

- Node.js and npm
- A GitHub account with access to a repository with MADRs

### Installation

To run the project locally, follow these steps:

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Compile and start the application with `npm start`.

Note that, even when you run it locally, you need to connect to GitHub to use any functionality.

### Using End-2-End Tests Locally

We use [Cypress](https://www.cypress.io/) for e2e testing.
The CI pipeline provides the necessary Oauth `authId` as an ENV variable.
Locally, however, you'll need to provide one yourself.
You can either set `CYPRESS_OAUTH_E2E_AUTH_ID` and `CYPRESS_USER` containing the `authId` and `user` or create a `cypress.env.json` file and fill it with the following content:

```json
{
  "OAUTH_E2E_AUTH_ID": "*********",
  "USER": "***********"
}
```

The value of `OAUTH_E2E_AUTH_ID` and `USER` needs to be a valid `authId` and `user` from an active OAuth session, which you can obtain in the local storage (Chrome developer console -> Application -> Storage -> Local Storage -> `http://localhost:8080` -> `authId`, `user`)
The involved GitHub account also needs to have developer access to the repo `adr/adr-test-repository-empty`.
Lastly, don't forget to start the app before running the e2e tests (`npm start`).

### Useful Commands

The following commands are useful for development:

```bash
# install dependencies
npm install

# build and start with hot-reload for development
npm start

# build and minify for production
npm run build

# run unit tests
npm test

# run e2e tests
npm run e2e:test

# open cypress GUI for e2e tests
npx cypress open

# run a single e2e test
npx cypress run --spec ./cypress/e2e/adrManagerTest/<file-name>

# format code with prettier (do this before you commit and push)
npm run format
```

### Backend Setup

The project uses [OAuth] for the authentication to GitHub.
If you do not want to use this instance, you can easily set up your own by following these steps:

1. Create an OAuth application on GitHub (see [here](https://docs.github.com/en/github-ae@latest/developers/apps/creating-an-oauth-app)).
   - Copy the Client ID and Client Secret of the app (you'll need them later).
2. .........

## Project Context
This project was started as an undergraduate research project at the Institute of Software Engineering of the University of Stuttgart, Germany.
It was also submitted to the [ICSE Score Contest 2021](https://conf.researchr.org/home/icse-2021/score-2021).
Since then, it has been given over to the [ADR organization on GitHub](https://github.com/adr), where it is maintained and extended.
