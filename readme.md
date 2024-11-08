# Jest Project

This project is designed to run automated tests using **Jest**.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (Node Package Manager, usually included with Node.js)

## Installation

Install the required dependencies:

```bash {"id":"01JC3CSPGDCKQFM8JCFA546PF1"}
npm install
```

## Environment Variables

- Create a \`.env\` file in the root directory if it does not exist.
- Add any environment-specific variables required by the project here.

Example of \`.env\` file:

```sh {"id":"01JC3CSPGDCKQFM8JCFAAQD5RQ"}
API_BASE_URL=https://example.com/api
```

## Run All Tests

- **Run Tests**: This command will execute all tests in the \`tests\` directory.

```bash {"id":"01JC3CSPGDCKQFM8JCFEANS5RF"}
npm run test
```

## Run Specific Test

- **Run Tests**: This command will execute specific test in the \`tests\` directory.

```bash {"id":"01JC3D4P8VPNR3D0WAERRXQDQA"}
npm run test  'File Path to Test'
```

## Dependencies

The following dependencies are required and automatically installed by running \`npm install\`:

- **dotenv**: Loads environment variables from a \`.env\` file.
- **jest**: JavaScript testing framework.
- **jest-html-reporters**: Generates HTML reports after tests are run.
- **supertest**: For HTTP assertions in testing API endpoints.
