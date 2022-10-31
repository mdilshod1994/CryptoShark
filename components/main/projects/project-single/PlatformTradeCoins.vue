<template>
    <div class="project-content-section">
        <h4 class="project-content-section__caption">Биржи где торгуется монета</h4>
        <div class="project-exchange">
            <div class="project-exchange-table">
                <div class="project-exchange-header">
                    <div class="project-exchange-header__title">Биржа</div>
                    <div class="project-exchange-header__title">Пара</div>
                    <div class="project-exchange-header__title">Цена</div>
                    <div class="project-exchange-header__title">Объём</div>
                    <div class="project-exchange-header__title"></div>
                </div>
                <div class="project-exchange-space"></div>
                <div class="project-exchange-item" v-for="item in 5" :key="item">
                    <div class="project-exchange-item-cell project-exchange-item-cell_1">
                        <div class="project-exchange-item-market">
                            <img src="@/assets/images/content/crypto/crypto-logo5.svg" alt="img">
                            <span>Coinbase Exchange</span>
                        </div>
                    </div>
                    <div class="project-exchange-item-cell project-exchange-item-cell_2">
                        <div class="project-exchange-item__value">FLT/USDT</div>
                    </div>
                    <div class="project-exchange-item-cell project-exchange-item-cell_3">
                        <div class="project-exchange-item-cell__caption">Цена</div>
                        <div class="project-exchange-item__value">$0.09641</div>
                    </div>
                    <div class="project-exchange-item-cell project-exchange-item-cell_4">
                        <div class="project-exchange-item-cell__caption">Объём</div>
                        <div class="project-exchange-item__value">$5,783,151</div>
                    </div>
                    <div class="project-exchange-item-cell project-exchange-item-cell_5">
                        <a href="#" class="btn btn_small">Торговать</a>
                    </div>
                    <div class="project-exchange-item__arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>

</style>