<template>
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Фонды и инвесторы</h4>
        <div class="project-investors-carousel swiper">
            <div class="swiper-wrapper">
                <div v-for="item in logos" :key="item.id" class="swiper-slide">
                    <div class="project-investors__item">
                        <img :src="`${item.server}/${item.path}`" alt="img">
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
    props: ['project'],
    data() {
        return {
            logos: []
        }
    },
    async mounted() {
        try {
            await this.$axios.$get(`files?search[post_type]=project&post_id=${this.$route.params.projects}`)
                .then(res => {
                    this.logos = res.data
                })

        } catch (error) {
            console.log(error);
        }

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

.project-investors-carousel .swiper-slide img {
    height: 50px;
}
</style>