<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Изменения Проекты
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <!-- <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt="">
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" color="primary w-100" @click="addNewProject">
                            Добавить проект
                        </mdbBtn>
                    </mdbCol>
                </mdbRow> -->
            </mdbCol>
        </mdbRow>
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <router-link to="/admin?projects">Вернуться к проектам</router-link>
            </mdbCol>
        </mdbRow>
        <mdbRow>
            <mdbCol>
                <div class="add-new-project">
                    <form class="a-form news new-project" @click.stop="" @submit.prevent="postProject">
                        <div class="grid-wrap">
                            <mdbInput label="Название проекта" v-model="newProject.name" />
                            <mdbInput label="Сокращенное название" v-model="newProject.symbol" />
                        </div>
                        <ckeditor v-model="newProject.description" :value="editorData"> </ckeditor>
                        <div class="grid-wrap">
                            <label for="icon" style=" margin-top: 15px;">
                                <input type="file" id="icon" @change="setIconProject" ref="refProjectIcon"
                                    v-show="false">
                                <mdbBtn @click="$refs.refProjectIcon.click()" class="w-100 m-0">
                                    Выбрать иконку
                                </mdbBtn>
                                <p v-if="newProject.icon_id" class="mt-3">
                                    Выбрана иконка ID {{ newProject.icon_id }}
                                </p>
                            </label>
                            <label for="photo" style=" margin-top: 15px;">
                                <input type="file" id="photo" @change="setPhotoProject" ref="refProjectPhoto"
                                    v-show="false">
                                <mdbBtn @click="$refs.refProjectPhoto.click()" class="w-100 m-0">
                                    Выбрать фото
                                </mdbBtn>
                                <p v-if="newProject.photo_id" class="mt-3">
                                    Выбрана фото ID {{ newProject.photo_id }}
                                </p>
                            </label>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Категория</label>
                                <select class="form-control" v-model="selectedStatusCategory">
                                    <option v-for="item in categories" :key="item.id" :value="item.id">
                                        {{ item.name }}
                                    </option>
                                </select>
                            </div>
                            <mdbInput label="Сайт" v-model="newProject.site" />
                            <mdbInput label="Название площадки" v-model="newProject.area" />
                            <mdbInput label="Ссылка на площадку" v-model="newProject.area_link" />
                            <mdbInput label="Facebook" v-model="newProject.facebook_link" />
                            <mdbInput label="Twitter" v-model="newProject.twitter_link" />
                            <mdbInput label="Instagram" v-model="newProject.instagram_link" />
                            <mdbInput label="Vk" v-model="newProject.vk_link" />
                            <mdbInput label="Youtube" v-model="newProject.youtube_link" />
                            <mdbInput label="Telegram" v-model="newProject.telegram_link" />
                            <mdbInput label="Linkedln" v-model="newProject.linkedln_link" />
                            <mdbInput label="Github" v-model="newProject.github_link" />
                            <mdbInput label="Discord" v-model="newProject.discord_link" />
                            <mdbInput label="Макс. интерес" v-model="newProject.max_interest" type="number" />
                            <mdbInput label="Оценка хайпа" v-model="newProject.grade_hype" type="number" />
                            <mdbInput label="Оценка фондов" v-model="newProject.grade_funds" type="number" />
                            <mdbInput label="Оценка токеномики" v-model="newProject.grade_tokenomics" type="number" />
                            <mdbInput label="Текущая цена" v-model="newProject.price_сurrent" type="number" />
                            <mdbInput label="Цена ICO" v-model="newProject.price_ico" type="number" />
                            <mdbInput label="Макс. цена" v-model="newProject.price_maximum" type="number" />
                            <mdbInput label="ROI" v-model="newProject.roi" type="number" />
                            <mdbInput label="Max" v-model="newProject.max" type="number" />
                            <mdbInput label="Лимиты инвестиций" v-model="newProject.limits" />
                            <mdbInput label="Прием к оплате" v-model="newProject.currencies_payment" />
                            <mdbInput label="Дата начала проекта" v-model="newProject.date_start" type="date" />
                            <mdbInput label="Дата завершения проекта" v-model="newProject.date_end" type="date" />
                        </div>
                        <div class="form-btns">
                            <mdbBtn type="submit" color="success" class="m-0">
                                Сохранить изменения
                            </mdbBtn>
                            <mdbBtn color="danger" @click="cancelChanging" class="m-0">
                                Отменить изменения
                            </mdbBtn>
                        </div>
                    </form>
                    <div class="a-add-new-project-forms">
                        <editStep :selectedStatusSteps="selectedStatusSteps" />
                        <edit-fund :selectedStatusFunds="selectedStatusFunds" />
                        <edit-team :selectedStatusTeams="selectedStatusTeams" />
                    </div>
                </div>
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
import editStep from './step/editStep.vue';
import EditFund from './fund/editFund.vue';
import editTeam from './team/editTeam.vue';
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
        mdbInput,
        editStep,
        EditFund,
        editTeam
    },
    data() {
        return {
            selectedStatusSteps: 0,
            selectedStatusFunds: 0,
            selectedStatusTeams: 0,
            editorData: '<p>Описание проекта</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            selected: 1,
            selectedStatusCategory: 1,
            newProject: {
                name: "",
                symbol: "",
                description: "Описание проекта...",
                max_interest: null,
                site: "",
                area: "",
                area_link: "",
                price_сurrent: null,
                price_ico: null,
                price_maximum: null,
                roi: null,
                max: null,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: "",
                grade_funds: null,
                grade_hype: null,
                grade_tokenomics: null,
                date_start: null,
                date_end: null,
                limits: '',
                currencies_payment: '',
                icon_id: null,
                photo_id: null
            },
        }
    },
    computed: {
        categories() {
            return this.$store.getters['category-projects/CATEGORIES']
        }
    },
    methods: {
        async setIconProject() {
            try {
                let imgFile = this.$refs.refProjectIcon.files[0];
                const fd = new FormData()
                fd.append('file', imgFile)
                fd.append('post_type', 'project');
                fd.append('post_id', '');
                fd.append('comment', 'Project Icon');
                const headers = { 'Content-Type': 'multipart/form-data' };
                this.newProject.icon_id = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'files', fd, headers)
                    // this.infoTeams.photo_id = await this.$axios.$post('files', fd, headers)
                    .then(res => {
                        return res.id
                    })
            } catch (error) {
                console.log(error);
                this.$toast.error(`Иконка проекта не добавилось`);
            }
        },
        async setPhotoProject() {
            try {
                let imgFile = this.$refs.refProjectPhoto.files[0];
                const fd = new FormData()
                fd.append('file', imgFile)
                fd.append('post_type', 'project');
                fd.append('post_id', '');
                fd.append('comment', 'Project Icon');
                const headers = { 'Content-Type': 'multipart/form-data' };
                this.newProject.photo_id = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'files', fd, headers)
                    // this.infoTeams.photo_id = await this.$axios.$post('files', fd, headers)
                    .then(res => {
                        return res.id
                    })
            } catch (error) {
                console.log(error);
                this.$toast.error(`Фото проекта не добавилось`);
            }
        },
        async postProject() {
            const project = {
                name: this.newProject.name,
                symbol: this.newProject.symbol,
                description: this.newProject.description,
                max_interest: this.newProject.max_interest,
                site: this.newProject.site,
                area: this.newProject.area,
                area_link: this.newProject.area_link,
                funds_status: this.selectedStatusFunds,
                tokenomics_status: 0,
                multiplier_status: 0,
                teams_status: this.selectedStatusTeams,
                steps_status: this.selectedStatusSteps,
                projects_categories_id: this.selectedStatusCategory,
                price_сurrent: this.newProject.price_сurrent,
                price_ico: this.newProject.price_ico,
                price_maximum: this.newProject.price_maximum,
                roi: this.newProject.roi,
                max: this.newProject.max,
                facebook_link: this.newProject.facebook_link,
                twitter_link: this.newProject.twitter_link,
                instagram_link: this.newProject.instagram_link,
                vk_link: this.newProject.vk_link,
                youtube_link: this.newProject.youtube_link,
                telegram_link: this.newProject.telegram_link,
                linkedln_link: this.newProject.linkedln_link,
                github_link: this.newProject.github_link,
                discord_link: this.newProject.discord_link,
                grade_funds: this.newProject.grade_funds,
                grade_hype: this.newProject.grade_hype,
                grade_tokenomics: this.newProject.grade_tokenomics,
                date_start: Math.floor(new Date(this.newProject.date_start).getTime() / 1000),
                date_end: Math.floor(new Date(this.newProject.date_end).getTime() / 1000),
                limits: this.newProject.limits,
                icon_id: this.newProject.icon_id,
                photo_id: this.newProject.photo_id,
            }
            try {
                const changedProject = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'projects', project)
                    // const addedProject = await this.$axios.$put('projects', project)
                    .then(res => {
                        return res
                    })
                if (changedProject) {
                    await this.fetchProject()
                    this.$toast.success(`${project.name} добавлен успешно`);
                    return changedProject
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        async fetchProject() {
            // await this.$axios.$get(`projects/${this.$route.query.id}`)
            await this.$axios.$get('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projects/${this.$route.query.id}`)
                .then(res => {
                    let start = new Date(res.date_start * 1000);
                    let end = new Date(res.date_end * 1000);
                    this.newProject = {
                        name: res.name,
                        symbol: res.symbol,
                        description: res.description,
                        max_interest: res.max_interest,
                        site: res.site,
                        area: res.area,
                        area_link: res.area_link,
                        price_сurrent: res.price_сurrent,
                        price_ico: res.price_ico,
                        price_maximum: res.price_maximum,
                        roi: res.roi,
                        max: res.max,
                        facebook_link: res.facebook_link,
                        twitter_link: res.twitter_link,
                        instagram_link: res.instagram_link,
                        vk_link: res.vk_link,
                        youtube_link: res.youtube_link,
                        telegram_link: res.telegram_link,
                        linkedln_link: res.linkedln_link,
                        github_link: res.github_link,
                        discord_link: res.discord_link,
                        grade_funds: res.grade_funds,
                        grade_hype: res.grade_hype,
                        grade_tokenomics: res.grade_tokenomics,
                        limits: res.limits,
                        currencies_payment: res.currencies_payment,
                        icon_id: res.icon_id,
                        photo_id: res.photo_id,
                        date_start: start.toLocaleDateString('sv'),
                        date_end: end.toLocaleDateString("sv"),
                    }
                    res.funds_status ? this.selectedStatusFunds = 1 : this.selectedStatusFunds = 0
                    res.steps_status ? this.selectedStatusSteps = 1 : this.selectedStatusSteps = 0
                    res.teams_status ? this.selectedStatusTeams = 1 : this.selectedStatusTeams = 0
                })
        },
        async cancelChanging() {
            await this.fetchProject()
        }
    },
    async mounted() {
        await this.$store.dispatch('category-projects/fetchCategories')
        await this.fetchProject()
    }
}
</script>
<style>
.form-btns {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.grid-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
}

.teams-view,
.logo-funds {
    display: flex;
    gap: 10px;
    overflow-x: scroll;
}

.teams-view {
    margin-bottom: 30px;
}

.teams-view-card {
    padding: 10px;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;
    position: relative;
}

.teams-view-img {
    width: 300px;
    height: 200px;
    margin-bottom: 5px;
}

.teams-view-img img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
}

.teams-view-name {
    font-size: 20px;
    font-weight: bold;
}

.teams-view-status {
    margin-bottom: 0;
    line-height: 100%;

}

.logo-funds-empty {
    margin: 30px 0 40px;
}

.logo-funds .logo-funds-img {
    width: 100px;
    height: 100px;
    position: relative;
    border: 5px solid #b1b1b1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.teams-view-card .btn-fund,
.teams-view-card .edit,
.logo-funds .logo-funds-img .btn-fund {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    padding: 2px !important;
}

.teams-view-card .edit {
    right: 45px !important;
}


.logo-funds .logo-funds-img .logo {
    object-fit: contain;
}

.add-new-project {
    display: flex;
}

.a-add-new-project-forms,
.new-project {
    width: 50%;
}

.a-add-new-project-forms {
    border-left: 4px solid lightgrey;
}

.funds,
.steps {
    border-bottom: 4px solid lightgrey;
}
</style>