<template>
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="projects.length > 0">
            <futute-project-item v-for="item in projects" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="projects.length > 0">
            <nuxt-link to="/projects?limit=10&type=future-projects" class="btn btn_big btn_full btn_blue">
                Все проекты
            </nuxt-link>
        </div>
        <EmptyProjects v-else />
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import FututeProjectItem from './FututeProjectItem.vue'
export default {
    components: { FututeProjectItem, EmptyProjects },
    computed: {
        projects() {
            return this.$store.getters['projects/FUTURE_PROJECTS']
        }
    }

}
</script>
<style>

</style>