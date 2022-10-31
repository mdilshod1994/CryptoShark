<template>
    <div class="statistic-crypto">
        <TopItem :className="className" v-for="item in coins" :key="item.id" :item="item" />
    </div>
</template>
<script>
import TopItem from './TopItem.vue';
export default {
    components: { TopItem },
    props: {
        className: String,
        coins: Array
    },
}
</script>
<style>

</style>