<template >
    <div>
        <form class="a-form" @click.stop="" @submit.prevent="postCrypto" v-if="!tabInfo">
            <p class="fw-bold text-center" style="font-size: 20px">
                Добавление криптовалюты
            </p>
            <mdbInput label="Название" v-model="name" />
            <mdbInput label="ID криптовалюты" type="number" v-model="currencyId" />
            <mdbInput label="Симаол" v-model="symbol" />
            <mdbInput label="Ссылка" type="url" v-model="link" />
            <mdbInput label="rank" type="number" v-model="rank" />
            <mdbInput label="supply" type="number" v-model="supply" />
            <mdbInput label="maxSupply" type="number" v-model="maxSupply" />
            <mdbInput label="marketCapUsd" type="number" v-model="marketCapUsd" />
            <mdbInput label="volumeUsd24Hr" type="number" v-model="volumeUsd24Hr" />
            <mdbInput label="priceUsd" type="number" v-model="priceUsd" />
            <mdbInput label="changePercent24Hr" type="number" v-model="changePercent24Hr" />
            <mdbInput label="vwap24Hr" type="number" v-model="vwap24Hr" />
            <mdbInput label="files_id" type="number" v-model="files_id" />
            <mdbBtn type="submit"> Добавить</mdbBtn>
        </form>
        <form class="a-form" @click.stop="" @submit.prevent="editNews" v-else>
            <p class="fw-bold text-center" style="font-size: 20px">
                Изменения криптовалюты
            </p>
            <mdbInput label="Название" v-model="name" />
            <mdbInput label="ID криптовалюты" type="number" v-model="currencyId" />
            <mdbInput label="Симаол" v-model="symbol" />
            <mdbInput label="Ссылка" type="url" v-model="link" />
            <mdbInput label="rank" type="number" v-model="rank" />
            <mdbInput label="supply" type="number" v-model="supply" />
            <mdbInput label="maxSupply" type="number" v-model="maxSupply" />
            <mdbInput label="marketCapUsd" type="number" v-model="marketCapUsd" />
            <mdbInput label="volumeUsd24Hr" type="number" v-model="volumeUsd24Hr" />
            <mdbInput label="priceUsd" type="number" v-model="priceUsd" />
            <mdbInput label="changePercent24Hr" type="number" v-model="changePercent24Hr" />
            <mdbInput label="vwap24Hr" type="number" v-model="vwap24Hr" />
            <mdbInput label="files_id" type="number" v-model="files_id" />
            <mdbBtn type="submit"> Изменить</mdbBtn>
        </form>
    </div>

</template>
<script>
import { mdbInput, mdbBtn } from 'mdbvue';
export default {
    components: {
        mdbInput,
        mdbBtn
    },
    data() {
        return {
            name: '',
            symbol: '',
            link: '',
            rank: null,
            supply: null,
            maxSupply: null,
            marketCapUsd: null,
            volumeUsd24Hr: null,
            priceUsd: null,
            changePercent24Hr: null,
            vwap24Hr: null,
            files_id: null,
            currencyId: null
        }
    },
    computed: {
        tabInfo() {
            return this.$store.getters['forms/TAB_INFO']
        }
    },
    methods: {
        async postCrypto() {
            try {
                const info = {
                    currency_id: this.currencyId,
                    name: this.name,
                    symbol: this.symbol,
                    explorer: this.link,
                    rank: this.rank,
                    supply: this.supply,
                    maxSupply: this.maxSupply,
                    marketCapUsd: this.marketCapUsd,
                    volumeUsd24Hr: this.volumeUsd24Hr,
                    priceUsd: this.priceUsd,
                    changePercent24Hr: this.changePercent24Hr,
                    vwap24Hr: this.vwap24Hr,
                    files_id: this.files_id,
                }
                const postedCoin = await this.$axios.$post('cryptoExchanges', info)
                    .then(res => {
                        return res
                    })
                if (postedCoin) {
                    this.$toast.success(`${postedCoin.name} добавлен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('coins/getCoins')
                } else {
                    this.$toast.error(`Что-то пошло не так`);
                }
                this.toClearModels()

                return postedCoin
            } catch (error) {
                console.error(error);
            }
        },
        async editNews() {
            try {
                const info = {
                    currency_id: 140,
                    name: this.name,
                    symbol: this.symbol,
                    explorer: this.link,
                    rank: this.rank,
                    supply: this.supply,
                    maxSupply: this.maxSupply,
                    marketCapUsd: this.marketCapUsd,
                    volumeUsd24Hr: this.volumeUsd24Hr,
                    priceUsd: this.priceUsd,
                    changePercent24Hr: this.changePercent24Hr,
                    vwap24Hr: this.vwap24Hr,
                    files_id: this.files_id,
                }
                // const postedNews = await this.$axios.$put(`cryptoExchanges/${this.tabInfo.id}`, info)
                const postedNews = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `cryptoExchanges/${this.tabInfo.id}`, info)
                    .then(res => {
                        return res
                    })
                if (postedNews) {
                    this.$toast.success(`${postedNews.name} изменен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('coins/getCoins')
                    this.toClearModels()
                } else {
                    this.$toast.error(`Произашла ошибка`);
                }
                return postedNews
            } catch (error) {
                console.error(error);
            }
        },
        toClearModels() {
            this.name = ''
            this.symbol = ''
            this.link = ''
            this.rank = null
            this.supply = null
            this.maxSupply = null
            this.marketCapUsd = null
            this.volumeUsd24Hr = null
            this.priceUsd = null
            this.changePercent24Hr = null
            this.vwap24Hr = null
            this.files_id = null
            this.currencyId = null
        }
    },
    mounted() {
        if (this.tabInfo) {
            this.name = this.tabInfo.name
            this.symbol = this.tabInfo.symbol
            this.link = this.tabInfo.explorer
            this.rank = this.tabInfo.rank
            this.supply = this.tabInfo.supply
            this.maxSupply = this.tabInfo.maxSupply
            this.marketCapUsd = this.tabInfo.marketCapUsd
            this.volumeUsd24Hr = this.tabInfo.volumeUsd24Hr
            this.priceUsd = this.tabInfo.priceUsd
            this.changePercent24Hr = this.tabInfo.changePercent24Hr
            this.vwap24Hr = this.tabInfo.vwap24Hr
            this.files_id = null
        }
    }
}
</script>
<style >
.a-form {
    background: #fff;
    padding: 20px;
    display: block;
}

.coin {
    width: 450px;
}
</style>