<template >
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Как участвовать в проекте</h4>
        <div class="project-steps-slider swiper">
            <div class="swiper-wrapper">
                <div class="project-steps-item swiper-slide">
                    <div class="project-steps-item__number">1</div>
                    <div class="project-steps-item__caption">Зарегистрироваться<br> на <a href="#">Coinlist.co</a></div>
                </div>
                <div class="project-steps-item swiper-slide">
                    <div class="project-steps-item__number">2</div>
                    <div class="project-steps-item__caption">Пройти<br> верификацию</div>
                </div>
                <div class="project-steps-item swiper-slide">
                    <div class="project-steps-item__number">3</div>
                    <div class="project-steps-item__caption">Интересный шаг<br> для участия</div>
                </div>
                <div class="project-steps-item swiper-slide">
                    <div class="project-steps-item__number">4</div>
                    <div class="project-steps-item__caption">Интересный шаг<br> для участия</div>
                </div>
                <div class="project-steps-item swiper-slide">
                    <div class="project-steps-item__number">5</div>
                    <div class="project-steps-item__caption">Интересный шаг<br> для участия</div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    mounted() {
        const steps_slider = new Swiper('.project-steps-slider', {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: false,
            centeredSlides: true,
            // autoplay: {
            //    delay: 4000,
            // },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            breakpoints: {
                768: {
                    centeredSlides: false,
                    slidesPerView: 5,
                    pagination: false
                }
            }
        });
    }
}
</script>
<style >

</style>