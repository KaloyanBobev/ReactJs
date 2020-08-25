class Auth {
    constructor() {
        this.autenticated = false;
    }

    login(cb) {
        this.autenticated = true;
        cb()
    }

    logout(cb) {
        this.autenticated = false;
        cb()
    }

    isAutenticated() {
        return this.autenticated;
    }
}
export default new Auth();