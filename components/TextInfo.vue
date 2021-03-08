<template>
  <div class="info-text">
    <h4 class="flex-1">{{ title }} :</h4>
    <span class="flex-1">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String | Number,
  },
}
</script>

<style lang="scss">
.info-text {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;

  .flex-1 {
    flex: 1 1 0%;
    text-align: left;
  }
}
</style>
