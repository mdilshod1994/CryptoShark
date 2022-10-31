<template>
    <div class="news-row">
        <NewsItem v-for="item in news" :key="item.id" :item="item" />
    </div>
</template>
<script>
import NewsItem from './NewsItem.vue';
export default {
    components: { NewsItem },
    props: ['newsSecondType', 'newsFirstType'],
    computed: {
        news() {
            return !this.newsFirstType ? this.newsSecondType : this.newsFirstType.slice(1)
        }
    }
}
</script>
<style>

</style>