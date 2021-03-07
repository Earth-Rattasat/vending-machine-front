<template>
  <div class="container">
    <h1 class="title">
      <h1 class="text-primary">D</h1>
      rinking
      <h1 class="text-primary">V</h1>
      ending
      <h1 class="text-primary">M</h1>
      achine
    </h1>
    <div class="site-box">
      <vs-button class="site-btn" @click="navigate('/shop')"> Shop </vs-button>
      <vs-button class="site-btn" @click="navigate('/admin')">
        Admin
      </vs-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'

export default class Home extends Vue {
  private navigate(path: string): void {
    this.$router.push(path)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.title {
  display: flex;
}

.site-box {
  display: flex;
  justify-content: center;

  .site-btn {
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 3rem 2rem;
  }
}
</style>
