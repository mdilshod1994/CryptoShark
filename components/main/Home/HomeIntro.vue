<template>
    <div class="intro">
        <div class="intro__paralax"></div>
        <h1 class="intro__title">Новые <img src="@/assets/images/icon-intro-title.svg" alt="img"> проекты<br> и
            стартапы
            каждый день</h1>
        <PrimaryButton to="" class="intro__btn">Перейти к проектам</PrimaryButton>
        <div class="intro__down"><img src="@/assets/images/icon-intro-scroll.svg" alt="img"></div>
    </div>
</template>

<script>
import PrimaryButton from '~/components/UI/PrimaryButton.vue';

export default {
    mounted() {
        // Paralax intro
        (function () {
            document.addEventListener("mousemove", parallax);
            function parallax(e) {
                let _w = window.innerWidth / 2;
                let _h = window.innerHeight / 2;
                let _mouseX = e.clientX;
                let _mouseY = e.clientY;
                let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
                let _depth2 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.002}%`;
                let _depth3 = `${50 - (_mouseX - _w) * 0.006}% ${50 - (_mouseY - _h) * 0.006}%`;
                let x = `${_depth3}, ${_depth2}, ${_depth1}`;
                elem.style.backgroundPosition = x;
            }
            const elem = document.querySelector(".intro");
        })();
    },
    components: { PrimaryButton }
}
</script>

<style>
.intro {
    position: relative;
    text-align: center;
    background-image: url('@/assets/images/intro-image.svg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    padding: 185px 0 45px 0;
}

.intro:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1054px;
    height: 827px;
    background-image: url('@/assets/images/intro-circles.svg');
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: -1;
}

h1.intro__title {
    margin-bottom: 37px;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.01em;
}

h1.intro__title img {
    position: relative;
    left: 4px;
    vertical-align: middle;
}

.intro__btn {
    margin-bottom: 50px;
    padding: 0 52px;
    font-size: 14px;
}

@media only screen and (max-width: 1279px) {
    .intro {
        padding-top: 120px;
    }
}

@media only screen and (max-width: 989px) {
    .intro {
        margin: 0 -25px;
        padding-top: 75px;
        background-size: 760px 155px;
        background-position: 50% 70px;
    }
}


@media only screen and (max-width: 767px) {

    .intro {
        padding: 40px 20px 70px;
        margin: 0 -20px;
        background-image: none;
    }

    h1.intro__title {
        font-size: 32px;
        line-height: 1.3;
    }

    .intro__btn {
        margin: 0;
    }

    .intro__down {
        display: none;
    }
}

@media only screen and (max-width: 359px) {
    h1.intro__title {
        font-size: 26px;
    }

    h1.intro__title img {
        width: 50px;
    }

    .intro {
        padding-bottom: 50px;
    }
}
</style>