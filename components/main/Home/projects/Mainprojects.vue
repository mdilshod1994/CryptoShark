<template>
    <div class="mainprojects">
        <div class="mainprojects-body">
            <div class="mainprojects-row">
                <div class="mainprojects-col">
                    <h4 class="mainprojects__caption">Будущие проекты</h4>
                    <FutureProjects />
                </div>
                <div class="mainprojects-col">
                    <h4 class="mainprojects__caption mainprojects__caption_gray">Завершенные проекты</h4>
                    <CompletedProjects />
                </div>
                <div class="mainprojects-col">
                    <h4 class="mainprojects__caption">Активные проекты</h4>
                    <ActiveProjects />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FutureProjects from './future/FutureProjectsList.vue';
import CompletedProjects from './completed/CompletedProjectsList.vue';
import ActiveProjects from './active/ActiveProjectsList.vue';
export default {
    components: { FutureProjects, CompletedProjects, ActiveProjects },
    async mounted() {
        await this.$store.dispatch('projects/fetchByType')
    }
}
</script>
<style>
.mainprojects {
    margin-bottom: 47px;
    background: #fff;
    -webkit-box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    box-shadow: inset 0px -3px 1px 1px #E8EAEF;
    border-radius: 18px;
    position: relative;
    z-index: 9;
}

.mainprojects-body {
    padding: 48px 40px;
}

.mainprojects-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -16px;
}

.mainprojects-col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333%;
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 16px;
}

.mainprojects__caption {
    margin-bottom: 25px;
    padding-left: 15px;
}

.mainprojects__caption_gray {
    color: #949BA9;
}

.mainprojects-block {
    height: 100%;
    padding: 2px 0 18px 24px;
    -webkit-box-shadow: 0px 8px 24px 1px rgba(233, 233, 233, 0.84);
    box-shadow: 0px 8px 24px 1px rgba(233, 233, 233, 0.84);
    border-radius: 32px;
}

.mainprojects-empty {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.mainprojects-empty__image {
    margin-bottom: 12px;
}

.mainprojects-empty__caption {
    margin-bottom: 20px;
    font-size: 14px;
}

.mainprojects-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 20px 12px 0;
    border-bottom: 2px solid #F0F2F5;
}

.mainprojects-item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: auto;
}

.mainprojects-item__logo {
    position: relative;
    margin-right: 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 48px;
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.mainprojects-item__logo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
}

.mainprojects-item__logocaption {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: -10px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-bottom: 2px;
    font-size: 12px;
    width: 38px;
    height: 22px;
    background-image: url('@/assets/images/icon-logotitle-1.svg');
    letter-spacing: -0.5px;
    color: #fff;
}

.mainprojects-item__title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
}

.mainprojects-item__date {
    font-size: 13px;
}

.mainprojects-item__date.date_completed {
    color: #949BA9;
}

.mainprojects-item-scores {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mainprojects-item-score {
    width: 60px;
    text-align: center;
}

.mainprojects-item-score__rating {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 2px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.mainprojects-item-score__rating span {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    bottom: 3px;
    right: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
}

.mi-rating_1 {
    background: conic-gradient(#FF5B65 calc(20%), #edf0f3 0deg);
}

.mi-rating_2 {
    background: conic-gradient(#FF5B65 calc(40%), #edf0f3 0deg);
}

.mi-rating_3 {
    background: conic-gradient(#FFAF36 calc(60%), #edf0f3 0deg);
}

.mi-rating_4 {
    background: conic-gradient(#27b510 calc(80%), #edf0f3 0deg);
}

.mi-rating_5 {
    background: conic-gradient(#27b510 calc(100%), #edf0f3 0deg);
}

.mainprojects-item-score__caption {
    font-size: 12px;
    letter-spacing: -0.5px;
}

.mainprojects-item-stats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.mainprojects-item-stat {
    margin-left: 22px;
    width: 52px;
    text-align: center;
}

.mainprojects-item-stat__number {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 9px;
    padding: 0 7px;
    min-width: 44px;
    height: 35px;
    font-family: 'Golos';
    font-weight: 700;
    background: #F0F2F5;
    color: #949BA9;
    letter-spacing: -0.01em;
    border-radius: 8px;
}

.mis__number_growth {
    background: rgba(39, 181, 16, 0.1);
    color: #27B510;
}

.mis__number_fall {
    background: rgba(255, 91, 101, 0.1);
    color: #FF5B65;
}

.mainprojects-item-stat__caption {
    font-size: 12px;
}

.mainprojects-bottom {
    padding-top: 15px;
    padding-right: 24px;
}

.mainprojects-bottom .btn {
    font-size: 14px;
}


@media only screen and (max-width: 1579px) {

    .mainprojects-body {
        padding: 40px 25px;
    }

    .mainprojects-row {
        margin: 0 -10px;
    }

    .mainprojects-col {
        padding: 0 10px;
    }

    .mainprojects-item-stat {
        margin-left: 15px;
    }

    .mainprojects-block {
        padding-left: 20px;
    }

    .mainprojects-item {
        padding-right: 15px;
    }

    .mainprojects-item__title {
        font-size: 15px;
    }

    .mainprojects-item-score {
        margin-left: 10px;
        width: auto;
        max-width: 60px;
    }

    .mainprojects-item__logo {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 40px;
        flex: 0 0 40px;
        max-width: 40px;
        height: 40px;
    }
}

@media only screen and (max-width: 1279px) {

    .mainprojects-row {
        display: block;
    }

    .mainprojects-col {
        max-width: 100%;
        margin-bottom: 40px;
    }

    .mainprojects-col:last-child {
        margin-bottom: 0;
    }

    .mainprojects-item__title {
        font-size: 18px;
    }

    .mainprojects-item__logo {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 48px;
        flex: 0 0 48px;
        max-width: 48px;
        height: 48px;
    }

    .mainprojects-item-score {
        margin-left: 10px;
        max-width: none;
        width: 65px;
    }

    .mainprojects-empty {
        padding: 0;
    }

    .mainprojects-block {
        padding: 20px;
    }

    .mainprojects-bottom {
        padding-right: 0;
    }

}

@media only screen and (max-width: 575px) {
    .mainprojects-body {
        padding: 20px 15px;
    }

    .mainprojects-item {
        display: block;
        padding-right: 0;
    }

    .mainprojects-item-info {
        margin-bottom: 20px;
    }

    .mainprojects-item-score {
        margin: 0 20px 0 0;
        width: auto;
    }

    .mainprojects-item-stat {
        margin: 0;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .mainprojects-item-stat__number {
        margin: 0 15px 0 0;
    }

    .mainprojects-empty__btn {
        width: 100%;
    }
}
</style>