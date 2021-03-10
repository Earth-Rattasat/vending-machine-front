<template>
  <div class="choose-machine-container container">
    <h1>Choose Vending Machine</h1>
    <list-items :items="machines" state="machine" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import ListItems from '~/components/ListItems.vue'
import { Machine } from '~/components/types'

@Component({
  components: {
    ListItems,
  },
})
export default class Machines extends Vue {
  private machines: Machine[] = []

  private async fetchMachine(): Promise<void> {
    const resp = await this.$axios.$get(`/machines`)
    this.machines = resp
  }

  mounted() {
    this.fetchMachine()
  }
}
</script>

<style lang="scss">
.choose-machine-container {
  justify-content: start !important;

  h1 {
    padding: 3rem 0rem;
  }
}
</style>
