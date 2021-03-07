<template>
  <div class="list-items-container" v-if="items.length > 0">
    <div class="grid-container" v-if="state == 'machine'">
      <machine-card
        v-for="(item, index) in items"
        :key="index"
        :machine="item"
        :state="state"
      />
    </div>
    <div class="grid-container" v-if="state == 'product'">
      <product-card
        v-for="(item, index) in products"
        :key="index"
        :product="item"
        :state="state"
      />
    </div>
  </div>
</template>

<script>
import MachineCard from './MachineCard.vue'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    MachineCard,
    ProductCard,
  },
  props: {
    items: {
      require: true,
      type: Array,
    },
    state: {
      require: true,
      type: String,
    },
  },
  computed: {
    products() {
      if (this.state === 'product') {
        return this.items.map((item) => {
          const product = item.product
          return Object.assign(product, { quantity: item.quantity })
        })
      } else return []
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.list-items-container {
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
  }
}
</style>
