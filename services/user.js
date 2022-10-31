export class UserService {
    constructor(axios) {
        this.$axios = axios
    }
    async loginUser(data) {
        try {
            return await this.$axios.$post('https://cors-anywhere.herokuapp.com/https://crypto-shark-dev.ru/auth/login', data)
        }
        catch (e) {
            return Promise.reject(e)
        }
    }
}