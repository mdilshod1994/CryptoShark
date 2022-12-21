<template >
    <div>
        <form class="a-form news" @click.stop="" @submit.prevent="postCategory" v-if="!tabInfo">
            <p class="fw-bold text-center mb-4" style="font-size: 20px">
                Добавление категорий проекта
            </p>
            <!-- <mdbInput label="Id категория" v-model="file.categoryId" /> -->
            <mdbInput label="Название категории" v-model="file.categoryName" />
            <mdbBtn type="submit">Добавить</mdbBtn>
            <mdbBtn color="danger" type="btn" @click="cancel">Отменить</mdbBtn>
        </form>
        <form class="a-form news" @click.stop="" @submit.prevent="editCategory" v-else>
            <p class="fw-bold text-center" style="font-size: 20px">
                Изменения категорий проекта
            </p>
            <!-- <mdbInput label="Id категория" v-model="file.categoryId" /> -->
            <mdbInput label="Название категории" v-model="file.categoryName" />
            <mdbBtn type="submit">Добавить изменения</mdbBtn>
            <mdbBtn color="danger" @click="cancel">Отменить</mdbBtn>
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
                categoryId: '',
                categoryName: '',
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
        async postCategory() {
            try {
                const objCategory = {
                    id: this.file.categoryId,
                    name: this.file.categoryName
                }
                const postedCategory = await this.$axios.$post('projectsCategories', objCategory)
                    .then(res => {
                        return res
                    })
                if (postedCategory) {
                    this.$toast.success(`${postedCategory.name} добавлен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('category-projects/fetchCategories')
                }
                return postedCategory
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.error(error);
            }
        },
        async editCategory() {
            try {
                const objCategory = {
                    id: this.file.categoryId,
                    name: this.file.categoryName
                }
                // const changedCategory = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsCategories/${this.tabInfo.id}`, objCategory)
                const changedCategory = await this.$axios.$put(`projectsCategories/${this.tabInfo.id}`, objCategory)
                    .then(res => {
                        return res
                    })
                if (changedCategory) {
                    this.$toast.success(`${changedCategory.name} изменен успешно`);
                    this.$store.dispatch('forms/closePopup')
                    this.$store.dispatch('category-projects/fetchCategories')
                } else {
                    this.$toast.error(`Произашла ошибка`);
                }
                return changedCategory
            } catch (error) {
                console.error(error);
            }
        }
    },
    async mounted() {
        if (this.tabInfo) {
            this.file.categoryName = this.tabInfo.name
            this.file.categoryId = this.tabInfo.id
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