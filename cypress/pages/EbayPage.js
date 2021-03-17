
let EBAY_HOME_PAGE = 'https://www.ebay.com/';
let SEARCH_FIELD_ID = '#gh-ac';
let SEARCH_BUTTON_ID = '#gh-btn';
let QUANTITY_TEXT_BOX = '#qtyTextBox';
let BUYER_SATISFACTION = '.w2b-sgl';

function searchForProduct(product) {
    cy.get(SEARCH_FIELD_ID)
        .type(product)
        .get(SEARCH_BUTTON_ID)
        .click();
}

export { EBAY_HOME_PAGE, SEARCH_FIELD_ID, SEARCH_BUTTON_ID, QUANTITY_TEXT_BOX, BUYER_SATISFACTION, searchForProduct };