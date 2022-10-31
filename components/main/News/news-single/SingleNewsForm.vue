<template >
    <div class="news-comments-form">
        <div class="news-comments-form-input">
            <input type="text" class="input" placeholder="Имя" v-model="name">
        </div>
        <div class="news-comments-form-input">
            <textarea class="textarea" placeholder="Социометрический имидж предприятия" v-model="text"></textarea>
            <button type="submit" class="news-comments-form__btn btn btn_small" @click="postComment">Отправить</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            name: '',
            text: '',
        }
    },
    methods: {
        async postComment() {
            await this.$store.dispatch('news/postNews', { name: this.name, text: this.text, id: +this.$route.params.news })
            this.name = ''
            this.text = ''
        }
    },
}
</script>
<style >

</style>