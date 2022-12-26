<template>
    <div class="projects-item">
        <div class="projects-item-cell projects-item-cell_1">
            <div class="projects-item-info">
                <div class="projects-item__logo"><a href="#"><img :src="`${item.icon_server}/${item.icon_path}`"
                            alt="img"></a></div>
                <div class="projects-item-content">
                    <div class="projects-item__title"><a href="#">{{ item.name }} <span>{{ item.symbol }}</span></a>
                    </div>
                    <div class="projects-item__category">{{ item.projects_categories_name }}</div>
                </div>
            </div>
        </div>
        <div class="projects-item-cell projects-item-cell_2">
            <div class="projects-item__date">
                <span>{{ toDate(item.date_start) }}</span>
                <div class="countdown">
                    <div class="countdown-item" v-if="day > 0">
                        <div class="countdown-item__value">{{ day }}</div>
                        <div class="countdown-item__caption">дн</div>
                    </div>
                    <div class="countdown-item" v-if="hour > 0">
                        <div class="countdown-item__value">{{ hour }}</div>
                        <div class="countdown-item__caption">час</div>
                    </div>
                    <div class="countdown-item" v-if="minute > 0">
                        <div class="countdown-item__value">{{ minute }}</div>
                        <div class="countdown-item__caption">мин</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="projects-item-cell projects-item-cell_3">
            <div class="projects-item__platform"><img src="@/assets/images/content/crypto/crypto-logo3.svg" alt="img">
                {{ item.area }}
            </div>
        </div>
        <div class="projects-item-cell projects-item-cell_4">
            <a href="#" class="projects-item__site">{{ item.site }} <i class="ic ic-site"></i></a>
        </div>
        <div class="projects-item-cell projects-item-cell_5">
            <div class="projects-item__interest interest_high">{{ item.max_interest }}.0</div>
        </div>
        <div class="projects-item__arrow"></div>
    </div>
</template>
<script>

export default {
    props: ['item'],
    data() {
        return {
            day: null,
            hour: null,
            minute: null,
            sec: null,
            timer: null
        }
    },
    methods: {
        toDate(ml) {
            let date = new Date(ml * 1000)
            let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date)
            let day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' }).format(date)
            return `${day + ' ' + month}`
        },
        coundDawn(ml) {
            let now = new Date().getTime();
            let distance = ml - now;
            this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            if (distance < 0) {
                clearInterval(this.timer);
            }
        }
    },
    mounted() {
        this.timer = setInterval(() => {
            this.coundDawn(this.item.date_start * 1000)
        }, 1000)
    }
}
</script>
<style>

</style>