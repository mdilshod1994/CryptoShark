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
                            <th class="name">Name</th>
                            <th class="ararage">Объем(24ч)</th>
                            <th style="width: 20%" class="mob-ver">Капитализация</th>
                            <th style="width: 20%" class="mob-ver">Volume(24h)</th>
                            <th class="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in projects" :key="item.id"
                            style="width: 100%; display: flex; border-bottom: 1px solid rgba(0, 0, 0, 0.2); padding: 10px 5px;">
                            <td class="name d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                    <p class=" m-0 mr-2 " style="font-weight: bold">{{ index + 1 }}</p>
                                    <img :src="item.logo_url" alt="" style="width: 45px; height: 45px"
                                        class="rounded-circle" />
                                    <p class=" m-0 ml-2 " style="font-weight: bold">{{ item.name }}</p>
                                    <p class=" m-0 ml-2 mob-ver" style="font-weight: normal; color: gray;">{{
                                            item.symbol
                                    }}
                                    </p>
                                </div>
                            </td>
                            <td class="d-flex align-items-center ararage">
                                <!-- <p class=" m-0 ml-2 mr-2 fw-bold"> ${{ (item.vwap24Hr).toFixed(2) }}</p> <span>/</span>
                                <p :class="`m-0 ml-2 fw-bold ${item.priceUsd > item.vwap24Hr ? 'fall' : 'growth'}`">
                                    {{ (item.changePercent24Hr).toFixed(2) }}%
                                </p> -->
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <!-- <p class=" m-0 ml-2 mr-2 fw-bold"> {{ (item.marketCapUsd).toLocaleString("en-US",
                                        { style: "currency", currency: "USD" })
                                }}</p> -->
                            </td>
                            <td style="width: 20%" class=" align-items-center mob-ver">
                                <!-- <p class=" m-0 ml-2 mr-2 fw-bold"> {{ (item.volumeUsd24Hr).toLocaleString("en-US",
                                        { style: "currency", currency: "USD" })
                                }}</p> -->
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
        }
    },
    methods: {
        editProject() { },
        async deleteProject(project) {
            try {
                const deletedProject = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projects/${project.id}`)
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
    }
}
</script>
<style>

</style>