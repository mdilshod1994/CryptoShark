<template >
    <div>
        <form class="a-form news" @click.stop="" @submit.prevent="postFiles" v-if="!tabInfo">
            <p class="fw-bold text-center" style="font-size: 20px">
                Добавление файлов
            </p>
            <mdbInput label="Название новости" v-model="file" />
            <mdbInput label="Автор" v-model="postType" />
            <mdbInput label="Автор" v-model="postId" />
            <mdbInput label="Автор" v-model="comment" />
            <mdbBtn type="submit">Добавить</mdbBtn>
            <mdbBtn color="danger">Отменить</mdbBtn>
        </form>
        <form class="a-form news" @click.stop="" @submit.prevent="editFile" v-else>
            <p class="fw-bold text-center" style="font-size: 20px">
                Изменения файлов
            </p>
            <mdbBtn type="submit">Добавить изменения</mdbBtn>
            <mdbBtn color="danger">Отменить</mdbBtn>
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
            file: {},
            postType: '',
            postId: '',
            comment: ''
        };
    },
    computed: {
        tabInfo() {
            return this.$store.getters['forms/TAB_INFO']
        }
    },
    methods: {
        async postFiles() {
            try {
                const info = {
                    file: this.file,
                    post_type: this.postType,
                    post_id: this.postId,
                    comment: this.comment
                }
                // const postedNews = await this.$axios.$post(process.env.VUE_APP_API_URL + 'articles', info)
                //     .then(res => {
                //         return res
                //     })
                // if (postedNews) {
                //     this.$toast.success(`${postedNews.name} добавлен успешно`);
                //     this.$store.dispatch('forms/closePopup')
                //     this.$store.dispatch('news/allNews')
                // } else {
                //     this.$toast.error(`Что-то пошло не так`);
                // }
                // return postedNews
            } catch (error) {
                console.error(error);
            }
        },
        async editFile() {
            // try {
            //     const info = {
            //         name: this.name,
            //         autor: this.author,
            //         type: this.selected,
            //         content: this.editorData,
            //         projects_id: this.idProject,
            //         photo_id: this.idPhoto,
            //         tags: this.tags
            //     }
            //     const changedNews = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.VUE_APP_API_URL + `articles/${this.tabInfo.id}`, info)
            //         .then(res => {
            //             return res
            //         })
            //     if (changedNews) {
            //         this.$toast.success(`${changedNews.name} изменен успешно`);
            //         this.$store.dispatch('forms/closePopup')
            //         this.$store.dispatch('news/allNews')
            //     } else {
            //         this.$toast.error(`Произашла ошибка`);
            //     }
            //     return changedNews
            // } catch (error) {
            //     console.error(error);
            // }
        }
    },
    async mounted() {
        if (this.tabInfo) {
            this.name = this.tabInfo.name
            this.author = this.tabInfo.autor
            this.selected = this.tabInfo.type
            this.editorData = this.tabInfo.content
        }

    }
}
</script>
<style scoped>
.a-form {
    background: #fff;
    padding: 20px;
    display: block;
}

.news {
    max-width: 900px;
}
</style>