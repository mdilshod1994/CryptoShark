<template >
    <button :class="`news-item__action ${item.likes_checked ? 'active' : ''} `" @click="setLike(item)">
        <i class="ic ic-favorite"></i>
        {{ item.likes }}
    </button>
</template>
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            liked: false,
            articleId: null,
        }
    },
    methods: {
        async setLike(item) {
            let body = {
                articles_id: item.id
            }
            const liked = await this.$axios.$post('https://crypto-shark-dev.ru/articlesLikes', body)
                .then(res => {
                    return res
                })

            if (liked) {
                this.articleId = liked.articles_id
                liked.type === "add_like" ? this.liked = true : this.liked = false
                await this.$store.dispatch('news/getNewsType1')
                await this.$store.dispatch('news/getNewsType2')
                await this.$store.dispatch('news/getNewsType3')
            }
        }
    }
}
</script>
<style >

</style>