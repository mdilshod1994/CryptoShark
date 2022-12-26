<template>
    <div>
        <form class="a-form news funds" @click.stop="" @submit.prevent="postFunds">
            <h4 class="mb-4">
                Фонды и инвесторы
            </h4>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Статус блока</label>
                <select class="form-control" v-model="selectedStatusFunds">
                    <option v-for="item in fundStatus" :key="item.value" :value="item.value">
                        {{ item.status }}
                    </option>
                </select>
            </div>
            <div class="logo-funds-img-wrap">
                <div class="logo-funds-img" v-for="item in logoFundsImgs" :key="item.id">
                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger" @click="deleteLogoFundsFromServer(item)"
                        title="Удалить">
                        <img src="@/assets/admin-icons/trash.svg" alt="">
                    </mdbBtn>
                    <img v-if="logoFundsImgs.length" class="logo" :src="`${item.server}/${item.path}`" alt="">
                </div>
            </div>
            <label for="photosFundsLogo" style=" margin-top: 15px;" class="mt-4 mb-4 w-100">
                <input type="file" multiple id="photosFundsLogo" @change="setLogoFunds" ref="imageRefLogoFund"
                    v-show="false">
                <mdbBtn @click="$refs.imageRefLogoFund.click()" class="m-0 w-100">
                    Выбрать логотип
                </mdbBtn>
            </label>
            <div class="logo-funds">
                <div v-if="!logoFunds.length" class="logo-funds-empty">
                    Вы пока не добавили новый логотип
                </div>
                <div class="logo-funds-img" v-for="(item, index) in logoFunds" :key="index" v-else>
                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger" @click="deleteLogoFunds(index)"
                        title="Удалить">
                        <img src="@/assets/admin-icons/trash.svg" alt="">
                    </mdbBtn>
                    <img v-if="logoFundsImagesView.length" class="logo" :src="logoFundsImagesView[index]" alt="">
                </div>
            </div>
            <mdbBtn class="adding-new-logos mt-4" type="submit" color="success" title="Добавить"
                v-if="logoFunds.length">
                Добавить
                <img src="@/assets/admin-icons/add.svg" alt="">
            </mdbBtn>
        </form>
    </div>
</template>
<script>
import {
    mdbBtn, mdbInput
} from "mdbvue";
export default {
    name: 'edit-step',
    components: {
        mdbBtn,
        mdbInput,
    },
    props: ['selectedStatusFunds'],
    data() {
        return {
            fundStatus: [
                {
                    status: 'Выключен',
                    value: 0
                },
                {
                    status: 'Включен',
                    value: 1
                },
            ],
            logoFunds: [],
            logoFundsImgs: [],
            logoFundsImagesView: [],
        }
    },
    methods: {
        async deleteLogoFundsFromServer(logo) {
            try {
                // const deletedLogo = await this.$axios.$delete(`files/${logo.id}`)
                const deletedLogo = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `files/${logo.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedLogo) {
                    await this.fetchFund()
                    this.$toast.success(`Удален успешно`);
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.error(error);
            }
        },
        async postFunds() {
            try {
                for (let i = 0; i < this.logoFunds.length; i++) {
                    const formData = new FormData();
                    const fileImg = this.logoFunds[i]
                    formData.append('file', fileImg);
                    formData.append('post_type', 'project');
                    formData.append('post_id', this.$route.query.id);
                    formData.append('comment', 'project logo funds/invest');
                    const headers = { 'Content-Type': 'multipart/form-data' };
                    const postedFile = await this.$axios.$post('files', formData, { headers })
                        .then(res => {
                            return res
                        })
                    if (postedFile) {
                        await this.fetchFund()
                        this.$toast.success(`Добавлен успешно`);
                        if ((i + 1) == this.logoFunds.length) {
                            this.logoFunds = []
                            this.logoFundsImagesView = []
                        }
                    }
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.error(error);
            }
        },
        setLogoFunds() {
            let selectedFiles = this.$refs.imageRefLogoFund.files
            for (let index = 0; index < selectedFiles.length; index++) {
                const element = selectedFiles[index];
                this.logoFunds.push(element)
                let reader = new FileReader()
                reader.addEventListener('load', (e) => {
                    this.logoFundsImagesView.push(e.target.result)
                })
                reader.readAsDataURL(element)
            }
        },
        deleteLogoFunds(index) {
            this.logoFunds.splice(index, 1)
            this.logoFundsImagesView.splice(index, 1)
        },
        async fetchFund() {
            try {
                // await this.$axios.$get(`files?search[projects_id]=${this.$route.query.id}`)
                await this.$axios.$get('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `files?search[post_id]=${this.$route.query.id}`)
                    .then(res => {
                        this.logoFundsImgs = res.data
                    })
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }
        }
    },
    async mounted() {
        await this.fetchFund()
    }
}
</script>
<style>
.funds .adding-new-logos {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-funds-img-wrap {
    display: flex;
    gap: 10px;
    overflow-x: scroll;
}

.logo-funds-img-wrap .logo-funds-img {
    padding: 5px;
    position: relative;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 5px;
}

.logo-funds-img-wrap .logo-funds-img .btn {
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px 6px !important;
    height: 30px;
}

.logo-funds-img-wrap .logo-funds-img .logo {
    flex-shrink: 0;
    height: 150px;
}
</style>