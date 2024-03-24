const fs = require('fs')

const { _pegparser } = require('./dbml')

const EXAMPLE1_FILE = require.resolve('./dbml.example1.txt')
const EXAMPLE1_TEXT = fs.readFileSync(EXAMPLE1_FILE, { encoding: 'utf8', flag: 'r' })
const EXAMPLE2_FILE = require.resolve('./dbml.example2.txt')
const EXAMPLE2_TEXT = fs.readFileSync(EXAMPLE2_FILE, { encoding: 'utf8', flag: 'r' })

describe('dbml', () => {
    test('example1', () => {
        expect(_pegparser.parse(EXAMPLE1_TEXT)).toMatchSnapshot()
    })
    test('example2', () => {
        expect(_pegparser.parse(EXAMPLE2_TEXT)).toMatchSnapshot()
    })
})
