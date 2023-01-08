<template>
    <div :class="`wrapper ${$route.path === '/' ? 'homepage' : ''}`">
        <Header />
        <transition name="page" mode="out-in">
            <div class="main">
                <Nuxt />
            </div>
        </transition>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
    components: {
        Header,
        Footer
    },
    async mounted() {
        await this.$store.dispatch('coins/getCoins')
        await this.$store.dispatch('news/getNewsType3')
    }
}
</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>