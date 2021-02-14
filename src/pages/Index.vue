<template>
  <Layout>
    <HomeIntro/>
    <OurBiers/>
    <CategoriesBlock/>
    <Servizi/>
    <Footer/>
  </Layout>
</template>

<script>
import HomeIntro from "../components/HomeIntro";
import OurBiers from "../components/OurBiers";
import CategoriesBlock from "../components/CategoriesBlock";
import Servizi from "../components/Servizi";
import Footer from "../components/Footer/Footer";
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    HomeIntro,
    OurBiers,
    CategoriesBlock,
    Servizi,
    Footer
  }
}
</script>
