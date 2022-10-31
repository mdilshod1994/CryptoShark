<template>
    <div class="news-item">
        <div class="news-item__image">
            <nuxt-link :to="`/news/${item.id}`"><img src="@/assets/images/content/news/news-image1.jpg" alt="img">
            </nuxt-link>
        </div>
        <div class="news-item__title">
            <nuxt-link :to="`/news/${item.id}`">{{ item.name }}</nuxt-link>
        </div>
        <div class="news-item-content">
            <div class="news-item-info">
                <div class="news-item__author">Автор: <strong>{{ item.author }}</strong></div>
                <div class="news-item__time">{{ item.date_creation }} минут назад</div>
            </div>
            <div class="news-item-actions">
                <likes :item="item" />
                <a href="#" class="news-item__action"><i class="ic ic-comment"></i> {{ item.comments }}</a>
            </div>
        </div>
    </div>
</template>
<script>
import Likes from '~/components/UI/Likes.vue'
export default {
    components: { Likes },
    props: {
        item: Object
    },
    data() {
        return {
            reRender: 0
        }
    },
}
</script>
<style>
.news-item__image {
    margin-bottom: 25px;
    display: block;
    height: 208px;
    border-radius: 18px;
    overflow: hidden;
}

.news-item__image:hover img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.news-item__image a {
    display: block;
    height: 100%;
}

.news-item__image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.news-item__title {
    margin-bottom: 13px;
    font-family: 'Golos';
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: -0.01em;
}

.news-item__title a {
    color: #20212C;
}

.news-item__title a:hover {
    color: #FF5B65;
}

.news-item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 18px;
}

.news-item__author {
    margin-right: 20px;
    font-size: 14px;
}

.news-item__author strong {
    font-family: 'Golos';
    font-size: 16px;
    letter-spacing: -0.01em;
    color: #20212C;
}

.news-item__time {
    font-size: 14px;
    color: #949BA9;
}

.news-item-actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.news-item__action {
    margin-right: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 7px 10px;
    background: #F0F2F5;
    color: #20212C;
    border-radius: 8px;
}

.news-item__action.active {
    background: #FF5B65;
    color: #fff;
}

.news-item__action.active .ic-favorite {
    background-image: url("@/assets/images/icon-favorite-active.svg");
}

.news-item__action i {
    margin-right: 5px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.mainnews-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -6px;
}

@media only screen and (max-width: 1579px) {
    .news-item__title {
        font-size: 17px;
        line-height: 22px;
    }

    .news-item__image {
        margin-bottom: 15px;
    }
}

@media only screen and (max-width: 1279px) {
    .news-item__title {
        font-size: 20px;
        line-height: 26px;
    }

    .news-item__image {
        height: 208px;
    }

    .news-item__image {
        height: 235px;
    }
}

@media only screen and (max-width: 989px) {
    .news-item__image {
        height: 190px;
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