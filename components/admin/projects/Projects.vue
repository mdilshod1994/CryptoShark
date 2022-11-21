<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Проекты
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt="">
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" href="#!" color="primary w-100" @click="openPopup">Добавить</mdbBtn>
                    </mdbCol>
                </mdbRow>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <!-- <mdbCol v-for="file, index in files" :key="file.id" class="mb-4" xl="3" lg="4" md="4" sm="6">
                <mdbCard class="card-file">
                    <img :src="`${file.server}/${file.path}`" top alt="..." />
                    <mdbCardBody>
                        <mdbCardText class="news-content">
                            Name: {{ file.name }}
                        </mdbCardText>
                        <div class="d-flex align-items-center">
                            <mdbBtn tag="a" href="#!" @click="copyLink({ file, index })"
                                class="d-flex align-items-center w-100"
                                :color="index === currIndex ? btnColor : 'primary'">
                                <img src="@/assets/admin-icons/copy.svg" class="mr-2" alt="">
                                <p v-if="index === currIndex ? showText : false" class="m-0">Скопирована</p>
                                <p v-else class="m-0">Скопировать ссылку</p>
                            </mdbBtn>
                        </div>
                        <div class="d-flex align-items-center">
                            <mdbBtn tag="a" href="#!" @click="editFile()" class="w-50">
                                <img src="@/assets/admin-icons/edit.svg" alt="">
                            </mdbBtn>
                            <mdbBtn tag="a" href="#!" color="danger" class="w-50" @click="deleteFile(file)">
                                <img src="@/assets/admin-icons/trash.svg" alt="">
                            </mdbBtn>
                        </div>
                    </mdbCardBody>
                </mdbCard>
            </mdbCol> -->
            <p>
                Здесь пока ничего нет
            </p>
        </mdbRow>
    </div>
</template>
<script>
import {
    mdbListGroup,
    mdbListGroupItem,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardImg, mdbBtn, mdbInput
} from "mdbvue";
export default {
    components: {
        mdbListGroup,
        mdbListGroupItem,
        mdbCol,
        mdbRow,
        mdbContainer,
        mdbCard,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbCardImg,
        mdbBtn,
        mdbInput
    },
    data() {
        return {
            showText: false,
            btnColor: 'primary',
            currIndex: null
        }
    },
    computed: {
        files() {
            return this.$store.getters['files/FILES']
        }
    },
    methods: {
        copyLink(e) {
            this.btnColor = 'success'
            this.showText = true
            this.currIndex = e.index
            setTimeout(() => {
                this.showText = false
                this.currIndex = null
                this.btnColor = 'primary'
            }, 5000);
            navigator.clipboard.writeText(`${e.file.server}/${e.file.path}`)

        },
        editFile(e) {
            // this.$store.dispatch('forms/openPopup', { tab: 'Files', info: e })
        },
        openPopup() {
            this.$store.dispatch('forms/openPopup', { tab: 'Files', info: null })
        },
        async deleteFile(e) {
            const deletedFile = await this.$axios.$delete( `files/${e.id}`)
                .then(res => {
                    return res
                })
            if (deletedFile) {
                this.$store.dispatch('files/fetchFiles')
                this.$toast.success(`${e.name} удален успешно`);
            } else {
                this.$toast.error(`Что-то пошло не так`);
            }
        }
    },
    async mounted() {
        await this.$store.dispatch('files/fetchFiles')
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

.admin-search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

.news-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.card-file{
    overflow: hidden;
    border-radius: 1.25rem !important;
}
</style>