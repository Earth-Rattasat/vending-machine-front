<template>
  <div class="create-new-product container">
    <h1>Create new product</h1>
    <form class="insert-info" @submit.prevent="createSummit">
      <text-input title="name" v-model="name" :required="true" />
      <text-input title="price" v-model="price" :required="true" />
      <vs-button class="btn-create-product" color="success" type="submit"
        >Create</vs-button
      >
    </form>
  </div>
</template>

<script>
import TextInput from '~/components/TextInput.vue'
export default {
  components: { TextInput },
  data() {
    return {
      name: '',
      price: 0,
    }
  },
  methods: {
    createSummit() {
      const resp = this.$axios.$post('/products', {
        name: this.name,
        price: parseInt(this.price),
      })

      if (resp) {
        alert('Create success')
        this.$router.push('/admin')
      }
    },
  },
}
</script>

<style lang="scss">
.create-new-product {
  .insert-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;

    .btn-create-product {
      margin: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
}
</style>
