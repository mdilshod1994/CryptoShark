<template>
  <div class="container">
    <HomeIntro />
    <mainprojects />
    <MainStatisticList />
    <MainNews />
    <TrendsCoins />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/components/main/Home/HomeIntro.vue'
import Mainprojects from '@/components/main/Home/projects/Mainprojects.vue';
import MainStatisticList from '@/components/main/Home/statistic/MainStatisticList.vue';
import MainNews from '@/components/main/Home/news/MainNews.vue';
import TrendsCoins from '@/components/reusecomponents/trend-coins/TrendsCoins.vue';
export default {
  head() {
    return {
      title: "CryptoShark"
    }
  },
  name: "IndexPage",
  components: {
    HomeIntro,
    Mainprojects,
    MainStatisticList,
    MainNews,
    TrendsCoins
  },
  async mounted() {
    const accessData = this.$cookies.get('user')
    if (accessData) {
      this.$store.commit('user/setData')
    }
    await this.$store.dispatch('news/getNewsType1', 8)
  }
};
</script>