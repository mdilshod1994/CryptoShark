<template >
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="projects.length">
            <active-project-item v-for="item in projects" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="projects.length > 0">
            <nuxt-link to="/projects?limit=10&type=active-projects" class="btn btn_big btn_full btn_blue">
                Все проекты
            </nuxt-link>
        </div>
        <EmptyProjects v-else />
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import PrimaryButton from '~/components/UI/PrimaryButton.vue';
import ActiveProjectItem from './ActiveProjectItem.vue'
export default {
    components: { ActiveProjectItem, EmptyProjects, PrimaryButton },
    computed: {
        projects() {
            return this.$store.getters['projects/ACTIVE_PROJECTS']
        }
    }
}
</script>
<style lang="">
    
</style>