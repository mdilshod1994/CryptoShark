<template>
    <div class="project-leftside">
        <div class="project__logo"><img :src="`${project.photo_server}/${project.photo_path}`" alt="img"></div>
        <div class="project-info">
            <div class="project-info-top">
                <div class="project-start">
                    <div class="project-start__caption">Старт</div>
                    <div class="project-start__date">{{ toDate(project.date_start) }}</div>
                </div>
                <div class="project-status">
                    <div class="project-status__caption">Статус</div>
                    <div v-if="project.status === 'Активно'" :class="`project-status__value ps__value_active`">{{
                        project.status
                    }}</div>
                    <div v-if="project.status === 'Завершён'" :class="`project-status__value ps__value_completed`">{{
                        project.status
                    }}</div>
                </div>
            </div>
            <div class="project-info-content">
                <div class="project-stats">
                    <div class="project-stats-item">
                        <div class="project-stats-item__caption"><i class="ic ic-stat-category"></i> Категория
                        </div>
                        <div class="project-stats-item__value"><span>{{ project.projects_categories_name }}</span></div>
                    </div>
                    <div class="project-stats-item">
                        <div class="project-stats-item__caption"><i class="ic ic-stat-platform"></i> Площадка
                        </div>
                        <div class="project-stats-item__value"><a :href="project.area_link">{{ project.area }}</a></div>
                    </div>
                    <div class="project-stats-item">
                        <div class="project-stats-item__caption"><i class="ic ic-stat-price"></i> Цена токена
                        </div>
                        <div class="project-stats-item__value">1 {{ project.symbol }} = $ {{ project.price_сurrent }}
                        </div>
                    </div>
                    <div class="project-stats-item">
                        <div class="project-stats-item__caption"><i class="ic ic-stat-payment"></i> Прием к
                            оплате</div>
                        <div class="project-stats-item__value"> {{ project.currencies_payment }}</div>
                    </div>
                    <div class="project-stats-item">
                        <div class="project-stats-item__caption"><i class="ic ic-stat-limit"></i> Лимиты
                            инвестиций</div>
                        <div class="project-stats-item__value">{{ project.limits }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['project'],
    methods: {
        toDate(ml) {
            if (ml) {
                let date = new Date(ml * 1000)
                let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date)
                let day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date)
                return `${day + ' ' + month}`
            }
        }
    }
}
</script>
<style>

</style>