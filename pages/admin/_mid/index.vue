<template>
  <div class="machine-info container">
    <h1>Machine Info</h1>
    <div class="info">
      <h2 class="title">Info</h2>
      <text-info
        v-for="(key, index) in Object.entries(machine)"
        :key="index"
        :title="key[0]"
        :value="key[1]"
      />
    </div>
    <div class="gg-map">
      <google-map :position="position" />
    </div>
    <div class="products">
      <h2 class="title">Products</h2>
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
import GoogleMap from '~/components/GoogleMap.vue'
import ListItems from '~/components/ListItems.vue'
import TextInfo from '~/components/TextInfo.vue'

export default {
  components: {
    TextInfo,
    ListItems,
    GoogleMap,
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

  computed: {
    position() {
      if (this.machine.latitude != null && this.machine.longtitude != null) {
        return {
          lat: this.machine.latitude,
          lng: this.machine.longtitude,
        }
      } else {
        return {
          // default scg bangkok headquarter
          lat: 13.806775021754564,
          lng: 100.53783240739828,
        }
      }
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
    .title {
      padding: 1rem 0rem;
      font-size: 3rem;
    }
    padding: 1rem;
  }
}
@media only screen and (max-width: 768px) {
  .machine-info {
    .info {
      width: 80%;
    }

    .products,
    .info {
      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style>
