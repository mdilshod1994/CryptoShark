<template>
    <div class="news-partners-row" v-if="news">
        <NewsPartnerItem v-for="(item, index) in news" :key="index" :item="item" />
    </div>
</template>
<script>
import NewsPartnerItem from './NewsPartnerItem.vue';
export default {
    components: { NewsPartnerItem },
    computed: {
        news() {
            const news = this.$store.getters['news/NEWS_TYPE_THIRD'].slice(1)
            return news.slice(0, 4)
        }
    }
}
</script>
<style>

</style>