import buscaPage from "../pageobjects/buscaPage";
import carrinhoPage from "../pageobjects/carrinhoPage";

//* global Given, Then, And, When */
Cypress.on('uncaught:exception', () => false)

Given("que sou usuário logado no sistema", () => {
    loginPage.Redirect();
    loginPage.RealizarLogin(); 
    loginPage.ClickAcessar(); 
    loginPage.confirmarLogin();    
})
When ("clico em um produto da home", () => { //busco e seleciono em produt
    buscaPage.Busca();
    buscaPage.ValidarBusca();
    cy.contains('Bolsa').click()
    cy.contains('Bolsas').should('be.visible')
    //carrinhoPage.Produto();

})
