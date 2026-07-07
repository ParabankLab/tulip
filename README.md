# Playwright Automation Framework (Saucedemo)

## Strategy 
I created a testing framework for Saucedemo one year ago in Java/Selenium. Now I am moving to the Playwright/Typescript instead due to its major advantages. First of all Playwright works directly with the browser and not through a Webdriver. Its much faster and does not have issues with driver versions when the browser increases version. Other advantages are tracing, running parallel tests, screen dump at exception, video creation at exception, async calls and automatic wait.
b. Architecture: I am following, as always, the M/V/C and POM design patterns. Creating Page objects for each page with all the elements and functionality. They belong in the View layer. Originally the View layer contains the actual UI code, but in automation testing we can call it the interface layer. The different objects connects to the UI. The tests are located in the Controller layer together with the Utils, the helper classes for executing tests. No Model layer, since we don’t have any database connections, or rest calls.

## Architecture
I am following, as always, the M/V/C and POM design patterns. Creating Page objects for each page with all the elements and functionality. They belong in the View layer. Originally the View layer contains the actual UI code, but in automation testing we can call it the interface layer. The different objects connects to the UI. The tests are located in the Controller layer together with the Utils, the helper classes for executing tests. No Model layer, since we don’t have any database connections, or rest calls.

## Test Plan
I would use Co-star and shift-left when writing my prompt to ask AI to generate testcases: positive, negative, edge, boundary, predict. This is one of the advantages with AI: saving time by creating test cases.

## AI Transparency
I use AI as an advisor, reviewer and bug fixer. The main architectual structures are always mine and the lions part of the coding. I think that writing the code is essential, but it is also cost effective, if You let AI generate a part of the standard code, like the tests, or the Page Objects. The main advantage with AI is to save time. Generate testcases and testdata when needed. In this project I used AI for fixing a bug in VS Code, generating code for the sorting assignment and to generate testcases.

A highly resilient, production-ready E2E automation framework built with **TypeScript** and **Playwright**. This repository demonstrates enterprise-grade architecture patterns designed for stability, speed, and seamless execution across dynamic web environments.

## Architectural Highlights

* **Robust Page Object Model (POM):** Strict separation of concerns between test specs and page-specific locators/actions, ensuring long-term maintainability.
* **Dynamic State & Session Management:** Engineered to handle fluctuating session environments, cookies, and dynamic UI elements without flaky test failures.
* **Bypassing Modern Overlay Overhead:** Implements strategic wait mechanisms and custom selector strategies to gracefully handle third-party overlays and script blockages.
* **Flawless Isolation:** Tests are architected to run concurrently in complete isolation, optimizing execution times across multi-threaded runner environments.

## Tech Stack

* **Language:** TypeScript (Strict Type Checking)
* **Runner:** Playwright Test
* **Pattern:** Page Object Model (POM)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

git clone https://github.com/ParabankLab/tulip.git
cd tulip




2. Install dependencies from terminal:

npm install

```


3. Install Playwright browsers from terminal:

npx playwright install


### Running the Tests

## To execute the entire test suite in headless mode in terminal:

npx playwright test

## To run tests with the UI Mode interface (excellent for debugging) in terminal:

npx playwright test --ui

## To view the automatically generated HTML test report after a run in terminal:

npx playwright show-report

