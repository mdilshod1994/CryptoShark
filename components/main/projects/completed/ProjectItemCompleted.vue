<template>
    <div class="projects-item close">
        <div class="projects-item-cell projects-item-cell_1">
            <router-link :to="`/projects/${item.id}`" class="projects-item-info">
                <div class="projects-item__logo">
                    <div>
                        <img :src="`${item.icon_server}/${item.icon_path}`" alt="img">
                    </div>
                </div>
                <div class="projects-item-content">
                    <div class="projects-item__title">
                        <div>{{ item.name }}
                            <span>{{ item.symbol }}</span>
                        </div>
                    </div>
                    <div class="projects-item__category">{{ item.projects_categories_name }}</div>
                </div>
            </router-link>
        </div>
        <div class="projects-item-cell projects-item-cell_2">
            <div class="projects-item__price">${{ item.price_сurrent }} <span class="price_growth">192.86%</span></div>
            <!-- <div class="projects-item__price">$23.594 <span class="price_growth">192.86%</span></div> -->
        </div>
        <div class="projects-item-cell projects-item-cell_3">
            <div class="projects-item-cell__caption">Цена ICO</div>
            <div class="projects-item__price">${{ item.price_ico }}</div>
        </div>
        <div class="projects-item-cell projects-item-cell_4">
            <div class="projects-item-cell__caption">Максимальная цена</div>
            <div class="projects-item__price">${{ item.max }}</div>
        </div>
        <div class="projects-item-cell projects-item-cell_5">
            <div class="projects-item-cell__caption">Сайт</div>
            <a href="#" class="projects-item__site">{{ item.site }} <i class="ic ic-site"></i></a>
        </div>
        <div class="projects-item-cell projects-item-cell_6">
            <div class="projects-item-cell__caption">ROI</div>
            <div class="projects-item__payback payback_fall">x{{ item.roi }}</div>
        </div>
        <div class="projects-item-cell projects-item-cell_7">
            <div class="projects-item-cell__caption">Max</div>
            <div class="projects-item__payback">x{{ item.max }}</div>
        </div>
        <div class="projects-item__arrow"></div>
    </div>
</template>
<script>
export default {
    props: ['item']
}
</script>
<style>
.projects-item__logo div {
    height: 100%;
}
</style>