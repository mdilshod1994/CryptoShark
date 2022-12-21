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
                        <!-- <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt=""> -->
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" color="primary w-100" @click="openPopup">
                            Добавить новый проект
                        </mdbBtn>
                    </mdbCol>
                </mdbRow>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol>
                <table class="w-100 custom-table">
                    <thead class="bg-light w-100 mb-4">
                        <tr style="width: 100%; display: flex; padding: 10px 5px;">
                            <th class="name">Название</th>
                            <th class="ararage">Ареа</th>
                            <th style="width: 20%" class="mob-ver">Сайт</th>
                            <th style="width: 20%" class="mob-ver">Макс. интерес</th>
                            <th class="actions">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in projects" :key="item.id"
                            style="width: 100%; display: flex; border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding: 10px 5px;">
                            <td class="name d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                    <img :src="`${item.icon_server}/${item.icon_path}`" alt=""
                                        style="width: 45px; height: 45px" class="rounded-circle"
                                        v-if="item.icon_path" />
                                    <img src="https://crypto-shark-dev.ru/writable/uploads/image-empty.jpg" alt=""
                                        style="width: 45px; height: 45px" class="rounded-circle" v-else />
                                    <div class="admin-project-name">
                                        <p class=" m-0 ml-2 d-flex" style="font-weight: bold">
                                            {{ item.name }}
                                            <span class=" m-0 ml-2 mob-ver" style="font-weight: normal; color: gray;">
                                                {{ item.symbol }}
                                            </span>
                                        </p>
                                        <p v-for="categoryId in pojectCategoryId" :key="categoryId.id"
                                            v-show="categoryId.id === item.projects_categories_id" class=" m-0 ml-2 ">
                                            {{ categoryId.name }}
                                        </p>
                                    </div>

                                </div>
                            </td>
                            <td class="d-flex align-items-center ararage">
                                <p class=" m-0 ml-2 mr-2 fw-bold"> {{ item.area }}</p>
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <a :href="item.site" target="_blank" class=" m-0 ml-2 mr-2 fw-bold admin-project-link"
                                    :title="item.site"> {{ item.site }}</a>
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <p class=" m-0 ml-2 mr-2 fw-bold"> {{ item.max_interest }}</p>
                            </td>
                            <td class="d-flex align-items-center actions">
                                <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" @click="editProject(item)">
                                    <img src="@/assets/admin-icons/edit.svg" alt="">
                                </mdbBtn>
                                <mdbBtn class="m-0 p-0 pl-3 pr-3" color="danger" @click="deleteProject(item)">
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
        projects() {
            return this.$store.getters['projects/PROJECTS']
        },
        pojectCategoryId() {
            return this.$store.getters['category-projects/CATEGORIES']
        }
    },
    methods: {
        editProject(project) {
            this.$router.push({ path: `/admin?edit-project`, query: { id: project.id } })
        },
        async deleteProject(project) {
            try {
                const deletedProject = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projects/${project.id}`)
                    // const deletedProject = await this.$axios.$delete(`projects/${project.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedProject) {
                    this.$toast.success(`Проект удален успешно`);
                    this.$store.dispatch('projects/fetchProjects')
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        openPopup() {
            this.$router.push({ path: '/admin?add-project' })
        },
    },
    async mounted() {
        await this.$store.dispatch('projects/fetchProjects')
        await this.$store.dispatch('category-projects/fetchCategories')
    }
}
</script>
<style>
.admin-project-link {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
}
</style>