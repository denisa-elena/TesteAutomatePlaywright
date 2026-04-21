# TesteAutomatePlaywright - Test Automation Suite

## Project Overview

This test automation suite is designed to validate the UI of the **Sauce Labs Demo Application** (https://www.saucedemo.com/) using comprehensive end-to-end (E2E) testing. The project follows industry best practices with the **Page Object Model (POM)** pattern for maintainability and scalability across multiple browsers and devices.

### Application Under Test
- **URL**: https://www.saucedemo.com/
- **Type**: E-commerce demo application
- **Test Coverage**: Login, Inventory browsing, Shopping cart, and Checkout flows

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Technologies Used

- **JavaScript (ES6+)**
- **Playwright 1.58.2** - Cross-browser automation
- **Node.js** - Runtime environment
- **Faker.js** - Test data generation
- **HTML Reporter** - Test result visualization

### Supported Browsers

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

## Project Structure

```
TesteAutomatePlaywright/
├── pages/
│   ├── inventory.page.js
│   ├── login.page.js
│   ├── registerLogin.page.js
│   └── my_first_test.spec.js
├── tests/
│   ├── inventory.spec.js
│   ├── login.spec.js
│   └── registerLogin.spec.js
├── playwright-report/
│   └── index.html
├── test-results/
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

### Directory Details

- **pages/**: Page Object Model files encapsulating page interactions and selectors
- **tests/**: Test specifications organized by feature/functionality
- **playwright-report/**: HTML test reports generated after test execution
- **test-results/**: XML/JSON test result files
- **playwright.config.js**: Playwright configuration for browser, timeouts, and reporters
- **package.json**: Project dependencies and scripts

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TesteAutomatePlaywright
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests (headless mode - all browsers):
```bash
npx playwright test
```

### Run tests for a specific browser:
```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit only
npx playwright test --project=webkit
```

### Run a specific test file:
```bash
npx playwright test tests/login.spec.js
```

### Run tests in headed mode (with UI):
```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

## Reporting

### View HTML Report
Playwright generates an interactive HTML report after test execution:

```bash
npx playwright show-report
```

The report includes:
- Test execution timeline
- Pass/Fail status for each test
- Screenshots on failures
- Video recordings (if enabled)
- Detailed error messages and stack traces

### Configuration Files

- **playwright-report/**: Contains the latest HTML test report
- **test-results/**: Contains raw test results in different formats

## Configuration

### Key Settings in `playwright.config.js`

- **testDir**: `./tests` - Directory containing test files
- **timeout**: `60000ms` - Global test timeout
- **actionTimeout**: `15000ms` - Timeout for individual actions (clicks, fills, etc.)
- **navigationTimeout**: `60000ms` - Timeout for page navigation
- **fullyParallel**: `true` - Run tests in parallel by default
- **reporter**: `html` - Generate HTML reports
- **retries**: 
  - CI: 2 retries on failure
  - Local: 0 retries
- **trace**: `on-first-retry` - Capture trace on first retry for debugging

### Customization

To modify test behavior:

1. **Update timeouts** in `playwright.config.js` if tests are too fast or slow
2. **Enable video recording**:
   ```javascript
   use: {
     video: 'retain-on-failure'
   }
   ```
3. **Set base URL** for the application:
   ```javascript
   use: {
     baseURL: 'http://localhost:3000'
   }
   ```
4. **Configure workers** for parallel execution:
   ```javascript
   workers: 4  // Run 4 tests in parallel
   ```

## Page Object Model Pattern

Page Object files encapsulate page elements and methods:

```javascript
// Example: pages/login.page.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[id="user-name"]';
    this.passwordInput = 'input[id="password"]';
    this.loginButton = 'input[id="login-button"]';
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
```

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-tests
   ```
3. Follow the Page Object Model pattern for new tests
4. Use Faker.js for generating test data
5. Ensure all tests pass locally:
   ```bash
   npx playwright test
   ```
6. Commit your changes:
   ```bash
   git commit -m 'Add new tests for feature X'
   ```
7. Push to the branch:
   ```bash
   git push origin feature/new-tests
   ```
8. Submit a pull request

### Guidelines for Contributors

- Use **descriptive test names** that clearly indicate what is being tested
- Follow the **Page Object Model pattern** for all page interactions
- Keep **test data** organized using Faker.js or fixtures
- Add **comments** for complex test logic or non-obvious assertions
- Ensure tests are **independent** and can run in any order
- Keep tests **reliable** by avoiding hardcoded waits (use proper wait strategies)
- Use **meaningful selectors** and consider data-testid attributes

## Troubleshooting

### Tests are timing out
- Increase `timeout` and `actionTimeout` in `playwright.config.js`
- Check if the application is running and accessible
- Use `--debug` mode to step through the test

### Tests fail on CI but pass locally
- Check differences in environment variables
- Verify the application URL is correct for CI
- Increase retries for flaky tests

### Need to debug a specific test
Run with debug mode:
```bash
npx playwright test <test-file> --debug
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [Faker.js Documentation](https://fakerjs.dev)
