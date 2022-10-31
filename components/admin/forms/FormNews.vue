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
            <mdbInput label="ID фото" type="number" v-model="idPhoto" />
            <mdbInput label="Теги статьи через запятую" v-model="tags" />
            <mdbBtn type="submit">Добавить</mdbBtn>
            <mdbBtn color="danger">Отменить</mdbBtn>
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
            <mdbInput label="ID фото" type="number" v-model="idPhoto" />
            <mdbInput label="Теги статьи через запятую" v-model="tags" />
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
                const postedNews = await this.$axios.$post(process.env.VUE_APP_API_URL + 'articles', info)
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
                const changedNews = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.VUE_APP_API_URL + `articles/${this.tabInfo.id}`, info)
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
</style>