<template>
    <div class="trends">
        <h2 class="trends__title"><i class="ic ic-title-trends"></i> Монеты в тренде</h2>
        <div class="trends-body">
            <SwiperCoins />
        </div>
    </div>
</template>
<script>
import SwiperCoins from './SwiperCoins.vue';
export default {
    components: { SwiperCoins }
}
</script>
<style>
.trends {
    padding-bottom: 55px;
}

.trends__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 115px;
    padding-left: 28px;
}

.trends-body {
    position: relative;
}

.trends-body:before {
    content: '';
    display: block;
    position: absolute;
    top: -85px;
    left: 50%;
    width: 10000px;
    height: 180px;
    background: #6170EF;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

@media only screen and (max-width: 1579px) {
    .trends-item {
        padding: 15px;
    }
}

@media only screen and (max-width: 1279px) {
    .trends .swiper-slide {
        width: 215px !important;
    }
}

@media only screen and (max-width: 989px) {
    .trends {
        margin-right: -25px;
    }
}

@media only screen and (max-width: 575px) {
    .trends__title {
        margin-bottom: 55px;
        padding-left: 0;
    }

    .trends-body:before {
        top: -25px;
        height: 125px;
    }
}
</style>