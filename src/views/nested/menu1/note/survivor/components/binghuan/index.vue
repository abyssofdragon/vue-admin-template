<template>
  <div style="padding:8px;">
    <h5>病患</h5>
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
          year: '2022',
          title: '一封泛黄的回信',
          letter: '小说家先生：\n感谢你的来信，我对那天在白沙街疯人院和你相遇的印象颇深。但也许那时存在着一些误会，你所说的“窃取”，只是我在拿取早已向院方申请过的病患资料——而这一切都出于我作为医生的、合理的研究行为。\n请原谅我不愿把白沙街疯人院的病患档案借出，无论是对你还是对其他人。而且恕我冒昧，我对在疯人院病人的身上“采集灵感”的写作方式抱有怀疑态度。\n很遗憾下个月起我就不能再与你通信了。由于一些私人原因，我将辞去学校的工作并搬离这个城市。人们并不缺一个姓梅斯默的女医生或一名助理教授，但我的家人需要我。\n如果还有其他医学上的问题，可以向查尔斯·梅斯默的诊所询问。他也许是与你聊得来的那类医生。\n艾达·梅斯默'
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
