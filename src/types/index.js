const { readFileSync } = require('fs');
const path = require('path');

function getFile(file) { return readFileSync(path.join(__dirname, `./../types/${file}`), "utf8"); }

const typeDefsMutation = getFile('typeDefsMutation.graphql');
const typeDefsQuery = getFile('typeDefsQuery.graphql');
const typeDefsSubscription = getFile('typeDefsSubscription.graphql');
const typeDefs = getFile('typeDefs.graphql');

module.exports = `
  ${typeDefsMutation}
  ${typeDefsQuery}
  ${typeDefsSubscription}
  ${typeDefs}
`;