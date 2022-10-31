<template>
    <div class="statistic-section">
        <div class="statistic-section__title"><i class="ic ic-statistic-fall"></i> Топ падений
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
            className: 'fall'
        }
    },
    computed: {
        coins() {
            return this.$store.getters['coins/TOPFALLSCOINS']
        }
    }
}
</script>
<style>

</style>