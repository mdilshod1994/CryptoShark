<template>
    <div class="loader">
        <div class="loader__body">
            <div class="loader__content" @click="toggleShow">
                <transition-group name="slide-up" mode="out-in">
                    <img :src="logos[currIndex].img" alt="" :key="currIndex" class="loader__img">
                </transition-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['condition'],
    transition: {
        name: "slide-up",
        mode: 'out-in'
    },
    data() {
        return {
            currIndex: 0,
            show: true,
            show2: false,
            logos: [
                {
                    img: require('@/assets/img/svg/bit.svg')
                },
                {
                    img: require('@/assets/img/svg/eth.svg')
                },
                {
                    img: require('@/assets/img/svg/tet.svg')
                },
                {
                    img: require('@/assets/img/svg/usd.svg')
                },
                {
                    img: require('@/assets/img/svg/bnb.svg')
                },
                {
                    img: require('@/assets/img/svg/bin.svg')
                },
                {
                    img: require('@/assets/img/svg/sol.svg')
                },
                {
                    img: require('@/assets/img/svg/shi.svg')
                },
            ]
        }
    },
    methods: {
        toggleShow() {
            if (this.show) {
                this.show2 = true
                this.show = false
            } else {
                this.show2 = false
                this.show = true
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.currIndex++
            if (this.currIndex === 8) {
                this.currIndex = 0
            }
        }, 800);
    }
}
</script>
<style >
.loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.loader__body {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
}

.loader__content {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader__content span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader__img {
    width: 60px;
    height: 60px;
}
</style>