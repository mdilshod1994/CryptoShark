<template>
    <div class="mainprojects-item" v-if="item">
        <div class="mainprojects-item-info">
            <div class="mainprojects-item__logo">
                <img :src="`${item.icon_server}/${item.icon_path}`" alt="img">
            </div>
            <div class="mainprojects-item-content">
                <div class="mainprojects-item__title"> {{ item.name }} </div>
                <div class="mainprojects-item__date">Старт: {{ toDate(item.date_start) }} </div>
            </div>
        </div>
        <div class="mainprojects-item-scores">
            <div class="mainprojects-item-score">
                <div :class="`mainprojects-item-score__rating mi-rating_${item.grade_funds}`">
                    <span>{{ item.grade_funds }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Фонды</div>
            </div>
            <div class="mainprojects-item-score">
                <div :class="`mainprojects-item-score__rating mi-rating_${item.grade_hype}`">
                    <span>{{ item.grade_hype }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Хайп</div>
            </div>
            <div class="mainprojects-item-score">
                <div :class="`mainprojects-item-score__rating mi-rating_${item.grade_tokenomics}`">
                    <span>{{ item.grade_tokenomics }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Токеномика</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item'],
    methods: {
        toDate(ml) {
            let date = new Date(ml * 1000)
            let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date)
            let day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date)
            return `${' ' + day + ' ' + month}`
        },
    }
}
</script>
<style >

</style>