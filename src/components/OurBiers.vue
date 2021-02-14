<template>
  <section class="intro">
    <div class="intro__text" :style="'background-image: url('+ $static.home.acf.intro.smallImage +')'">
      <h2 class="title">{{ $static.home.acf.intro.title }}</h2>
      <p>{{ $static.home.acf.intro.text }}</p>
      <Link link="/le-nostre-birre">{{ $static.home.acf.intro.linkText }}</Link>
    </div>
    <div class="intro__img">
      <img :src="$static.home.acf.intro.bigImage" alt="">
    </div>
  </section>
</template>
<static-query>
query {
  home: wordPressPage (id: "8") {
    acf {
      intro {
        title
        text
        linkText
        smallImage
        bigImage
      }
    }
  }
}
</static-query>
<script>
import Link from "./ui/Link";

export default {
  components: {
    Link
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";
.intro {
  display: flex;
  margin-bottom: 50px;
  @include border;
}
@media screen and (max-width: 1300px) {
  .intro {
    display: table;
    margin: 0 auto 50px;
    max-width: 800px;
  }
}
.intro .title {
  margin-bottom: 20px;
}
.intro__text, .intro__img {
  flex: 1;
}
.intro img {
  display: block;
}
.intro__text {
  display: flex;
  flex-direction: column;
  padding: 80px 80px 50px 40px;
  background-size: 260px;
  background-position: center bottom;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1700px) {
  .intro__text {
    background-size: 20%;
  }
}
@media screen and (max-width: 1440px) {
  .intro__text {
    padding-top: 40px;
  }
}
@media screen and (max-width: 1400px) {
  .intro__text {
    background-size: 100px;
  }
}
@media screen and (max-width: 1300px) {
  .intro__text {
    margin-bottom: 50px;
    height: 400px;
    background-size: 180px;
  }
}
@media screen and (max-width: 820px) {
  .intro__text {
    background-size: 20%;
  }
}
@media screen and (max-width: 700px) {
  .intro__text {
    padding: 40px;
    height: auto;
    background-image: none !important;
  }
}
.intro__text p {
  text-align: justify;
}
@media screen and (max-width: 1300px) {
  .intro__text p {
    margin-bottom: 30px;
  }
}
.intro__text .link {
  margin-top: auto;
}
</style>
