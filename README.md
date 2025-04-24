# Cypress Automation Project

This project automates tests for the Magento SoftwareTestingBoard website using Cypress.

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/mloic47/Qa-magento-cypress-automation.git
   cd Qa-magento-cypress-automation
2. Install dependencies
   ```bash
   npm install
3. Set up environment variables
   Create a file named cypress.env.json or edit as it exists already in the root directory with the following and respecting that structure:
   ```bash
   {
   "validUser": {
   "firstName": "John",
   "lastName": "Doe",
   "email": "john.doe@example.com",
   "password": "StrongPass123"
    }
   
4. Run the Tests
   To open Cypress GUI:
    ```bash
   npx cypress open


