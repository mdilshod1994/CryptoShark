<template>
    <div class="projects-list" v-if="projects">
        <div class="mainprojects-empty" v-if="projects.length == 0">
            <div class="mainprojects-empty__image"><img src="@/assets/images/mainprojects-image.png" alt="img"></div>
            <div class="mainprojects-empty__caption">Завершенных проектов пока нет</div>
            <PrimaryButton class="mainprojects-empty__btn btn btn_big">Перейти в Telegram</PrimaryButton>
        </div>
        <div class="projects-head" v-if="projects.length > 0">
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Проект <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Текущая цена <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Цена ICO <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Максимальная цена <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Сайт <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">ROI <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Max <i class="ic ic-sort"></i></a>
            </div>
        </div>
        <div class="projects-space" v-if="projects.length > 0"></div>
        <ProjectItemCompleted v-show="projects.length > 0" />
    </div>
</template>
<script>
import PrimaryButton from '~/components/UI/PrimaryButton.vue';
import ProjectItemCompleted from './ProjectItemCompleted.vue';
export default {
    props: ['projects'],
    components: {
        ProjectItemCompleted,
        PrimaryButton
    },
}
</script>
<style>

</style>