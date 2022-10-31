<template>
    <div class="flexible-content">
        <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
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
                    <mdb-nav-item waves-fixed class="border border-light rounded mr-1" @click="logout">Logout
                    </mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>тзь
        <div class="sidebar-fixed position-fixed">
            <a class="logo-wrapper"><img alt="" class="img-fluid" src="@/assets/images/logo.svg" /></a>
            <mdb-list-group class="list-group-flush">
                <router-link to="/admin" @click.native="activeItem = 1">
                    <mdb-list-group-item class="custom-list-item" :action="true" :class="activeItem === 1 && 'active'">
                        <img src="@/assets/admin-icons/template.png" alt=""> Dashboard
                    </mdb-list-group-item>
                </router-link>
            </mdb-list-group>
        </div>
        <main class="custom-main">
            <div class="component-wrap">
                <component :is="currComponent"></component>
            </div>
        </main>
        <ftr color="primary-color-dark" class="text-center font-small darken-2">
            <p class="footer-copyright mb-0 py-3 text-center">
                &copy; {{ new Date().getFullYear() }} Copyright:
                <a href="https://mdbootstrap.com/docs/vue/"> MDBootstrap.com </a>
            </p>
        </ftr>
        <popup v-if="isFormActive" />
    </div>
</template>
  
<script>
import CriptoCoins from '@/components/admin/cryptocoins/CriptoCoins.vue'
import Projects from '@/components/admin/projects/Projects.vue'
import News from '@/components/admin/news/News.vue'
import KnowLedge from '@/components/admin/knowledge/Knowledge.vue'
import Files from '@/components/admin/files/Files.vue'


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
    name: "AdminTemplate",
    middleware: ['auth-user'],
    layout: 'admin',
    components: {
        News,
        CriptoCoins,
        Projects,
        KnowLedge,
        Files,
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
            tabs: ["Main", "CriptoCoins", "Projects", "News", "KnowLedge", "Files"]
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
    },
    mounted() {
        if (this.$route.path === "/admin") {
            document.querySelector('body').style.padding = '0px'
        }
    }
};
</script>

<style scoped>
@import '@/assets/css/all.css';
@import '@/assets/css/bootstrap.css';
@import '@/assets/css/mdb.min.css';

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
}
</style>
  