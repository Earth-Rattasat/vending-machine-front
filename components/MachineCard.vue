<template>
  <vs-card v-show="machine">
    <template #title>
      <h2>{{ machine.name }}</h2>
    </template>
    <template #img>
      <img src="../assets/images/machine.png" />
    </template>
    <template #text>
      <div class="text-box">
        <h3>Location</h3>
        <p>{{ machine.address }}</p>
      </div>
      <vs-button
        class="btn-buy"
        color="success"
        @click="navigate(`/shop/${machine.id}`)"
        >Buy Products</vs-button
      >
    </template>
  </vs-card>
</template>

<script>
export default {
  name: 'machine-card',
  props: {
    machine: {
      require: true,
      type: Object,
    },
    state: {
      require: true,
      type: String,
    },
  },

  methods: {
    navigate(path) {
      this.$router.push(path)
    },
  },
}
</script>

<style lang="scss">
.text-box {
  display: flex;
  align-content: center;
  padding: 1rem;
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
