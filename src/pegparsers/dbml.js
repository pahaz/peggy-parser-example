const peggy = require('peggy')
const fs = require('fs')

const FILENAME = require.resolve('./dbml.pegjs')

const text = fs.readFileSync(FILENAME, { encoding: 'utf8', flag: 'r' })

const parser = peggy.generate([
    { source: FILENAME, text },
])

function parse(test) {
    return parser.parse(test)
}

module.exports = {
    _pegparser: parser,
    parse
}
