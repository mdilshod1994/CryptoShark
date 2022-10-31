<template>
    <div class="mainnews-slider swiper">
        <div class="swiper-wrapper">
            <div v-for="item in news" :key="item.id" class="swiper-slide">
                <NewsItem :item="item" />
            </div>
        </div>
    </div>
</template>
<script>
import NewsItem from './NewsItem.vue';
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    components: {
        NewsItem
    },
    computed: {
        news() {
            return this.$store.getters['news/NEWS_TYPE_FIRST']
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
};
</script>
<style>
.mainnews-slider {
    margin-bottom: 12px;
    padding: 25px 25px 25px 25px;
    background: #FFFFFF;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.mainnews-slider .swiper-slide {
    width: 375px !important;
}

.swiper-pagination {
    bottom: 15px !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-pagination-bullet {
    margin: 0 4px !important;
    width: 12px;
    height: 12px;
    background: #F0F2F5;
    opacity: 1;
}

.swiper-pagination-bullet-active {
    background: #6170EF;
}
</style>