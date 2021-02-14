<template>
  <div class="section__intro">
    <img :src="image" alt="">
    <h2 class="section__title" v-html="title"></h2>
  </div>
</template>

<script>
export default {
  props: ['image', 'title']
}
</script>

<style lang="scss">
.section__intro {
  position: relative;
  margin-bottom: 33px;
  height: 730px;
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
}
@media screen and (max-width: 968px) {
  .section__intro {
    height: 400px;
  }
}
.section__title {
  position: absolute;
  bottom: 60px;
  left: 85px;
  font-size: 30px;
  font-weight: bold;
  z-index: 2;
}
@media screen and (max-width: 601px) {
  .section__title {
    left: 30px;
  }
}
</style>
