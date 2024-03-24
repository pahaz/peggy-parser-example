const fs = require('fs')

const { _pegparser } = require('./dbml')

function parseFile (name) {
    const filepath = require.resolve(name)
    const text = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
    return _pegparser.parse(text)
}

describe('dbml', () => {
    test('example1', () => {
        expect(parseFile('./dbml.example1.txt')).toMatchSnapshot()
    })
    test('example2', () => {
        expect(parseFile('./dbml.example2.txt')).toMatchSnapshot()
    })
    test('example3', () => {
        expect(parseFile('./dbml.example3.txt')).toMatchSnapshot()
    })
    test('example4 (bank)', () => {
        expect(parseFile('./dbml.example4.txt')).toMatchSnapshot()
    })
    test('example5', () => {
        expect(parseFile('./dbml.example5.txt')).toMatchSnapshot()
    })
    test('example6', () => {
        expect(parseFile('./dbml.example6.txt')).toMatchSnapshot()
    })
    test('example7', () => {
        expect(parseFile('./dbml.example7.txt')).toMatchSnapshot()
    })
})
