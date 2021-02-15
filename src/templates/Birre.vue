<template>
  <Layout>
    <div class="single-product">
      <div class="single-product__image">
        <img width="430" height="432" :src="image"/>
      </div>
      <div class="single-product__content">
        <h1 class="single-product__title">{{ title }}: {{ subtitle }}</h1>
        <div class="single-product__content-wrap">
          <div class="single-product__text" v-html="content"></div>
          <div class="single-product__link">
            <Link blank="true" :link="url">{{ urlText }}</Link>
          </div>
        </div>

        <div class="single-product__data">
          <ul class="single-product__list">
            <li v-for="file in files" :key="file.linkText">
              <Link class-name="link--reverse" blank="true" :link="file.file">{{ file.linkText }}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!) {
  birre: wordPressLeNostreBirre (id: $id) {
    title
    content
    slug
    featuredMedia {
      sourceUrl
    }
    acf {
      birre {
        subtitle
        url
        urlText
        files {
          file
          linkText
        }
      }
    }
  }
}
</page-query>
<script>
import Link from "../components/ui/Link";

export default {
  data () {
    return {
      title: '',
      subtitle: '',
      image: '',
      content: '',
      url: '',
      urlText: '',
      files: []
    }
  },
  mounted () {
    this.title = this.$page.birre.title;
    this.subtitle = this.$page.birre.acf.birre.subtitle;
    this.image = this.$page.birre.featuredMedia.sourceUrl;
    this.content = this.$page.birre.content;
    this.url = this.$page.birre.acf.birre.url;
    this.urlText = this.$page.birre.acf.birre.urlText;
    this.files = this.$page.birre.acf.birre.files;
  },
  components: {
    Link
  }
}
</script>

<style lang="scss">
.single-product {
  display: flex;
  padding: 100px 0 80px;
}
.single-product a {
  transition: all .3s;
}
.single-product a:visited {
  color: #008bcf;
}
.single-product a:hover {
  color: white;
}
@media screen and (max-width: 1100px) {
  .single-product {
    display: block;
  }
}
.single-product__image {
  margin-right: 50px;
  text-align: center;
  width: 550px;
}
@media screen and (max-width: 1100px) {
  .single-product__image {
    margin-bottom: 30px;
    width: 260px;
    text-align: left;
  }
}
.single-product__content-wrap {
  display: flex;
  margin-bottom: 62px;
}
@media screen and (max-width: 1380px) {
  .single-product__content-wrap {
    display: block;
  }
}
.single-product__title {
  margin-bottom: 30px;
  font-size: 48px;
  line-height: 1;
  font-weight: normal;
}
@media screen and (max-width: 768px) {
  .single-product__title {
    font-size: 30px;
  }
}
.single-product__text {
  flex: 0 0 834px;
  margin-right: 50px;
}
.single-product__text p {
  margin-bottom: 10px;
}
@media screen and (max-width: 1380px) {
  .single-product__text {
    margin-bottom: 30px;
  }
}
.single-product__data {
  padding: 54px;
  max-width: 850px;
  border: 2px solid #008bcf;
}
@media screen and (max-width: 470px) {
  .single-product__data {
    padding: 30px;
  }
}
.single-product__link {
  display: block;
  position: relative;
  padding-left: 22px;
}
.single-product__link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 61px;
  background: #008bcf;
}
.single-product__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 900px) {
  .single-product__list {
    display: block;
  }
}
.single-product__list a {
  line-height: 2.4;
}
@media screen and (max-width: 900px) {
  .single-product__list a {
    margin-bottom: 20px;
    line-height: 1.4;
  }
}
@media screen and (max-width: 470px) {
  .single-product__list a {
    font-size: 12px;
  }
}
</style>
