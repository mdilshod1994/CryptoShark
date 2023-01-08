<template >
    <button :class="`news-item__action ${item.likes_checked || this.liked ? 'active' : ''} `" @click="setLike(item)">
        <i class="ic ic-favorite"></i>
        <span>
            {{ item.likes }}
        </span>
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
            test: false,
        }
    },
    methods: {
        async setLike(item) {
            this.liked = !this.liked
            let body = {
                articles_id: item.id
            }
            try {
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
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<style >

</style>