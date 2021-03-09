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
      <vs-button class="site-btn" @click="$router.push('/shop')">
        Shop
      </vs-button>
      <vs-button class="site-btn" @click="$router.push('/admin')">
        Admin
      </vs-button>
      <span class="notification">{{ noti.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noti: [],
    }
  },
  async mounted() {
    this.$axios.$get(`/machines/notification`).then((resp) => {
      this.noti = resp
    })
  },
}
</script>

<style lang="scss">
.title {
  display: flex;
}

.site-box {
  display: flex;
  justify-content: center;
  position: relative;

  .site-btn {
    font-size: 2rem;
    padding: 1rem 2rem;
    margin: 3rem 2rem;
  }

  .notification {
    position: absolute;
    background: #dd403a;
    border-radius: 50%;
    padding: 1rem 1.5rem;
    z-index: 1;
    right: 2%;
    top: 15%;

    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
}
</style>
