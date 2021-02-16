<template>
  <div class="categories-block">
    <div class="categories-block__item" v-for="item in $static.cats.edges" :key="item.node.id">
      <AdaptiveImage
        :desktop-src="item.node.acf.image.sizes.desktop"
        :tablet-src="item.node.acf.image.sizes.tablet"
        :mobile-src="item.node.acf.image.sizes.mobile"
      />
      <div class="categories-block__footer">
        <h4 class="title">{{ item.node.name }}</h4>
        <g-link class="link" to="/altre-bevande/"><span> Vai al catalogo</span><i class="fas fa-chevron-circle-right"></i></g-link>
      </div>
    </div>
  </div>
</template>
<static-query>
{
  cats: allBevandeCats {
    edges {
      node {
        id
        name
        slug
        acf {
          image {
            sizes {
              desktop
              tablet
              mobile
            }
          }
        }
      }
    }
  }
}
</static-query>
<script>
export default {}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.categories-block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-bottom: 50px;
}
@media screen and (max-width: 992px) {
  .categories-block {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 540px) {
  .categories-block {
    display: block;
  }
}
.categories-block__item {
  position: relative;
  height: 500px;
  border: 2px solid $accent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1200px) {
    height: 300px;
  }
  @media screen and (max-width: 992px) {
    height: 400px;
  }
  @media screen and (max-width: 540px) {
    height: 500px;
  }
  picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
@media screen and (max-width: 768px) {
  .categories-block__item {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 400px) {
  .categories-block__item {
    height: 300px;
  }
}
.categories-block__footer {
  position: absolute;
  left: 24px;
  bottom: 24px;
}
</style>
