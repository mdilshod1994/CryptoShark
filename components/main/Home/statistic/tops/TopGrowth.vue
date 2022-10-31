<template>
    <div class="statistic-section">
        <div class="statistic-section__title"><i class="ic ic-statistic-growth"></i> Топ роста
        </div>
        <div class="statistic-section-body">
            <TopList :className="className" :coins="coins" />
        </div>
    </div>
</template>
<script>
import TopList from './TopList.vue';
export default {
    components: { TopList },
    data() {
        return {
            className: 'growth'
        }
    },
    computed: {
        coins() {
            return this.$store.getters['coins/TOPGROWTHCOINS']
        }
    }
}
</script>
<style>

</style>