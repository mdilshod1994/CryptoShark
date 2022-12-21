<template>
    <div class="statistic-section">
        <div class="statistic-section__title"><i class="ic ic-statistic-fear"></i> Индекс страха
        </div>
        <div class="statistic-section-body">
            <div class="statistic-fear">
                <div class="statistic-fear-row">
                    <div class="statistic-fear-item">
                        <div class="statistic-fear-item__value">6 баллов</div>
                        <div class="statistic-fear-item__caption">Вчера</div>
                    </div>
                    <div class="statistic-fear-item">
                        <div class="statistic-fear-item__value">11 баллов</div>
                        <div class="statistic-fear-item__caption">Неделю назад</div>
                    </div>
                    <div class="statistic-fear-item">
                        <div class="statistic-fear-item__value">32 баллов</div>
                        <div class="statistic-fear-item__caption">Месяц назад</div>
                    </div>
                </div>
                <div class="statistic-fear-rating">
                    <div class="statistic-fear-rating__rating" :style="{ transform: `rotate(${fearIndex}deg)` }">
                        <div class="statistic-fear-rating__arrow"></div>
                    </div>
                    <div class="statistic-fear-rating__inner">
                        <div class="statistic-fear-rating__caption">Экстремальный<br> страх</div>
                        <div class="statistic-fear-rating__value"><span>{{ fearIndexPercent }}</span> / 100</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        fearIndex() {
            let tempFear = this.fearIndexPercent
            if (tempFear >= 0) {
                return ((tempFear / 100) * 178) + 271
            } else {
                return 1
            }
        },
        fearIndexPercent() {
            let percent = 31
            if (percent >= 100) {
                return 100
            } else if (percent <= 0) {
                return 0
            } else {
                return percent
            }
        }
    },
}
</script>
<style>
.statistic-fear-rating__rating {
    width: 260px;
    height: 260px;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(45deg);
}

.statistic-fear-rating__arrow {
    width: 20px;
    height: 52px;
    background-image: url("@/assets/images/fear-rating-arrow.svg");
    background-repeat: no-repeat;
}
</style>