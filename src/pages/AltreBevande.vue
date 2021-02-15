<template>
  <Layout>
    <div class="alte-bevande" id="js-alte-bevande">
      <ul class="alte-bevande__list" id="js-alte-bevande__list">
        <AlteBevandeLi
          v-for="item in cats"
          :key="item.node.id"
          :title="item.node.name"
          :image="item.node.acf.image_horizontal"
          @click.native="filterBevande(item.node.slug)"
        />
      </ul>
      <div class="alte-bevande__content">
        <AlteBevandeItem
          v-if="filtered.length === 0"
          v-for="item in bevande"
          :key="item.node.id"
          :title="item.node.title"
          :image="item.node.featuredMedia.sourceUrl"
          :url="item.node.acf.url"
          :className="item.node.bevandeCat"
        />
        <AlteBevandeItem
          v-if="filtered.length > 0"
          v-for="item in filtered"
          :key="item.node.id"
          :title="item.node.title"
          :image="item.node.featuredMedia.sourceUrl"
          :url="item.node.acf.url"
          :className="item.node.bevandeCat"
        />
      </div>
    </div>
  </Layout>
</template>
<static-query>
query {
  bevande: allWordPressAltreBevande {
    edges {
      node {
        id
        title
        featuredMedia {
          sourceUrl
        }
        acf {
          url
        }
        bevandeCat {
          slug
        }
      }
    }
  }
  cats: allBevandeCats {
    edges {
      node {
        id
        slug
        name
        acf {
          image {
            url
          }
          image_horizontal
        }
      }
    }
  }
}
</static-query>
<script>
import AlteBevandeItem from "../components/AlteBevande/AlteBevandeItem";
import AlteBevandeLi from "../components/AlteBevande/AlteBevandeLi";

export default {
  data () {
    return {
      bevande: [],
      cats: [],
      filtered: []
    }
  },
  mounted () {
    this.bevande = this.$static.bevande.edges;
    this.cats = this.$static.cats.edges;
  },
  components: {
    AlteBevandeItem,
    AlteBevandeLi
  },
  methods: {
    filterBevande (value) {
      this.filtered = this.bevande.filter(item => {
        let classString = '';
        item.node.bevandeCat.forEach(cat => {
          classString += cat.slug + ' ';
        });
        return classString.split(" ").includes(value);
      });
    }
  }
}
</script>

<style>
.alte-bevande {
  display: flex;
  padding: 80px 0;
}
.alte-bevande__content {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.alte-bevande__item {
  flex: 0 0 30%;
  margin-bottom: 30px;
  margin-right: 30px;
}
@media screen and (max-width: 1500px) {
  .alte-bevande__item {
    flex: 0 0 48%;
    margin-right: 30px;
  }
  .alte-bevande__item:nth-child(3n) {
    margin-right: 30px;
  }
  .alte-bevande__item:nth-child(2n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 1300px) {
  .alte-bevande__item {
    flex: 0 0 46%;
  }
}
@media screen and (max-width: 992px) {
  .alte-bevande__content {
    display: block;
  }
  .alte-bevande__item {
    margin-right: 0;
  }
  .alte-bevande__item:nth-child(3n) {
    margin-right: 0;
  }
}
.alte-bevande__content .alte-bevande__img {
  display: block;
  border: 2px solid #008bcf;
}
.alte-bevande__item {
  display: block;
}
@media screen and (max-width: 430px) {
  .alte-bevande__content {
    display: block;
  }
  .alte-bevande__item {
    margin-bottom: 40px;
  }
}
.alte-bevande__item .link {
  font-size: 16px;
}
.alte-bevande__img img {
  display: block;
}
.alte-bevande__list {
  flex: 0 0 420px;
  margin-right: 40px;
}
.alte-bevande__list li {
  position: relative;
  flex: 0 0 48%;
  margin-bottom: 10px;
  transition: all .3s;
  cursor: pointer;
}
@media screen and (max-width: 1200px) {
  .alte-bevande {
    display: block;
  }
  .alte-bevande__list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 992px) {
  .alte-bevande__list {
    display: block;
  }
}
@media screen and (max-width: 430px) {
  .alte-bevande__list {
    display: block;
    margin-right: 0;
  }
}
.alte-bevande__list li.mixitup-control-active .alte-bevande__img {
  box-shadow: 0px 0px 0px 2px #008bcf inset;
}
.alte-bevande__list li.mixitup-control-active .alte-bevande__img::after {
  background: #008bcf;
}
.alte-bevande__list li .alte-bevande__img {
  position: relative;
  box-shadow: 0px 0px 0px 2px transparent inset;
  height: 190px;
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  transition: .3s;
}
.page-template-page-bevande .alte-bevande__list li .alte-bevande__img {
  background-size: cover;
}
.alte-bevande__list li .alte-bevande__img:hover {
  box-shadow: 0px 0px 0px 2px #008bcf inset;
}
.alte-bevande__list li .alte-bevande__img:hover::after {
  background: #008bcf;
}
.alte-bevande__list li .alte-bevande__img::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background: transparent;
  transition: .3s;
}
.alte-bevande__list li img {
  display: block;
}
.alte-bevande__list .title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  transition: all .3s;
}
</style>
