class Status {

    constructor() {
        this.unlockDiary = false
    }

    static lock() {
        return this.unlockDiary = false
    }

    static unlock() {
        return this.unlockDiary = true
    }

}

module.exports = Status