<template>
    <div class="container">
        <div class="news">
            <div class="news-section">
                <h2 class="news-section__caption">Криптоновости</h2>
                <div class="news-section-body">
                    <div class="news-main" v-if="newsFirstType.length">
                        <nuxt-link :to="`/news/${newsFirstType[0].id}`" class="news-main-body">
                            <div class="news-main__image"><img
                                    :src="`${newsFirstType[0].photo.server}/${newsFirstType[0].photo.path}`" alt="img">
                            </div>
                            <div class="news-main-content">
                                <h1 class="news-main__title">{{ newsFirstType[0].name }}</h1>
                                <div class="news-main-info">
                                    <div class="news-main__author">Автор: {{ newsFirstType[0].author }}</div>
                                    <div class="news-main__time">{{ newsFirstType[0].date_creation }} минут назад</div>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                    <NewsList :newsFirstType="newsFirstType" />
                    <div class="news-show">
                        <a href="#" class="btn btn_big btn_full btn_blue">Показать ещё</a>
                    </div>
                </div>
            </div>
            <div class="news-section">
                <h2 class="news-section__caption">Обзоры проектов</h2>
                <div class="news-section-body">
                    <NewsList :newsSecondType="newsSecondType" />
                    <div class="news-show">
                        <a href="#" class="btn btn_big btn_full btn_blue">Показать ещё</a>
                    </div>
                </div>
            </div>
            <NewsPartner />
        </div>
        <SubsTopCoinsComponent class="news-subcribe" />
        <TrendsCoins />
    </div>
</template>
<script>
import TrendsCoins from '@/components/reusecomponents/trend-coins/TrendsCoins.vue';
import SubsTopCoinsComponent from '@/components/reusecomponents/subscribe-topcoins/SubsTopCoinsComponent.vue';
import NewsList from '@/components/main/News/NewsList.vue'
import NewsPartner from '@/components/main/News/news-partner/NewsPartner.vue'
export default {
    head() {
        return {
            title: "Новости"
        }
    },
    components: { TrendsCoins, SubsTopCoinsComponent, NewsList, NewsPartner },
    computed: {
        newsFirstType() {
            return this.$store.getters['news/NEWS_TYPE_FIRST']
        },
        newsSecondType() {
            return this.$store.getters['news/NEWS_TYPE_SECOND']
        }
    },
}
</script>
<style >
.news-section {
    margin-bottom: 50px;
}

.news-section__caption {
    margin-bottom: 50px;
    padding-left: 25px;
}

.news-section-body {
    padding: 30px 25px 25px;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.news-main {
    position: relative;
    margin-bottom: 40px;
    border-radius: 18px;
    overflow: hidden;
    z-index: 1;
}

.news-main-body {
    display: block;
}

.news-main-body:hover .news-main__image {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
}

.news-main__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: -1;
}

.news-main__image:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(44.98%, rgba(32, 33, 44, 0)), color-stop(80.79%, rgba(32, 33, 44, 0.95)));
    background: -webkit-linear-gradient(top, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 80.79%);
    background: -o-linear-gradient(top, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 80.79%);
    background: linear-gradient(180deg, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 80.79%);
}

.news-main__image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.news-main-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    height: 465px;
    padding: 30px;
}

.news-main__title {
    margin-bottom: 20px;
    max-width: 900px;
    color: #fff;
}

.news-main-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.news-main__author {
    margin-right: 10px;
    font-family: 'Golos';
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #fff;
}

.news-main__time {
    font-family: 'Golos';
    font-size: 20px;
    font-weight: 700;
    color: #949BA9;
}

.news-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -12px;
}

.news-col {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    margin-bottom: 30px;
    padding: 0 12px;
}

.news-partners {
    position: relative;
    margin-bottom: 65px;
    padding: 65px 0;
}

.news-partners:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    width: 10000px;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, from(#20212C), to(#484A5E));
    background: -webkit-linear-gradient(top, #20212C 0%, #484A5E 100%);
    background: -o-linear-gradient(top, #20212C 0%, #484A5E 100%);
    background: linear-gradient(180deg, #20212C 0%, #484A5E 100%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: -1;
}

.news-partners__caption {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 50px;
    color: #fff;
}

.news-partners__caption i {
    margin-right: 10px;
}

.news-partners-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.news-partners-main {
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 475px;
    flex: 0 0 475px;
    max-width: 475px;
    border-radius: 18px;
    overflow: hidden;
    z-index: 1;
}

.news-partners-main-body {
    display: block;
}

.news-partners-main-body:hover .news-partners-main__image img {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
}

.news-partners-main__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.news-partners-main__image:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(40.51%, rgba(32, 33, 44, 0)), color-stop(82.05%, #48495D));
    background: -webkit-linear-gradient(top, rgba(32, 33, 44, 0) 40.51%, #48495D 82.05%);
    background: -o-linear-gradient(top, rgba(32, 33, 44, 0) 40.51%, #48495D 82.05%);
    background: linear-gradient(180deg, rgba(32, 33, 44, 0) 40.51%, #48495D 82.05%);
}

.news-partners-main__image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.news-partners-main-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    height: 340px;
    padding: 25px;
}

.news-partners-main__title {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
}

.news-partners-main-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.news-partners-main__author {
    margin-right: 15px;
    font-size: 14px;
    color: #fff;
}

.news-partners-main__author span {
    font-family: 'Golos';
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.01em;
}

.news-partners-main__time {
    font-size: 14px;
    color: #949BA9;
}

.news-partners-row {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 50px;
}

.news-partners-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 50px;
    padding-right: 60px;
}

.news-partners-item__title {
    display: inline-block;
    margin-bottom: 20px;
    font-family: 'Golos';
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #fff;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.news-partners-item__title:hover {
    opacity: 0.7;
}

.news-partners-item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.news-partners-item__author {
    margin-right: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #fff;
}

.news-partners-item__author span {
    font-family: 'Golos';
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
}

.news-partners-item__time {
    margin-bottom: 5px;
    font-size: 14px;
    color: #949BA9;
}

.news-subcribe {
    margin-bottom: 55px;
}

@media only screen and (max-width: 1579px) {

    .news-main-content {
        height: 400px;
    }

    .news-item__title {
        font-size: 17px;
        line-height: 22px;
    }

    .news-item__image {
        margin-bottom: 15px;
    }

    .news-partners-item {
        padding-right: 30px;
        margin-bottom: 40px;
    }

    .news-partners-item__title {
        font-size: 18px;
        line-height: 22px;
    }

    .news-partners-main-content {
        height: 290px;
    }

}

@media only screen and (max-width: 1279px) {
    .news-main-content {
        height: 320px;
    }

    .news-main__title {
        font-size: 30px;
        line-height: 35px;
    }

    .news-main__author,
    .news-main__time {
        font-size: 18px;
    }

    .news-col {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .news-item__image {
        height: 235px;
    }

    .news-partners-body {
        display: block;
    }

    .news-partners-main {
        margin-bottom: 50px;
    }

    .news-partners-row {
        padding-left: 0;
    }

    .news-partners-item__title {
        font-size: 20px;
        line-height: 1.2;
    }

    .other-news-body {
        padding-right: 0;
    }

    .other-news-carousel .swiper-slide {
        width: 375px;
    }

    .news-single-content h1 {
        margin-bottom: 40px;
    }

}

@media only screen and (max-width: 989px) {
    .news-main__image:after {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(44.98%, rgba(32, 33, 44, 0)), color-stop(60.79%, rgba(32, 33, 44, 0.95)));
        background: -webkit-linear-gradient(top, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 60.79%);
        background: -o-linear-gradient(top, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 60.79%);
        background: linear-gradient(180deg, rgba(32, 33, 44, 0) 44.98%, rgba(32, 33, 44, 0.95) 60.79%);
    }

    .news-item__image {
        height: 190px;
    }

    .news-section__caption {
        margin-bottom: 30px;
        padding-left: 0;
    }

    .news-partners-main {
        max-width: 100%;
    }

    .news-partners-main-content {
        height: 400px;
    }

    .news-comments-form {
        max-width: 100%;
    }
}


@media only screen and (max-width: 767px) {
    .news-main__title {
        font-size: 25px;
        line-height: 30px;
    }

    .news-main-content {
        padding: 20px;
    }

    .news-main__author,
    .news-main__time {
        font-size: 16px;
    }

    .news-partners-main-content {
        height: 330px;
    }

}

@media only screen and (max-width: 575px) {

    .news-section-body {
        margin: 0 -20px;
        padding: 20px;
    }

    .news-main__title {
        font-size: 20px;
        line-height: 25px;
    }

    .news-main-content {
        height: 400px;
    }

    .news-row {
        display: block;
    }

    .news-col {
        max-width: 100%;
    }

    .news-main {
        margin-bottom: 30px;
    }

    .news-partners {
        padding: 50px 0;
    }

    .news-partners__caption {
        margin-bottom: 35px;
    }

    .news-partners-main-content {
        padding: 20px;
    }

    .news-partners-row {
        display: block;
    }

    .news-partners-item {
        max-width: 100%;
        padding-right: 0;
    }

    .news-partners-main {
        max-width: none;
        border-radius: 0;
        margin: 0 -20px 40px;
    }

    .news-partners:before {
        background: #23242F;
    }

    .news-partners-main__image:after {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(40.51%, rgba(32, 33, 44, 0)), color-stop(80%, #23242F));
        background: -webkit-linear-gradient(top, rgba(32, 33, 44, 0) 40.51%, #23242F 80%);
        background: -o-linear-gradient(top, rgba(32, 33, 44, 0) 40.51%, #23242F 80%);
        background: linear-gradient(180deg, rgba(32, 33, 44, 0) 40.51%, #23242F 80%);
    }

    .news-single-section {
        padding: 20px;
        margin: 0 -20px 20px;
    }

    .news-single-content h1 {
        margin-bottom: 30px;
    }

    blockquote {
        padding: 20px;
    }

    blockquote:before {
        margin-bottom: 10px;
        position: static;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
    }

    .other-news-carousel .swiper-slide {
        width: 100%;
    }

    .other-news-body {
        padding: 20px;
    }

    .other-news-carousel {
        padding-bottom: 50px;
    }

    .news-comments-form__btn {
        position: static;
        margin-top: 12px;
    }

    .news-comments-form-input .textarea {
        padding: 18px;
    }

}

@media only screen and (max-width: 359px) {

    .news-item__image {
        height: 140px;
    }

    .news-item__title {
        font-size: 16px;
        line-height: 22px;
    }
}
</style>