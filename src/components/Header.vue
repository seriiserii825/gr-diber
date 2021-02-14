<template>
  <header class="main-header">
    <div class="main-header__wrap">
      <Sandwich @click.native="toggleMobileMenu"/>
      <ul class="main-menu" :class="{'active': showMobileMenu}" id="js-main-menu">
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/le-nostre-birre/">Le nostre birre</g-link>
        </li>
        <li>
          <g-link to="/altre-bevande/">Altre bevande</g-link>
        </li>
        <li>
          <g-link to="/servizi/">Servizi</g-link>
        </li>
        <li>
          <g-link to="/chi-siamo">Chi siamo</g-link>
        </li>
        <li>
          <g-link to="/contatti">Contatti</g-link>
        </li>
      </ul>
      <g-link class="logo" to="/">
        <img src="../assets/images/logo.svg" alt="">
      </g-link>
      <ul class="header-socials">
        <li v-for="social in socials" :key="social.link"><a target="_blank" :href="social.link" v-html="social.svg"></a></li>
      </ul>
    </div>
  </header>
</template>
<script>
import Sandwich from "./Sandwitch";

export default {
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  },
  components: {
    Sandwich
  },
  computed: {
    socials () {
      return this.$store.state.stSocials.socials;
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";
@keyframes scale {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
.header-socials svg {
  fill: $social_color;
}
.main-header__wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid rgba(white, .3);
  @media screen and (max-width: 992px) {
    height: 80px;
  }
}
.main-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
}
@media screen and (max-width: 1200px) {
  .main-menu {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100vh;
    text-align: center;
    background: #000;
    z-index: 1000;
    border: 2px solid $social_color;
    &.active {
      display: flex;
      flex-direction: column;
      animation: scale .4s forwards ease-in;
    }
  }
}
.main-menu a {
  display: block;
  padding: 0 32px;
  color: #808080;
  transition: all .3s;
}
@media screen and (max-width: 1180px) {
  .main-menu a {
    padding: 16px;
  }
}
.main-menu a.active--exact,
.main-menu a:hover {
  color: white;
}
.main-menu li:nth-child(3) {
  margin-right: 110px;
}
@media screen and (max-width: 1180px) {
  .main-menu li:nth-child(3) {
    margin-right: 0;
  }
}
.main-menu li:nth-child(4) {
  margin-left: 110px;
}
@media screen and (max-width: 1180px) {
  .main-menu li:nth-child(4) {
    margin-left: 0;
  }
}
.main-menu li.current-menu-item a {
  color: #fff;
}
.logo {
  position: absolute;
  top: 18px;
  left: 52%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: block;
  z-index: 10000;
  @media screen and (max-width: 576px) {
    width: 80px;
  }
}
@media screen and (max-width: 1180px) {
  .logo {
    left: 20px;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.header-socials {
  position: absolute;
  top: 38px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    right: 100px;
  }
}
.header-socials a {
  display: block;
  margin-right: 10px;
  transition: all .3s;
  opacity: .8;
  svg {
    height: 20px;
  }
}
.header-socials a:hover {
  opacity: 1;
}
.header-socials a i {
  font-size: 20px;
  color: #008bcf;
}
.link {
  color: #008bcf;
  transition: all .3s;
  -webkit-transform: scale(1);
  transform: scale(1);
  &.exact {
    color: white;
  }
}
.link:hover {
  color: white;
  -webkit-transform: scale(1.004);
  transform: scale(1.004);
}
.link:hover i {
  color: white;
}
.link.link--reverse {
  display: flex;
  align-items: center;
}
.link.link--reverse span {
  order: 1;
  margin-right: 0;
  margin-left: 8px;
}
.link.link--reverse i {
  transition: all .3s;
}
.link span {
  display: inline-block;
  margin-right: 10px;
}
</style>
