<template>
  <div>
    <h5>“心理学家”</h5>
    <el-row :gutter="12">
      <Letter :letter="letterCN" />
    </el-row>
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
          year: '2022',
          title: '一封回信',
          letter: '尊敬的先生：\n谢谢你的提醒，你说的是对的。\n也许我太高估自己，我并没有治愈我爱人的能力，鉴于他近期的状况，我们希望试试你之前推荐的最新的治疗方式。\n但由于我爱人的精神状况十分不稳定，麻烦你尽量不要再上门拜访。我们可以保持通信，希望你能谅解。\n两周后我会携带邀请函去往你的庄园，届时也会带上你想了解的一切。\n艾达·梅斯默'
        },
        {
          id: 'II',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'III',
          year: '2024',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'IV',
          year: '2025',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2026',
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
