<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Файлы
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <!-- <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt=""> -->
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" color="primary w-100" @click="openPopup">Добавить</mdbBtn>
                    </mdbCol>
                </mdbRow>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol v-for="file, index in files.data" :key="file.id" class="mb-3" xxl="2" xl="2" lg="3" md="4" sm="6">
                <mdbCard class="card-file">
                    <img :src="`${file.server}/${file.path}`" top alt="..."
                        style="height: 167px; object-fit: contain;" />
                    <mdbCardBody>
                        <mdbCardText class="news-content">
                            Name: {{ file.name }}
                        </mdbCardText>
                        <div class="d-flex align-items-center">
                            <mdbBtn tag="a" @click="copyLink({ file, index })" class="d-flex align-items-center w-100"
                                :color="index === currIndex ? btnColor : 'primary'" style="padding: 6px 15px">
                                <img src="@/assets/admin-icons/copy.svg" class="mr-2" alt="">
                                <p v-if="index === currIndex ? showText : false" class="m-0">Скопирована</p>
                                <p v-else class="m-0" style="font-size: 12px;">Скопировать ссылку</p>
                            </mdbBtn>
                        </div>
                        <div class="d-flex align-items-center">
                            <!-- <mdbBtn tag="a"  @click="editFile()" class="w-50">
                                <img src="@/assets/admin-icons/edit.svg" alt="">
                            </mdbBtn> -->
                            <mdbBtn tag="a" color="danger" class="w-100" @click="deleteFile(file)">
                                <img src="@/assets/admin-icons/trash.svg" alt="">
                            </mdbBtn>
                        </div>
                    </mdbCardBody>
                </mdbCard>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol>
                <div class="admin-pagination">
                    <div class="admin-pagination-numbers" v-if="files.pagination">
                        <mdbBtn color="light" @click="setToFirstPage" :class="`${currPage == 1 ? 'disabled' : ''}`">
                            {{ firstPage }}
                        </mdbBtn>
                        <mdbBtn v-for="page in files.pagination.totalPage" :key="page" @click="setPage(page)"
                            color="light"
                            :class="`admin-pagination-number ${page == $route.query.page ? 'active' : ''}`">
                            {{ page }}
                        </mdbBtn>
                        <mdbBtn color="light" @click="setToLastPage"
                            :class="`${currPage == files.pagination.totalPage ? 'disabled' : ''}`">
                            {{ lastPage }}
                        </mdbBtn>
                    </div>
                </div>
            </mdbCol>
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
            currIndex: null,
            firstPage: '<<',
            lastPage: '>>',
            currPage: +this.$route.query.page || 1
        }
    },
    computed: {
        files() {
            return this.$store.getters['files/FILES']
        },
    },
    methods: {
        async setPage(page) {
            try {
                this.currPage = page
                this.$router.push({ path: `admin?files`, query: { page: page } })
                this.$store.dispatch('files/fetchFiles', page)
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }
        },
        async setToFirstPage() {
            try {
                this.$router.push({ path: `admin?files`, query: { page: 1 } })
                await this.$store.dispatch('files/fetchFiles', 1)
                this.currPage = 1
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }
        },
        async setToLastPage() {
            try {
                this.currPage = this.files.pagination.totalPage
                this.$router.push({ path: `admin?files`, query: { page: +this.files.pagination.totalPage } })
                await this.$store.dispatch('files/fetchFiles', +this.files.pagination.totalPage)
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }
        },
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
        openPopup() {
            this.$store.dispatch('forms/openPopup', { tab: 'Files', info: null })
        },
        async deleteFile(e) {
            try {
                // const deletedFile = await this.$axios.$delete(`files/${e.id}`)
                const deletedFile = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `files/${e.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedFile) {
                    this.$store.dispatch('files/fetchFiles', this.currPage)
                    this.$toast.success(`${e.name} удален успешно`);
                }
            } catch (error) {
                if (error) {
                    this.$toast.error(`Что-то пошло не так`);
                    console.log(error);
                }
            }
        }
    },
    async mounted() {
        try {
            if (this.$route.fullPath.includes('/admin?files')) {
                this.$router.push({ path: `admin?files`, query: { page: this.currPage } })
                await this.$store.dispatch('files/fetchFiles', this.currPage)
            }
        } catch (error) {
            console.log(error);
        }

    },
}
</script>
<style scoped>
.admin-pagination-numbers,
.admin-pagination {
    display: flex;
    justify-content: center;
    width: 100%;
}

.admin-pagination-numbers {
    gap: 10px;
}

.inner-component {
    padding-bottom: 70px;
    margin: 5px auto 70px;
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
    overflow: hidden;
    white-space: nowrap;
}

.card-file {
    overflow: hidden;
    border-radius: 1.25rem !important;
}
</style>