const KwilDB = require('kwildb')
const fs = require('fs')

let privateKey = fs.readFileSync("privateKey.json")
let secret = fs.readFileSync("secret.txt")
privateKey = JSON.parse(privateKey.toString())

const kwildb = KwilDB.createConnector({
    host: 'test-db.kwil.xyz',
    protocol: 'https',
    moat: 'rdx_test123',
    privateKey: privateKey,
}, secret)

module.exports = kwildb;
//Query that will sync with the rest of the network
// const result = await kwilDB.query('INSERT INTO ...', true)

//Query that won't sync with the rest of the network.
// const result = await kwilDB.query('SELECT ...', false)

//Or, if unspecified, it will not sync.

// const result = await kwilDB.query('SELECT ...')
