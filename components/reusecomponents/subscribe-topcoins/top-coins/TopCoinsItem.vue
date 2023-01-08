<template>
    <div class="rating-item">
        <div class="rating-item-info">
            <div class="rating-item__place">
                <img src="@/assets/images/icon-rating-top1.svg" alt="img" v-if="item.index == 0"
                    :class="`${item.index == 0 ? 'first' : ''}`">
                <img src="@/assets/images/icon-rating-top2.svg" alt="img" v-else-if="item.index == 1"
                    :class="`${item.index == 1 ? 'second' : ''}`">
                <img src="@/assets/images/icon-rating-top3.svg" alt="img" v-else-if="item.index == 2"
                    :class="`${item.index == 2 ? 'third' : ''}`">
                <span v-else>{{ item.index + 1 }}</span>
            </div>
            <div class="rating-item-name">
                <img :src="item.info.logo_url" alt="img">
                <span> {{ item.info.name }} </span>
            </div>
        </div>
        <div class="rating-item__quantity">
            ${{ Math.ceil(item.info.volumeUsd24Hr).toLocaleString() }}
            <span :class="`quantity_${item.info.priceUsd > item.info.vwap24Hr ? 'fall' : 'growth'}`">
                {{ (item.info.changePercent24Hr).toFixed(2) }}%
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
.first {
    animation: lighting 2s infinite linear;
}

@keyframes lighting {

    0%,
    100% {
        transform: scale(1.15);
        filter: brightness(1.15);
    }

    50% {
        transform: scale(0.95);
        filter: brightness(0.9);
    }
}

.second {
    animation: lighting2 2s infinite linear;
    animation-delay: 0.3s;
}

@keyframes lighting2 {

    0%,
    100% {
        transform: scale(1.05);
        filter: brightness(1);
    }

    50% {
        transform: scale(0.95);
        filter: brightness(0.5);
    }
}

.third {
    animation-delay: 0.6s;
    animation: lighting3 2s infinite linear;
}

@keyframes lighting3 {

    0%,
    100% {
        transform: scale(1.05);
        filter: brightness(1);
    }

    50% {
        transform: scale(0.95);
        filter: brightness(0.5);
    }
}
</style>