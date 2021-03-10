<template>
  <div>
    <GmapMap
      :center="position"
      :zoom="15"
      map-type-id="terrain"
      class="custom-map"
    >
      <Gmap-marker :position="position"></Gmap-marker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      require: true,
      type: Object,
    },
  },
  data() {
    return {
      zoom: 15,
    }
  },
}
</script>

<style lang="scss">
.custom-map {
  width: 700px;
  height: 500px;
}

@media only screen and (max-width: 768px) {
  .custom-map {
    width: 600px;
    height: 400px;
  }
}

@media only screen and (max-width: 450px) {
  .custom-map {
    width: 350px;
    height: 250px;
  }
}
</style>
