<template>
  <div class="dashboard-container">
    <div class="dashboard-text"> name: {{ admin.username }}</div>
    <el-calendar v-model="value" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      value: new Date()
    }
  },

  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.admin = JSON.parse(window.localStorage.getItem('access-admin'))
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
