<template>
  <Layout>
    <SectionIntro :title="$page.wordPressPage.content" :image="$page.wordPressPage.featuredMedia.sourceUrl"/>
    <Servizi/>
  </Layout>
</template>
<page-query>
query { wordPressPage(id: "106") { title content featuredMedia { sourceUrl } } }
</page-query>
<script>
import SectionIntro from "../components/SectionIntro";
import Servizi from "../components/Servizi";

export default {
  components: {
    SectionIntro,
    Servizi
  },
  mounted () {
    console.log(this.$page.wordPressPage.content);
  }
}
</script>

<style scoped>

</style>
