<template>
    <transition name="fade-block">
        <div class="container">
            <div class="projects" v-if="projects">
                <ProjectTabs />
                <transition-group tag="div" class="projects-transition-wrap" name="slide-left" mode="in-out">
                    <ProjectLIstActive v-if="$route.fullPath.includes('active-projects')" key="active-projects"
                        :projects="projects" />
                    <ProjectLIstCompleted v-if="$route.fullPath.includes('completed-projects')" key="completed-projects"
                        :projects="projects" />
                    <ProjectLIstFuture v-if="$route.fullPath.includes('future-projects')" key="future-projects"
                        :projects="projects" />
                </transition-group>
                <div class="projects-show" v-if="projects.length > 0">
                    <a @click="toIncreaseLimit" class="projects-show__btn btn btn_big btn_full btn_blue">
                        Показать ещё
                    </a>
                </div>
            </div>
            <SubsTopCoinsComponent class="projects-mainnews" />
            <TrendsCoins />
        </div>
    </transition>
</template>
<script>
import ProjectTabs from '@/components/main/projects/ProjectTabs.vue';
import ProjectLIstActive from '@/components/main/projects/active/ProjectLIstActive.vue';
import ProjectLIstFuture from '@/components/main/projects/future/ProjectLIstFuture.vue';
import ProjectLIstCompleted from '@/components/main/projects/completed/ProjectLIstCompleted.vue';
import SubsTopCoinsComponent from '@/components/reusecomponents/subscribe-topcoins/SubsTopCoinsComponent.vue';
import TrendsCoins from '@/components/reusecomponents/trend-coins/TrendsCoins.vue';
export default {
    head() {
        return {
            title: "Проекты"
        }
    },
    components: { ProjectTabs, ProjectLIstActive, SubsTopCoinsComponent, TrendsCoins, ProjectLIstCompleted, ProjectLIstFuture },
    data() {
        return {
            type: 1
        }
    },
    computed: {
        currLimit() {
            return this.$route.query.limit
        },
        projects() {
            return this.$store.getters['projects/FRONT_PROJECTS']
        }
    },
    methods: {
        async toIncreaseLimit() {
            let limit = 10 + +this.currLimit
            this.$router.push({ path: `/projects?limit=${limit}&type=${this.$route.query.type}` })
        }
    },
    async mounted() {
        function type(e) {
            if (e.includes('future-projects')) {
                return 1
            } else if (e.includes('completed-projects')) {
                return 2
            } else if (e.includes('active-projects')) {
                return 3
            }
        }
        if (this.$route.query.type && this.$route.query.limit) {
            this.$router.push({ path: `/projects?limit=${this.currLimit}&type=${this.$route.query.type}` })
            await this.$store.dispatch('projects/fetchFrontProjects', { limits: this.currLimit, type: type(this.$route.query.type) })
        } else {
            this.$router.push({ path: `/projects?limit=10&type=future-projects` })
            await this.$store.dispatch('projects/fetchFrontProjects', { limits: 10, type: 1 })
        }
    },
    watch: {
        $route(to) {
            if (to.fullPath.includes('completed-projects')) {
                this.$store.dispatch('projects/fetchFrontProjects', { limits: this.currLimit, type: 2 })
            } else if (to.fullPath.includes('future-projects')) {
                this.$store.dispatch('projects/fetchFrontProjects', { limits: this.currLimit, type: 1 })
            } else if (to.fullPath.includes('active-projects')) {
                this.$store.dispatch('projects/fetchFrontProjects', { limits: this.currLimit, type: 3 })
            }
        },
    }
}
</script>
<style >
.projects {
    margin-bottom: 12px;
    padding: 35px 42px 18px;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.projects-filters {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-bottom: 25px;
    padding: 4px;
    background: #F0F2F5;
    border-radius: 12px;
}

.projects-filters__btn {
    font-size: 14px;
    font-weight: 600;
    background: transparent !important;
    color: #949BA9 !important;
}

.projects-filters__btn:hover {
    background: transparent;
    color: #949BA9;
}

.projects-filters__btn.active {
    background: #6170EF !important;
    color: #fff !important;
}

.projects-transition-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.projects-list {
    display: table;
    width: 100%;
}

.projects-item__arrow {
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background: #F0F2F5;
    background-image: url('@/assets/images/icon-projects-arrow.svg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 8px;
    cursor: pointer;
}

.projects-head,
.projects-item {
    display: table-row;
}

.projects-head-cell,
.projects-item-cell {
    display: table-cell;
    padding-right: 20px;
}

.projects-item-cell__caption {
    display: none;
    margin-bottom: 5px;
    font-size: 14px;
    color: #949BA9;
}

.projects-head {
    background: #F0F2F5;
    border-radius: 8px;
}

.projects-head-cell {
    height: 40px;
    vertical-align: middle;
}

.projects-head-cell:first-child {
    padding-left: 20px;
    border-radius: 8px 0 0 8px;
}

.projects-head-cell:last-child {
    border-radius: 0 8px 8px 0;
}

.projects-head__title {
    display: inline-block;
    padding-right: 8px;
    font-size: 14px;
    color: #949BA9;
    background-image: url('@/assets/images/icon-sort.svg');
    background-repeat: no-repeat;
    background-position: right 50%;
}

.projects-space {
    height: 10px;
}

.projects-item {
    position: relative;
}

.projects-item-cell {
    padding: 14px 20px 14px 0;
    vertical-align: middle;
}

.projects-item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.projects-item__logo {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 48px;
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    margin-right: 15px;
    border-radius: 50%;
    overflow: hidden;
}

.projects-item__logo a {
    display: block;
}

.projects-item__logo a:hover {
    opacity: 0.8;
}

.projects-item__logo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.projects-item__title {
    font-family: 'Golos';
    font-weight: 700;
    letter-spacing: -0.01em;
}

.projects-item__title a {
    color: #20212C;
}

.projects-item__title a:hover {
    color: #6170EF;
}

.projects-item__title span {
    margin-left: 5px;
    text-transform: uppercase;
    padding: 2px 5px;
    font-family: 'Commissioner';
    font-size: 13px;
    background: #F0F2F5;
    border-radius: 4px;
    font-weight: 500;
    color: #949BA9;
}

.projects-item__category {
    margin-top: 10px;
    font-size: 13px;
    color: #949BA9;
}

.projects-item__price {
    font-family: 'Golos';
    font-weight: 700;
    letter-spacing: -0.01em;
    white-space: nowrap;
}

.projects-item__price span {
    margin-left: 5px;
    padding: 3px 6px 3px 17px;
    font-size: 13px;
    font-family: 'Commissioner';
    font-weight: 500;
    color: #fff;
    background-repeat: no-repeat;
    background-position: 4px 50%;
    border-radius: 4px;
}

.price_growth {
    background: #27B510;
    background-image: url('@/assets//images/icon-arrow-up.svg');
}

.price_fall {
    background: #FF5B65;
    background-image: url('@/assets//images/icon-arrow-down.svg');
}

.projects-item__site {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: #20212C;
}

.projects-item__site:hover {
    opacity: 0.8;
}

.projects-item__site i {
    margin-left: 5px;
}

.projects-item__payback {
    display: inline-block;
    font-family: 'Golos';
    font-weight: 700;
    letter-spacing: -0.01em;
    background: #F0F2F5;
    border-radius: 8px;
    padding: 8px;
    color: #949BA9;
}

.payback_growth {
    background: rgba(39, 181, 16, 0.1);
    color: #27B510;
}

.payback_fall {
    background: rgba(255, 91, 101, 0.1);
    color: #FF5B65;
}

.projects-item__date {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
}

.projects-item__date img {
    margin-left: 10px;
}

.projects-item__date span {
    min-width: 85px;
}

.projects-item__status {
    position: relative;
    padding-left: 17px;
    font-size: 14px;
}

.projects-item__status:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: calc(50% - 6px);
    width: 12px;
    height: 12px;
}

.status_active:before {
    background-image: url('@/assets/images/icon-status-active.svg');
}

.projects-item__platform {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
}

.projects-item__platform img {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 14px;
    flex: 0 0 14px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 7px;
}

.projects-item__interest {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 8px;
    height: 35px;
    font-family: 'Golos';
    font-weight: 700;
    letter-spacing: -0.01em;
    border-radius: 8px;
}

.interest_high {
    background: rgba(39, 181, 16, 0.1);
    color: #27B510;
}

.projects-show {
    padding-top: 20px;
}

.projects-mainnews {
    margin-bottom: 55px;
}

@media only screen and (max-width: 1279px) {

    .projects-space,
    .projects-head {
        display: none;
    }

    .projects-item__arrow {
        display: block;
        top: 21px;
    }

    .projects-list {
        display: block;
    }

    .projects-list_2 .projects-item-cell_3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-list_2 .projects-item-cell_4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(50% - 60px);
        flex: 0 0 calc(50% - 60px);
        max-width: calc(50% - 60px);
    }

    .projects-list_2 .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 60px;
        flex: 0 0 60px;
        max-width: 60px;
        padding-right: 0;
    }

    .projects-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .projects-item.open .projects-item-cell {
        display: block;
    }

    .projects-item.open .projects-item__arrow {
        background-color: #6170EF;
        background-image: url(@/assets/images/icon-projects-arrow-active.svg);
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg);
    }

    .projects-item-cell {
        display: none;
    }

    .projects-item-cell_1,
    .projects-item-cell_2 {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_3,
    .projects-item-cell_4,
    .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 28%;
        flex: 0 0 28%;
        max-width: 28%;
    }

    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 8%;
        flex: 0 0 8%;
        max-width: 8%;
        padding-right: 5px;
    }

    .projects-item-cell__caption {
        display: block;
    }

    .projects-item__payback {
        padding: 0;
        background: transparent;
    }

    .project-investors-carousel {
        width: auto;
    }

    .project-steps-slider {
        width: 100%;
    }

    .projects-item__interest {
        padding: 0;
        height: auto;
        background: transparent;
    }
}

@media only screen and (max-width: 767px) {
    .projects-item-cell_2 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_3,
    .projects-item-cell_4,
    .projects-item-cell_5 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
}

@media only screen and (max-width: 575px) {
    .projects-filters {
        display: block;
    }

    .projects-filters__btn {
        width: 100%;
    }

    .projects {
        padding-top: 20px;
    }

    .projects-item {
        padding: 5px 0;
        border-bottom: 2px solid #F0F2F5;
    }

    .projects-item-cell {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .projects-item-cell_1 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        padding-bottom: 7px;
        padding-right: 45px;
    }

    .projects-item-cell_2 {
        padding-top: 0;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        padding-left: 63px;
        max-width: 100%;
    }

    .projects-item-cell_5,
    .projects-item-cell_6,
    .projects-item-cell_7 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        padding-right: 15px;
        max-width: none;
    }

    .projects-item-cell_7 {
        padding-right: 0;
    }

    .projects-list_2 .projects-item-cell_3 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .projects-list_2 .projects-item-cell_4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 calc(100% - 60px);
        flex: 0 0 calc(100% - 60px);
        max-width: calc(100% - 60px);
    }
}

@media only screen and (max-width: 359px) {

    .projects {
        padding: 15px;
    }

    .projects-item-cell {
        padding-right: 10px;
    }

    .projects-item-cell__caption {
        font-size: 12px;
    }

    .projects-item-cell_2 {
        padding-left: 0;
    }
}
</style>