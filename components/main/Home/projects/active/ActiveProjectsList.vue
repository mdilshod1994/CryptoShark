<template >
    <div class="mainprojects-block">
        <div class="mainprojects-list" v-if="activeP.length > 0">
            <active-project-item v-for="item in activeP" :key="item.id" :item="item" />
        </div>
        <div class="mainprojects-bottom" v-if="activeP.length > 0">
            <PrimaryButton to="#" class="btn btn_big btn_full btn_blue">Все проекты</PrimaryButton>
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
    props: ['activeP']
}
</script>
<style lang="">
    
</style>