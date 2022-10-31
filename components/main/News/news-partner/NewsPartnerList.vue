<template>
    <div class="news-partners-row">
        <NewsPartnerItem v-for="(item, index) in 4" :key="index" />
    </div>
</template>
<script>
import NewsPartnerItem from './NewsPartnerItem.vue';
export default {
    components: { NewsPartnerItem }
}
</script>
<style>

</style>