<template>
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="projects.length > 0">
            <CompletedProjectItem v-for="item in projects" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="projects.length > 0">
            <nuxt-link to="/projects?limit=10&type=completed-projects" class="btn btn_big btn_full btn_blue">
                Все проекты
            </nuxt-link>
        </div>
        <EmptyProjects v-else :message="'Завершенных'" />
        <transition name="loader-fade">
            <loader v-if="loader" />
        </transition>
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import Loader from '~/components/UI/Loader.vue';
import CompletedProjectItem from './CompletedProjectItem.vue';
export default {
    components: { CompletedProjectItem, EmptyProjects, Loader },
    data() {
        return {
            loader: true
        }
    },
    computed: {
        projects() {
            return this.$store.getters['projects/COMPLETED_PROJECTS']
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
<style >
.mainprojects-block {
    position: relative;
    overflow: hidden;
}
</style>