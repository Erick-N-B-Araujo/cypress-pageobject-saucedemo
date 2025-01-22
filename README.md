# Cypress PageObject SauceDemo

This project demonstrates test automation for the [SauceDemo](https://www.saucedemo.com/) website using the [Cypress](https://www.cypress.io/) framework and the Page Object Model (POM) design pattern.

## Prerequisites

Make sure the following tools are installed in your development environment:

- [Node.js](https://nodejs.org/) (version 6 or higher)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- Google Chrome (browser for test execution)

## Installation

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/Erick-N-B-Araujo/cypress-pageobject-saucedemo.git
   ```

2. Navigate to the project directory:

   ```
   cd cypress-pageobject-saucedemo
   ```

3. Install project dependencies:

   ```
   npm install
   ```

## Project Structure

- `cypress/`: Contains automated tests and page objects (Page Objects).
- `cypress/integration/`: Contains test specification files.
- `cypress/support/`: Contains custom commands and additional configurations.
- `cypress.json`: Cypress configuration file.
- `package.json`: Lists project dependencies and scripts.

## Running the Tests

### Interactive Mode

To open the Cypress graphical interface and run tests interactively:

```
npx cypress open
```

In the Cypress interface, select the desired browser (e.g., Chrome) and click on the test you want to execute.

### Headless Mode

To run all tests in headless mode (without a graphical interface):

```
npx cypress run
```

## Reports

This project is configured to generate test reports using [Mochawesome](https://www.npmjs.com/package/mochawesome). After running the tests, an HTML report will be generated in the `mochawesome-report` directory.

## Page Object Model (POM)

The Page Object Model pattern is used in this project to promote code reuse and facilitate test maintenance. The page objects are located in the `cypress/support/pageObjects` directory.



## Support this project



If you want to support this project, leave a ⭐.

------

This project was created with ❤️ by [Erick](https://erickaraujo.com).