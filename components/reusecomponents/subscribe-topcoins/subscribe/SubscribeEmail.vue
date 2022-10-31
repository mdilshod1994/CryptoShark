<template>
    <div class="subscribe-form-block">
        <input type="text" class="subscribe-form__input input" placeholder="Введите вашу почту">
        <button type="submit" class="subscribe-form__btn btn">Подписаться</button>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.subscribe-form-block {
    margin-bottom: 20px;
    position: relative;
}

.subscribe-form__input {
    padding-right: 200px;
}

.subscribe-form__btn {
    position: absolute;
    top: 50%;
    width: 180px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 4px;
}

@media only screen and (max-width: 575px) {
    .subscribe-form__input {
        margin-bottom: 12px;
        padding-right: 15px;
    }

    .subscribe-form__btn {
        position: static;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        width: 100%;
    }
}
</style>