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
        <loader v-if="loader" />
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import FututeProjectItem from './FututeProjectItem.vue'
import Loader from '~/components/UI/Loader.vue';

export default {
    components: { FututeProjectItem, EmptyProjects, Loader },
    data() {
        return {
            loader: true
        }
    },
    computed: {
        projects() {
            return this.$store.getters['projects/FUTURE_PROJECTS']
        }
    },
    watch: {
        projects(newValue) {
            if (newValue) {
                this.loader = false
            }
        }
    }

}
</script>
<style>

</style>