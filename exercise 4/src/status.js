class Status {

    constructor() {
        this.status = false
    }

    static lock() {
        return this.status = false
    }

    static unlock() {
        return this.status = true
    }

}

module.exports = Status