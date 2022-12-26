<template>
    <form class="a-form news steps" @click.stop="">
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
        <div class="step-wrap " v-for="(item, index) in steps" :key="item.id">
            <mdbInput :label="`Шаг ${index + 1}`" v-model="stepMessage"
                :class="`${index === currStep ? '' : 'disabled'}`" v-if="edit && index === currStep" />
            <p v-else>{{ item.name }}</p>
            <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" color="success" @click="saveStep(item)" title="Сохранить"
                v-if="(edit && index === currStep)">
                <img src="@/assets/admin-icons/save.svg" alt="">
            </mdbBtn>
            <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" color="dark" @click="cancelEdit" title="Отменить"
                v-if="(edit && index === currStep)">
                <img src="@/assets/admin-icons/cancel.svg" alt="">
            </mdbBtn>
            <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" @click="editStep({ item, index })" title="Изменить" v-else>
                <img src="@/assets/admin-icons/edit.svg" alt="">
            </mdbBtn>
            <mdbBtn class="m-0 p-0 pl-3 pr-3" color="danger" @click="deleteStep(item)" title="Удалить">
                <img src="@/assets/admin-icons/trash.svg" alt="">
            </mdbBtn>
        </div>
        <div class="step-wrap adding-step">
            <mdbInput label="Добавить еще шаг" class="mt-4" v-model="newStepMessage" />
            <mdbBtn class="m-0 mr-2 p-0 pl-3 pr-3" color="success" @click="addNewStep" title="Добавить">
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
    name: 'edit-step',
    components: {
        mdbBtn,
        mdbInput,
    },
    props: ['selectedStatusSteps'],
    data() {
        return {
            edit: false,
            currStep: null,
            stepMessage: '',
            newStepMessage: '',
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
            steps: [],
            postNewsteps: [
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
        }
    },
    methods: {
        async addNewStep() {
            try {
                const step = {
                    name: this.newStepMessage,
                    projects_id: this.$route.query.id
                }
                const addedStep = await this.$axios.$post('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsSteps`, step)
                    // const addedStep = await this.$axios.$post( `projectsSteps`, step)
                    .then(res => {
                        return res
                    })
                if (addedStep) {
                    this.$toast.success(`Добавлен успешно`);
                    await this.fetchStep()
                    this.newStepMessage = ''
                }
            } catch (error) {
                this.$toast.error(`Что-то пошло не так`);
                console.log(error);
            }
        },
        async saveStep(item) {
            try {
                const step = {
                    name: this.stepMessage,
                    projects_id: this.$route.query.id
                }
                // const updatedStep = await this.$axios.$put(`projectsSteps/${item.id}`, step)
                const updatedStep = await this.$axios.$put('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsSteps/${item.id}`, step)
                    .then(res => {
                        return res
                    })
                if (updatedStep) {
                    this.$toast.success(`Изменен успешно`);
                    await this.fetchStep()
                    this.cancelEdit()
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        async deleteStep(item) {
            try {
                // const deletedStep = await this.$axios.$delete(`projectsSteps/${item.id}`)
                const deletedStep = await this.$axios.$delete('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsSteps/${item.id}`)
                    .then(res => {
                        return res
                    })
                if (deletedStep) {
                    this.$toast.success(`Удален успешно`);
                    await this.fetchStep()
                }
            } catch (error) {
                console.log(error);
                this.$toast.error(`Что-то пошло не так`);
            }
        },
        editStep(i) {
            this.currStep = i.index
            this.edit = true
            this.stepMessage = i.item.name
        },
        cancelEdit() {
            this.currStep = null
            this.edit = false
            this.stepMessage = ''
        },
        async fetchStep() {
            // await this.$axios.$get(`projectsSteps?search[projects_id]=${this.$route.query.id}`)
            await this.$axios.$get('https://cors-anywhere.herokuapp.com/' + process.env.API_URL + `projectsSteps?search[projects_id]=${this.$route.query.id}`)
                .then(res => {
                    this.steps = res.data
                })
        }
    },
    async mounted() {
        await this.fetchStep()
    }
}
</script>
<style>
.step-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.step-wrap .md-form {
    width: 100%;
    margin-bottom: 0;
    margin-right: 10px;
}

.step-wrap p {
    margin-bottom: 0;
    width: 100%;
}

.step-wrap button img {
    width: 21px;
    height: 21px;
}
</style>