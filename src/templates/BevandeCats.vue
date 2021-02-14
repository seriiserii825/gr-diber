<template>
<Layout>
  <h2>Bevande: {{ $page.cats.name }}</h2>
</Layout>
</template>

<page-query>
query ($id: ID!) {
  cats: bevandeCats(id: $id) {
    name
  }
}
</page-query>

<script>
export default {

}
</script>

<style lang="scss">

</style>
