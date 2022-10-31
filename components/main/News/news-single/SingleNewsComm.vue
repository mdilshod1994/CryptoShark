<template >
    <div class="news-comments">
        <h2 class="news-comments__caption">Комментарии <span v-if="comments.length"> {{ comments.length }} </span></h2>
        <SingleNewsForm />
        <SingleNewsCommsList :comments="comments" />
    </div>
</template>
<script>
import SingleNewsForm from './SingleNewsForm.vue';
import SingleNewsCommsList from './SingleNewsCommsList.vue';

export default {
    components: { SingleNewsForm, SingleNewsCommsList },
    computed: {
        comments() {
            return this.$store.getters['news/NEWS_COMMENTS']
        }
    },
    async mounted() {
        await this.$store.dispatch('news/getNewsComments', this.$route.params.news)
    }
}
</script>
<style >

</style>