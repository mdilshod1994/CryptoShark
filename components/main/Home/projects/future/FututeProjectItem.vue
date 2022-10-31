<template>
    <div class="mainprojects-item">
        <div class="mainprojects-item-info">
            <div class="mainprojects-item__logo">
                <img :src="item.logo" alt="img">
            </div>
            <div class="mainprojects-item-content">
                <div class="mainprojects-item__title"> {{ item.name }} </div>
                <div class="mainprojects-item__date">Старт: {{ item.regDay }} </div>
            </div>
        </div>
        <div class="mainprojects-item-scores">
            <div class="mainprojects-item-score">
                <div class="mainprojects-item-score__rating mi-rating_5">
                    <span>{{ item.fonds }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Фонды</div>
            </div>
            <div class="mainprojects-item-score">
                <div class="mainprojects-item-score__rating mi-rating_4">
                    <span>{{ item.hipe }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Хайп</div>
            </div>
            <div class="mainprojects-item-score">
                <div class="mainprojects-item-score__rating mi-rating_3">
                    <span>{{ item.tokenomica }}</span>
                </div>
                <div class="mainprojects-item-score__caption">Токеномика</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item']
}
</script>
<style >

</style>