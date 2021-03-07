<template>
  <div>
    <vs-card v-show="product">
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
        <div class="text-box">
          <h3>quantity :</h3>
          <p>{{ product.quantity }}</p>
        </div>
        <vs-button
          class="btn-buy"
          color="success"
          @click="decreaseProduct(product.id)"
          >Buy Products</vs-button
        >
      </template>
    </vs-card>
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
    state: {
      require: true,
      type: String,
    },
  },

  data() {
    return {
      isConfirm: false,
    }
  },

  methods: {
    navigate(path) {
      this.$router.push(path)
    },
    decreaseProduct(id) {
      const payload = {
        machineId: parseInt(this.$route.params.mid),
        productId: id,
      }
      const resp = this.$axios.$put(
        `/machines/${this.$route.params.mid}/products`,
        payload
      )

      if (resp) {
        alert('Buy Success!')
        window.location.reload()
      }
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
