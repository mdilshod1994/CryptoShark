<template>
    <div class="container">
        <div class="breadcrumbs">
            <ul class="breadcrumbs-list">
                <li><nuxt-link to="/">Главная</nuxt-link></li>
                <li><nuxt-link :to="``">Активные проекты</nuxt-link></li>
                <li>SubQuery Network</li>
            </ul>
        </div>
        <div class="project">
            <ProjectmainInfo />
            <div class="project-content">
                <ProjectContent />
                <participate-project v-if="false" />
                <FundsInvestors />
                <Tokenomics />
                <ProjectTeamSlider />
                <ActivityChart />
                <div class="project-content-section">
                    <h4 class="project-content-section__caption">О проекте SubQuery Network</h4>
                    <div class="project-video">
                        <a href="#popup-video" class="project-video-item popup-link">
                            <span class="project-video-item__image"><img src="@/assets/images/video-poster.jpg"
                                    alt="img"></span>
                            <span class="project-video-item__btn"><img src="@/assets/images/icon-play.svg"
                                    alt="img"></span>
                        </a>
                    </div>
                </div>
                <PlatformTradeCoins />
            </div>
        </div>
        <div class="other-projects">
            <h2 class="other-projects__title">Другие проекты</h2>
            <OtherProjectsSlider />
        </div>
    </div>
</template>
<script>
import OtherProjectsSlider from '@/components/main/projects/project-single/OtherProjectsSlider.vue'
import PlatformTradeCoins from '../../components/main/projects/project-single/PlatformTradeCoins.vue'
import ActivityChart from '../../components/main/projects/project-single/ActivityChart.vue'
import ProjectTeamSlider from '../../components/main/projects/project-single/ProjectTeamSlider.vue'
import ProjectmainInfo from '../../components/main/projects/project-single/ProjectmainInfo.vue'
import ProjectContent from '../../components/main/projects/project-single/ProjectContent.vue'
import FundsInvestors from '../../components/main/projects/project-single/FundsInvestors.vue'
import Tokenomics from '../../components/main/projects/project-single/Tokenomics.vue'
import ParticipateProject from '~/components/main/projects/project-single/ParticipateProject.vue'
export default {
    components: {
        OtherProjectsSlider,
        PlatformTradeCoins,
        ActivityChart,
        ProjectTeamSlider,
        ProjectmainInfo,
        ProjectContent,
        FundsInvestors,
        Tokenomics,
        ParticipateProject
    },
    data() {
        return {
            project: {}
        }
    },
    async mounted() {
        this.project = await this.$axios.$get(`front/projects?search[id]=${+this.$route.params.projects}`)
            .then(res => {
                return res
            })
        console.log(this.project);
    }
}
</script>
<style>
.project {
    margin-bottom: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.project-leftside {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 330px;
    flex: 0 0 330px;
    width: 330px;
    padding: 18px;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    border-radius: 18px;
    margin-right: 12px;
}

.project-content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.project-content-section {
    margin-bottom: 12px;
    padding: 32px;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    border-radius: 18px;
}

.project__logo {
    height: 294px;
    border-radius: 12px;
    overflow: hidden;
}

.project__logo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.project-info-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 0;
    border-bottom: 2px solid #F0F2F5;
}

.project-timer {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.project-start {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.project-start__caption {
    margin-bottom: 8px;
}

.project-start__date {
    font-family: 'Golos';
    font-size: 18px;
    font-weight: 600;
}

.project-status__caption {
    margin-bottom: 8px;
}

.project-status__value {
    font-family: 'Golos';
    font-size: 18px;
    font-weight: 600;
}

.ps__value_completed {
    color: #FF5B65;
}

.ps__value_active {
    position: relative;
    padding-left: 15px;
    color: #27B510;
}

.ps__value_active:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: calc(50% - 6px);
    width: 12px;
    height: 12px;
    background-image: url(@/assets/images/icon-status-online.svg);
}

.project-stats {
    padding: 25px 0 5px 0;
}

.project-stats-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 15px;
}

.project-stats-item__caption {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-right: 10px;
    white-space: nowrap;
}

.project-stats-item__caption i {
    margin-right: 8px;
}

.project-stats-item__value {
    color: #949BA9;
}

.project-stats-item__value a {
    color: #6170EF;
    border-bottom: 1px solid transparent;
}

.project-stats-item__value a:hover {
    border-bottom: 1px solid #6170EF;
}

.project-stats-item__value span {
    color: #20212C;
}

.project-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.project-top-content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-right: 50px;
}

.project-top-rightside {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 220px;
    flex: 0 0 220px;
    max-width: 220px;
    margin: -32px 0;
    padding: 32px 0 32px 32px;
    border-left: 2px solid #F0F2F5;
}

.project-interest-main {
    margin-bottom: 20px;
    text-align: center;
}

.project-interest-main__value {
    margin-bottom: 15px;
    height: 80px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: 'Golos';
    font-size: 36px;
    font-weight: 600;
}

.project-interest-main__caption {
    font-size: 14px;
}

.project-interest-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.project-interest-item-score {
    text-align: center;
}

.project-interest-item-score__caption {
    font-size: 12px;
}

.project-interest-item-score__rating {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 2px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.project-interest-item-score__rating span {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    bottom: 3px;
    right: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
}

.project-completed {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0 -12px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.project-completed-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 15px;
}

.project-completed__payback {
    display: inline-block;
    font-family: 'Golos';
    margin-right: 12px;
    font-weight: 700;
    letter-spacing: -0.01em;
    background: #F0F2F5;
    border-radius: 8px;
    padding: 8px;
    color: #949BA9;
}

.pc__payback_growth {
    background: rgba(39, 181, 16, 0.1);
    color: #27B510;
}

.pc__payback_fall {
    background: rgba(255, 91, 101, 0.1);
    color: #FF5B65;
}

.project-completed__note {
    font-size: 13px;
    color: #949BA9;
}

.project-completed__price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: 'Golos';
    font-size: 28px;
    font-weight: 700;
}

.project-completed__price span {
    margin-left: 10px;
    padding: 4px 5px 4px 20px;
    font-family: 'Commissioner';
    background-position: 5px 60%;
    background-repeat: no-repeat;
    font-size: 13px;
    color: #fff;
    font-weight: normal;
}

.pc__price_growth {
    background-color: #27B510;
    background-image: url(@/assets/images/icon-arrow-top.svg);
    border-radius: 4px;
}

.pc__price_fall {
    background-color: #FF5B65;
    background-image: url(@/assets/images/icon-arrow-down.svg);
    border-radius: 4px;
}

.project-timeline-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -20px;
    padding: 0 20px;
    border-top: 2px solid #F0F2F5;
    border-bottom: 2px solid #F0F2F5;
}

.project-timeline__btn {
    position: relative;
    margin-right: 25px;
    padding: 7px 0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

.project-timeline__btn:after {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: #6170EF;
}

.project-timeline__btn.active:after {
    display: block;
}

.project-timeline-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 20px;
}

.project-timeline-item__value {
    font-size: 14px;
    font-weight: 600;
}

.project-timeline-item__progress {
    margin: 0 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 64px;
    flex: 0 0 64px;
    width: 64px;
    height: 6px;
    background: rgba(148, 155, 169, 0.25);
    border-radius: 10px;
}

.project-timeline-item__progress span {
    display: block;
    height: 6px;
    background: #6170EF;
    border-radius: 10px;
}

.project__ttile {
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 24px;
    line-height: 28px;
}

.project__ttile span {
    margin-left: 10px;
    background: #949BA9;
    border-radius: 4px;
    text-transform: uppercase;
    padding: 3px 4px;
    font-size: 13px;
    font-family: 'Commissioner';
    font-weight: normal;
    line-height: 1;
    color: #fff;
}

.project__desc {
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 170%;
    max-width: 520px;
}

.project-social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.project-social__btn {
    margin-right: 24px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #EFF1F8;
}

.project-social__btn:hover {
    background: #D0D5E4;
}

.project-steps-slider {
    position: relative;
    width: 958px;
    padding-top: 10px;
    z-index: 1;
}

.project-steps-slider:after {
    content: '';
    display: block;
    position: absolute;
    top: 43px;
    left: 50px;
    right: 40px;
    height: 2px;
    background: #6170EF;
    z-index: -1;
}

.project-steps-item {
    text-align: center;
}

.project-steps-item:first-child .project-steps-item__number:before {
    width: 200px;
    background: #fff;
}

.project-steps-item:last-child .project-steps-item__number:after {
    width: 200px;
    background: #fff;
}

.project-steps-item__number {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: 'Golos';
    font-size: 24px;
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
    background: #fff;
    background-image: url(@/assets/images/icon-step.svg);
    font-weight: 700;
}

.project-steps-item__number:before,
.project-steps-item__number:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    background: #fff;
}

.project-steps-item__number:before {
    right: 100%;
}

.project-steps-item__number:after {
    left: 100%;
}

.project-steps-item__caption {
    font-size: 15px;
    line-height: 22px;
}

.project-steps-item__caption a {
    color: #6170EF;
    border-bottom: 1px solid transparent;
}

.project-steps-item__caption a:hover {
    border-bottom: 1px solid #6170EF;
}

.project-investors {
    padding-top: 25px;
}

.project-investors-carousel {
    width: 985px;
}

.project-investors-carousel .swiper-wrapper {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.project-investors-carousel .swiper-slide {
    width: auto;
}

.project-tokens {
    margin-top: -45px;
}

.project-tokens-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px;
}

.project-tokens-leftisde {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 330px;
    flex: 0 0 330px;
    max-width: 330px;
}

.project-tokens-main {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.project-tokens-quantity {
    padding-top: 60px;
}

.project-tokens-quantity__caption {
    margin-bottom: 12px;
    font-family: 'Golos';
    font-weight: 700;
    color: #949BA9;
}

.project-tokens-quantity__value {
    font-family: 'Golos';
    font-size: 20px;
    font-weight: 7000;
}

.project-tokens-chart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-image: url(@/assets/images/chart.svg);
}

.project-tokens-chart__caption {
    margin-bottom: 10px;
    font-size: 15px;
}

.project-tokens-chart__value {
    font-family: 'Golos';
    font-size: 36px;
    font-weight: 600;
}

.project-tokens-bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.project-tokens__title {
    margin-bottom: 30px;
    font-family: 'Golos';
    font-weight: 700;
    color: #949BA9;
}

.project-tokens-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.project-tokens__item {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333%;
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 17px;
    font-size: 14px;
    line-height: 17px;
}

.project-tokens__item span {
    display: block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 3px;
}

.project-tokens-table {
    display: table;
    width: 100%;
}

.project-tokens-header {
    display: table-row;
}

.project-tokens-header__title {
    display: table-cell;
    vertical-align: middle;
    font-size: 14px;
    line-height: 17px;
    padding-right: 15px;
    background: #F0F2F5;
    height: 40px;
    color: #949BA9;
}

.project-tokens-header__title:first-child {
    padding-left: 20px;
    border-radius: 8px 0 0 8px;
}

.project-tokens-header__title:last-child {
    border-radius: 0 8px 8px 0;
}

.project-tokens-item {
    display: table-row;
}

.project-tokens-item__smalltitle {
    display: none;
}

.project-tokens-item__arrow {
    display: none;
}

.project-tokens-item-cell {
    display: table-cell;
    vertical-align: middle;
    padding-right: 15px;
    padding: 15px;
}

.project-tokens-item-cell:first-child {
    padding-left: 20px;
}

.project-tokens-item-cell__caption {
    display: none;
    margin-bottom: 5px;
    font-size: 14px;
    color: #949BA9;
}

.project-tokens-item__value {
    font-size: 14px;
    line-height: 17px;
}

.project-team {
    width: 985px;
    padding-top: 15px;
}

.project-team-item {
    position: relative;
    padding: 32px 32px 15px;
    border: 2px solid #F0F2F5;
    border-radius: 18px;
    overflow: hidden;
}

.project-team-item:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    background: #6170EF;
    border-bottom: 2px solid #F0F2F5;
    z-index: -1;
}

.project-team-item__photo {
    margin-bottom: 15px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
}

.project-team-item__photo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.project-team-item__name {
    margin-bottom: 7px;
    font-family: 'Golos';
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
}

.project-team-item__post {
    margin-bottom: 15px;
    font-family: 'Golos';
    font-weight: 700;
    color: #949BA9;
}

.project-team-item__desc {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 160%;
}

.project-team-item-social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.project-team-item-social__btn {
    margin-right: 12px;
    margin-bottom: 12px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 36px;
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #EFF1F8;
}

.project-team-item-social__btn:hover {
    background: #D0D5E4;
}

.project-activity {
    position: relative;
}

.project-activity-social {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-bottom: 20px;
    padding: 4px;
    background: #F0F2F5;
    border-radius: 12px;
}

.project-activity-social__btn {
    padding: 0 16px;
    background: transparent !important;
    color: #949BA9 !important;
}

.project-activity-social__btn:hover {
    background: transparent;
    color: #949BA9;
}

.project-activity-social__btn.active {
    background: #6170EF !important;
    color: #fff !important;
}

.project-activity-stats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 5px;
    right: 0;
    padding-top: 10px;
}

.project-activity-stat {
    padding: 0 18px;
    border-right: 1px solid #F0F2F5;
}

.project-activity-stat:last-child {
    padding-right: 0;
    border: 0;
}

.project-activity-stat__value {
    margin-bottom: 10px;
    font-family: 'Golos';
    font-size: 20px;
    font-weight: 700;
}

.pas__value_growth {
    color: #27B510;
}

.pas__value_fall {
    color: #FF5B65;
}

.project-activity-stat__caption {
    font-size: 14px;
}

.project-activity-graph {
    margin-right: -32px;
}

.project-activity-graph img {
    width: 100%;
}

.project-content-section_2 {
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 0;
}

.project-content-section-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -12px;
}

.project-content-section-col {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 12px;
}

.project-content-section-block {
    padding: 32px;
    height: 100%;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    border-radius: 18px;
}

.project-video-item {
    display: block;
    position: relative;
    border-radius: 18px;
    overflow: hidden;
}

.project-video-item:hover .project-video-item__btn {
    -webkit-transform: translate(-50%, -50%) scale(1.1);
    -ms-transform: translate(-50%, -50%) scale(1.1);
    transform: translate(-50%, -50%) scale(1.1);
}

.project-video-item__image {
    display: block;
    height: 255px;
}

.project-video-item__image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.project-video-item__btn {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 72px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.project-multiplier-table {
    display: table;
    width: 100%;
}

.project-multiplier-header {
    display: table-row;
}

.project-multiplier-header__title {
    display: table-cell;
    vertical-align: middle;
    font-size: 14px;
    line-height: 17px;
    padding-right: 15px;
    background: #F0F2F5;
    height: 40px;
    color: #949BA9;
}

.project-multiplier-header__title:first-child {
    padding-left: 20px;
    border-radius: 8px 0 0 8px;
}

.project-multiplier-header__title:last-child {
    border-radius: 0 8px 8px 0;
}

.project-multiplier-item {
    display: table-row;
}

.project-multiplier-item-cell {
    display: table-cell;
    vertical-align: middle;
    padding-right: 15px;
    padding: 11px 15px;
}

.project-multiplier-item-cell:first-child {
    padding-left: 20px;
}

.project-multiplier-item-cell__caption {
    display: none;
    margin-bottom: 10px;
    font-family: 'Golos';
    font-size: 14px;
}

.project-multiplier-item__value {
    font-size: 14px;
    line-height: 17px;
}

.project-exchange-table {
    display: table;
    width: 100%;
}

.project-exchange-header {
    display: table-row;
}

.project-exchange-header__title {
    display: table-cell;
    vertical-align: middle;
    font-size: 14px;
    line-height: 17px;
    padding: 0 15px;
    background: #F0F2F5;
    height: 40px;
    color: #949BA9;
}

.project-exchange-header__title:first-child {
    padding-left: 20px;
    border-radius: 8px 0 0 8px;
}

.project-exchange-header__title:last-child {
    border-radius: 0 8px 8px 0;
}

.project-exchange-space {
    height: 8px;
}

.project-exchange-item {
    display: table-row;
}

.project-exchange-item:hover .project-exchange-item-cell {
    background: #F0F2F5;
}

.project-exchange-item-cell {
    display: table-cell;
    vertical-align: middle;
    padding-right: 15px;
    padding: 8px 10px;
}

.project-exchange-item-cell:first-child {
    padding-left: 20px;
}

.project-exchange-item-cell_1 {
    border-radius: 8px 0 0 8px;
}

.project-exchange-item-cell_5 {
    text-align: right;
    border-radius: 0 8px 8px 0;
}

.project-exchange-item-cell__caption {
    display: none;
    margin-bottom: 10px;
    font-family: 'Golos';
    font-size: 14px;
}

.project-exchange-item__value {
    font-size: 14px;
    line-height: 17px;
    white-space: nowrap;
}

.project-exchange-item-market {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: 'Golos';
    font-size: 14px;
    font-weight: 700;
}

.project-exchange-item-market img {
    margin-right: 8px;
}

.project-exchange-item__arrow {
    display: none;
}

/*--------------------other-projects-------------------*/
.other-projects {
    margin-bottom: 50px;
}

.other-projects__title {
    margin-bottom: 50px;
}

.other-projects-item {
    padding: 20px 15px 20px 25px;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px #E8EAEF;
    border-radius: 18px;
}

.other-projects-item__logo {
    position: relative;
    margin-bottom: 15px;
    width: 48px;
    height: 48px;
}

.other-projects-item__logo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
}

.other-projects-item__logocaption {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: -10px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-bottom: 2px;
    font-size: 12px;
    width: 38px;
    height: 22px;
    background-image: url(@/assets/images/icon-logotitle-1.svg);
    letter-spacing: -0.5px;
    color: #fff;
}

.other-projects-item__name {
    margin-bottom: 10px;
    font-size: 14px;
}

.other-projects-item__name span {
    font-size: 13px;
    text-transform: uppercase;
    color: #949BA9;
}

.other-projects-item__date {
    margin-bottom: 15px;
    font-size: 13px;
    color: #949BA9;
}

.other-projects-item-scores {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.other-projects-item-score {
    text-align: center;
}

.other-projects-item-score__caption {
    font-size: 12px;
}

.other-projects-item-score__rating {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 2px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.other-projects-item-score__rating span {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    bottom: 3px;
    right: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
}

@media only screen and (max-width: 1579px) {
    .mainprojects-body {
        padding: 40px 25px;
    }

    .mainprojects-row {
        margin: 0 -10px;
    }

    .mainprojects-col {
        padding: 0 10px;
    }

    .mainprojects-item-stat {
        margin-left: 15px;
    }

    .mainprojects-block {
        padding-left: 20px;
    }

    .mainprojects-item {
        padding-right: 15px;
    }

    .mainprojects-item__title {
        font-size: 15px;
    }

    .mainprojects-item-score {
        margin-left: 10px;
        width: auto;
        max-width: 60px;
    }

    .mainprojects-item__logo {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 40px;
        flex: 0 0 40px;
        max-width: 40px;
        height: 40px;
    }

    .project-team {
        width: 770px;
    }

    .project-content-section {
        padding: 25px;
    }

    .project-top-rightside {
        margin: -25px 0;
    }

    .project-social__btn {
        margin-right: 18px;
    }

    .project-steps {
        margin-right: 0;
    }

    .project-tokens-leftisde {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 250px;
        flex: 0 0 250px;
        max-width: 250px;
    }

    .project-tokens-item-cell {
        padding: 15px 6px;
    }

    .project-tokens-header__title,
    .project-tokens-item__value {
        font-size: 13px;
    }

    .project-tokens__item {
        padding-right: 10px;
        font-size: 13px;
    }

    .project-activity-stat {
        padding: 0 12px;
    }

    .project-content-section_2 {
        padding: 0;
    }

    .project-content-section-block {
        padding: 25px;
    }

    .project-activity-stat__caption {
        font-size: 13px;
    }

    .project-multiplier-item-cell {
        padding: 8px 15px;
    }

    .project-video-item__image {
        height: 240px;
    }

    .project {
        margin-bottom: 70px;
    }

    .project-activity-graph {
        margin-right: -25px;
    }

    .project-investors-carousel {
        width: 795px;
        margin-right: -25px;
        margin-left: 0;
    }

    .project-steps-slider {
        width: 795px;
    }

    .project-investors__item img {
        max-width: 140px;
    }
}

@media only screen and (max-width: 1279px) {
    .mainprojects-row {
        display: block;
    }

    .mainprojects-col {
        max-width: 100%;
        margin-bottom: 40px;
    }

    .mainprojects-col:last-child {
        margin-bottom: 0;
    }

    .mainprojects-item__title {
        font-size: 18px;
    }

    .mainprojects-item__logo {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 48px;
        flex: 0 0 48px;
        max-width: 48px;
        height: 48px;
    }

    .mainprojects-item-score {
        margin-left: 10px;
        max-width: none;
        width: 65px;
    }

    .mainprojects-empty {
        padding: 0;
    }

    .mainprojects-block {
        padding: 20px;
    }

    .mainprojects-bottom {
        padding-right: 0;
    }

    .projects {
        padding: 35px 20px 20px;
    }

    .projects-head-cell,
    .projects-item-cell {
        padding-right: 15px;
    }

    .project {
        display: block;
    }

    .project-leftside {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .project__logo {
        margin-right: 25px;
    }

    .project-info-top {
        padding-top: 0;
    }

    .project-stats {
        padding-top: 20px;
    }

    .project-stats-item {
        margin-bottom: 30px;
    }

    .project-info {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .project-stats-item__caption,
    .project-stats-item__value {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .project-info-button .btn {
        width: 50%;
    }

    .project-leftside {
        margin-bottom: 12px;
    }

    .project-top-rightside {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 270px;
        flex: 0 0 270px;
        max-width: 270px;
    }

    .project__desc {
        max-width: 100%;
    }

    .project-team {
        margin-right: -25px;
        width: auto;
    }

    .project-team-carousel .swiper-slide {
        width: 300px;
    }

    .other-projects-carousel .swiper-slide {
        width: 210px;
    }

    .news-partners-main {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .project-activity-stats {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 300px;
        flex: 0 0 300px;
        max-width: 300px;
        padding-top: 0;
    }

    .project-activity-stat {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        margin-bottom: 10px;
        border: 0;
    }

    .project-activity-stat__value {
        margin-bottom: 7px;
    }

    .projects-space,
    .projects-head {
        display: none;
    }

    .projects-item__arrow {
        display: block;
        top: 21px;
    }

    .projects-list {
        display: block;
    }

    .projects-list_2 .projects-item-cell_3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-list_2 .projects-item-cell_4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(50% - 60px);
        flex: 0 0 calc(50% - 60px);
        max-width: calc(50% - 60px);
    }

    .projects-list_2 .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 60px;
        flex: 0 0 60px;
        max-width: 60px;
        padding-right: 0;
    }

    .projects-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .projects-item.open .projects-item-cell {
        display: block;
    }

    .projects-item.open .projects-item__arrow {
        background-color: #6170EF;
        background-image: url(@/assets/images/icon-projects-arrow-active.svg);
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }

    .projects-item-cell {
        display: none;
    }

    .projects-item-cell_1,
    .projects-item-cell_2 {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_3,
    .projects-item-cell_4,
    .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 28%;
        flex: 0 0 28%;
        max-width: 28%;
    }

    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8%;
        flex: 0 0 8%;
        max-width: 8%;
        padding-right: 5px;
    }

    .projects-item-cell__caption {
        display: block;
    }

    .projects-item__payback {
        padding: 0;
        background: transparent;
    }

    .project-investors-carousel {
        width: auto;
    }

    .project-steps-slider {
        width: 100%;
    }

    .projects-item__interest {
        padding: 0;
        height: auto;
        background: transparent;
    }
}

@media only screen and (max-width: 989px) {

    .project-stats-item__caption,
    .project-stats-item__value {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        max-width: auto;
    }

    .project-info-button .btn {
        width: 100%;
    }

    .project__logo {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 350px;
        flex: 0 0 350px;
        max-width: 350px;
        height: 350px;
    }

    .project-stats-item {
        margin-bottom: 23px;
    }

    .project-top {
        display: block;
    }

    .project-top-content {
        padding-right: 0;
        padding-bottom: 50px;
    }

    .project-top-rightside {
        margin: 0 -25px;
        max-width: none;
        border-top: 2px solid #F0F2F5;
        border-left: 0;
    }

    .project-interest {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .project-interest-main {
        margin: 0 30px 0 0;
    }

    .project-interest-item-score {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 70px;
        flex: 0 0 70px;
        max-width: 70px;
    }

    .project-tokens-bottom {
        display: block;
        margin-bottom: 20px;
    }

    .project-tokens-top {
        display: block;
        margin: 0;
    }

    .project-tokens-leftisde {
        max-width: 100%;
    }

    .project-tokens {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }

    .project-tokens-chart {
        margin-left: auto;
    }

    .project-tokens-quantity {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 50px;
    }

    .project-completed {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        margin: 0;
    }

    .project-timeline-list {
        margin: 0;
    }

    .project-top-rightside {
        padding: 25px 25px 0;
    }

    .project-timeline-list {
        padding: 0;
        border: 0;
    }

    .project-timeline__btn:after {
        display: block;
        background: #F0F2F5;
    }

    .project-timeline__btn.active:after {
        background: #6170EF;
    }

    .project-team-carousel {
        padding-bottom: 60px;
    }

    .project-content-section-row {
        display: block;
    }

    .project-content-section-col {
        max-width: 100%;
        margin-bottom: 12px;
    }

    .project-video-item__image {
        height: 360px;
    }

    .popup__close {
        right: 15px;
        top: 15px;
    }
}


@media only screen and (max-width: 767px) {
    .projects-item-cell_1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_3,
    .projects-item-cell_4,
    .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }

    .project-leftside {
        display: block;
    }

    .project__logo {
        margin-bottom: 20px;
    }

    .project-social {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .project-top-content {
        padding-bottom: 10px;
    }

    .project-social__btn {
        margin: 0 15px 15px 0;
    }

    .project-steps-slider {
        padding-bottom: 50px;
        margin-right: -25px;
        margin-left: -25px;
        width: auto;
    }

    .project-steps-item {
        width: 180px;
    }

    .breadcrumbs {
        padding-left: 0;
    }

    .project-activity-top {
        display: block;
    }

    .project-activity-social {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        margin-bottom: 15px;
    }

    .project-activity-stats {
        max-width: 100%;
    }

    .project__logo {
        margin-right: 0;
    }

    .project-investors-carousel {
        padding-bottom: 50px;
    }

    .project__logo {
        width: 300px;
        height: 300px;
    }

    .project-activity-graph {
        margin-bottom: 30px;
    }

    .project-activity-stats {
        position: static;
    }

    .project-activity-stat {
        padding-left: 0;
    }

    .project-video-item__image {
        height: 270px;
    }

    .project-info-top {
        max-width: 300px;
        border-bottom: 0;
    }

    .project-info-content {
        border-top: 2px solid #F0F2F5;
    }

    .project-investors-carousel {
        margin-left: -25px;
    }

    .project-exchange-item-cell .btn {
        padding: 0 15px;
    }

    .project-exchange-item-cell {
        padding: 8px;
    }

    .project-exchange-item-cell:first-child {
        padding-left: 15px;
    }
}

@media only screen and (max-width: 575px) {
    .mainprojects-body {
        padding: 20px 15px;
    }

    .mainprojects-item {
        display: block;
        padding-right: 0;
    }

    .mainprojects-item-info {
        margin-bottom: 20px;
    }

    .mainprojects-item-score {
        margin: 0 20px 0 0;
        width: auto;
    }

    .mainprojects-item-stat {
        margin: 0;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .mainprojects-item-stat__number {
        margin: 0 15px 0 0;
    }

    .mainprojects-empty__btn {
        width: 100%;
    }

    .projects-filters {
        display: block;
    }

    .projects-filters__btn {
        width: 100%;
    }

    .projects {
        padding-top: 20px;
    }

    .projects-item {
        padding: 5px 0;
        border-bottom: 2px solid #F0F2F5;
    }

    .projects-item-cell {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .projects-item-cell_1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-bottom: 7px;
        padding-right: 45px;
    }

    .projects-item-cell_2 {
        padding-top: 0;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        padding-left: 63px;
        max-width: 100%;
    }

    .projects-item-cell_5,
    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        padding-right: 15px;
        max-width: none;
    }

    .projects-item-cell_7 {
        padding-right: 0;
    }

    .project__logo {
        height: 300px;
    }

    .project-start__date {
        font-size: 16px;
    }

    .project-status__value {
        font-size: 16px;
    }

    .project-interest {
        display: block;
    }

    .project-interest-main {
        margin: 0 auto 30px;
    }

    .project-top-rightside {
        padding: 25px;
    }

    .project-interest-row {
        margin: 0 auto;
        max-width: 250px;
    }

    .project-tokens-list {
        display: block;
    }

    .project-tokens__item {
        max-width: 100%;
    }

    .project-tokens-chart {
        position: static;
        margin: 0 auto;
    }

    .project-tokens-leftisde {
        margin-bottom: 40px;
    }

    .project-tokens-quantity {
        margin-bottom: 20px;
    }

    .project-tokens-top {
        margin-bottom: 30px;
    }

    .project-video-item__image {
        height: 200px;
    }

    .project-activity-social {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .project-activity-social__btn {
        padding: 0 10px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .project-multiplier-header {
        display: none;
    }

    .project-multiplier-item-cell {
        vertical-align: top;
        border-bottom: 2px solid #F0F2F5;
    }

    .project-multiplier-item:last-child .project-multiplier-item-cell {
        border-bottom: 0;
    }

    .project-multiplier-item-cell:first-child {
        padding-top: 7px;
        padding-left: 0;
    }

    .project-multiplier-item-cell:first-child .project-multiplier-item__value {
        font-size: 20px;
        font-weight: 700;
    }

    .project-multiplier-item-cell__caption {
        display: block;
    }

    .project-tokens-quantity {
        position: static;
        margin-bottom: 30px;
        padding: 0;
    }

    .project-tokens {
        display: block;
        margin: 0;
    }

    .project-tokens-header {
        display: none;
    }

    .project-tokens-item-cell:first-child {
        padding-left: 0;
    }

    .project-tokens-table {
        display: block;
    }

    .project-tokens-item {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 7px 0;
        border-bottom: 2px solid #F0F2F5;
    }

    .project-tokens-item:last-child {
        border-bottom: 0;
    }

    .project-tokens-item-cell {
        display: block;
        padding: 5px 0;
    }

    .project-tokens-item-cell_1 {
        font-weight: 700;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-bottom: 0;
    }

    .project-tokens-item-cell_1 .project-tokens-item__value {
        font-size: 14px;
    }

    .project-tokens-item-cell_2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-right: 40px;
    }

    .project-tokens-item-cell_2 .project-tokens-item__value {
        font-family: 'Commissioner';
        font-weight: normal;
        font-size: 14px;
    }

    .project-tokens-item-cell_3,
    .project-tokens-item-cell_4,
    .project-tokens-item-cell_5,
    .project-tokens-item-cell_6 {
        display: none;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .project-tokens-item__smalltitle {
        display: inline-block;
        padding-right: 5px;
    }

    .project-tokens-item-cell__caption {
        display: block;
    }

    .project-tokens-item__value {
        font-family: 'Golos';
        font-size: 16px;
        font-weight: 700;
    }

    .project-tokens-item__arrow {
        display: block;
        position: absolute;
        top: 14px;
        right: 0;
        height: 32px;
        width: 32px;
        background: #F0F2F5;
        background-image: url(@/assets/images/icon-projects-arrow.svg);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 8px;
    }

    .project-tokens-item.open .project-tokens-item-cell_3,
    .project-tokens-item.open .project-tokens-item-cell_4,
    .project-tokens-item.open .project-tokens-item-cell_5,
    .project-tokens-item.open .project-tokens-item-cell_6 {
        display: block;
    }

    .project-tokens-item.open .project-tokens-item__arrow {
        background-color: #6170EF;
        background-image: url(@/assets/images/icon-projects-arrow-active.svg);
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }

    .project-team-carousel .swiper-slide {
        width: 280px;
    }

    .project-team-item {
        padding: 30px 30px 15px;
    }

    .project {
        margin-bottom: 50px;
    }

    .project-investors__item {
        text-align: center;
    }

    .project-multiplier-item-cell {
        padding: 8px 10px;
    }

    .project-completed {
        display: block;
    }

    .project-completed-info {
        margin-bottom: 20px;
    }

    .project-top-rightside {
        padding-bottom: 0;
    }

    .project-tokens-leftisde {
        margin-bottom: 30px;
    }

    .project-exchange-header,
    .project-exchange-space {
        display: none;
    }

    .project-exchange-table {
        display: block;
    }

    .project-exchange-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .project-exchange-item-cell {
        display: block;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        padding: 5px 0;
    }

    .project-exchange-item-cell:first-child {
        padding-left: 0;
    }

    .project-exchange-item-cell_1 {
        max-width: 100%;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    .project-exchange-item-cell_2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        padding-left: 20px;
        white-space: nowrap;
    }

    .project-exchange-item-cell_2 .project-exchange-item__value {
        line-height: 25px;
    }

    .project-exchange-item-cell_2,
    .project-exchange-item-cell_4 {
        text-align: right;
    }

    .project-exchange-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-top: 8px;
    }

    .project-exchange-item-cell_5 .btn {
        width: 100%;
    }

    .project-exchange-item-cell__caption {
        display: block;
        margin-bottom: 5px;
    }

    .projects-list_2 .projects-item-cell_3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .projects-list_2 .projects-item-cell_4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - 60px);
        flex: 0 0 calc(100% - 60px);
        max-width: calc(100% - 60px);
    }
}

@media only screen and (max-width: 374px) {
    .project__logo {
        width: 100%;
    }

    .project-team-carousel .swiper-slide {
        width: 270px;
    }

    .project-tokens-item__smalltitle {
        display: block;
    }
}

@media only screen and (max-width: 359px) {
    .projects {
        padding: 15px;
    }

    .projects-item-cell {
        padding-right: 10px;
    }

    .projects-item-cell__caption {
        font-size: 12px;
    }

    .project__logo {
        height: 250px;
    }

    .project-stats-item {
        font-size: 13px;
    }

    .project__desc {
        font-size: 14px;
    }

    .project-team-carousel .swiper-slide {
        width: 230px;
    }

    .project-team-item {
        padding: 20px 20px 10px;
    }

    .projects-item-cell_2 {
        padding-left: 0;
    }
}
</style>