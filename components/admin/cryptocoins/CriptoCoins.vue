<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Криптовалюты
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt="">
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" href="#!" color="primary w-100 m-0" @click="openPopup">Добавить
                        </mdbBtn>
                    </mdbCol>
                </mdbRow>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol>
                <table class="w-100 custom-table">
                    <thead class="bg-light w-100 mb-4">
                        <tr style="width: 100%; display: flex; padding: 10px 5px;">
                            <th class="name">Name</th>
                            <th class="ararage">Объем(24ч)</th>
                            <th style="width: 20%" class="mob-ver">Капитализация</th>
                            <th style="width: 20%" class="mob-ver">Volume(24h)</th>
                            <th class="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in coins" :key="item.id"
                            style="width: 100%; display: flex; border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding: 10px 5px;">
                            <td class="name d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                    <p class=" m-0 mr-2 " style="font-weight: bold">{{ index + 1 }}</p>
                                    <img :src="item.logo_url" alt="" style="width: 45px; height: 45px"
                                        class="rounded-circle" />
                                    <p class=" m-0 ml-2 " style="font-weight: bold">{{ item.name }}</p>
                                    <p class=" m-0 ml-2 mob-ver" style="font-weight: normal; color: gray;">{{
                                            item.symbol
                                    }}
                                    </p>
                                </div>
                            </td>
                            <td class="d-flex align-items-center ararage">
                                <p class=" m-0 ml-2 mr-2 fw-bold"> ${{ (item.vwap24Hr).toFixed(2) }}</p> <span>/</span>
                                <p :class="`m-0 ml-2 fw-bold ${item.priceUsd > item.vwap24Hr ? 'fall' : 'growth'}`">
                                    {{ (item.changePercent24Hr).toFixed(2) }}%
                                </p>
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <p class=" m-0 ml-2 mr-2 fw-bold"> {{ (item.marketCapUsd).toLocaleString("en-US",
                                        { style: "currency", currency: "USD" })
                                }}</p>
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <p class=" m-0 ml-2 mr-2 fw-bold"> {{ (item.volumeUsd24Hr).toLocaleString("en-US",
                                        { style: "currency", currency: "USD" })
                                }}</p>
                            </td>
                            <td class="d-flex align-items-center actions">
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" @click="editNews(item)">
                                    <img src="@/assets/admin-icons/edit.svg" alt="">
                                </mdbBtn>
                                <mdbBtn class="m-0 p-0 pl-3 pr-3" color="danger" @click="deleteCoin(item)">
                                    <img src="@/assets/admin-icons/trash.svg" alt="">
                                </mdbBtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </mdbCol>
        </mdbRow>
    </div>
</template>
<script>
const baseUrl = process.env.VUE_APP_API_URL
import {
    mdbListGroup,
    mdbListGroupItem,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbTable,
    mdbBtn,
    mdbBadge,
    mdbInput
} from "mdbvue";
export default {
    components: {
        mdbListGroup,
        mdbListGroupItem,
        mdbCol,
        mdbRow,
        mdbContainer,
        mdbBtn,
        mdbInput,
        mdbTable,
        mdbBadge,
    },
    data() {
        return {
        }
    },
    computed: {
        coins() {
            return this.$store.getters['coins/COINS']
        }
    },
    methods: {
        openPopup(e) {
            this.$store.dispatch('forms/openPopup', { tab: 'Coin', info: null })
        },
        editNews(e) {
            this.$store.dispatch('forms/openPopup', { tab: 'Coin', info: e })
        },
        resetFetching() {
            console.log('coins');
        },
        async deleteCoin(e) {
            const deletedNews = await this.$axios.$delete(`cryptoExchanges/${e.id}`)
                .then(res => {
                    return res
                })
            if (deletedNews) {
                this.$store.dispatch('coins/getCoins')
                this.$toast.success(`${e.name} удален успешно`);
            } else {
                this.$toast.error(`Что-то пошло не так`);
            }

            return deletedNews
        },
    },
    async mounted() {
        await this.$store.dispatch('coins/getCoins')
    }
}
</script>
<style>
.inner-component {
    padding-bottom: 70px;
    margin: 61px auto 70px;
    background: #fff;
    width: 99%;
    overflow: hidden;
    padding: 15px 20px 70px;

}

.custom-table {
    display: flex;
    flex-direction: column;
}

.fall {
    color: red;
}

.fw-bold {
    font-weight: bold;

}

.growth {
    color: rgb(0, 163, 0);
}

.mob-ver {
    display: flex
}

.name {
    width: 30%;
}

.ararage {
    width: 20%;
}

.actions {
    width: 10%;
}

.admin-search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

@media screen and (max-width: 1024px) {
    .mob-ver {
        display: none !important;
    }

    .name {
        width: 40%;
    }

    .ararage {
        width: 40%;
    }

    .actions {
        width: 20%;
    }
}

@media screen and (max-width: 600px) {
    .inner-component {
        padding: 10px 5px 70px;
    }

    .mob-ver {
        display: none !important;
    }

    .name p {
        font-size: 12px;
    }

    .name img {
        width: 30px !important;
        height: 30px !important;
    }

    .ararage p {
        font-size: 12px;
    }

    .actions button {
        width: 30px;
        padding: 0 !important;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>