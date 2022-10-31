<template>
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Фонды и инвесторы</h4>
        <div class="project-investors-carousel swiper">
            <div class="swiper-wrapper">
                <div v-for="item in 20" :key="item.id" class="swiper-slide">
                    <div class="project-investors__item">
                        <img src="@/assets/images/content/partners/investors-logo1.svg" alt="img">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'


export default {
    mounted() {
        const investors_slider = new Swiper('.project-investors-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                768: {
                    slidesPerView: "auto",
                    pagination: false
                }
            }
        });
    }
}
</script>
<style>
.project-investors-carousel .swiper-slide {
    width: auto !important;
}
</style>