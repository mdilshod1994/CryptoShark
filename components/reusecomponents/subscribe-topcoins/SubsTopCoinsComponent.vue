<template>
    <div class="mainnews-row">
        <Subscribe />
        <TopCoins />
    </div>
</template>
<script>
import Subscribe from './subscribe/Subscribe.vue';
import TopCoins from './top-coins/TopCoins.vue';
export default {
    components: { Subscribe, TopCoins }
}
</script>
<style>
.mainnews-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -6px;
}

@media only screen and (max-width: 1279px) {
    .mainnews-row {
        display: block;
    }
}
</style>