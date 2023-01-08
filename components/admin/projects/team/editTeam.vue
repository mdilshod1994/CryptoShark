<template>
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
        <h5 class="mb-4 mt-4">
            Список команд с базы данных
        </h5>
        <div class="teams-view" v-if="teamFromServer.length">
            <div class="teams-view-card" v-for="team in teamFromServer" :key="team.id">
                <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger" @click="deleteTeamFromServer(team)"
                    title="Удалить">
                    <img src="@/assets/admin-icons/trash.svg" alt="">
                </mdbBtn>
                <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund edit" color="primary" @click="editTeamFromServer(team)"
                    title="Изменить">
                    <img src="@/assets/admin-icons/edit.svg" alt="">
                </mdbBtn>
                <div class="teams-view-img">
                    <img :src="team.photoView" alt="" v-if="team.photoView">
                    <img src="http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg" alt="" v-else>
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
            <input type="file" id="photo" @change="setPhotoTeam" ref="imageRefPhotoTeam" v-show="false">
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
        <mdbBtn @click="saveChangedTeam" color="success" v-show="toChange">
            Сохранить
        </mdbBtn>
        <mdbBtn @click="editCancelTeam" color="danger" v-show="toChange">
            Отменить
        </mdbBtn>
        <mdbBtn @click="addTeam" v-if="teams.length" v-show="!toChange">
            Добавить еще
        </mdbBtn>
        <mdbBtn @click="addTeam" v-else v-show="!toChange">
            Добавить
        </mdbBtn>
        <div v-if="teams.length">
            <h5 class="mb-4 mt-4">
                Список новых команд для добавления
            </h5>
            <div class="teams-view">
                <div class="teams-view-card" v-for="(team, index) in teams" :key="index">
                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund" color="danger" @click="deleteTeam(index)"
                        title="Удалить">
                        <img src="@/assets/admin-icons/trash.svg" alt="">
                    </mdbBtn>
                    <mdbBtn class="m-0 p-0 pl-3 pr-3 btn-fund edit" color="primary" @click="editTeam({ team, index })"
                        title="Изменить">
                        <img src="@/assets/admin-icons/edit.svg" alt="">
                    </mdbBtn>
                    <div class="teams-view-img">
                        <img :src="team.photoView" alt="" v-if="team.photoView">
                        <img src="http://artinblog.ru/uploads/posts/2013-04/1367159240_300x200.jpg" alt="" v-else>
                    </div>
                    <p class="teams-view-name">
                        {{ team.name }}
                    </p>
                    <p class="teams-view-status">
                        {{ team.status }}
                    </p>
                </div>
            </div>
            <mdbBtn class="mr-0 ml-0 mt-4 mb-4 p-0 pl-3 pr-3 btn-fund w-100" color="success" title="Добавить"
                type="submit">
                Добавить команды
                <img src="@/assets/admin-icons/add.svg" alt="">
            </mdbBtn>
        </div>
    </form>
</template>
<script>
import {
    mdbBtn, mdbInput
} from "mdbvue";
export default {
    name: 'edit-team',
    components: {
        mdbBtn,
        mdbInput,
    },
    props: ['selectedStatusTeams'],
    data() {
        return {
            toChange: false,
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
            teams: [],
            teamFromServer: [],
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
            },
        }
    },
    methods: {
        editCancelTeam() {
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
            this.toChange = false
            this.$refs.imageRefPhotoTeam.value = null;
        },
        async saveChangedTeam() {
            const teamInfo = {
                name: this.infoTeams.name,
                status: this.infoTeams.status,
                description: this.infoTeams.description,
                photo_id: this.infoTeams.photo_id,
                projects_id: this.$route.query.id,
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

            try {
                const changedTeam = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsTeams/${this.infoTeams.teamId}`, teamInfo)
                    // const changedTeam = await this.$axios.$put(`projectsTeams/${this.infoTeams.teamId}`, teamInfo)
                    .then(res => {
                        return res
                    })
                if (changedTeam) {
                    this.$toast.success(`Изменен успешно`);
                    await this.fetchTeams()
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
                    this.toChange = false
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        editTeamFromServer(team) {
            this.infoTeams = {
                name: team.name,
                status: team.status,
                description: team.description,
                photo_id: team.photo_id,
                facebook_link: team.facebook_link,
                twitter_link: team.twitter_link,
                instagram_link: team.instagram_link,
                vk_link: team.vk_link,
                youtube_link: team.youtube_link,
                telegram_link: team.telegram_link,
                linkedln_link: team.linkedln_link,
                github_link: team.github_link,
                discord_link: team.discord_link,
                teamId: team.id
            }
            this.toChange = true
        },
        async deleteTeamFromServer(team) {
            try {
                const deletedTeam = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsTeams/${team.id}`)
                    // const deletedTeam = await this.$axios.$delete(`projectsTeams/${team.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedTeam) {
                    this.$toast.success(`Удален успешно`);
                    await this.fetchTeams()
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }

        },
        async postTeams() {
            try {
                for (let i = 0; i < this.teams.length; i++) {
                    const el = this.teams[i]
                    const teamInfo = {
                        name: el.name,
                        status: el.status,
                        description: el.description,
                        photo_id: el.photo_id,
                        projects_id: this.$route.query.id,
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
                        await this.fetchTeams()
                        if ((i + 1) == this.teams.length) {
                            this.teams = []
                        }
                    }
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
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
        },
        async fetchTeams() {
            try {
                await this.$axios.$get(`/projectsTeams?search[projects_id]=${this.$route.query.id}`)
                    .then(res => {
                        this.teamFromServer = res.data
                    })
            } catch (error) {
                console.log(error);
            }

        }
    },
    async mounted() {
        await this.fetchTeams()
    },
}
</script>
<style>

</style>