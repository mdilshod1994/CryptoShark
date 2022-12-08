<template>
    <div class="flexible-content">
        <mdb-navbar class="flexible-navbar white table-mob-vers" light position="top" scrolling>
            <mdb-navbar-toggler>
                <mdb-navbar-nav left>
                    <!-- <mdb-nav-item waves-fixed @click="components = 'Main'" :class="{ active: components === 'Main' }">
                        Главная</mdb-nav-item> -->
                    <mdb-nav-item waves-fixed @click="components = 'CriptoCoins'"
                        :class="{ active: components === 'CriptoCoins' }">
                        Криптовалюты</mdb-nav-item>
                    <mdb-nav-item waves-fixed @click="components = 'Projects'"
                        :class="{ active: components === 'Projects' }">
                        Проекты</mdb-nav-item>
                    <mdb-nav-item waves-fixed @click="components = 'News'" :class="{ active: components === 'News' }">
                        Криптоновости</mdb-nav-item>
                    <mdb-nav-item waves-fixed @click="components = 'KnowLedge'"
                        :class="{ active: components === 'KnowLedge' }">База
                        знаний</mdb-nav-item>
                    <mdb-nav-item waves-fixed @click="components = 'Files'" :class="{ active: components === 'Files' }">
                        Файлы</mdb-nav-item>
                </mdb-navbar-nav>
                <mdb-navbar-nav right>
                    <mdb-nav-item waves-fixed class="border border-light rounded mr-1" @click="logout">Выйти
                    </mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <div class="sidebar-fixed position-fixed">
            <a class="logo-wrapper"><img alt="" class="img-fluid" src="@/assets/images/logo.svg" /></a>
            <mdb-list-group class="list-group-flush">
                <router-link to="/admin?crypto-coins" @click.native="components = 'CriptoCoins'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'CriptoCoins' }">
                        <img src="@/assets/admin-icons/1.svg" alt=""> Криптовалюты
                    </mdb-list-group-item>
                </router-link>
                <router-link to="/admin?projects" @click.native="components = 'Projects'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'Projects' }">
                        <img src="@/assets/admin-icons/2.svg" alt=""> Проекты
                    </mdb-list-group-item>
                </router-link>
                <router-link to="/admin?crypto-news" @click.native="components = 'News'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'News' }">
                        <img src="@/assets/admin-icons/3.svg" alt=""> Криптоновости
                    </mdb-list-group-item>
                </router-link>
                <router-link to="/admin?knowledge" @click.native="components = 'KnowLedge'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'KnowLedge' }">
                        <img src="@/assets/admin-icons/4.svg" alt=""> База знаний
                    </mdb-list-group-item>
                </router-link>
                <router-link to="/admin?files" @click.native="components = 'Files'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'Files' }">
                        <img src="@/assets/admin-icons/5.svg" alt=""> Файлы
                    </mdb-list-group-item>
                </router-link>
                <router-link to="/admin?comments" @click.native="components = 'Comments'">
                    <mdb-list-group-item class="custom-list-item" :action="true"
                        :class="{ active: components === 'Comments' }">
                        <img src="@/assets/admin-icons/6.svg" alt=""> Комментарии
                    </mdb-list-group-item>
                </router-link>
            </mdb-list-group>
            <mdb-navbar-nav class="btn-logout">
                <mdb-nav-item waves-fixed class="border border-light rounded mr-1" @click="logout">Выйти
                </mdb-nav-item>
            </mdb-navbar-nav>
        </div>
        <main class="custom-main">
            <div class="component-wrap">
                <component :is="currComponent"></component>
            </div>
        </main>
        <popup v-if="isFormActive" />
    </div>
</template>
  
<script>
import CriptoCoins from '@/components/admin/cryptocoins/CriptoCoins.vue'
import Projects from '@/components/admin/projects/Projects.vue'
import News from '@/components/admin/news/News.vue'
import KnowLedge from '@/components/admin/knowledge/Knowledge.vue'
import Files from '@/components/admin/files/Files.vue'
import Comments from '@/components/admin/comments/Comments.vue'


import {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbFooter,
    mdbCol,
    mdbRow,
    mdbContainer
} from "mdbvue";
import Popup from '~/components/admin/popup.vue'
export default {
    head() {
        return {
            title: this.routeTitle
        }
    },
    name: "AdminTemplate",
    middleware: ['auth-user'],
    layout: 'admin',
    components: {
        News,
        CriptoCoins,
        Projects,
        KnowLedge,
        Files,
        Comments,
        mdbNavbar,
        mdbNavbarBrand,
        mdbNavItem,
        mdbNavbarNav,
        mdbNavbarToggler,
        mdbBtn,
        mdbListGroup,
        mdbListGroupItem,
        ftr: mdbFooter,
        mdbCol,
        mdbRow,
        mdbContainer,
        Popup
    },
    data() {
        return {
            activeItem: 1,
            components: "CriptoCoins",
            tabs: ["Main", "CriptoCoins", "Projects", "News", "KnowLedge", "Files", "Comments"],
            routeTitle: 'Админ панель'
        };
    },
    computed: {
        currComponent() {
            return this.components
        },
        isFormActive() {
            return this.$store.getters['forms/IS_FROM_ACTIVE']
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.push('/login')
        },
        setRouterWithParams(e) {
            if (e.includes('projects')) {
                this.components = 'Projects'
            } else if (e.includes('crypto-coins')) {
                this.components = 'CriptoCoins'
            } else if (e.includes('crypto-news')) {
                this.components = 'News'
            } else if (e.includes('knowledge')) {
                this.components = 'KnowLedge'
            } else if (e.includes('files')) {
                this.components = 'Files'
            } else if (e.includes('comments')) {
                this.components = 'Comments'
            }
        }
    },
    mounted() {
        if (this.$route.path === "/admin") {
            document.querySelector('body').style.padding = '0px'
        }
        this.setRouterWithParams(this.$route.fullPath)
    },
    watch: {
        $route(to) {
            this.setRouterWithParams(to.fullPath)
        }
    }
};
</script>

<style scoped>
@import '@/assets/css/all.css';
@import '@/assets/css/bootstrap.css';
@import '@/assets/css/mdb.min.css';

.custom-list-item img {
    width: 35px;
    height: 35px;
}

.custom-list-item.active img {
    filter: invert(1);
}

.btn-logout {
    margin-top: auto;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
}

.table-mob-vers {
    display: none;
}

.custom-main {
    display: flex;
    height: 100vh;
    width: 100%;
}

.component-wrap {
    width: 100%;
}

.custom-list-item {
    justify-content: flex-start !important;
    gap: 10px;
}

.page-footer {
    width: 100%;
    height: 61px;
    position: fixed;
    bottom: 0;
}

.navbar-light .navbar-brand {
    margin-left: 15px;
    color: #2196f3 !important;
    font-weight: bolder;
}

main {
    background-color: #ededee;
}

.flexible-content {
    transition: padding-left 0.3s;
    padding-left: 270px;
}

.flexible-navbar {
    transition: padding-left 0.5s;
    padding-left: 270px;
}

.sidebar-fixed {
    left: 0;
    top: 0;
    height: 100vh;
    width: 270px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 1050;
    background-color: #fff;
    padding: 1.5rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
}

.sidebar-fixed .logo-wrapper img {
    width: 100%;
    padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
    display: block;
    transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
}

@media (max-width: 1199.98px) {
    .sidebar-fixed {
        display: none;
    }

    .flexible-content {
        padding-left: 0;
    }

    .flexible-navbar {
        padding-left: 10px;
    }

    .table-mob-vers {
        display: block;
    }

    .inner-component {
        margin: 75px auto 70px;
    }
}
</style>
  