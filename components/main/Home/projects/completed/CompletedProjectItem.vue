<template>
    <div class="mainprojects-item">
        <div class="mainprojects-item-info">
            <div class="mainprojects-item__logo">
                <img :src="item.icon_server + `/` + item.icon_path" alt="img">
                <div class="mainprojects-item__logocaption">x{{ item.roi }}</div>
            </div>
            <div class="mainprojects-item-content">
                <div class="mainprojects-item__title">{{ item.name }}</div>
                <div class="mainprojects-item__date date_completed">{{ item.status }}</div>
            </div>
        </div>
        <div class="mainprojects-item-stats">
            <div class="mainprojects-item-stat">
                <div class="mainprojects-item-stat__number mis__number_growth">x{{ item.roi }}
                </div>
                <div class="mainprojects-item-stat__caption">ROI</div>
            </div>
            <div class="mainprojects-item-stat">
                <div class="mainprojects-item-stat__number">x{{ item.max }}</div>
                <div class="mainprojects-item-stat__caption">Max</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['item']
}
</script>