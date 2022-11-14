<template>
    <header class="header">
        <div class="container">
            <div class="header-body">
                <div class="header-menu__switcher js-menu-switcher"><span></span></div>
                <nuxt-link to="/" class="header-logo"><img src="@/assets/images/logo.svg" alt="img"></nuxt-link>
                <div class="header-inner">
                    <div class="header-search">
                        <div class="header-search-form">
                            <form action="#">
                                <input type="text" class="header-search__input" placeholder="Поиск">
                            </form>
                        </div>
                    </div>
                    <nav class="header-menu">
                        <ul class="header-menu-list">
                            <li :class="{active : $route.path === '/'}">
                                <nuxt-link to="/">Главная</nuxt-link>
                            </li>
                            <li :class="{active : $route.path === '/projects'}">
                                <nuxt-link to="/projects">Проекты</nuxt-link>
                            </li>
                            <li :class="{active : $route.path === '/news' ||  $route.name === 'news-single'}">
                                <nuxt-link to="/news">Криптоновости</nuxt-link>
                            </li>
                            <li :class="{active : $route.path === '/knowledge'}">
                                <nuxt-link to="#">База знаний</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-social">
                        <nuxt-link to="#" class="header-social__btn"><img src="@/assets/images/icon-social-vk.svg"
                                alt="img"></nuxt-link>
                        <nuxt-link to="#" class="header-social__btn"><img src="@/assets/images/icon-social-tel.svg"
                                alt="img"></nuxt-link>
                        <nuxt-link to="#" class="header-social__btn"><img src="@/assets/images/icon-social-yt.svg"
                                alt="img"></nuxt-link>
                    </div>
                </div>
                <div class="header-search__switcher js-menu-switcher"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {

        // Sticky header

        var scrollTrigger = 5;
        window.onscroll = function () {
            if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
                document.getElementsByTagName("header")[0].classList.add("header_scroll");
            } else {
                document.getElementsByTagName("header")[0].classList.remove("header_scroll");
            }
        };

        // Mobile menu + search

        var menu = document.querySelector(".header-inner");
        var main_switcher = document.querySelectorAll(".js-menu-switcher");
        main_switcher.forEach(element => {
            element.addEventListener("click", function (e) {
                if (!menu.classList.contains("open")) {
                    menu.classList.add("open");
                    this.classList.add("active");
                } else if (menu.classList.contains("open") && this.classList.contains("active")) {
                    menu.classList.remove("open");
                    this.classList.remove("active");
                }
            });
        });
    }
}
</script>
<style >
/* .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 30px 0;
    z-index: 50;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

.header_scroll {
    margin-bottom: 30px;
    padding: 20px 0;
    background: #fff;
    -webkit-box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.05);
}

.header_scroll .header-menu-list li a:before {
    top: -30px;
}

.header-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 32px;
}

.header-inner {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.header-search__switcher {
    display: none;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 22px;
    flex: 0 0 22px;
    width: 22px;
    height: 22px;
    background-image: url("@/assets/images/icon-search-switcher.svg");
    background-repeat: no-repeat;
}

.header-search__switcher.active {
    background-image: url("@/assets/images/icon-close.svg");
}

.header-menu__switcher {
    display: none;
    cursor: pointer;
    height: 18px;
    width: 26px;
    overflow: visible;
    position: relative;
    z-index: 2;
}

.header-menu__switcher span,
.header-menu__switcher span:before,
.header-menu__switcher span:after {
    background: #20212C;
    display: block;
    height: 2px;
    opacity: 1;
    position: absolute;
    border-radius: 2px;
    -webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}

.header-menu__switcher span:before,
.header-menu__switcher span:after {
    content: "";
}

.header-menu__switcher span {
    right: 0px;
    top: 8px;
    width: 26px;
}

.header-menu__switcher span:before {
    left: 0px;
    top: -10px;
    width: 18px;
}

.header-menu__switcher span:after {
    left: 0px;
    top: 10px;
    width: 14px;
}

.header-menu__switcher.active span {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 8px;
    width: 26px;
}

.header-menu__switcher.active span:before {
    top: 0px;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    width: 26px;
}

.header-menu__switcher.active span:after {
    top: 0px;
    left: 0;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0;
    width: 0;
}

.header-logo {
    margin-right: 75px;
}

.header-menu {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
}

.header-menu-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.header-menu-list li {
    margin-right: 48px;
}

.header-menu-list li.active a {
    color: #6170EF;
}

.header-menu-list li.active a:before {
    display: block;
}

.header-menu-list li a {
    position: relative;
    font-size: 15px;
    color: #20212C;
}

.header-menu-list li a:before {
    content: '';
    display: none;
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 8px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background: #6170EF;
    border-radius: 0 0 15px 15px;
}

.header-menu-list li a:hover {
    color: #6170EF;
}

.header-social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 23px;
}

.header-social__btn {
    margin-left: 14px;
}

.header-social__btn:hover {
    opacity: 0.7;
}

.header-search__input {
    padding: 0 20px 0 35px;
    width: 270px;
    height: 38px;
    font-size: 15px;
    background: #fff;
    background-image: url("@/assets/images/icon-search.svg");
    background-position: 10px 50%;
    background-repeat: no-repeat;
    border: 1px solid rgba(148, 155, 169, 0.2);
    border-radius: 8px;
}

@media only screen and (max-width: 1579px) {
    .header-logo {
        margin-right: 50px;
    }

    .header-menu-list li {
        margin-right: 35px;
    }

    .header-social {
        padding-left: 15px;
    }
}

@media only screen and (max-width: 1279px) {
    .header {
        padding: 20px 0;
        background: #fff;
    }

    .header-body {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: 0;
    }

    .header-menu__switcher,
    .header-search__switcher {
        display: block;
    }

    .header-inner {
        position: fixed;
        display: block;
        left: -100%;
        top: 73px;
        width: 100%;
        padding: 30px 50px;
        height: calc(100% - 73px);
        background: #fff;
        border-top: 2px solid #ECF3FD;
        z-index: 40;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .header-inner.open {
        left: 0;
    }

    .header-search__input {
        margin-bottom: 50px;
        width: 100%;
        background-color: #F0F2F5;
    }

    .header-menu {
        padding-bottom: 20px;
    }

    .header_scroll .header-menu-list li a:before {
        top: 0;
    }

    .header-menu-list {
        display: block;
    }

    .header-menu-list li {
        margin-bottom: 30px;
    }

    .header-menu-list li a {
        padding: 10px 0;
        font-size: 16px;
    }

    .header-menu-list li a:before {
        top: 0;
        left: -50px;
        width: 8px;
        height: 100%;
        border-radius: 0 15px 15px 0;
    }

    .header-social {
        padding-left: 0;
    }

    .header-social__btn {
        margin: 0 20px 0 0;
    }

    .header-logo {
        margin: 0;
    }
}

@media only screen and (max-width: 989px) {

    .header-inner {
        padding: 25px;
    }

    .header-menu-list li a:before {
        left: -25px;
    }

    .header-search__input {
        margin-bottom: 40px;
    }

    .header-menu {
        padding-bottom: 10px;
    }
}

@media only screen and (max-width: 767px) {

    .header-logo {
        margin-right: 10px;
    }

    .header-inner {
        padding: 20px;
    }

    .header-menu-list li a:before {
        left: -20px;
    }

    .header-menu-list li a {
        padding: 8px 0;
    }
} */
</style>