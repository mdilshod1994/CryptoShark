<template>
    <div class="news-partners">
        <h2 class="news-partners__caption"><i class="ic ic-title-partners"></i> Друзья и партнёры</h2>
        <div class="news-partners-body" v-if="news.length">
            <div class="news-partners-main">
                <a href="#" class="news-partners-main-body">
                    <div class="news-partners-main__image"><img
                            src="@/assets/images/content/news/news-partners-image.jpg" alt="img"></div>
                    <div class="news-partners-main-content">
                        <div class="news-partners-main__title">{{ news[0].name }}</div>
                        <div class="news-partners-main-info">
                            <div class="news-partners-main__author">Автор: <span>{{ news[0].autor }}</span></div>
                            <div class="news-partners-main__time">{{ setTime(news[0].date_creation)
                            }} </div>
                        </div>
                    </div>
                </a>
            </div>
            <NewsPartnerList />
        </div>
    </div>
</template>
<script>
import NewsPartnerList from './NewsPartnerList.vue';
export default {
    components: { NewsPartnerList },
    computed: {
        news() {
            return this.$store.getters['news/NEWS_TYPE_THIRD']
        }
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