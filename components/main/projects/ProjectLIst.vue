<template>
    <div class="projects-list">
        <div class="projects-head">
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Проект <i class="ic ic-sort"></i></a>
            </div>
            <div class="projects-head-cell">
                <a href="#" class="projects-head__title">Статус <i class="ic ic-sort"></i></a>
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
                <a href="#" class="projects-head__title">Интурус <i class="ic ic-sort"></i></a>
            </div>
        </div>
        <div class="projects-space"></div>
        <ProjectItem v-for="item in 9" :key="item" />
    </div>
</template>
<script>
import ProjectItem from './ProjectItem.vue';
export default {
    components: { ProjectItem },
    data() {
        return {

        }
    },
    computed: {

    },
    async mounted() {
        await this.$store.dispatch('projects/fetchProjects')
    }
}
</script>
<style>

</style>