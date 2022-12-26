<template>
    <div class="mainprojects-item">
        <div class="mainprojects-item-info">
            <div class="mainprojects-item__logo">
                <img :src="item.logo" alt="img">
                <div class="mainprojects-item__logocaption">x{{  }}</div>
            </div>
            <div class="mainprojects-item-content">
                <div class="mainprojects-item__title">Flatonica</div>
                <div class="mainprojects-item__date date_completed">Завершён</div>
            </div>
        </div>
        <div class="mainprojects-item-stats">
            <div class="mainprojects-item-stat">
                <div class="mainprojects-item-stat__number mis__number_growth">x{{  }}
                </div>
                <div class="mainprojects-item-stat__caption">ROI</div>
            </div>
            <div class="mainprojects-item-stat">
                <div class="mainprojects-item-stat__number">x{{  }}</div>
                <div class="mainprojects-item-stat__caption">Max</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>