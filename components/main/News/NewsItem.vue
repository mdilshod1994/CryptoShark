<template>
    <div class="news-col">
        <div class="news-item">
            <div class="news-item__image">
                <nuxt-link :to="`/news/${item.id}`">
                    <img :src="`${item.photo.server}/${item.photo.path}`" alt="img">
                </nuxt-link>
            </div>
            <div class="news-item__title">
                <nuxt-link :to="`/news/${item.id}`">{{item.name}}</nuxt-link>
            </div>
            <div class="news-item-content">
                <div class="news-item-info">
                    <div class="news-item__author">Автор: <strong>{{item.author}}</strong></div>
                    <div class="news-item__time">{{item.date_creation}} минут назад</div>
                </div>
                <div class="news-item-actions">
                    <likes :item="item" />
                    <nuxt-link :to="`/news/${item.id}`" class="news-item__action"><i class="ic ic-comment"></i> {{
                    item.comments }}
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
    }
}
</script>
<style>

</style>