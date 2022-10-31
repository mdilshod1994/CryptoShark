<template>
    <div class="statistic">
        <h2 class="statistic__title"><i class="ic ic-title-statistic"></i> Криптообзор</h2>
        <div class="statistic-row">
            <div class="statistic-col">
                <FearIndex />
            </div>
            <div class="statistic-col">
                <SituationMarket />
            </div>
            <div class="statistic-col">
                <TopGrowth />
            </div>
            <div class="statistic-col">
                <TopFalls />
            </div>
            <div class="statistic-col">
                <div class="statistic-section">
                    <div class="statistic-section__title"><i class="ic ic-statistic-capital"></i>
                        Капитализация рынка</div>
                    <div class="statistic-section-body">
                        <div class="statistic-item">
                            <div class="statistic-item__value">$458,034,602,724</div>
                            <div class="statistic-item__caption"><span class="green">На 1.24%</span> выше,
                                чем вчера</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statistic-col">
                <div class="statistic-section">
                    <div class="statistic-section__title"><i class="ic ic-statistic-btc"></i> Доминация BTC
                    </div>
                    <div class="statistic-section-body">
                        <div class="statistic-item">
                            <div class="statistic-item__value">42.03%</div>
                            <div class="statistic-item__caption">На <span class="red">1.24%</span> ниже, чем
                                вчера</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statistic-col">
                <div class="statistic-section">
                    <div class="statistic-section__title"><i class="ic ic-statistic-btc2"></i> Лонги и Шорты
                        BTC</div>
                    <div class="statistic-section-body">
                        <div class="statistic-item">
                            <div class="statistic-item-row">
                                <div class="statistic-item-col green">
                                    <div class="statistic-item__value">50.58%</div>
                                    <div class="statistic-item__caption">Лонги</div>
                                </div>
                                <div class="statistic-item-col red">
                                    <div class="statistic-item__value">49,42%</div>
                                    <div class="statistic-item__caption">Шорты</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="statistic-col">
                <div class="statistic-section">
                    <div class="statistic-section__title"><i class="ic ic-statistic-eth"></i> ETH Газ</div>
                    <div class="statistic-section-body">
                        <div class="statistic-item">
                            <div class="statistic-item__value">33 Gwei</div>
                            <div class="statistic-item__caption">На <span class="red">1.24%</span> выше, чем
                                вчера</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FearIndex from './FearIndex.vue';
import SituationMarket from './situation/SituationMarket.vue';
import TopGrowth from './tops/TopGrowth.vue';
import TopFalls from './tops/TopFalls.vue';
export default {
    components: { FearIndex, SituationMarket, TopGrowth, TopFalls },
}
</script>
<style>
.statistic {
    margin-bottom: 35px;
}

.statistic__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 20px;
}

.statistic-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -6px;
}

.statistic-col {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24.33%;
    flex: 0 0 24.33%;
    max-width: 24.33%;
    margin-bottom: 12px;
    padding: 0 6px;
}

.statistic-col:nth-child(1),
.statistic-col:nth-child(5) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 27%;
    flex: 0 0 27%;
    max-width: 27%;
}

.statistic-section {
    background: #fff;
    height: 100%;
    -webkit-box-shadow: inset 0px -3px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px #E8EAEF;
    border-radius: 18px;
}

.statistic-section__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 25px 25px 20px;
    font-family: 'Golos';
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.01em;
    border-bottom: 2px solid #F0F2F5;
}

.statistic-section__title i {
    margin-right: 10px;
}

.statistic-fear {
    padding: 30px 10px 0;
}

.statistic-fear-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 30px;
}

.statistic-fear-item {
    position: relative;
    padding-left: 15px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}

.statistic-fear-item:last-child:after {
    display: none;
}

.statistic-fear-item:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: #F0F2F5;
}

.statistic-fear-item__value {
    margin-bottom: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
}

.statistic-fear-item__caption {
    font-size: 13px;
}

.statistic-fear-rating__arrow {
    position: absolute;
    left: calc(50% - 10px);
    top: -20px;
    width: 20px;
    height: 52px;
    background-image: url("@/assets/images/fear-rating-arrow.svg");
    background-repeat: no-repeat;
}

.statistic-fear-rating {
    width: 260px;
    height: 130px;
    margin: 0 auto;
    position: relative;
    padding: 50px 0 0;
    text-align: center;
    background-image: url("@/assets/images/statistic-fear-rating.svg");
}

.statistic-fear-rating__caption {
    margin-bottom: 10px;
    font-family: 'Golos';
    line-height: 19px;
    letter-spacing: -0.01em;
    color: #FF5B65;
}

.statistic-fear-rating__value {
    font-weight: 700;
    letter-spacing: -0.01em;
}

.statistic-fear-rating__value span {
    font-size: 20px;
    color: #FF5B65;
}

.statistic-crypto {
    padding-left: 25px;
}

.statistic-crypto-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 11px 20px 11px 0;
    border-bottom: 2px solid #F0F2F5;
}

.statistic-crypto-item:last-child {
    border-bottom: 0;
}

.statistic-crypto-item-leftside {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.statistic-crypto-item__logo {
    margin-right: 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 32px;
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    overflow: hidden;
}

.statistic-crypto-item__logo img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.statistic-crypto-item__name {
    margin-bottom: 5px;
    font-size: 14px;
}

.statistic-crypto-item__shortname {
    font-size: 13px;
    color: #949BA9;
}

.statistic-crypto-item-rightside {
    text-align: right;
}

.statistic-crypto-item__price {
    margin-bottom: 5px;
    font-size: 14px;
}

.statistic-crypto-item__change {
    font-size: 13px;
    padding-left: 13px;
    background-repeat: no-repeat;
    background-position: 0 50%;
}

.sci__change_growth {
    background-image: url("@/assets/images/icon-arrow-growth.svg");
    color: #27B510;
    width: max-content;
    margin-left: auto;
}

.sci__change_fall {
    background-image: url("@/assets/images/icon-arrow-fall.svg");
    color: #FF5B65;
    width: max-content;
    margin-left: auto;
}

.statistic-item {
    padding: 15px 25px 35px;
}

.statistic-item-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.statistic-item-col {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.statistic-item-col:first-child:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    width: 2px;
    height: 100%;
    background: #F0F2F5;
}

.statistic-item-col:last-child {
    padding-left: 20px;
}

.statistic-item__value {
    margin-bottom: 12px;
    font-family: 'Golos';
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.01em;
}

.statistic-item__caption {
    font-size: 14px;
}

@media only screen and (max-width: 1579px) {

    .statistic-crypto {
        padding-left: 20px;
    }

    .statistic-fear-item {
        padding-left: 10px;
    }

    .statistic-item__value {
        font-size: 26px;
    }

    .statistic-section__title {
        font-size: 18px;
    }

    .statistic-item-col:first-child:before {
        right: -2px;
    }

}

@media only screen and (max-width: 1279px) {

    .statistic-col:nth-child(1),
    .statistic-col:nth-child(5),
    .statistic-col {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .statistic-fear-item {
        padding-left: 30px;
    }

    .statistic-section__title {
        font-size: 20px;
    }

    .statistic-item__value {
        font-size: 28px;
    }
}

@media only screen and (max-width: 989px) {

    .statistic-fear-item {
        padding-left: 17px;
    }

    .statistic-item-col:first-child:before {
        right: 10px;
    }
}

@media only screen and (max-width: 767px) {
    .statistic-row {
        display: block;
    }

    .statistic-col {
        margin-bottom: 20px;
        max-width: 100% !important;
    }
}

@media only screen and (max-width: 575px) {

    .statistic-fear-item {
        padding-left: 10px;
    }

    .statistic-item__value {
        font-size: 24px;
    }

    .statistic-item {
        padding-bottom: 25px;
    }
}

@media only screen and (max-width: 359px) {

    .statistic-fear-item {
        padding-left: 7px;
    }

    .statistic-fear-item:first-child {
        padding-left: 0;
    }

    .statistic-fear-item__caption {
        font-size: 12px;
    }

    .statistic-fear-item__value {
        font-size: 14px;
    }
}
</style>