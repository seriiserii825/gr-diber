<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer/>
  </div>
</template>

<static-query>
query { metadata { siteName } }
</static-query>

<script>
import Header from "~/components/Header.vue";
import Footer from "../components/Footer/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@import "../assets/scss/my";
</style>
