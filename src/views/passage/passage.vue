<template>
  <Layout>
    <div class="passageDetail-container">
      <passageDetail />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/layout'
import passageDetail from './components/passageDetail.vue'
import fetchData from '@mixins/fetchData'
import { getPassage } from '@/api/blog'
export default {
  components: {
    Layout,
    passageDetail
  },
  mixins: [fetchData({})],
  methods: {
    fetchData() {
      return getPassage(this.$route.params.id)
    }
  }
}
</script>

<style>
.passageDetail-container{
    height: 100%;
    overflow-y: scroll;
    padding: 20px 15px;
    box-sizing: border-box;
}
</style>
