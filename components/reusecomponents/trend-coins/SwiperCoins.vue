<template>
    <div class="trends-slider swiper">
        <div class="swiper-wrapper">
            <div v-for="item in coins" :key="item.id" class="swiper-slide">
                <SwiperCoinsItem :item="item" />
            </div>
        </div>
    </div>
</template>
<script>
import SwiperCoinsItem from './SwiperCoinsItem.vue';
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    components: {
        SwiperCoinsItem,
    },
    computed: {
        coins() {
            return this.$store.getters['coins/TRENDCOINS']
        }
    },
    mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.swiper', {
            modules: [Autoplay],
            autoplay: {
                delay: 3000
            },
            spaceBetween: 20,
            slidesPerView: 'auto',
        })
    }

}
</script>
<style>
.trends-slider .swiper-slide {
    width: 215px !important;
}
</style>