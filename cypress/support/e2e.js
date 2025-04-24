Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific known Magento error
    if (err.message.includes('setModalElement is not defined')) {
        return false;
    }
    if (err.message.includes("Cannot read properties of undefined (reading 'set')")) {
        return false;
    }
    // Let other errors fail the test
    return true;
});
