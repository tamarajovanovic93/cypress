import {
    EBAY_HOME_PAGE,
    QUANTITY_TEXT_BOX,
    BUYER_SATISFACTION,
    searchForProduct
} from "../pages/EbayPage.js";

/* Prevents leading to Whooops page after test suite is finished */
Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win, 'self', {
        get: () => {
            return window.top
        }
    })
})

const laptopName = "Apple MacBook Air 13\" Core i5 1.8GHz 8GB 128GB 2017 A Grade 12Months Warranty";
const totalResults = '.srp-controls__count-heading';
const popup = '.srp-save-search__tooltip-close';

describe('SuiteEbay', () => {
    it('Search laptop on Ebay', () => {
        cy.visit(EBAY_HOME_PAGE);
        searchForProduct(laptopName);
        cy.get(totalResults).contains('1 result')
    })

    it('Assert data of selected laptop', () => {
        cy.visit(EBAY_HOME_PAGE)
        searchForProduct(laptopName)
        cy.get(popup).click()
        cy.get('h3').contains('h3', laptopName).click();
        cy.get(QUANTITY_TEXT_BOX).should('have.value', 1); // assert quantity
        cy.get(BUYER_SATISFACTION).should('have.text', '100% buyer satisfaction'); // assert buyer satisfaction
    })
})