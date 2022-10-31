<template>
    <div class="statistic-crypto">
        <SituationMarketItem v-for="item in situationMarket" :key="item.id" :item="item" />
    </div>
</template>
<script>
import SituationMarketItem from './SituationMarketItem.vue';
export default {
    components: { SituationMarketItem },
    computed: {
        situationMarket() {
            return this.$store.getters['coins/SITUATION_MARKET']
        }
    }
}
</script>
<style>

</style>