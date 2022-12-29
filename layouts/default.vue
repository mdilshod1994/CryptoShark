<template>
    <div :class="`wrapper ${$route.path === '/' ? 'homepage' : ''}`">
        <Header />
        <div class="main">
            <Nuxt />
        </div>
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