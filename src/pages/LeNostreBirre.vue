<template>
  <Layout>
    <div class="products">
      <div class="product__item" v-for="item in $static.birre.edges" :key="item.id">
        <div class="product__img">
          <img :src="item.node.featuredMedia.sourceUrl" alt="">
        </div>
        <h3 class="title">{{ item.node.title }}</h3>
        <Link :link="item.node.url">Scopri tutte le birre</Link>
      </div>
    </div>
  </Layout>
</template>
<static-query>
query {
  birre: allWordPressLeNostreBirre {
    edges {
      node {
        id
        slug
        title
        featuredMedia {
          sourceUrl
        }
        acf {
          url
        }
      }
    }
  }
}
</static-query>
<script>
import Link from "../components/ui/Link";

export default {
  components: {
    Link
  }
}
</script>
<style lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  padding: 80px 0;
}
@media screen and (max-width: 1840px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 1300px;
  }
}
@media screen and (max-width: 1400px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    max-width: 856px;
  }
}
@media screen and (max-width: 946px) {
  .products {
    display: block;
    max-width: 414px;
  }
}
@media screen and (max-width: 946px) {
  .products .product__item {
    margin-bottom: 50px;
  }
}
.products .product__img {
  overflow: hidden;
}
@media screen and (max-width: 576px) {
  .product {
    margin-bottom: 50px;
  }
}
.product__img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #008bcf;
  height: 413px;
}
@media screen and (max-width: 446px) {
  .product__img {
    height: 290px;
    overflow: hidden;
  }
}
.product__img img {
  display: block;
}
</style>
