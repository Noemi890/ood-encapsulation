const Status = require('./status')

class SecretDiary {

    constructor() {
        this.entries = []
    }

    lock() {
        return Status.lock()
    }

    unlock() {
        return Status.unlock()
    }

    addEntry(entry) {
        if (Status.unlockDiary) {
            this.entries.push(entry)
            return this.entries
        }
        throw new Error('Diary Locked')
    }

    getEntries() {
        if (Status.unlockDiary) {
            return this.entries
        }
        throw new Error('Diary Locked')
    }
}

module.exports = SecretDiary