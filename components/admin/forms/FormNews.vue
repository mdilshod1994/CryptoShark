<template >
    <div>
        <form class="a-form news" @click.stop="" @submit.prevent="postNews" v-if="!tabInfo">
            <p class="fw-bold text-center" style="font-size: 20px">
                Добавление новости
            </p>
            <mdbInput label="Название новости" v-model="name" />
            <mdbInput label="Автор" v-model="author" />
            <div class="form-group">
                <label for="exampleFormControlSelect1">Тип новости</label>
                <select class="form-control" v-model="selected">
                    <option v-for="item in typeSelect" :key="item.value" :value="item.value">{{ item.name }}</option>
                </select>
            </div>
            <ckeditor v-model="editorData" :value="editorData"></ckeditor>
            <mdbInput label="ID проекта (Требуется если тип новости Обзоры)" type="number" v-model="idProject" />
            <label for="photo" class="">
                Выбрать завгланое фото
                <input type="file" id="photo" @change="setPhotoNews" ref="imageRef">
            </label>
            <mdbInput label="Теги статьи через запятую" v-model="tags" />
            <mdbBtn type="submit">Добавить</mdbBtn>
            <mdbBtn color="danger" type="btn" @click="cancel">Отменить</mdbBtn>
        </form>
        <form class="a-form news" @click.stop="" @submit.prevent="editNews" v-else>
            <p class="fw-bold text-center" style="font-size: 20px">
                Изменения новости
            </p>
            <mdbInput label="Название новости" v-model="name" />
            <mdbInput label="Автор" v-model="author" />
            <div class="form-group">
                <label for="exampleFormControlSelect1">Тип новости</label>
                <select class="form-control" v-model="selected">
                    <option v-for="item in typeSelect" :key="item.value" :value="item.value">{{ item.name }}</option>
                </select>
            </div>
            <ckeditor v-model="editorData" :value="editorData"></ckeditor>
            <mdbInput label="ID проекта (Требуется если тип новости Обзоры)" type="number" v-model="idProject" />
            <label for="photo" class="">
                Изменить завгланое фото
                <input type="file" id="photo" @change="setPhotoNews" ref="imageRef">
            </label>
            <mdbInput label="Теги статьи через запятую" v-model="tags" />
            <mdbBtn type="submit">Добавить изменения</mdbBtn>
            <mdbBtn color="danger" type="btn" @click="cancel">Отменить</mdbBtn>
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
            editorData: '<p>Контент</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            selected: 1,
            typeSelect: [
                {
                    value: 1,
                    name: 'Новости'
                },
                {
                    value: 2,
                    name: 'Обзоры'
                },
                {
                    value: 3,
                    name: 'Друзья'
                },
            ],
            name: '',
            author: '',
            idProject: null,
            idPhoto: null,
            tags: '',
        };
    },
    computed: {
        tabInfo() {
            return this.$store.getters['forms/TAB_INFO']
        }
    },
    methods: {
        async setPhotoNews() {
            try {
                let image = this.$refs.imageRef.files[0]
                const formData = new FormData();
                formData.append('file', image);
                formData.append('post_type', image.postType);
                formData.append('post_id', image.postId);
                formData.append('comment', image.comment);
                const headers = { 'Content-Type': 'multipart/form-data' };
                const postedFile = await this.$axios.$post('files', formData, { headers })
                    .then(res => {
                        return res
                    })
                if (postedFile) {
                    this.idPhoto = postedFile.id
                    this.$toast.success(`${postedFile.name} добавлен успешно`);
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        cancel() {
            this.$store.dispatch('forms/closePopup')
        },
        async postNews() {
            try {
                const info = {
                    name: this.name,
                    autor: this.author,
                    type: this.selected,
                    content: this.editorData,
                    projects_id: this.idProject,
                    photo_id: this.idPhoto,
                    tags: this.tags
                }
                const postedNews = await this.$axios.$post('articles', info)
                    // const postedNews = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'articles', info)
                    .then(res => {
                        return res
                    })
                if (postedNews) {
                    this.$toast.success(`${postedNews.name} добавлен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('news/allNews')
                } else {
                    this.$toast.error(`Что-то пошло не так`);
                }
                return postedNews
            } catch (error) {
                console.error(error);
            }
        },
        async editNews() {
            try {
                const info = {
                    name: this.name,
                    autor: this.author,
                    type: this.selected,
                    content: this.editorData,
                    projects_id: this.idProject,
                    photo_id: this.idPhoto,
                    tags: this.tags
                }
                // const changedNews = await this.$axios.$put(`articles/${this.tabInfo.id}`, info)
                const changedNews = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `articles/${this.tabInfo.id}`, info)
                    .then(res => {
                        return res
                    })
                if (changedNews) {
                    this.$toast.success(`${changedNews.name} изменен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('news/allNews')
                } else {
                    this.$toast.error(`Произашла ошибка`);
                }
                return changedNews
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        if (this.tabInfo) {
            this.name = this.tabInfo.name
            this.author = this.tabInfo.autor
            this.selected = this.tabInfo.type
            this.editorData = this.tabInfo.content
            this.idProject = this.tabInfo.projects_id
            this.idPhoto = this.tabInfo.photo_id
            this.tags = this.tabInfo.tags
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

.news label {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>