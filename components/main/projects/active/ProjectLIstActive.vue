<template>
    <div class="projects-list">
        <div class="mainprojects-empty" v-if="projects.length == 0">
            <div class="mainprojects-empty__image"><img src="@/assets/images/mainprojects-image.png" alt="img"></div>
            <div class="mainprojects-empty__caption">Активных проектов пока нет</div>
            <PrimaryButton class="mainprojects-empty__btn btn btn_big">Перейти в Telegram</PrimaryButton>
        </div>
        <div class="projects-head" v-if="projects.length > 0">
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Проект <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Старт <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Статус <i class="ic ic-sort"></i></a>
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
        <ProjectItemActive v-for="item in projects" :key="item.id" :item="item" v-show="projects.length > 0" />
    </div>
</template>
<script>
import PrimaryButton from '~/components/UI/PrimaryButton.vue';
import ProjectItemActive from './ProjectItemActive.vue';
export default {
    components: { ProjectItemActive, PrimaryButton },
    props: ['projects'],
}
</script>
<style>

</style>