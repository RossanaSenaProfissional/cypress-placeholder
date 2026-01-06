// Comandos customizados mínimos para chamadas de API
Cypress.Commands.add('apiGet', (path, options = {}) => {
  return cy.request(Object.assign({
    method: 'GET',
    url: path,
    failOnStatusCode: false
  }, options));
});

Cypress.Commands.add('apiPost', (path, body, options = {}) => {
  return cy.request(Object.assign({
    method: 'POST',
    url: path,
    body,
    failOnStatusCode: false
  }, options));
});

Cypress.Commands.add('apiDelete', (path, options = {}) => {
  return cy.request(Object.assign({
    method: 'DELETE',
    url: path,
    failOnStatusCode: false
  }, options));
});

Cypress.Commands.add('assertListResponse', (resp, keys = []) => {
  expect(resp.status).to.be.oneOf([200, 201]);
  expect(resp.body).to.be.an('array');
  if(keys.length){
    expect(resp.body[0]).to.include.keys(keys);
  }
});
