<template>
  <div class="admin-container container">
    <h1>Admin</h1>
    <list-items
      :items="machines"
      btnContent="More Detail"
      state="machine"
      site="admin"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListItems from '~/components/ListItems.vue'
import { Machine } from '~/components/types'

@Component({
  components: {
    ListItems,
  },
})
export default class Admin extends Vue {
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
.admin-container {
  justify-content: start !important;

  h1 {
    padding: 3rem 0rem;
  }
}
</style>
