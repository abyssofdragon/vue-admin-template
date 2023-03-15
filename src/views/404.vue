<template>
  <div />
</template>

<script>
export default {

  name: 'Page404',
  created() {
    this.$alert('登录信息失效！', '提示', {
      confirmButtonText: '确定'
    }).then(() => {
      localStorage.removeItem('access-admin')
      this.$router.replace(`/login`)
    })
  }
  // computed: {
  //   message() {
  //     return 'The webmaster said that you can not enter this page...'
  //   }
  // }
}
</script>

