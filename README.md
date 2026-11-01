# SauceDemo Playwright Automation (TypeScript)

A small Playwright Test project that automates the main shopping flows on the public [SauceDemo](https://www.saucedemo.com) demo site.

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm

## Setup

Install project dependencies and the Chromium browser used by the Playwright project:

```bash
npm ci
npx playwright install chromium
```

On a Linux machine that does not already have Playwright's browser system dependencies, install them with:

```bash
npx playwright install --with-deps chromium
```

## Run checks and tests

```bash
# ESLint and TypeScript typecheck
npm run check

# All Playwright tests
npm test

# Run with a visible browser or the Playwright UI
npm run test:headed
npm run test:ui
```

Run a focused test by passing its path to the test script:

```bash
npm test -- tests/auth/login.spec.ts
npm test -- tests/auth/logout.spec.ts
npm test -- tests/cart/add-to-cart.spec.ts
npm test -- tests/cart/remove-from-cart.spec.ts
npm test -- tests/checkout/checkout-completion.spec.ts
```

The HTML report is written to `playwright-report/`. Open the latest report with:

```bash
npx playwright show-report
```

Screenshots, videos, and traces are retained for failed tests in `test-results/`. These generated directories are ignored by Git.

## Configuration and assumptions

- The default base URL is `https://www.saucedemo.com`. Set `BASE_URL` to point the tests at another compatible environment.
- Tests use SauceDemo's public `standard_user` demo account. Its demo password and the test account data are kept in `test-data/users.ts`; no private account or `.env` file is required.
- Checkout test data is sample data stored in `test-data/checkout.ts`.
- The Playwright project uses Chromium and the site's `data-test` attributes where available.

## Project structure

```text
components/       Shared UI components
fixtures/         Typed Playwright fixtures
pages/            Page objects
test-data/       Demo users, products, and checkout data
tests/auth/       Login and logout flows
tests/cart/       Add and remove cart flows
tests/checkout/   Checkout completion flow
types/            Shared TypeScript types
.github/workflows/ GitHub Actions CI workflow
```

GitHub Actions runs `npm run check` and the Playwright suite on pushes and pull requests targeting `main`. It uploads the Playwright report and test results for troubleshooting.
