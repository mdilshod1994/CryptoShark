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
                        <mdbInput label="Название проекта" v-model="newProject.name" />
                        <mdbInput label="В сокращении" v-model="newProject.symbol" />
                        <ckeditor v-model="newProject.description" :value="editorData"></ckeditor>
                        <div class="form-group mt-3">
                            <label for="exampleFormControlSelect1">Категория</label>
                            <select class="form-control" v-model="selected">
                                <option v-for="item in categories" :key="item.id" :value="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <label for="photo" style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                            Лого
                            <input type="file" id="photo" @change="setLogoProject" ref="imageRefLogo">
                        </label>
                        <mdbInput label="max_interest" v-model="newProject.max_interest" />
                        <mdbInput label="hype" v-model="newProject.hype" />
                        <mdbInput label="site" v-model="newProject.site" />
                        <mdbInput label="area" v-model="newProject.area" />
                        <mdbInput label="area_link" v-model="newProject.area_link" />
                        <mdbInput label="funds_status" v-model="newProject.funds_status" />
                        <mdbInput label="tokenomics_status" v-model="newProject.tokenomics_status" />
                        <mdbInput label="multiplier_status" v-model="newProject.multiplier_status" />
                        <mdbInput label="price_сurrent" v-model="newProject.price_сurrent" />
                        <mdbInput label="price_ico" v-model="newProject.price_ico" />
                        <mdbInput label="price_maximum" v-model="newProject.price_maximum" />
                        <mdbInput label="roi" v-model="newProject.roi" />
                        <mdbInput label="max" v-model="newProject.max" />
                        <mdbInput label="projects_statuses_id" v-model="newProject.projects_statuses_id" />
                        <mdbInput label="facebook_link" v-model="newProject.facebook_link" />
                        <mdbInput label="twitter_link" v-model="newProject.twitter_link" />
                        <mdbInput label="instagram_link" v-model="newProject.instagram_link" />
                        <mdbInput label="vk_link" v-model="newProject.vk_link" />
                        <mdbInput label="youtube_link" v-model="newProject.youtube_link" />
                        <mdbInput label="telegram_link" v-model="newProject.telegram_link" />
                        <mdbInput label="linkedln_link" v-model="newProject.linkedln_link" />
                        <mdbInput label="github_link" v-model="newProject.github_link" />
                        <mdbInput label="discord_link" v-model="newProject.discord_link" />
                        <mdbInput label="grade_funds" v-model="newProject.grade_funds" />
                        <mdbInput label="grade_hype" v-model="newProject.grade_hype" />
                        <mdbInput label="grade_tokenomics" v-model="newProject.grade_tokenomics" />
                        <mdbInput label="date_start" v-model="newProject.date_start" />
                        <mdbInput label="date_end" v-model="newProject.date_end" />
                    </form>
                    <div class="a-add-new-project-forms">
                        <form class="a-form news steps" @click.stop="" @submit.prevent="postSteps">
                            <h4 class="mb-4">
                                Как участвовать в проекте
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusSteps">
                                    <option v-for="item in blockStatus" :key="item.id" :value="item.id">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <mdbInput v-for="(item, index) in steps" :key="index" :label="`Шаг ${index + 1}`"
                                v-model="item.step" />
                            <button type="submit"> post steps </button>
                        </form>
                        <form class="a-form news funds" @click.stop="" @submit.prevent="postFunds">
                            <h4 class="mb-4">
                                Фонды и инвесторы
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusFunds">
                                    <option v-for="item in blockStatus" :key="item.id" :value="item.id">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <label for="photosFundsLogo"
                                style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                                Добавить логотип
                                <input type="file" multiple id="photosFundsLogo" @change="setLogoFunds"
                                    ref="imageRefLogoFund" v-show="false">
                                <mdbBtn @click="$refs.imageRefLogoFund.click()">
                                    Выбрать логотип
                                </mdbBtn>
                            </label>
                            <div class="logo-funds">
                                <div v-if="!logoFunds.length" class="logo-funds-empty">
                                    Вы пока не добавили логотип
                                </div>
                                <div class="logo-funds-img" v-for="(item, index) in logoFunds" :key="item" v-else>
                                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger"
                                        @click="deleteLogoFunds(index)" title="Удалить">
                                        <img src="@/assets/admin-icons/trash.svg" alt="">
                                    </mdbBtn>
                                    <img :src="item" class="logo" alt="">
                                </div>
                            </div>
                        </form>
                        <form class="a-form news team" @click.stop="" @submit.prevent="postTeams">
                            <h4 class="mb-4">
                                Команда
                            </h4>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Статус блока</label>
                                <select class="form-control" v-model="selectedStatusTeam">
                                    <option v-for="item in blockStatus" :key="item.id" :value="item.id">
                                        {{ item.status }}
                                    </option>
                                </select>
                            </div>
                            <div class="teams-view" v-if="teams.length">
                                <div class="teams-view-card" v-for="(team, index) in teams" :key="index">
                                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger"
                                        @click="deleteLogoTeam(index)" title="Удалить">
                                        <img src="@/assets/admin-icons/trash.svg" alt="">
                                    </mdbBtn>
                                    <div class="teams-view-img">
                                        <img src="" alt="" v-if="false">
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
                            <mdbInput label="Имя" v-model="infoTeams.name" />
                            <mdbInput label="Должность" v-model="infoTeams.status" />
                            <mdbInput label="Описание" v-model="infoTeams.description" />
                            <label for="photo"
                                style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                                Фото
                                <input type="file" id="photo" @change="setLogoProject" ref="imageRefPhotoTeam">
                            </label>
                            <h3 style="font-size: 20px; margin-top: 20px">
                                Cсылки
                            </h3>
                            <mdbInput label="Facebook" v-model="infoTeams.facebook_link" />
                            <mdbInput label="Twitter" v-model="infoTeams.twitter_link" />
                            <mdbInput label="Instagram" v-model="infoTeams.instagram_link" />
                            <mdbInput label="Vk" v-model="infoTeams.vk_link" />
                            <mdbInput label="Youtube" v-model="infoTeams.youtube_link" />
                            <mdbInput label="Telegram" v-model="infoTeams.telegram_link" />
                            <mdbInput label="LinkedIn" v-model="infoTeams.linkedln_link" />
                            <mdbInput label="Github" v-model="infoTeams.github_link" />
                            <mdbInput label="Discord" v-model="infoTeams.discord_link" />
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
            selectedStatusSteps: 1,
            selectedStatusFunds: 1,
            selectedStatusTeam: 1,
            editorData: '<p>Описание</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            blockStatus: [
                {
                    status: 'Выключен',
                    id: 1
                },
                {
                    status: 'Включен',
                    id: 2
                },
            ],
            selected: 1,
            selectedStatus: 1,
            categories: [
                {
                    name: 'NFT',
                    id: 1
                },
                {
                    name: 'BlockChain',
                    id: 2
                }
            ],
            newProject: {
                name: "",
                symbol: "",
                description: "",
                max_interest: 0,
                hype: 0,
                site: "",
                area: "",
                area_link: "",
                funds_status: 0,
                tokenomics_status: 0,
                multiplier_status: 0,
                projects_categories_id: 0,
                price_сurrent: 0,
                price_ico: 0,
                price_maximum: 0,
                roi: 0,
                max: 0,
                projects_statuses_id: 0,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: "",
                grade_funds: 0,
                grade_hype: 0,
                grade_tokenomics: 0,
                date_start: 0,
                date_end: 0
            },
            logoFunds: [],
            teams: [],
            infoTeams: {
                name: "",
                status: "",
                description: "",
                photo_id: 1,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: ""
            }
        }
    },
    methods: {
        addTeam() {
            const obj = {
                name: this.infoTeams.name,
                status: this.infoTeams.status,
                description: this.infoTeams.description,
                photo_id: 1,
                facebook_link: this.infoTeams.facebook_link,
                twitter_link: this.infoTeams.twitter_link,
                instagram_link: this.infoTeams.instagram_link,
                vk_link: this.infoTeams.vk_link,
                youtube_link: this.infoTeams.youtube_link,
                telegram_link: this.infoTeams.telegram_link,
                linkedln_link: this.infoTeams.linkedln_link,
                github_link: this.infoTeams.github_link,
                discord_link: this.infoTeams.discord_link
            }
            this.teams.push(obj)
            this.infoTeams = {
                name: "",
                status: "",
                description: "",
                photo_id: 1,
                facebook_link: "",
                twitter_link: "",
                instagram_link: "",
                vk_link: "",
                youtube_link: "",
                telegram_link: "",
                linkedln_link: "",
                github_link: "",
                discord_link: ""
            }
        },
        async setLogoProject() {
            // let imgFile = this.$refs.imageRefPhotoTeam.files[0];
            // const fd = new FormData()
            // fd.append('file', imgFile)
            // this.infoTeams.photo_id = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + 'files',)
            //     // this.infoTeams.photo_id = await this.$axios.$post('files',)
            //     .then(res => {
            //         return res.id
            //     })
        },
        setLogoFunds() {
            let selectedFiles = this.$refs.imageRefLogoFund.files
            for (let index = 0; index < selectedFiles.length; index++) {
                const element = selectedFiles[index];
                let reader = new FileReader()
                reader.onload = (e) => {
                    const imageUrl = e.target.result
                    this.logoFunds.push(imageUrl)
                }
                reader.readAsDataURL(element)
            }
        },
        async postFunds(project) {
            console.log(project);

        },
        async postTeams(project) {
            try {
                for (let i = 0; i < this.teams.length; i++) {
                    const el = this.teams[i]
                    const teamInfo = {
                        name: el.name,
                        status: el.status,
                        description: el.description,
                        photo_id: 1,
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
                hype: this.newProject.hype,
                site: this.newProject.site,
                area: this.newProject.area,
                area_link: this.newProject.area_link,
                funds_status: this.newProject.funds_status,
                tokenomics_status: this.newProject.tokenomics_status,
                multiplier_status: this.newProject.multiplier_status,
                projects_categories_id: this.selected,
                price_сurrent: this.newProject.price_сurrent,
                price_ico: this.newProject.price_ico,
                price_maximum: this.newProject.price_maximum,
                roi: this.newProject.roi,
                max: this.newProject.max,
                projects_statuses_id: this.newProject.projects_statuses_id,
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
                date_start: this.newProject.date_start,
                date_end: this.newProject.date_end
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
            const postedSteps = await this.postSteps(postedProject)
            console.log('done steps', postedSteps);
            // const postedFunds = await this.postFunds(postedProject)
            const postedTeams = await this.postTeams(postedProject)
            console.log('done team', postedTeams);

        },
        deleteLogoFunds(index) {
            this.logoFunds.splice(index, 1)
        },
        deleteLogoTeam(index) {
            this.teams.splice(index, 1)
        },
        setLogoProject() { },
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
    }
}
</script>
<style>
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
    border: 1px solid gray;
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
    object-fit: contain;
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
    width: 250px;
    height: 250px;
    position: relative;
    padding: 5px;
    border: 1px solid gray;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.teams-view-card .btn-fund,
.logo-funds .logo-funds-img .btn-fund {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    padding: 2px !important;
}

.logo-funds .logo-funds-img .logo {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.add-new-project {
    display: flex;
}

.a-add-new-project-forms,
.new-project {
    width: 50%;
}

.a-add-new-project-forms {
    border-left: 1px solid black;
}

.funds,
.steps {
    border-bottom: 1px solid black;
}
</style>