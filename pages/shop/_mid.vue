<template>
  <div class="choose-product-container container">
    <h1>Choose Product</h1>
    <list-items :items="products" state="product" />
  </div>
</template>

<script>
export default {
  name: 'buyProducts',
  data() {
    return {
      products: [],
    }
  },

  methods: {
    async fetchProducts() {
      const resp = await this.$axios.$get(
        `/machines/${this.$route.params.mid}/products`
      )
      this.products = resp.Product_Machine
    },
  },

  async mounted() {
    this.fetchProducts()
  },
}
</script>

<style lang="scss">
.choose-product-container {
  justify-content: start !important;

  h1 {
    padding: 3rem 0rem;
  }
}
</style>
