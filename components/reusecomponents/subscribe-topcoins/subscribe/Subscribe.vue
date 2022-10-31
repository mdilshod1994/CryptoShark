<template>
    <div class="mainnews-leftside">
        <div class="subscribe">
            <h4 class="subscribe__title">Подписка на уведомления</h4>
            <div class="subscribe__desc">Подпишитесь на рассылку, чтобы быть в курсе новых проектов
            </div>
            <div class="subscribe-form">
                <form action="#">
                    <SubscribeEmail />
                    <SubscribePersonalData />
                    <SubscribeInfoMessage />
                </form>
            </div>
            <div class="subscribe__image">
                <img src="@/assets/images/subscribe-image.png" alt="img">
                <img src="@/assets/images/subscribe-image-mobile.png" class="image_mobile" alt="img">
            </div>
        </div>
    </div>
</template>
<script>
import SubscribeEmail from './SubscribeEmail.vue';
import SubscribePersonalData from './SubscribePersonalData.vue';
import SubscribeInfoMessage from './SubscribeInfoMessage.vue';
export default {
    components: { SubscribeEmail, SubscribePersonalData, SubscribeInfoMessage }
}
</script>
<style>
.mainnews-leftside {
    padding: 0 6px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 43%;
    flex: 0 0 43%;
    max-width: 43%;
}

.subscribe {
    padding: 30px 25px 0;
    height: 100%;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.image_mobile {
    display: none;
}

.subscribe__title {
    margin-bottom: 30px;
}

.subscribe__desc {
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 1.2;
}

.subscribe-form-option {
    margin-bottom: 25px;
    margin-right: -15px;
}

.subscribe__image {
    text-align: center;
}

.subscribe__image img {
    max-width: 100%;
}

@media only screen and (max-width: 1279px) {

    .mainnews-leftside,
    .mainnews-rightside {
        max-width: 100%;
        margin-bottom: 12px;
    }

}

@media only screen and (max-width: 575px) {
    .subscribe {
        padding: 20px 15px 0;
    }

    .subscribe__image {
        margin: 0 -15px;
    }

    .subscribe__image img {
        display: none;
    }

    .subscribe__image img.image_mobile {
        display: inline-block;
    }

    .subscribe-form__input {
        margin-bottom: 12px;
        padding-right: 15px;
    }

    .subscribe-form__btn {
        position: static;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        width: 100%;
    }
}
</style>