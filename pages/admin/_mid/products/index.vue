<template>
  <div class="add-product-container container">
    <h1>Choose Product</h1>
    <list-items :items="products" state="product" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },

  methods: {
    async fetchData() {
      const respProducts = await this.$axios.$get(`/products`)
      this.products = respProducts
    },
  },

  async mounted() {
    this.fetchData()
  },
}
</script>

<style lang="scss">
.add-product-container {
  justify-content: start !important;

  h1 {
    padding: 3rem 0rem;
  }
}
</style>
