<template>
    <div class="mainnews-rightside">
        <div class="rating">
            <h4 class="rating__title">Топ криптобирж</h4>
            <div class="rating-header">
                <div class="rating-header__leftside"><span>№</span> Название</div>
                <div class="rating-header__rightside">Объем(24ч)</div>
            </div>
            <TopCoinsList />
        </div>
    </div>
</template>
<script>
import TopCoinsList from './TopCoinsList.vue';
export default {
    components: { TopCoinsList },
}
</script>
<style>
.mainnews-rightside {
    padding: 0 6px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 57%;
    flex: 0 0 57%;
    max-width: 57%;
}


.rating {
    padding: 30px 8px 22px;
    height: 100%;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.rating__title {
    margin-bottom: 25px;
    padding-left: 18px;
}

.rating-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    font-size: 14px;
    color: #949BA9;
    background: #F0F2F5;
    border-radius: 8px;
}

.rating-header__leftside {
    padding-left: 20px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
}

.rating-list {
    padding-top: 8px;
}

.rating-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 0;
}

.rating-item-info {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    max-width: 40%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 15px;
}

.rating-item__place {
    margin-right: 18px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24px;
    flex: 0 0 24px;
    width: 24px;
    text-align: center;
    font-family: 'Golos';
    font-size: 14px;
    font-weight: 700;
}

.rating-item-name {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.rating-item-name img {
    margin-right: 8px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24px;
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.rating-item-name span {
    font-family: 'Golos';
    font-size: 14px;
    font-weight: 700;
}

.rating-item__quantity {
    font-size: 14px;
}

.rating-item__quantity span {
    margin-left: 5px;
    padding-left: 14px;
    font-size: 13px;
    background-repeat: no-repeat;
    background-position: 0 50%;
}

.rating-item__quantity span.quantity_growth {
    background-image: url('@/assets/images/icon-arrow-growth.svg');
    color: #27B510;
}

.rating-item__quantity span.quantity_fall {
    background-image: url('@/assets/images/icon-arrow-fall.svg');
    color: #FF5B65;
}

.rating-item-btn {
    margin-left: auto;
    padding-right: 25px;
}

@media only screen and (max-width: 575px) {
    .rating {
        padding: 20px 15px;
    }

    .rating__title {
        margin-bottom: 15px;
        padding-left: 0;
    }

    .rating-list {
        padding-top: 0;
    }

    .rating-item {
        display: block;
        margin-bottom: 10px;
    }

    .rating-item-info {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-width: 100%;
        margin-bottom: 10px;
        padding: 0;
    }

    .rating-item__quantity {
        margin-bottom: 15px;
    }

    .rating-header {
        display: none;
    }

    .rating-item-btn {
        padding: 0;
    }

    .rating-item-btn .btn {
        width: 100%;
    }
}
</style>