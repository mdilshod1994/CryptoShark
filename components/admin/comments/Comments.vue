<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Комментарии
                </h1>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol>
                <table class="w-100 custom-table custom-table-comments" v-if="comments.length">
                    <thead class="bg-light w-100 mb-4">
                        <tr style="width: 100%; display: flex; padding: 10px 5px;">
                            <th class="name">Комментарий</th>
                            <th class="actions">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in comments" :key="item.id"
                            style="width: 100%; display: flex; border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding: 10px 5px;">
                            <td class="name d-flex align-items-center">
                                <div class="d-flex align-items-center w-100">
                                    <textarea id="" rows="4" class="w-100" v-if="(edit && index === currIndex)"
                                        v-model="messageComm"></textarea>
                                    <p v-else>{{ item.message }}</p>
                                </div>
                            </td>
                            <td class="d-flex align-items-center actions">
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" color="success" @click="saveComment(item)"
                                    title="Сохранить" v-if="(edit && index === currIndex)">
                                    <img src="@/assets/admin-icons/save.svg" alt="">
                                </mdbBtn>
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" @click="editComment({ item, index })"
                                    title="Изменить" v-else>
                                    <img src="@/assets/admin-icons/edit.svg" alt="">
                                </mdbBtn>
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" color="dark" @click="cancelEdit" title="Отменить"
                                    v-if="(edit && index === currIndex)">
                                    <img src="@/assets/admin-icons/cancel.svg" alt="">
                                </mdbBtn>
                                <mdbBtn tag="a" :href="`/news/${item.articles_id}`" target="_blank" color="primary"
                                    class="m-0 mr-2 p-0 pl-3 pr-3 d-flex align-items-center" title="ссылка" v-else>
                                    <img src="@/assets/admin-icons/link.svg" alt="ссылка">
                                </mdbBtn>
                                <mdbBtn class="m-0 p-0 pl-3 pr-3" color="danger" @click="deleteComment(item)"
                                    title="Удалить">
                                    <img src="@/assets/admin-icons/trash.svg" alt="">
                                </mdbBtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p v-else>
                    Пока комментариев нет
                </p>
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
            edit: false,
            currIndex: null,
            messageComm: ''
        }
    },
    computed: {
        comments() {
            return this.$store.getters['comments/COMMENTS']
        }
    },
    methods: {
        cancelEdit() {
            this.edit = false
            this.messageComm = ''
            this.currIndex = null
        },
        async saveComment(e) {
            const objComm = {
                articles_id: e.articles_id,
                name: e.name,
                message: this.messageComm
            }
            try {
                // const changedComment = await this.$axios.$put(`articlesComments/${e.id}`, objComm)
                const changedComment = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `articlesComments/${e.id}`, objComm)
                    .then(res => {
                        return res
                    })
                if (changedComment) {
                    this.$store.dispatch('comments/fetchComments')
                    this.$toast.success(`Комментарий изменен успешно`);
                    this.cancelEdit()
                } else {
                    this.$toast.error(`Что-то пошло не так`);
                }
            } catch (error) {
                console.log(error);
            }
        },
        toNews(e) {
            this.$router.push({
                path: `/news/${e.articles_id}`
            })
        },
        editComment(e) {
            this.messageComm = e.item.message
            this.edit = true
            this.currIndex = e.index
        },
        async deleteComment(e) {
            try {
                // const deletedFile = await this.$axios.$delete( `articlesComments/${e.id}`)
                const deletedFile = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `articlesComments/${e.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedFile) {
                    this.$store.dispatch('comments/fetchComments')
                    this.$toast.success(`Комментарий удален успешно`);
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }

        }
    },
    async mounted() {
        await this.$store.dispatch('comments/fetchComments')
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