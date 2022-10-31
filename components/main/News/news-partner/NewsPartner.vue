<template>
    <div class="news-partners">
        <h2 class="news-partners__caption"><i class="ic ic-title-partners"></i> Друзья и партнёры</h2>
        <div class="news-partners-body">
            <div class="news-partners-main">
                <a href="#" class="news-partners-main-body">
                    <div class="news-partners-main__image"><img
                            src="@/assets/images/content/news/news-partners-image.jpg" alt="img"></div>
                    <div class="news-partners-main-content">
                        <div class="news-partners-main__title">Динамика акций Coinbase указывает на риски,
                            связанные с инвестированием в криптоактивы</div>
                        <div class="news-partners-main-info">
                            <div class="news-partners-main__author">Автор: <span>RBC</span></div>
                            <div class="news-partners-main__time">15 минут назад</div>
                        </div>
                    </div>
                </a>
            </div>
            <NewsPartnerList />
        </div>
    </div>
</template>
<script>
import NewsPartnerList from './NewsPartnerList.vue';
export default {
    components: { NewsPartnerList }
}
</script>
<style>

</style>