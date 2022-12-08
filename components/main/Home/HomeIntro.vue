<template>
    <div class="intro">
        <div v-for="(item, index) in coins" :key="index" :class="`intro__paralax-${index + 1}`">
            <div class="intro__paralax-inner">
                <img :src="item.logo_url" alt="" :class="fade ? 'show' : ''">
            </div>
        </div>
        <!-- <div class="intro__paralax-2">
            <div class="intro__paralax-inner">
                <img src="../../../assets/img/banner/2.svg" alt="">
            </div>
        </div>
        <div class="intro__paralax-3">
            <div class="intro__paralax-inner">
                <img src="../../../assets/img/banner/3.svg" alt="">
            </div>
        </div>
        <div class="intro__paralax-4">
            <div class="intro__paralax-inner">
                <img src="../../../assets/img/banner/4.svg" alt="">
            </div>
        </div>
        <div class="intro__paralax-5">
            <div class="intro__paralax-inner">
                <img src="../../../assets/img/banner/5.svg" alt="">
            </div>
        </div>
        <div class="intro__paralax-6">
            <div class="intro__paralax-inner">
                <img src="../../../assets/img/banner/6.svg" alt="">
            </div>
        </div> -->
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
    components: { PrimaryButton },
    data() {
        return {
            allCoins: [],
            coins: [],
            fade: true
        }
    },
    methods: {
        shuffledCoins() {
            let num = 6
            let arr = this.allCoins.sort(() => 0.5 - Math.random())
            this.coins = arr.slice(0, num)
        }
    },
    async mounted() {
        this.allCoins = await this.$axios.$get('front/crypto_exchanges?limit=6').then(res => {
            return res.data
        })
        if (this.allCoins) {
            this.shuffledCoins()
        }
        setInterval(() => {
            this.fade = false
            this.shuffledCoins()
        }, 10000)
    },
    watch: {
        coins(newV) {
            if (newV) {
                setTimeout(() => {
                    this.fade = true
                }, 100)
            }
        }
    }
}
</script>

<style>
.fade-image-enter-active,
.fade-image-leave-active {
    transition: opacity 3s ease;
}

.fade-image-enter-from,
.fade-image-leave-to {
    opacity: 0;
}

.intro {
    position: relative;
    text-align: center;
    /* background-image: url('@/assets/images/intro-image.svg'); */
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
    position: relative;
    z-index: 9;
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
    position: relative;
    z-index: 9;
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