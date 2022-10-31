<template>
    <div class="mainprojects-empty">
        <div class="mainprojects-empty__image"><img src="@/assets/images/mainprojects-image.png" alt="img"></div>
        <div class="mainprojects-empty__caption">Активных проектов пока нет</div>
        <PrimaryButton class="mainprojects-empty__btn btn btn_big">Перейти в Telegram</PrimaryButton>
    </div>
</template>
<script>
import PrimaryButton from './PrimaryButton.vue';

export default {
    name: "epmty-projects",
    components: { PrimaryButton }
}
</script>
<style>
.mainprojects-empty {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.mainprojects-empty__image {
    margin-bottom: 12px;
}

.mainprojects-empty__caption {
    margin-bottom: 20px;
    font-size: 14px;
}
</style>