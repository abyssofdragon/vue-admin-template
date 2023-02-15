<template>
  <div>
    <h5>画家</h5>
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
          title: '一幅肖像画后的留言',
          letter: '祝艾拉五岁生日快乐！这是送给你的肖像，祝你早日康复！\n等你十五岁，我十七岁时，我会成为一名厉害的画家。\n那时会有很多人和你一起看我的画，你会成为最伟大的画家的妹妹。\n……\n\n再回过头看当初的留言，我只觉得好笑。\n这世界上绝大多数人庸俗聒噪，我无需他们的理解，他们也只会让我觉得无趣。\n唯有那些能理解我的人才能为我的艺术添上一笔。\n六岁时，马车里的母亲留下了青色；八岁时，画具室中的妹妹留下了白色。我仍不忘她们彻夜的干咳，病中容貌。但随着时间，那些灵感也渐渐模糊、消逝了。\n后来，只有萨莱先生理解我，但可悲的是，他也逐渐暴露了骗子的真相。\n\n萨莱先生能给我的灵感也越来越少了。他会离开吧？会带着欺骗逃走吧？\n这些天，我总能听到画布和画笔们的叫声：\n——如果需要他的颜色，不如主动留下些什么。'
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
