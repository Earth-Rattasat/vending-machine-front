<template>
  <div class="machine-info container">
    <h1>Machine Info</h1>
    <div class="info">
      <h2>Info</h2>
      <text-info
        v-for="(key, index) in Object.entries(machine)"
        :key="index"
        :title="key[0]"
        :value="key[1]"
      />
    </div>
    <div class="products">
      <h2>Products</h2>
      <list-items :items="products" state="product" />
      <div class="btn-box">
        <vs-button
          class="btn-add"
          color="success"
          @click="$router.push(`/admin/${$route.params.mid}/products`)"
          >Add Product</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import ListItems from '~/components/ListItems.vue'
import TextInfo from '~/components/TextInfo.vue'

export default {
  components: {
    TextInfo,
    ListItems,
  },
  data() {
    return {
      machine: {},
      products: [],
    }
  },

  methods: {
    async fetchMachine() {
      const resp = await this.$axios.$get(`/machines/${this.$route.params.mid}`)
      this.machine = resp
    },
    async fetchProducts() {
      const resp = await this.$axios.$get(
        `/machines/${this.$route.params.mid}/products`
      )
      this.products = resp.Product_Machine
    },
  },

  mounted() {
    this.fetchMachine()
    this.fetchProducts()
  },
}
</script>

<style lang="scss">
.machine-info {
  justify-content: start !important;

  h1 {
    padding-top: 2rem;
  }

  .info {
    width: 50%;
  }

  .btn-box {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;

    .btn-add {
      font-size: 20px;
      padding: 0.5rem;
    }
  }

  .products,
  .info {
    h2 {
      padding: 1rem;
    }
    padding: 1rem;
  }
}
</style>
