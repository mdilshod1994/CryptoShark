<template>
    <div class="rating-item">
        <div class="rating-item-info">
            <div class="rating-item__place">
                <img src="@/assets/images/icon-rating-top1.svg" alt="img" v-if="item.index == 0">
                <img src="@/assets/images/icon-rating-top2.svg" alt="img" v-else-if="item.index == 1">
                <img src="@/assets/images/icon-rating-top3.svg" alt="img" v-else-if="item.index == 2">
                <span v-else>{{ item.index + 1 }}</span>
            </div>
            <div class="rating-item-name">
                <img :src="item.info.logo_url" alt="img">
                <span> {{ item.info.name }} </span>
            </div>
        </div>
        <div class="rating-item__quantity">
            ${{Math.ceil(item.info.volumeUsd24Hr).toLocaleString()}}
            <span :class="`quantity_${item.info.priceUsd > item.info.vwap24Hr ? 'fall' : 'growth'}`">
                {{(item.info.changePercent24Hr).toFixed(2)}}%
            </span>
        </div>
        <div class="rating-item-btn">
            <a :href="item.info.explorer" target="_blank" class="btn btn_small">Торговать</a>
        </div>
    </div>
</template>
<script>

export default {
    props: ["item"]
}
</script>
<style>

</style>