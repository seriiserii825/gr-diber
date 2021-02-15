<template>
  <transition name="fade" appear>
    <div class="alte-bevande__item " :class="classList">
      <a target="_blank" rel="noreferrer" :href="url" class="alte-bevande__img">
        <img :src="image" width="430" height="432" alt="" class="aligncenter">
        <span></span> <span></span> <span></span> <span></span> </a>
      <h3 class="title">{{ title }}</h3>
      <a class="link" target="_blank" rel="noreferrer" :href="url"> <span> Visita il sito</span> </a>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['url', 'title', 'image', 'className'],
  data () {
    return {
      classList: ''
    }
  },
  mounted () {
    this.className.forEach(item => {
      this.classList += ' ' + item.slug;
    });
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}
</style>
