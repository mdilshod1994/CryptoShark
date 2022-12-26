<template>
    <div class="inner-component">
        <mdbRow class="mb-4">
            <mdbCol xl="6">
                <h1>
                    Новый Проекты
                </h1>
            </mdbCol>
            <mdbCol xl="6">
                <mdbRow>
                    <mdbCol xl="6" style="display:flex; align-items: flex-end; position: relative;">
                        <!-- <mdbInput class="mt-0 mb-0  w-100"></mdbInput>
                        <img src="@/assets/admin-icons/search.svg" class="admin-search-icon" alt=""> -->
                    </mdbCol>
                    <mdbCol xl="6">
                        <mdbBtn tag="a" color="primary w-100" @click="addNewProject">
                            Добавить проект
                        </mdbBtn>
                    </mdbCol>
                </mdbRow>
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
                    </form>
                    <div class="a-add-new-project-forms">
                        <form class="a-form news steps" @click.stop="" @submit.prevent="postSteps">
                            <h4 class="mb-4">
                                Как участвовать в проекте
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusSteps">
                                    <option v-for="item in stepStatus" :key="item.value" :value="item.value">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <mdbInput v-for="(item, index) in steps" :key="index" :label="`Шаг ${index + 1}`"
                                v-model="item.step" />
                        </form>
                        <form class="a-form news funds" @click.stop="" @submit.prevent="postFunds">
                            <h4 class="mb-4">
                                Фонды и инвесторы
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusFunds">
                                    <option v-for="item in fundStatus" :key="item.value" :value="item.value">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <label for="photosFundsLogo" style=" margin-top: 15px;" class="mt-4 mb-4 w-100">
                                <input type="file" multiple id="photosFundsLogo" @change="setLogoFunds"
                                    ref="imageRefLogoFund" v-show="false">
                                <mdbBtn @click="$refs.imageRefLogoFund.click()" class="m-0 w-100">
                                    Выбрать логотип
                                </mdbBtn>
                            </label>
                            <div class="logo-funds">
                                <div v-if="!logoFunds.length" class="logo-funds-empty">
                                    Вы пока не добавили логотип
                                </div>
                                <div class="logo-funds-img" v-for="(item, index) in logoFunds" :key="index" v-else>
                                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger"
                                        @click="deleteLogoFunds(index)" title="Удалить">
                                        <img src="@/assets/admin-icons/trash.svg" alt="">
                                    </mdbBtn>
                                    <img v-if="logoFundsImagesView.length" class="logo"
                                        :src="logoFundsImagesView[index]" alt="">
                                </div>
                            </div>
                        </form>
                        <form class="a-form news team" @click.stop="" @submit.prevent="postTeams">
                            <h4 class="mb-4">
                                Команда
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusTeams">
                                    <option v-for="item in teamStatus" :key="item.value" :value="item.value">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <div class="teams-view" v-if="teams.length">
                                <div class="teams-view-card" v-for="(team, index) in teams" :key="index">
                                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger" @click="deleteTeam(index)"
                                        title="Удалить">
                                        <img src="@/assets/admin-icons/trash.svg" alt="">
                                    </mdbBtn>
                                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund edit" color="primary"
                                        @click="editTeam({ team, index })" title="Изменить">
                                        <img src="@/assets/admin-icons/edit.svg" alt="">
                                    </mdbBtn>
                                    <div class="teams-view-img">
                                        <img :src="team.photoView" alt="" v-if="team.photoView">
                                        <img src="http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg"
                                            alt="" v-else>
                                    </div>
                                    <p class="teams-view-name">
                                        {{ team.name }}
                                    </p>
                                    <p class="teams-view-status">
                                        {{ team.status }}
                                    </p>
                                </div>
                            </div>
                            <div class="grid-wrap">
                                <mdbInput label="Имя" v-model="infoTeams.name" />
                                <mdbInput label="Должность" v-model="infoTeams.status" />
                            </div>
                            <mdbInput label="Описание" v-model="infoTeams.description" />
                            <div>
                                <input type="file" id="photo" @change="setPhotoTeam" ref="imageRefPhotoTeam"
                                    v-show="false">
                                <mdbBtn @click="$refs.imageRefPhotoTeam.click()" class="w-100 m-0">
                                    Выбрать фото команды
                                </mdbBtn>
                                <p class="mt-2" v-if="infoTeams.photo_id"> Выбран фото ID {{ infoTeams.photo_id }}</p>
                            </div>
                            <div class="grid-wrap">
                                <mdbInput label="Facebook" v-model="infoTeams.facebook_link" />
                                <mdbInput label="Twitter" v-model="infoTeams.twitter_link" />
                                <mdbInput label="Instagram" v-model="infoTeams.instagram_link" />
                                <mdbInput label="Vk" v-model="infoTeams.vk_link" />
                                <mdbInput label="Youtube" v-model="infoTeams.youtube_link" />
                                <mdbInput label="Telegram" v-model="infoTeams.telegram_link" />
                                <mdbInput label="LinkedIn" v-model="infoTeams.linkedln_link" />
                                <mdbInput label="Github" v-model="infoTeams.github_link" />
                                <mdbInput label="Discord" v-model="infoTeams.discord_link" />
                            </div>
                            <mdbBtn @click="addTeam" v-if="teams.length">
                                Добавить еще
                            </mdbBtn>
                            <mdbBtn @click="addTeam" v-else>
                                Добавить
                            </mdbBtn>
                        </form>
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
            steps: [
                {
                    step: ''
                },
                {
                    step: ''
                },
                {
                    step: ''
                },
                {
                    step: ''
                },
                {
                    step: ''
                },
            ],
            selectedStatusSteps: 0,
            selectedStatusFunds: 0,
            selectedStatusTeams: 0,
            editorData: '<p>Описание проекта</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            stepStatus: [
                {
                    status: 'Выключен',
                    value: 0
                },
                {
                    status: 'Включен',
                    value: 1
                },
            ],
            teamStatus: [
                {
                    status: 'Выключен',
                    value: 0
                },
                {
                    status: 'Включен',
                    value: 1
                },
            ],
            fundStatus: [
                {
                    status: 'Выключен',
                    value: 0
                },
                {
                    status: 'Включен',
                    value: 1
                },
            ],
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
            logoFunds: [],
            logoFundsImagesView: [],
            teams: [],
            infoTeams: {
                name: "",
                status: "",
                description: "",
                photo_id: null,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: "",
                teamImgView: {}
            }
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
        addTeam() {
            const obj = {
                name: this.infoTeams.name,
                status: this.infoTeams.status,
                description: this.infoTeams.description,
                photo_id: this.infoTeams.photo_id,
                facebook_link: this.infoTeams.facebook_link,
                twitter_link: this.infoTeams.twitter_link,
                instagram_link: this.infoTeams.instagram_link,
                vk_link: this.infoTeams.vk_link,
                youtube_link: this.infoTeams.youtube_link,
                telegram_link: this.infoTeams.telegram_link,
                linkedln_link: this.infoTeams.linkedln_link,
                github_link: this.infoTeams.github_link,
                discord_link: this.infoTeams.discord_link,
                photoView: this.infoTeams.teamImgView
            }
            this.teams.push(obj)
            this.infoTeams = {
                name: "",
                status: "",
                description: "",
                photo_id: null,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: "",
                teamImgView: {}
            }
            this.$refs.imageRefPhotoTeam.value = null;
        },
        setLogoFunds() {
            let selectedFiles = this.$refs.imageRefLogoFund.files
            for (let index = 0; index < selectedFiles.length; index++) {
                const element = selectedFiles[index];
                this.logoFunds.push(element)
                let reader = new FileReader()
                reader.addEventListener('load', (e) => {
                    this.logoFundsImagesView.push(e.target.result)
                })
                reader.readAsDataURL(element)
            }
        },
        async setPhotoTeam() {
            let reader = new FileReader()
            reader.addEventListener('load', (e) => {
                this.infoTeams.teamImgView = e.target.result
            })
            reader.readAsDataURL(this.$refs.imageRefPhotoTeam.files[0])
            let imgFile = this.$refs.imageRefPhotoTeam.files[0];
            try {
                const fd = new FormData()
                fd.append('file', imgFile)
                fd.append('post_type', 'team');
                fd.append('post_id', '');
                fd.append('comment', 'Team photo');
                const headers = { 'Content-Type': 'multipart/form-data' };
                this.infoTeams.photo_id = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'files', fd, { headers })
                    // this.infoTeams.photo_id = await this.$axios.$post('files', fd, { headers })
                    .then(res => {
                        return res.id
                    })
            } catch (error) {
                console.log(error);
            }
        },
        async postFunds(project) {
            try {
                for (let i = 0; i < this.logoFunds.length; i++) {
                    const formData = new FormData();
                    const fileImg = this.logoFunds[i]
                    formData.append('file', fileImg);
                    formData.append('post_type', 'project');
                    formData.append('post_id', project.id);
                    formData.append('comment', 'project logo funds/invest');
                    const headers = { 'Content-Type': 'multipart/form-data' };
                    const postedFile = await this.$axios.$post('files', formData, { headers })
                        .then(res => {
                            return res
                        })
                    if (postedFile) {
                        console.log('done funds');
                    }
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.error(error);
            }
        },
        async postTeams(project) {
            try {
                for (let i = 0; i < this.teams.length; i++) {
                    const el = this.teams[i]
                    const teamInfo = {
                        name: el.name,
                        status: el.status,
                        description: el.description,
                        photo_id: el.photo_id,
                        projects_id: project.id,
                        facebook_link: el.facebook_link,
                        twitter_link: el.twitter_link,
                        instagram_link: el.instagram_link,
                        vk_link: el.vk_link,
                        youtube_link: el.youtube_link,
                        telegram_link: el.telegram_link,
                        linkedln_link: el.linkedln_link,
                        github_link: el.github_link,
                        discord_link: el.discord_link
                    }
                    const postedTeams = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'projectsTeams', teamInfo)
                        // const postedTeams = await this.$axios.$post('projectsTeams', teamInfo)
                        .then(res => {
                            return res
                        })
                    if (postedTeams) {
                        console.log('done team');
                    }
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        async postSteps(project) {
            try {
                let filtered = this.steps.filter(el => {
                    if (el.step !== '') {
                        return el
                    }
                })
                for (let index = 0; index < filtered.length; index++) {
                    const element = this.steps[index];
                    const steps = {
                        name: element.step,
                        projects_id: project.id
                    }
                    const postedSteps = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'projectsSteps', steps)
                        .then(res => {
                            return res
                        })
                    if (postedSteps) {
                        console.log('done step');
                    }
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
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
                currencies_payment: this.newProject.currencies_payment
            }
            try {
                const addedProject = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'projects', project)
                    // const addedProject = await this.$axios.$post('projects', project)
                    .then(res => {
                        return res
                    })
                if (addedProject) {
                    this.$toast.success(`${project.name} добавлен успешно`);
                    return addedProject
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        async addNewProject() {
            const postedProject = await this.postProject()
            console.log('done', postedProject);
            if (this.selectedStatusSteps) {
                const postedSteps = await this.postSteps(postedProject)
                console.log('done steps');
            }
            if (this.selectedStatusFunds) {
                const postedFunds = await this.postFunds(postedProject)
                console.log('done funds');
            }
            if (this.selectedStatusTeams) {
                const postedTeams = await this.postTeams(postedProject)
                console.log('done team');
            }
            // window.location.reload()
        },
        deleteLogoFunds(index) {
            this.logoFunds.splice(index, 1)
            this.logoFundsImagesView.splice(index, 1)
        },
        deleteTeam(index) {
            this.teams.splice(index, 1)
        },
        editTeam(team) {
            this.infoTeams = {
                name: team.team.name,
                status: team.team.status,
                description: team.team.description,
                photo_id: null,
                facebook_link: team.team.facebook_link,
                twitter_link: team.team.twitter_link,
                instagram_link: team.team.instagram_link,
                vk_link: team.team.vk_link,
                youtube_link: team.team.youtube_link,
                telegram_link: team.team.telegram_link,
                linkedln_link: team.team.linkedln_link,
                github_link: team.team.github_link,
                discord_link: team.team.discord_link,
                teamImgView: {}
            }
            this.teams.splice(team.index, 1)
            this.infoTeams.photo_id = null
            this.infoTeams.teamImgView = {}
            this.$refs.imageRefPhotoTeam.value = null;
        }
    },
    async mounted() {
        await this.$store.dispatch('category-projects/fetchCategories')
    }
}
</script>
<style>
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