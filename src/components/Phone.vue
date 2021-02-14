<template>
  <a target="_blank" :href="`tel:${phoneTransformed}`">{{ phone }}</a>
</template>

<script>
export default {
  props: ['phone'],
  computed: {
    phoneTransformed () {
      return this.phone.replace(/[^\d]/g, '');
    }
  }
}
</script>

<style lang="scss">

</style>
