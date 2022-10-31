export default function ({ redirect, app }) {
    const isAuth = app.$cookies.get('user')
    if (!isAuth) {
        redirect('/login')
    }
}