<template>
    <div class="projects-filters">
        <router-link to="/projects?limit=10&type=future-projects"
            :class="`projects-filters__btn btn btn_small  ${$route.fullPath.includes('future-projects') ? 'active' : ''}`">
            Будущие проекты
        </router-link>
        <router-link to="/projects?limit=10&type=completed-projects"
            :class="`projects-filters__btn btn btn_small  ${$route.fullPath.includes('completed-projects') ? 'active' : ''}`">
            Завершенные проекты
        </router-link>
        <router-link to="/projects?limit=10&type=active-projects"
            :class="`projects-filters__btn btn btn_small ${$route.fullPath.includes('active-projects') ? 'active' : ''} `">
            Активные проекты
        </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style>

</style>