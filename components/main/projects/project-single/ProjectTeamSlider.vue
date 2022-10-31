<template>
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Команда</h4>
        <div class="project-team">
            <div class="project-team-carousel swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in 10" :key="item">
                        <div class="project-team-item">
                            <div class="project-team-item__photo"><img
                                    src="@/assets/images/content/team/team-photo1.png" alt="img">
                            </div>
                            <div class="project-team-item__name">Alexey Svetliy</div>
                            <div class="project-team-item__post">Co-Founder & CEO</div>
                            <div class="project-team-item__desc">Комплексный анализ ситуации реально
                                отталкивает креативный PR</div>
                            <div class="project-team-item-social">
                                <a href="#" class="project-team-item-social__btn"><img
                                        src="@/assets/images/ic-social-tw.svg" alt="img"></a>
                                <a href="#" class="project-team-item-social__btn"><img
                                        src="@/assets/images/ic-social-in.svg" alt="img"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script>

import { Swiper, Autoplay } from 'swiper'

export default {
    mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.project-team-carousel', {
            modules: [Autoplay],
            autoplay: {
                delay: 3000
            },
            spaceBetween: 15,
            slidesPerView: 'auto',
        })
    }
}
</script>
<style>
.project-team-carousel .swiper-slide {
    width: 315px !important;
}
</style>