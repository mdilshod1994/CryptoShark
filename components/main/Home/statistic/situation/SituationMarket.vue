<template>
    <div class="statistic-section">
        <div class="statistic-section__title"><i class="ic ic-statistic-market"></i> Ситуация на
            рынке</div>
        <div class="statistic-section-body">
            <SituationMarketList />
        </div>
    </div>
</template>
<script>
import SituationMarketList from './SituationMarketList.vue';
export default {
    components: { SituationMarketList },
}
</script>
<style>

</style>