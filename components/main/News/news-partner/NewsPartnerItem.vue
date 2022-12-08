<template>
    <div class="news-partners-item" v-if="item">
        <nuxt-link :to="`/news/${item.id}`" class="news-partners-item__title"> {{ item.name }} </nuxt-link>
        <div class="news-partners-item-info">
            <div class="news-partners-item__author">Автор: <span>{{ item.autor }}</span></div>
            <div class="news-partners-item__time">{{ setTime(item.date_creation) }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item'],
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