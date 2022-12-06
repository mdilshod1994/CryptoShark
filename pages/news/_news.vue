<template >
    <div class="container">
        <div class="news-single">
            <div class="news-single-section">
                <div class="news-single-content">
                    <h1>{{ singleNews.name }}</h1>
                    <div v-html="singleNews.content"></div>
                    <div class="news-single-tags">
                        <a v-for="(tag, index) in singleNews.tags" :key="index" href="#"
                            class="news-single-tags__item">{{ tag }}</a>
                    </div>
                </div>
                <div class="news-single-tel">
                    <a href="#" class="news-single-tel__btn btn btn_big">Обсудить в Telegram</a>
                </div>
            </div>
            <div class="news-single-section">
                <SingleNewsComm />
            </div>
        </div>
        <SubsTopCoinsComponent />
        <div class="other-news">
            <h2 class="other-news__title">Другие новости</h2>
            <div class="other-news-body">
                <div class="other-news-carousel swiper">
                    <div class="swiper-wrapper">
                        <div v-for="item in allNews" :key="item.id" class="swiper-slide">
                            <div class="news-item">
                                <div class="news-item__image">
                                    <nuxt-link :to="`/news/${item.id}`"><img
                                            :src="`${item.photo.server}/${item.photo.path}`" alt="img"></nuxt-link>
                                </div>
                                <div class="news-item__title">
                                    <nuxt-link :to="`/news/${item.id}`">{{ item.name }}</nuxt-link>
                                </div>
                                <div class="news-item-content">
                                    <div class="news-item-info">
                                        <div class="news-item__author">Автор: <strong>{{ item.autor }}</strong></div>
                                        <div class="news-item__time">{{ item.date_creation }} минут назад</div>
                                    </div>
                                    <div class="news-item-actions">
                                        <Likes :item="item" />
                                        <a href="#" class="news-item__action"><i class="ic ic-comment"></i>
                                            {{ item.comments }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SingleNewsComm from '@/components/main/News/news-single/SingleNewsComm.vue';
import SubsTopCoinsComponent from '@/components/reusecomponents/subscribe-topcoins/SubsTopCoinsComponent.vue';
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Likes from '~/components/UI/Likes.vue';

export default {
    head() {
        return {
            title: this.singleNews.name
        }
    },
    components: {
        SingleNewsComm,
        SubsTopCoinsComponent,
        Likes
    },
    data() {
        return {
            singleNews: {}
        }
    },
    computed: {
        allNews() {
            return [...this.$store.getters['news/NEWS_TYPE_FIRST'], ...this.$store.getters['news/NEWS_TYPE_SECOND'], ...this.$store.getters['news/NEWS_TYPE_THIRD']]
        }
    },
    async mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.swiper', {
            modules: [Autoplay],
            autoplay: {
                delay: 3000
            },
            spaceBetween: 20,
            slidesPerView: 'auto',
        })
        try {
            const singleNews = await this.$axios.$get(`front/articles?search[id]=${+this.$route.params.news}`)
                .then(res => {
                    return res.data
                })
            this.singleNews = singleNews[0]
        } catch (error) {
            console.error(error);
        }
    },
}
</script>
<style >
.news-single-section {
    margin-bottom: 12px;
    padding: 30px;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.news-single-content {
    max-width: 890px;
    padding-bottom: 35px;
}

.news-single-content h1 {
    margin-bottom: 70px;
}

.news-single-content img {
    margin-bottom: 30px;
    margin-top: 30px;
    max-width: 100%;
}

blockquote {
    position: relative;
    margin-bottom: 25px;
    padding: 25px 60px 25px 95px;
    background: rgba(97, 112, 239, 0.05);
    border-radius: 8px;
}

blockquote:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 25px;
    width: 57px;
    height: 57px;
    background-image: url('@/assets/images/icon-quote.svg');
}

blockquote p:last-child {
    margin-bottom: 0;
}

.news-single-tags {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.news-single-tags__item {
    margin: 0 15px 15px 0;
    padding: 11px 15px;
    background: #F0F2F5;
    font-family: 'Golos';
    font-weight: 700;
    font-size: 14px;
    color: #949BA9;
    border-radius: 8px;
}

.news-single-tags__item:hover {
    background: #6170EF;
    color: #fff;
}

.news-single-tel {
    margin-right: -30px;
    padding-top: 25px;
    border-top: 2px solid #F0F2F5;
}

.news-single-tel__btn {
    position: relative;
}

.news-single-tel__btn:before {
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: 10px;
    width: 41px;
    height: 41px;
    background-image: url('@/assets/images/icon-tel.svg');
}

.news-comments__caption span {
    color: #949BA9;
}

.news-comments-form {
    max-width: 590px;
    padding-bottom: 10px;
}

.news-comments-form-input {
    margin-bottom: 12px;
    position: relative;
}

.news-comments-form-input .textarea {
    padding-bottom: 65px;
}

.news-comments-form__btn {
    position: absolute;
    right: 12px;
    bottom: 12px;
}

.news-comments-list {
    max-width: 500px;
}

.news-comments-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 30px;
}

.news-comments-item:last-child {
    margin-bottom: 0;
}

.news-comments-item__avatar {
    margin-right: 15px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 48px;
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    background: #6170EF;
    background-image: url('@/assets/images/icon-avatar.svg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    overflow: hidden;
}

.news-comments-item__avatar img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.news-comments-item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.news-comments-item__name {
    margin-right: 10px;
    font-family: 'Golos';
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 5px;
}

.news-comments-item__date {
    margin-bottom: 5px;
    font-size: 12px;
    color: #949BA9;
}

.news-comments-item__text {
    font-size: 13px;
    line-height: 180%;
}

.news-comments-item__text span {
    color: #6170EF;
    cursor: pointer;
}

.news-comments-item__text span:hover {
    opacity: 0.8;
}

.other-news {
    margin-bottom: 50px;
    margin-top: 55px;
}

.other-news__title {
    margin-bottom: 40px;
    padding-left: 25px;
}

.other-news-body {
    background: #fff;
    padding: 25px;
    background: #fff;
    -webkit-box-shadow: inset 0px -2px 1px #E8EAEF;
    box-shadow: inset 0px -2px 1px #E8EAEF;
    border-radius: 18px;
}

.other-news-carousel .swiper-slide {
    width: 320px;
}

@media only screen and (max-width: 1279px) {
    .news-single-content h1 {
        margin-bottom: 40px;
    }

    .other-news-body {
        padding-right: 0;
    }

    .other-news-carousel .swiper-slide {
        width: 375px;
    }
}

@media only screen and (max-width: 989px) {
    .news-comments-form {
        max-width: 100%;
    }
}



@media only screen and (max-width: 575px) {
    .news-single-section {
        padding: 20px;
        margin: 0 -20px 20px;
    }

    .news-single-content h1 {
        margin-bottom: 30px;
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
</style>