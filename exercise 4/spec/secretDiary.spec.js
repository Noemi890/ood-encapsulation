const SecretDiary = require('../src/secretDiary')
const Status = require('../src/status')

describe('Secret Diary', () => {
    let secretDiary

    beforeEach(() => {
        secretDiary = new SecretDiary()
    })

    it('throws error if trying to add an entry', () => {
        expect(() => secretDiary.addEntry('blah')).toThrow(new Error('Diary Locked'))
    })

    it('throws error if trying to get all the entries', () => {
        expect(() => secretDiary.getEntries()).toThrow(new Error('Diary Locked'))
    })

    it('unlocks', () => {
        const expected = true
        const result = secretDiary.unlock()
        expect(result).toEqual(expected)
    })

    it('locks', () => {
        Status.unlock()
        const expected = false
        const result = secretDiary.lock()
        expect(result).toEqual(expected)
    })

    it('adds an entry to the diary', () => {
        Status.unlock()
        const expected = ['blah']
        const result = secretDiary.addEntry('blah')
        expect(result).toEqual(expected)
    })

    it('gets all the entries in the diary', () => {
        Status.unlock()
        secretDiary.addEntry('blah')
        secretDiary.addEntry('bleh')
        secretDiary.addEntry('blih')
        secretDiary.addEntry('bloh')
        secretDiary.addEntry('bluh')
        const expected = ['blah', 'bleh', 'blih', 'bloh', 'bluh']
        const result = secretDiary.getEntries()
        expect(result).toEqual(expected)
    })
})