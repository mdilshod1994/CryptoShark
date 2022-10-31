<template>
    <div class="statistic-crypto-item">
        <div class="statistic-crypto-item-leftside">
            <div class="statistic-crypto-item__logo"><img :src="item.logo_url" alt="img"></div>
            <div class="statistic-crypto-item-info">
                <div class="statistic-crypto-item__name"> {{ item.name }} </div>
                <div class="statistic-crypto-item__shortname"> {{ item.symbol }} </div>
            </div>
        </div>
        <div class="statistic-crypto-item-rightside">
            <div class="statistic-crypto-item__price"> ${{(item.vwap24Hr).toLocaleString()}} </div>
            <div :class="`statistic-crypto-item__change sci__change_${className}`">
                {{(item.changePercent24Hr).toFixed(2)}}%
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        className: String,
        item: Object
    }
}
</script>
<style>

</style>