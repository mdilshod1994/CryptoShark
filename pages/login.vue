<template>
    <section class="vh-100">
        <div class="container-fluid h-custom vh-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form @submit.prevent="login">
                        <div class="form-outline mb-4">
                            <input v-model="email" type="email" id="form3Example3" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" />
                            <label class="form-label" for="form3Example3">Email address</label>
                        </div>
                        <div class="form-outline mb-3">
                            <input v-model="password" type="password" id="form3Example4"
                                class="form-control form-control-lg" placeholder="Enter password" />
                            <label class="form-label" for="form3Example4">Password</label>
                        </div>
                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'login',
    layout: 'empty',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            try {
                const login = await this.$store.dispatch('user/login', {
                    email: this.email,
                    password: this.password
                })
                if (login) {
                    this.$router.push('/admin')
                    this.$toast.success(`Добро пожаловать ${login.user.user_roles_title}`);
                } else {
                    this.$toast.error(`Произшла ошибка, повторите еще`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
@import '@/assets/css/bootstrap.css';
</style>