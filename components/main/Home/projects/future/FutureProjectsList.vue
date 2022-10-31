<template>
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="futureP.length > 0">
            <futute-project-item v-for="item in futureP" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="futureP.length > 0">
            <nuxt-link to="#" class="btn btn_big btn_full btn_blue">Все проекты</nuxt-link>
        </div>
        <EmptyProjects v-else />
    </div>
</template>
<script>
import EmptyProjects from '~/components/UI/EmptyProjects.vue';
import FututeProjectItem from './FututeProjectItem.vue'
export default {
    components: { FututeProjectItem, EmptyProjects },
    props: ['futureP']

}
</script>
<style>

</style>