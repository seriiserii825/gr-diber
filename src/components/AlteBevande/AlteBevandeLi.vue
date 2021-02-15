<template>
  <li data-filter=".bibite">
    <div class="alte-bevande__img" :style="`background-image: url(${image})`"></div>
    <h2 class="title">{{ title }}</h2>
  </li>
</template>

<script>
export default {
  props: ['image', 'title']
}
</script>

<style lang="scss">

</style>
