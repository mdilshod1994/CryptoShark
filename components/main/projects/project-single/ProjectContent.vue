<template>
    <div class="project-content-section">
        <div class="project-top">
            <div class="project-top-content">
                <h1 class="project__ttile">{{ project.name }} <span>{{ project.symbol }}</span></h1>
                <div class="project__desc" v-html="project.description"></div>
                <div class="project-social">
                    <a v-if="project.facebook_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-fb.svg" alt="img"></a>
                    <a v-if="project.twitter_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-tw.svg" alt="img"></a>
                    <a v-if="project.instagram_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-inst.svg" alt="img"></a>
                    <a v-if="project.vk_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-vk.svg" alt="img"></a>
                    <a v-if="project.youtube_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-yt.svg" alt="img"></a>
                    <a v-if="project.telegram_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-tel.svg" alt="img"></a>
                    <a v-if="project.linkedln_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-in.svg" alt="img"></a>
                    <a v-if="project.github_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-git.svg" alt="img"></a>
                    <a v-if="project.discord_link" href="#" class="project-social__btn"><img
                            src="@/assets/images/ic-social-dis.svg" alt="img"></a>
                </div>
            </div>
            <div class="project-top-rightside">
                <div class="project-completed" v-if="project.status === 'Завершён'">
                    <div class="project-completed-info">
                        <div class="project-completed-row">
                            <div class="project-completed__payback pc__payback_growth">x{{ project.roi }}</div>
                            <div class="project-completed__payback">x{{ project.max }}</div>
                            <div class="project-completed__note">*Ath: 2.92</div>
                        </div>
                        <div class="project-completed__price">$0.803 <span class="pc__price_growth">192.86%</span></div>
                        <!-- <div class="project-completed__price">$0.803 <span class="pc__price_fall">192.86%</span></div> -->
                    </div>
                    <div class="project-timeline">
                        <div class="project-timeline-list">
                            <div class="project-timeline__btn active">24H</div>
                            <div class="project-timeline__btn">1M</div>
                            <div class="project-timeline__btn">1Y</div>
                        </div>
                        <div class="project-timeline-body">
                            <div class="project-timeline-item">
                                <div class="project-timeline-item__value">$0.3228</div>
                                <div class="project-timeline-item__progress"><span style="width: 40%"></span></div>
                                <div class="project-timeline-item__value">$2.92</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-interest" v-if="project.status === 'Активно'">
                    <div class="project-interest-main">
                        <div class="project-interest-main__value">
                            <div id="interest_bar">
                                <span>
                                    {{ project.max_interest }}
                                </span>
                                <svg viewBox="0 0 100 50">
                                    <path d="M 50,50 m -45,0 a 45,45 0 1 1 90,0" stroke="#eee" stroke-width="10"
                                        fill-opacity="0">
                                    </path>
                                    <path id="strokeDashoffset" d="M 50,50 m -45,0 a 45,45 0 1 1 90,0"
                                        stroke="undefined" stroke-width="10" fill-opacity="0"
                                        :style="`stroke-dasharray: 141.392, 141.392; stroke-dashoffset: ${141.392 - maxInterest};`">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="project-interest-main__caption">Максимальный интерес</div>
                    </div>
                    <div class="project-interest-row">
                        <div class="project-interest-item-score">
                            <div :class="`project-interest-item-score__rating mi-rating_${project.grade_funds}`">
                                <span>{{ project.grade_funds }}</span>
                            </div>
                            <div class="project-interest-item-score__caption">Фонд</div>
                        </div>
                        <div class="project-interest-item-score">
                            <div :class="`project-interest-item-score__rating mi-rating_${project.grade_hype}`"><span>{{
                                project.grade_hype
                            }}</span></div>
                            <div class="project-interest-item-score__caption">Хайп</div>
                        </div>
                        <div class="project-interest-item-score">
                            <div :class="`project-interest-item-score__rating mi-rating_${project.grade_tokenomics}`">
                                <span>{{ project.grade_tokenomics }}</span>
                            </div>
                            <div class="project-interest-item-score__caption">Токеномика</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['project'],
    data() {
        return {
            maxInterest: null
        }
    },
    watch: {
        project(newV) {
            if (newV) {
                let max = 5
                let d = (+newV.max_interest / max) * 100
                let numm = 141.392
                this.maxInterest = (d / 100) * numm
            }
        }
    }
}
</script>
<style>
#interest_bar {
    position: relative;
    display: flex;
    justify-content: center;
}

#interest_bar span {
    /* margin-top: 10px; */
    position: absolute;
    bottom: 0px;
}

#interest_bar svg {
    position: absolute;
    top: 0;
    width: 130px;
    height: 80px;
    fill: none;
    stroke: #6170EF;
    stroke-width: 10;
    stroke-linecap: round;
}
</style>