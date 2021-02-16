<template>
  <Layout>
    <h1>Title from developer</h1>
    <HomeIntro/>
    <OurBiers/>
    <CategoriesBlock/>
    <Servizi/>
  </Layout>
</template>

<script>
import HomeIntro from "../components/HomeIntro";
import OurBiers from "../components/OurBiers";
import CategoriesBlock from "../components/CategoriesBlock";
import Servizi from "../components/Servizi";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    HomeIntro,
    OurBiers,
    CategoriesBlock,
    Servizi,
  }
}
</script>
<style>
body {
  user-select: none;
}
</style>
