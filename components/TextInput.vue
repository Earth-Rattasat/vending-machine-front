<template>
  <div class="info-text">
    <h4 class="flex-1">{{ title }} :</h4>
    <input v-model="dataValue" class="flex-1" :required="required" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String | Number ,
    required: Boolean,
  },
  computed: {
    dataValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss">
.info-text {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;

  h4 {
    margin-right: 1rem;
  }

  .flex-1 {
    flex: 1 1 0%;
    text-align: left;
  }
}
</style>
