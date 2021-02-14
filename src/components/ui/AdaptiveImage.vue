<template>
  <picture>
    <source :srcset="desktopSrc" media="(min-width: 768px)">
    <source :srcset="tabletSrc" media="(min-width: 400px)">
    <img :class="className" :src=" mobileSrc " alt="">
  </picture>
</template>

<script>
export default {
  props: ['desktopSrc', 'tabletSrc', 'mobileSrc', 'className']
}
</script>

<style lang="scss">

</style>
