<template>
    <div class="trends-item">
        <div class="trends-item__logo"><img :src="item.logo_url" alt="img">
        </div>
        <div class="trends-item__name">{{ item.name }} <span>{{item.symbol}}</span></div>
        <div class="trends-item__price"> {{ item.vwap24Hr.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        }) }}
            <span
                :class="`change_${item.priceUsd > item.vwap24Hr ? 'fall' : 'growth'}`">{{item.changePercent24Hr.toFixed(2)}}%</span>
        </div>
        <div class="trends-item__id">#{{item.rank}}</div>
    </div>
</template>
<script>

export default {
    props: ['item']
}
</script>
<style>
.trends-item {
    padding: 18px 25px;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px #E8EAEF;
    border-radius: 18px;
}

.trends-item__logo {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
}

.trends-item__logo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.trends-item__name {
    margin-bottom: 10px;
    font-size: 14px;
}

.trends-item__name span {
    padding-left: 3px;
    font-size: 13px;
    text-transform: uppercase;
    color: #949BA9;
}

.trends-item__price {
    margin-bottom: 35px;
    font-family: 'Golos';
    font-weight: 700;
}

.trends-item__price span {
    margin-left: 5px;
    font-family: 'Commissioner';
    background-repeat: no-repeat;
    background-position: 0 50%;
    font-size: 13px;
    font-weight: 500;
}

.trends-item__id {
    padding-left: 20px;
    line-height: 17px;
    font-size: 13px;
    color: #949BA9;
    background-image: url('@/assets/images/icon-id.svg');
    background-repeat: no-repeat;
}

.change_growth {
    padding-left: 15px;
    background-image: url('@/assets/images/icon-arrow-growth.svg');
    color: #27B510;
}

.change_fall {
    padding-left: 15px;
    background-image: url('@/assets/images/icon-arrow-fall.svg');
    color: #FF5B65;
}
</style>