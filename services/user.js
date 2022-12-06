export class UserService {
    constructor(axios) {
        this.$axios = axios
    }
    async loginUser(data) {
        try {
            // return await this.$axios.$post('auth/login', data)
            return await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL +  'auth/login', data)
        }
        catch (e) {
            return Promise.reject(e)
        }
    }
}