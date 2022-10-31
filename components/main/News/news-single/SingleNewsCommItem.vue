<template>
    <div class="news-comments-item">
        <div class="news-comments-item__avatar"></div>
        <div class="news-comments-item-content">
            <div class="news-comments-item-info">
                <div class="news-comments-item__name">{{ item.name }}</div>
                <div class="news-comments-item__date"> {{ date(item.date_creation) }} </div>
            </div>
            <div class="news-comments-item__text">{{ truncate(item) }}
                <span @click="showMore" v-show="item.message.length > 110" v-if="symbolLength <= 110">Показать
                    ещё</span>
                <span @click="showLess" v-else> &nbsp; Показать меньше</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            symbolLength: 110
        }
    },
    methods: {
        truncate(e) {
            if (e.message.length > this.symbolLength) {
                return e.message.slice(0, this.symbolLength) + '...'
            } else {
                return e.message
            }
        },
        showMore() {
            this.symbolLength = 1000000000000000
        },
        showLess() {
            this.symbolLength = 110
        },
        date(e) {
            return new Intl.DateTimeFormat('ru-RU').format(e * 1000)
        }
    },
    created() {

    }
}
</script>
<style>
.news-comments-item__text {}
</style>