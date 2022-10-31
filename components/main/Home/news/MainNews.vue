<template >
    <div class="mainnews">
        <h2 class="mainnews__title"><i class="ic ic-title-mainnews"></i> Криптоновости</h2>
        <SwiperNews />
        <SubsTopCoinsComponent />
    </div>
</template>
<script>
import SwiperNews from '@/components/reusecomponents/news/SwiperNews.vue';
import SubsTopCoinsComponent from '@/components/reusecomponents/subscribe-topcoins/SubsTopCoinsComponent.vue';
export default {
    components: {
        SwiperNews,
        SubsTopCoinsComponent
    }
}
</script>
<style >
.mainnews {
    margin-bottom: 55px;
}

.mainnews__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 20px;
}

@media only screen and (max-width: 1279px) {
    .mainnews-row {
        display: block;
    }

    .mainnews-leftside,
    .mainnews-rightside {
        max-width: 100%;
        margin-bottom: 12px;
    }
}

@media only screen and (max-width: 575px) {
    .mainnews-slider {
        padding: 15px 15px 50px;
    }
}
</style>