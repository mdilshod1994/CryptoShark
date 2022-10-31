<template>
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="completedP.length > 0">
            <CompletedProjectItem v-for="item in completedP" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="completedP.length > 0">
            <a href="#" class="btn btn_big btn_full btn_blue">Все проекты</a>
        </div>
        <EmptyProjects v-else />
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import CompletedProjectItem from './CompletedProjectItem.vue';
export default {
    props: ["completedP"],
    components: { CompletedProjectItem, EmptyProjects }
}
</script>
<style lang="">
    
</style>