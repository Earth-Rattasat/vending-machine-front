<template>
  <div class="create-new-machine container">
    <h1>Create new machine</h1>
    <form class="insert-info" @submit.prevent="createSummit">
      <text-input title="name" v-model="name" :required="true" />
      <text-input title="address" v-model="address" :required="true" />
      <text-input title="latitude" v-model="lat" :required="false" />
      <text-input title="longtitude" v-model="long" :required="false" />
      <vs-button class="btn-create-machine" color="success" type="submit"
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
      address: '',
      lat: null,
      long: null,
    }
  },
  methods: {
    createSummit() {
      const resp = this.$axios.$post('/machines', {
        name: this.name,
        address: this.address,
        latitude: parseFloat(this.lat),
        longtitude: parseFloat(this.long),
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
.create-new-machine {
  .insert-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;

    .btn-create-machine {
      margin: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
}
</style>
