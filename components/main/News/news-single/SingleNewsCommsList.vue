<template>
    <div class="news-comments-list">
        <SingleNewsCommItem v-for="item in comments" :key="item.id" :item="item" />
    </div>
</template>
<script>
import SingleNewsCommItem from './SingleNewsCommItem.vue';
export default {
    components: { SingleNewsCommItem },
    props: ['comments']
}
</script>
<style>

</style>