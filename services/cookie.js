export class Cookies {
    constructor(cookie) {
        this.$cookies = cookie
    }

    setCookie(key, value) {
        this.$cookies.set(key, value, {
            path: '/',
            maxAge: 1000 * 60 * 60 * 24 * 365,
        })
    }
}