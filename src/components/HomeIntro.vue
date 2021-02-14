<template>
  <div class="home-intro">
    <g-image :src="$static.home.featuredMedia.sourceUrl" width="1920" />
    <div class="home-intro__content">
      <h1 class="home-intro__title">{{ $static.home.acf.homeIntro.title }}</h1>
      <h2 class="home-intro__subtitle">
        {{ $static.home.acf.homeIntro.subtitle }}
      </h2>
      <Link link="/le-nostre-birre">{{ $static.home.acf.homeIntro.link }}</Link>
    </div>
  </div>
</template>

<static-query>
query {
  home: wordPressPage (id: "8") {
    title
    acf {
      homeIntro {
        title
        subtitle
        link
      }
    }
    featuredMedia {
      sourceUrl
    }
  }
}
</static-query>

<script>
import Link from "./ui/Link";

export default {
  data() {
    return {
      homeIntroImg: "assets/images/home-intro.jpg",
    };
  },
  components: {
    Link,
  },
};
</script>

<style lang="scss">
.home-intro {
  position: relative;
  height: 800px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    @media screen and (max-width: 576px) {
      object-position: 70%;
    }
  }
  &__content {
    position: absolute;
    top: 30%;
    left: 80px;
    z-index: 2;
    @media screen and (max-width: 576px) {
      left: 30px;
    }
  }
  &__subtitle {
    margin-bottom: 64px;
  }
}
</style>
