<template>
    <div class="projects-list projects-list_2" v-if="projects">
        <div class="mainprojects-empty" v-if="projects.length == 0">
            <div class="mainprojects-empty__image"><img src="@/assets/images/mainprojects-image.png" alt="img"></div>
            <div class="mainprojects-empty__caption">Будущих проектов пока нет</div>
            <primary-button class="mainprojects-empty__btn btn btn_big">Перейти в Telegram</primary-button>
        </div>
        <div class="projects-head" v-if="projects.length > 0">
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Проект <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Старт <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Площадка <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Сайт <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Интерес <i class="ic ic-sort"></i></a>
            </div>
        </div>
        <div class="projects-space" v-if="projects.length > 0"></div>
        <ProjectItemFuture v-for="item in projects" :key="item.id" :item="item" v-show="projects.length > 0" />
    </div>
</template>
<script>
import PrimaryButton from '~/components/UI/PrimaryButton.vue';
import ProjectItemFuture from './ProjectItemFuture.vue';
export default {
    props: ['projects'],
    components: {
        ProjectItemFuture,
        PrimaryButton
    },

}
</script>
<style>

</style>