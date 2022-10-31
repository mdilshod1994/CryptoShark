<template>
    <div class="other-projects-carousel swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 10" :key="item">
                <div class="other-projects-item">
                    <div class="other-projects-item__logo">
                        <img src="@/assets/images/content/projects/projects-logo2.svg" alt="img">
                        <div class="other-projects-item__logocaption">4.5</div>
                    </div>
                    <div class="other-projects-item__name">Kondrashov <span>Kondr</span></div>
                    <div class="other-projects-item__date">Старт: 27 октября</div>
                    <div class="other-projects-item-scores">
                        <div class="other-projects-item-score">
                            <div class="other-projects-item-score__rating mi-rating_2"><span>2</span></div>
                            <div class="other-projects-item-score__caption">Фонд</div>
                        </div>
                        <div class="other-projects-item-score">
                            <div class="other-projects-item-score__rating mi-rating_3"><span>3</span></div>
                            <div class="other-projects-item-score__caption">Хайп</div>
                        </div>
                        <div class="other-projects-item-score">
                            <div class="other-projects-item-score__rating mi-rating_5"><span>5</span></div>
                            <div class="other-projects-item-score__caption">Токеномика</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'

export default {
    mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.other-projects-carousel', {
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
.other-projects-carousel .swiper-slide {
    width: 215px !important;
}
</style>