<template>
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Команда</h4>
        <div class="project-team">
            <div class="project-team-carousel swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in teams" :key="item.id">
                        <div class="project-team-item">
                            <div class="project-team-item__photo"><img
                                    src="@/assets/images/content/team/team-photo1.png" alt="img">
                            </div>
                            <div class="project-team-item__name">{{ item.name }}</div>
                            <div class="project-team-item__post">Co-Founder & CEO</div>
                            <div class="project-team-item__desc">{{ item.description }}</div>
                            <div class="project-team-item-social">
                                <a v-if="item.facebook_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-fb.svg" alt="img"></a>
                                <a v-if="item.twitter_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-tw.svg" alt="img"></a>
                                <a v-if="item.instagram_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-inst.svg" alt="img"></a>
                                <a v-if="item.vk_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-vk.svg" alt="img"></a>
                                <a v-if="item.youtube_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-yt.svg" alt="img"></a>
                                <a v-if="item.telegram_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-tel.svg" alt="img"></a>
                                <a v-if="item.linkedln_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-in.svg" alt="img"></a>
                                <a v-if="item.github_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-git.svg" alt="img"></a>
                                <a v-if="item.discord_link" href="#" class="project-social__btn"><img
                                        src="@/assets/images/ic-social-dis.svg" alt="img"></a>
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
    data() {
        return {
            teams: []
        }
    },
    async mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.project-team-carousel', {
            modules: [Autoplay],
            autoplay: {
                delay: 3000
            },
            spaceBetween: 15,
            slidesPerView: 'auto',
        })
        try {
            await this.$axios.$get(`projectsTeams?search[projects_id]=${this.$route.params.projects}`)
                .then(res => {
                    console.log(res);
                    this.teams = res.data
                })
        } catch (error) {
            console.log(error);
        }
    }
}
</script>
<style>
.project-team-carousel .swiper-slide {
    width: 315px !important;
}

.project-team-carousel .swiper-slide a img {
    width: 18px;
    height: 18px;
    object-fit: contain;
}
</style>