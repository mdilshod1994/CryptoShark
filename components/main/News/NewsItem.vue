<template>
    <div class="news-col">
        <div class="news-item">
            <div class="news-item__image">
                <nuxt-link :to="`/news/${item.id}`">
                    <img :src="`${item.photo.server}/${item.photo.path}`" alt="img">
                </nuxt-link>
            </div>
            <div class="news-item__title">
                <nuxt-link :to="`/news/${item.id}`">{{ item.name }}</nuxt-link>
            </div>
            <div class="news-item-content">
                <div class="news-item-info">
                    <div class="news-item__author">Автор: <strong>{{ item.autor }}</strong></div>
                    <div class="news-item__time" v-if="item.date_creation">{{ setTime(item.date_creation) }}</div>
                </div>
                <div class="news-item-actions">
                    <likes :item="item" />
                    <nuxt-link :to="`/news/${item.id}`" class="news-item__action"><i class="ic ic-comment"></i> {{
                            item.comments
                    }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Likes from '~/components/UI/Likes.vue'
export default {
    components: { Likes },
    props: {
        item: Object
    },
    methods: {
        setTime(e) {
            if (e) {
                const date = new Date(e * 1000);
                const timestamp = new Date().getTime();
                let min = Math.floor((timestamp - (e * 1000)) / 60000)
                let hours = Math.floor(min / 60);
                if (min < 60) {
                    return min + ' минут назад'
                } else if (min >= 60 && hours < 24) {
                    return hours + ' час назад'
                } else if (hours > 24) {
                    return date.toLocaleDateString('ru-RU')
                }
            }
        }
    }
}
</script>
<style>

</style>