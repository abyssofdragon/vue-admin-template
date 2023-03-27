<template>
  <div class="passage">
    <passageList />
    <passageCategory />
  </div>
</template>

<script>
import passageList from './components/passageList.vue'
import passageCategory from './components/passageCategory.vue'

export default {

  components: {
    passageList,
    passageCategory
  }
}
</script>

<style>
.passage{
    width: 100%;
    height: 100%;
}
</style>
