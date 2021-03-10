<template>
  <vs-card v-show="machine">
    <template #title>
      <h2>{{ machine.name }}</h2>
    </template>
    <template #img>
      <img src="../assets/images/machine.png" />
    </template>
    <template #text>
      <div class="relative">
        <vs-button
          class="btn-buy"
          color="success"
          @click="navigate(`/${$route.name}/${machine.id}`)"
          >{{ btnContent }}</vs-button
        >
        <span v-show="machine.noti > 0" class="noti">{{ machine.noti }}</span>
      </div>
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
    btnContent: {
      default: 'Buy Product',
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

.relative {
  .noti {
    position: absolute;
    background: #dd403a;
    border-radius: 50%;
    padding: 0.5rem 0.9rem;
    z-index: 1;
    top: -10px;
    right: -15px;

    font-size: 1rem;
    font-weight: bold;
    color: white;
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
