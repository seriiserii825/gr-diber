<template>
  <Layout>
    <SectionIntro :image="$page.wordPressPage.featuredMedia.sourceUrl"/>
    <div class="container">
      <div class="about__content">
        <div class="about__item">
          <div class="about__big-item" :style="`background-image: url(${$page.wordPressPage.acf.chiSiamo.block3Image})`">
            <div class="about__big-item-content">
              <h2 class="title">{{ $page.wordPressPage.acf.chiSiamo.block3Title }}</h2>
              <p>{{ $page.wordPressPage.acf.chiSiamo.block3Text }}</p>
            </div>
          </div>
        </div>
        <div class="about__item">
          <div class="about__small-item">
            <h1 class="title">{{ $page.wordPressPage.acf.chiSiamo.block1Title }}</h1>
            <p>{{ $page.wordPressPage.acf.chiSiamo.block1Text }}</p>
          </div>
          <div class="about__small-item">
            <h2 class="title">{{ $page.wordPressPage.acf.chiSiamo.block2Title }}</h2>
            <p>{{ $page.wordPressPage.acf.chiSiamo.block2Text }}</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  wordPressPage(id: "109") {
    title
    content
    featuredMedia {
      sourceUrl
    }
    acf {
      chiSiamo {
        block1Title
        block1Text
        block2Title
        block2Text
        block3Title
        block3Text
        block3Image
      }
    }
  }
}
</page-query>
<script>
import SectionIntro from "../components/SectionIntro";

export default {
  components: {
    SectionIntro
  }
}
</script>

<style scoped>
.about__content {display: flex;margin-bottom: 50px;}
.about__item {flex: 1;margin-right: 30px;}
.about__item:first-child {margin-right: 0;order: 2;}
.about__item:last-child {display: flex;flex-direction: column;}
@media screen and (max-width: 1300px) {
  .about__content {display: block;margin: 0 auto 50px;max-width: 1100px;}
  .about__item:last-child {margin-right: 0;}
}
.about__content .title {margin-bottom: 16px;font-weight: bold;}
.about__small-item, .about__big-item {position: relative;height: 100%;border: 2px solid #008bcf;}
.about__small-item {padding: 34px;}
.about__small-item:first-child {margin-bottom: 34px;}
.about__small-item p {margin-bottom: 10px;}
.about__big-item {position: relative;background-size: cover;background-repeat: no-repeat;background-position: center;}
@media screen and (max-width: 1300px) {
  .about__big-item {margin-bottom: 34px;height: 400px;}
}
.about__big-item-content {position: absolute;bottom: 34px;left: 34px;right: 34px;}
</style>
