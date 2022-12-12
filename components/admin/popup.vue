<template>
    <div class="modal-window" @click="closePopup">
        <div class="modal-window-body"
            :style="form == 'FormFiles' || form == 'FormProjectCategory' ? { height: 'max-content', overflow: 'inherit' } : false">
            <component :is="form"></component>
        </div>
    </div>
</template>
<script>
import FormNews from './forms/FormNews.vue';
import FormProject from './forms/FormProject.vue';
import FormCoin from './forms/FormCoin.vue';
import FormFiles from './forms/FormFiles.vue';
import FormProjectCategory from './forms/FormProjectCategory.vue';

export default {
    components: {
        FormNews,
        FormProject,
        FormCoin,
        FormFiles,
        FormProjectCategory
    },
    computed: {
        form() {
            return `Form${this.$store.getters['forms/BTN_VALUE']}`
        }
    },
    methods: {
        closePopup() {
            this.$store.dispatch('forms/closePopup')
        },
    }
}
</script>
<style>
.modal-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-window-body {
    height: 80%;
    overflow-y: scroll;
}
</style>