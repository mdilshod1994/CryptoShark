<template >
    <div>
        <form class="a-form news" @click.stop="" @submit.prevent="postFiles" v-if="!tabInfo">
            <p class="fw-bold text-center mb-4" style="font-size: 20px">
                Добавление файлов
            </p>
            <input type="file" id="customFile" @change="uploadImg" ref="file" />
            <mdbInput label="Тип записи" v-model="file.postType" />
            <mdbInput label="Id записи" v-model="file.postId" />
            <mdbInput label="Коментарий к файлу" v-model="file.comment" />
            <mdbBtn type="submit">Добавить</mdbBtn>
            <mdbBtn color="danger" type="btn" @click="cancel">Отменить</mdbBtn>
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
            file: {
                img: null,
                postType: '',
                postId: '',
                comment: '',
            }
        };
    },
    computed: {
        tabInfo() {
            return this.$store.getters['forms/TAB_INFO']
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('forms/closePopup')
        },
        uploadImg() {
            this.file.img = this.$refs.file.files[0];
        },
        async postFiles() {
            try {
                const formData = new FormData();
                formData.append('file', this.file.img);
                formData.append('post_type', this.file.postType);
                formData.append('post_id', this.file.postId);
                formData.append('comment', this.file.comment);
                const headers = { 'Content-Type': 'multipart/form-data' };

                const postedFile = await this.$axios.$post('files', formData, { headers })
                    .then(res => {
                        return res
                    })
                if (postedFile) {
                    this.$toast.success(`${postedFile.name} добавлен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('files/fetchFiles')
                }
                return postedFile
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
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
            //     const changedFile = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.VUE_APP_API_URL + `articles/${this.tabInfo.id}`, info)
            //         .then(res => {
            //             return res
            //         })
            //     if (changedFile) {
            //         this.$toast.success(`${changedFile.name} изменен успешно`);
            //         this.$store.dispatch('forms/closePopup')
            //         this.$store.dispatch('files/fetchFiles')
            //     } else {
            //         this.$toast.error(`Произашла ошибка`);
            //     }
            //     return changedFile
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