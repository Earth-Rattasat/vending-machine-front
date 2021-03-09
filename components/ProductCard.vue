<template>
  <div class="relative">
    <vs-card class="product-card" v-show="product">
      <template #title>
        <h2>{{ product.name }}</h2>
      </template>
      <template #img>
        <img src="../assets/images/product.png" />
      </template>
      <template #text>
        <div class="text-box">
          <h3>Price :</h3>
          <p>{{ product.price }}</p>
        </div>
        <div class="text-box" v-if="!isAddProduct">
          <h3>quantity :</h3>
          <span v-bind:class="{ 'text-red': product.quantity < 10 && isAdmin }">
            {{ product.quantity }}
          </span>
          <span
            v-show="product.quantity < 10 && product.quantity != 0 && isAdmin"
            class="text-red text-warning"
            >(almost sold out)</span
          >
        </div>
        <vs-button
          class="btn-buy"
          color="success"
          v-if="!isAdmin"
          :disabled="product.quantity == 0"
          @click="decreaseProduct(product.id)"
          >Buy Products</vs-button
        >
        <form
          class="add-product"
          v-if="isAdmin && isAddProduct"
          @submit.prevent="addProductToMachine(product.id)"
        >
          <vs-input
            class="add-product-item"
            v-model="quantity"
            type="tel"
            placeholder="Enter quantity"
            required
          />
          <vs-button class="add-product-item" color="success" type="submit"
            >Add to Machine</vs-button
          >
        </form>
      </template>
    </vs-card>
    <img
      v-show="product.quantity === 0 && !isAdmin"
      class="sold-out-img"
      src="../assets/images/sold-out.png"
    />
    <img
      v-show="product.quantity === 0 && isAdmin"
      class="out-of-stock-img"
      width="300"
      src="../assets/images/out-of-stock.png"
    />
    <img
      v-show="product.quantity < 10 && product.quantity !== 0 && isAdmin"
      class="warning-img"
      width="200"
      src="../assets/images/warning.png"
    />
  </div>
</template>

<script>
export default {
  name: 'machine-card',
  props: {
    product: {
      require: true,
      type: Object,
    },
  },

  data() {
    return {
      isConfirm: false,
      quantity: undefined,
    }
  },

  methods: {
    navigate(path) {
      this.$router.push(path)
    },
    async addProductToMachine(id) {
      const payload = {
        productId: id,
        quantity: parseInt(this.quantity),
      }

      const resp = await this.$axios.$post(
        `/machines/${this.$route.params.mid}/products`,
        payload
      )

      if (await resp) {
        alert('Add Product Success!')
        this.$router.push(`/admin/${this.$route.params.mid}`)
      }
    },
    async decreaseProduct(id) {
      const payload = {
        machineId: parseInt(this.$route.params.mid),
        productId: id,
      }
      const resp = await this.$axios.$put(
        `/machines/${this.$route.params.mid}/products`,
        payload
      )

      if (await resp) {
        alert('Buy Success!')
        window.location.reload()
      }
    },
  },
  computed: {
    isAdmin() {
      return this.$route.name.includes('admin')
    },
    isAddProduct() {
      return this.$route.name === 'admin-mid-products'
    },
  },
}
</script>

<style lang="scss">
.text-box {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  width: 100%;

  h3 {
    margin-right: 1rem;
  }
}

.relative {
  position: relative;
}

.product-card .vs-card-content {
  height: 100%;
}

.sold-out-img {
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 5%;
}

.warning-img {
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 20%;
}

.text-red {
  color: #dd403a;
  font-weight: bold;
}

.text-warning {
  margin-left: 0.5rem;
}

.out-of-stock-img {
  position: absolute;
  z-index: 1;
  top: 16%;
  left: 7%;
}

.add-product {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .add-product-item {
    margin: 0.5rem;
  }
}

.btn-buy {
  padding: 0.5rem;
  font-size: 18px;
  font-weight: bold;
}

.vs-card__text {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
}
</style>
