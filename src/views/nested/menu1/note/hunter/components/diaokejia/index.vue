<template>
  <div>
    <h5>雕刻家</h5>
    <el-row :gutter="12">
      <Letter :letter="letterCN" />
      <Deduction :deduction="deductionCN" />
    </el-row>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      deductionCN: [
        {
          id: '1',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '2',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '3',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          id: 'I',
          year: '2021',
          title: '一页废纸篓中未寄出的信',
          letter: '尊敬的父亲：\n我窥见了造物的真谛。\n曾经，我还会奢求傻瓜的赞美，\n现在，我想自己无暇顾及那些无聊与琐碎。\n也许这该归功于远游的决定。\n\n还记得我送给德罗斯先生的那件作品吗？\n被关进石中的鸟儿，\n无味，无序，无比渺小以至灵魂逐渐死去。\n是的，它是如此浅薄。\n所以再见之时我亲手砸碎了它。\n\n而在我意识到这一点之前，\n我在这，看到了被豢养的木偶和自诩高贵的奴隶，\n看到了瞻仰遗容就像簇拥国王的蚂蚁，\n看到了河床断裂后被污浊浇透的灵魂，\n……\n我看到了邪恶的伟大。\n\n当我意识到人类不过是在灵魂之上铺砌了一层薄石膏之后，\n我听见满脑子高速旋飞叫嚣的想法，\n我听见躯体的存在本身多么易碎，\n我听见敲碎一枚蛋壳的声音，\n我听见雕像的神性诞生，\n艺术的真理破壳。\n'
        },
        {
          id: 'II',
          year: '2022',
          title: '一页留言',
          letter: '亲爱的伽拉泰亚:\n你还好吗?\n凌晨回房后你就将自己锁在屋内不出来,也不说话,我们只能听到连续不断但又微弱的敲击声,你在做什么,我很担心你……\n你一定被吓坏了。\n谁也没想到事情会发展成那样,但当时奥尔菲斯先生也是为了自保,为了救我们，才不得不动手。\n就像袭击发生时你第一时间推开了我一样。\n伽拉泰亚,别怕,我会一直在你身边,我会保护你,我们会一起从这里离开。\n如若你心绪安定下来或者有任何需要,请一定要呼唤我。\n\n另外还有一件事,昨晚我们再回到院中时发现他的尸体不见了，但奥尔菲斯先生说并不是他处理的,我有种不太好的预感……\n总之,你独处时请诸事小心。\n海伦娜留'
        },
        {
          id: 'III',
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'IV',
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          id: 'V',
          year: '2025',
          title: 'TBD',
          letter: 'TBD'
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
