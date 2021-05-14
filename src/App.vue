<template>
  <div class="demo">
    <h1>vue-color-table</h1>
    <VueColorTable v-model="colors" :minMax="range"></VueColorTable>
    <p>name:{{colors.name}}</p>
    <p>colorList:{{colors.colors}}</p>
  </div>
</template>

<script>
  import VueColorTable from './index.vue'

  export default {
    name: 'App',
    components: {
      VueColorTable
    },
    data() {
      return {
        range: [-500, 500],
        colors: {
          
        }
      }
    }
  }
</script>

<style lang="scss">

</style>