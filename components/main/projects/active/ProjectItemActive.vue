<template>
    <div class="projects-item" v-if="item">
        <div class="projects-item-cell projects-item-cell_1">
            <div class="projects-item-info">
                <div class="projects-item__logo"><a href="#"><img :src="`${item.icon_server}/${item.icon_path}`"
                            alt="img"></a></div>
                <div class="projects-item-content">
                    <div class="projects-item__title">
                        <nuxt-link to="/projects/1">{{ item.name }} <span>{{ item.symbol }}</span></nuxt-link>
                    </div>
                    <div class="projects-item__category">{{ item.projects_categories_name }}</div>
                </div>
            </div>
        </div>
        <div class="projects-item-cell projects-item-cell_3">
            <div class="projects-item__date">{{ toDate(item.date_start) }}</div>
        </div>
        <div class="projects-item-cell projects-item-cell_2">
            <div class="projects-item__status status_active">{{ item.status }}</div>
        </div>
        <div class="projects-item-cell projects-item-cell_4">
            <div class="projects-item__platform">
                <img src="@/assets/images/content/crypto/crypto-logo3.svg" alt="img">
                {{ item.area }}
            </div>
        </div>
        <div class="projects-item-cell projects-item-cell_5">
            <a href="#" class="projects-item__site">{{ item.site }} <i class="ic ic-site"></i></a>
        </div>
        <div class="projects-item-cell projects-item-cell_6">
            <div class="projects-item__interest interest_high">{{ item.max_interest }}.0</div>
        </div>
        <div class="projects-item__arrow"></div>
    </div>
</template>
<script>
export default {
    props: ['item'],
    methods: {
        toDate(ml) {
            let date = new Date(ml * 1000)
            let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date)
            let day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date)
            return `${day + ' ' + month}`
        }
    }
}
</script>
<style>
.projects-item__logo a {
    height: 100%;
}
</style>