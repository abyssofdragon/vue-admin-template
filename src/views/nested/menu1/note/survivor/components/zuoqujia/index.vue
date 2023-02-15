<template>
  <div>
    <h5>作曲家</h5>
    <Letter :letter="letterCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterCN: [
        {
          id: 'I',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'II',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'III',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: 'Coming Soon',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        }
      ]
    }
  }
}
</script>

<style>
.demo-table-expand {
    font-size: 0;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    white-space: pre-wrap;
}
</style>
