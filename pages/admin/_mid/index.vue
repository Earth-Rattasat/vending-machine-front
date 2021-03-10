<template>
  <div class="machine-info container">
    <h1>Machine Info</h1>
    <tabs>
      <tab title="Info">
        <div class="info-tab">
          <div class="info">
            <h2 class="title">Info</h2>
            <div class="info-text-group">
              <text-info
                v-for="(key, index) in Object.entries(machine)"
                :key="index"
                :title="key[0]"
                :value="key[1]"
              />
            </div>
          </div>
          <div class="gg-map">
            <span>*If latitude or longtitude is { null } location default is SCG headquarter.</span>
            <google-map :position="position" />
          </div>
        </div>
      </tab>
      <tab title="Products">
        <div class="products">
          <div class="item-between">
            <h2 class="title">Products</h2>
            <vs-button
              class="btn-add"
              color="success"
              @click="$router.push(`/admin/${$route.params.mid}/products`)"
              >Add Product</vs-button
            >
          </div>
          <list-items :items="products" state="product" />
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-slim-tabs'
import GoogleMap from '~/components/GoogleMap.vue'
import ListItems from '~/components/ListItems.vue'
import TextInfo from '~/components/TextInfo.vue'

export default {
  components: {
    TextInfo,
    ListItems,
    GoogleMap,
    Tabs,
    Tab,
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

<style src="vue-slim-tabs/themes/default.css"></style>
<style lang="scss">
.machine-info {
  justify-content: start !important;

  h1 {
    padding-top: 2rem;
  }

  .info {
    width: 100%;

    .info-text-group {
      padding: 0rem 2rem;
    }
  }

  .gg-map {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;
  }

  .vue-tabs {
    width: 80%;
    margin: 2rem 0rem;
  }

  .vue-tab {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }

  .btn-add {
    font-size: 20px;
    padding: 0.5rem;
    height: 50px;
  }

  .item-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .products,
  .info {
    .title {
      text-align: left;
      padding: 1rem 2rem;
      font-size: 3rem;
    }
    padding: 1rem;
  }

  .info-tab,
  .products {
    background-color: white;
    border-radius: 5px;
    border-top-left-radius: 0px;
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
