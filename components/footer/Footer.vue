<template >
    <footer class="footer">
        <div class="footer-content">
            <div class="container">
                <div class="footer-content-row">
                    <div class="footer-info">
                        <a href="#" class="footer-logo"><img src="@/assets/images/logo2.svg" alt="img"></a>
                        <div class="footer-copy">© 2022 – CryptoShark. Все права защищены</div>
                        <div class="footer-social">
                            <a href="#" class="footer-social__btn"><img src="@/assets/images/icon-social2-vk.svg"
                                    alt="img"></a>
                            <a href="#" class="footer-social__btn"><img src="@/assets/images/icon-social2-tel.svg"
                                    alt="img"></a>
                            <a href="#" class="footer-social__btn"><img src="@/assets/images/icon-social2-yt.svg"
                                    alt="img"></a>
                        </div>
                        <div class="footer-develop">Designed by <a href="#"><img src="@/assets/images/develop-logo.svg"
                                    alt="img"></a></div>
                    </div>
                    <div class="footer-nav">
                        <div class="footer-nav-section">
                            <div class="footer-nav__caption">Разделы</div>
                            <ul class="footer-nav-list">
                                <li> <nuxt-link to="/projects">Проекты</nuxt-link></li>
                                <li> <nuxt-link to="/news">Криптоновости</nuxt-link></li>
                                <li> <nuxt-link to="#">База знаний</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer-nav-section">
                            <div class="footer-nav__caption">О проекте</div>
                            <ul class="footer-nav-list">
                                <li><nuxt-link to="/ads" target="_blank">Рекламодателям</nuxt-link></li>
                                <li><nuxt-link to="/feedback" target="_blank">Обратная связь</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="footer-nav-section">
                            <div class="footer-nav__caption">Правовые документы</div>
                            <ul class="footer-nav-list">
                                <li><nuxt-link to="/privacy-notice" target="_blank">Политика
                                        конфиденциальности</nuxt-link></li>
                                <li><nuxt-link to="/terms-and-conditions" target="_blank">Пользовательское
                                        соглашение</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-app">
                        <div class="footer-app__title">Отсканируйте код чтобы скачать приложение CryptoShark на IOS
                        </div>
                        <div class="footer-app__image"><img src="@/assets/images/apps-image.png" alt="img"></div>
                        <div class="footer-app__code"><img src="@/assets/images/apps-qr.png" alt="img"></div>
                        <a href="#" class="footer-app__btn btn">Скачать</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-body">
                    <div class="footer-thanks">
                        <div class="footer-thanks__caption">Благодарности</div>
                        <div class="footer-thanks-row">
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo1.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo2.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo3.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo4.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo5.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo6.png" alt="img"></div>
                            <div class="footer-thanks__item"><img
                                    src="@/assets/images/content/partners/partners-logo7.png" alt="img"></div>
                        </div>
                    </div>
                    <div class="footer-message">Данный сайт является независимым информационным порталом. Мы не
                        представляем интересы каких-либо организаций, а также не принимаем платежи со стороны
                        пользователей и не оказываем финансовых услуг. Все материалы, опубликованные на сайте
                        CryptoShark.team, предназначаются исключительно в ознакомительных целях. Администрация портала
                        не несет ответственности за лиц, которые понесли финансовые потери после прочтения материалов на
                        страницах сайта CryptoShark.team</div>
                </div>
            </div>
        </div>
    </footer><!-- end footer -->
</template>
<script>
export default {

}
</script>
<style >
/* .footer-content {
    padding: 40px 0 30px 0;
    background: rgba(220, 226, 233, 0.5);
}

.footer-content-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 45px;
}

.footer-info {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 32%;
    flex: 0 0 32%;
    max-width: 32%;
    padding: 7px 30px 0 0;
}

.footer-logo {
    display: inline-block;
    margin-bottom: 20px;
}

.footer-copy {
    margin-bottom: 27px;
    font-size: 13px;
}

.footer-social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 30px;
}

.footer-social__btn {
    margin-right: 32px;
}

.footer-social__btn:hover {
    opacity: 0.7;
}

.footer-develop {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 13px;
}

.footer-develop img {
    margin-left: 5px;
}

.footer-nav {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 10px;
    padding-right: 50px;
}

.footer-nav-section {
    padding-right: 20px;
}

.footer-nav__caption {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 14px;
}

.footer-nav-list li {
    margin-bottom: 15px;
}

.footer-nav-list li a {
    font-size: 13px;
    line-height: 1.3;
    color: #20212C;
}

.footer-nav-list li a:hover {
    color: #6170EF;
}

.footer-app {
    position: relative;
    margin-right: 37px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 315px;
    flex: 0 0 315px;
    width: 315px;
    padding: 20px;
    background: #F0F2F5;
    -webkit-box-shadow: 0px 8px 24px rgba(233, 233, 233, 0.84);
    box-shadow: 0px 8px 24px rgba(233, 233, 233, 0.84);
    border-radius: 18px;
}

.footer-app__image {
    position: absolute;
    right: 0;
    bottom: 0;
}

.footer-app__title {
    margin-bottom: 20px;
    font-size: 13px;
    max-width: 160px;
    line-height: 18px;
    font-weight: 700;
}

.footer-app__btn {
    display: none !important;
}

.footer-app__code {
    border-radius: 12px;
    width: 64px;
    overflow: hidden;
}

.footer-app__code img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.footer-bottom {
    padding: 25px 0 30px 0;
    background: #fff;
}

.footer-bottom-body {
    padding: 0 45px;
}

.footer-thanks {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 32px;
}

.footer-thanks__caption {
    margin-right: 30px;
    font-size: 14px;
}

.footer-thanks-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.footer-thanks__item {
    margin-right: 23px;
}

.footer-thanks__item img {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
}

.footer-message {
    font-size: 12px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #949BA9;
}

@media only screen and (max-width: 1579px) {
    .footer-info {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 22%;
        flex: 0 0 22%;
        max-width: 22%;
    }

    .footer-nav {
        padding-top: 18px;
        padding-right: 10px;
    }

    .footer-copy {
        line-height: 1.3;
    }
}

@media only screen and (max-width: 1279px) {

    .footer-bottom-body {
        padding: 0;
    }

    .footer-content-row {
        padding: 0;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .footer-info {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 30px;
    }

    .footer-app {
        margin-right: 0;
    }

    .footer-nav {
        padding-right: 30px;
    }

    .footer-thanks {
        display: block;
        margin-bottom: 10px;
    }

    .footer-thanks__caption {
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 989px) {
    .footer-content-row {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
    }

    .footer-info {
        padding: 0;
    }

    .footer-nav {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .footer-nav-section {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        margin-bottom: 20px;
    }

    .footer-nav-section:last-child {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .footer-thanks__item {
        margin-right: 15px;
    }

    .footer-thanks__item img {
        max-width: 100px;
    }

    .footer-app {
        margin-left: auto;
    }
}

@media only screen and (max-width: 767px) {

    .footer-content-row {
        display: block;
    }

    .footer-nav {
        max-width: 100%;
        padding: 0;
    }

    .footer-thanks-row {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-top: 5px;
    }

    .footer-thanks__item {
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 575px) {
    .footer-nav {
        display: block;
        margin-bottom: 50px;
    }

    .footer-nav-section {
        max-width: 100%;
        padding-right: 0;
    }

    .footer-app {
        width: 100%;
    }

    .footer-app__code {
        display: none;
    }

    .footer-app__btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex !important;
    }
}

@media only screen and (max-width: 359px) {
    .footer-app__image {
        width: 120px;
    }

    .footer-app__image img {
        width: 100%;
    }
} */
</style>