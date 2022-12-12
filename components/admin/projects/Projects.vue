<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Категория проектов
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
            <mdbCol>
                <table class="w-100 custom-table custom-table-comments">
                    <thead class="bg-light w-100 mb-4">
                        <tr style="width: 100%; display: flex; padding: 10px 5px;">
                            <th class="name">Категория</th>
                            <th class="actions category">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in categories" :key="item.id"
                            style="width: 100%; display: flex; border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding: 10px 5px;">
                            <td class="name d-flex align-items-center">
                                <div class="d-flex align-items-center w-100">
                                    <p>{{ item.name }}</p>
                                </div>
                            </td>
                            <td class="d-flex align-items-center actions category">
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" @click="editProject(item)" title="Изменить">
                                    <img src="@/assets/admin-icons/edit.svg" alt="">
                                </mdbBtn>
                                <mdbBtn class="m-0 p-0 pl-3 pr-3" color="danger" @click="deleteProject(item)"
                                    title="Удалить">
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
        categories() {
            return this.$store.getters['category-projects/CATEGORIES']
        }
    },
    methods: {
        openPopup() {
            this.$store.dispatch('forms/openPopup', { tab: 'ProjectCategory', info: null })
        },
        editProject(e) {
            this.$store.dispatch('forms/openPopup', { tab: 'ProjectCategory', info: e })
        },
        async deleteProject(e) {
            // const deletedFile = await this.$axios.$delete( `projectsCategories/${e.id}`)
            const deletedFile = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsCategories/${e.id}`)
                .then(res => {
                    return res
                })
            if (deletedFile) {
                this.$store.dispatch('category-projects/fetchCategories')
                this.$toast.success(`Категорий удален успешно`);
            } else {
                this.$toast.error(`Что-то пошло не так`);
            }
        }
    },
    async mounted() {
        await this.$store.dispatch('category-projects/fetchCategories')
    }
}
</script>
<style>
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

.card-file {
    overflow: hidden;
    border-radius: 1.25rem !important;
}

.custom-table-comments .name {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
}


.custom-table-comments .actions {
    width: 170px;
    justify-content: space-between;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
}

.custom-table-comments .category {
    width: 125px !important;
}

.custom-table-comments .actions a,
.custom-table-comments .actions button {
    width: 53px;
    height: 47px;
    flex-shrink: 0;
}

.custom-table-comments .actions a img,
.custom-table-comments .actions button img {
    width: 21px;
    height: 21px;
}

@media screen and (max-width: 768px) {
    .custom-table-comments .actions {
        display: none;
    }

    .custom-table-comments tr {
        flex-direction: column;
    }

    .custom-table-comments tr textarea {
        margin-bottom: 15px;
        font-size: 12px;
        height: fit-content;
    }
}

@media screen and (max-width: 540px) {

    .custom-table-comments .actions a,
    .custom-table-comments .actions button {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
    }

    .custom-table-comments tr textarea {
        margin-bottom: 15px;
    }
}
</style>