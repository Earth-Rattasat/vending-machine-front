<template>
  <div class="admin-container container">
    <h1>Admin</h1>
    <div class="btn-create-group">
      <vs-button
        class="btn-create"
        color="success"
        @click="$router.push(`/admin/create/machine`)"
        >Create new machine</vs-button
      >
      <vs-button
        class="btn-create"
        color="success"
        @click="$router.push(`/admin/create/product`)"
        >Create new product</vs-button
      >
    </div>
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

interface MachineWithNoti {
  machineId: number
  noti: number
}

@Component({
  components: {
    ListItems,
  },
})
export default class Admin extends Vue {
  private machines: Machine[] = []

  private async fetchMachine(): Promise<void> {
    const respMachine = await this.$axios.$get(`/machines`)
    const respNoti = await this.$axios.$get(`/machines/notification`)

    this.machines = respMachine.map((machine: Machine) => {
      const includeMachine = respNoti.find(
        (noti: MachineWithNoti) => noti.machineId === machine.id
      )
      return Object.assign(machine, { noti: includeMachine.noti })
    })
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
    padding-top: 3rem;
    padding-bottom: 1rem;
  }

  .btn-create-group {
    display: flex;
    justify-content: center;
    width: 100%;

    .btn-create {
      margin: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
  }
}
</style>
