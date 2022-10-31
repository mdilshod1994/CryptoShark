<template>
    <div class="rating-list">
        <TopCoinsItem v-for="(item, ind) in coins" :key="item.id" :item="{ info: item, index: ind }" />
    </div>
</template>
<script>
import TopCoinsItem from './TopCoinsItem.vue';
export default {
    components: { TopCoinsItem },
    computed: {
        coins() {
            return this.$store.getters['coins/TOPRANKCOINS']
        }
    },
}
</script>
<style>

</style>