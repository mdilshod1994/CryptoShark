<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Криптоновости
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <!-- <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt=""> -->
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a"  color="primary w-100" @click="openPopup">Добавить</mdbBtn>
                    </mdbCol>
                </mdbRow>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol v-for="item in news" :key="item.id" class="mb-4" xl="3" lg="4" md="4" sm="6">
                <mdbCard>
                    <img :src="`${item.photo.server}/${item.photo.path}`" top alt="..."  v-if="item.photo" class="card-img" />
                    <img src="http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg" top alt="..." v-else class="card-img"/>
                    <mdbCardBody>
                        <mdbCardTitle class="admin-news-title">{{ item.name }}</mdbCardTitle>
                        <mdbCardText v-html="item.content" class="admin-news-content">
                            <!-- {{ item.content }} -->
                        </mdbCardText>
                        <mdbBtn tag="a"  @click="editNews(item)">
                            <img src="@/assets/admin-icons/edit.svg" alt="">
                        </mdbBtn>
                        <mdbBtn tag="a"  color="danger" @click="deleteNews(item)">
                            <img src="@/assets/admin-icons/trash.svg" alt="">
                        </mdbBtn>
                    </mdbCardBody>
                </mdbCard>
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
        }
    },
    computed: {
        news() {
            return this.$store.getters['news/ALL_NEWS']
        }
    },
    methods: {
        editNews(e) {
            this.$store.dispatch('forms/openPopup', { tab: 'News', info: e })
        },
        openPopup() {
            this.$store.dispatch('forms/openPopup', { tab: 'News', info: null })
        },
        async deleteNews(e) {

            // const deletedNews = await this.$axios.$delete(`articles/${e.id}`)
            const deletedNews = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `articles/${e.id}`)
                .then(res => {
                    return res
                })
            if (deletedNews) {
                this.$store.dispatch('news/allNews')
                this.$toast.success(`${e.name} удален успешно`);
            } else {
                this.$toast.error(`Что-то пошло не так`);
            }

        }
    },
    async mounted() {
        await this.$store.dispatch('news/allNews')
    }
}
</script>
<style >
.card .card-img{
    height: 239px;
    width: 100%;
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
.admin-news-title,
.admin-news-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.admin-news-content img {
    display: none !important;
}
</style>