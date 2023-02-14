<template>
  <div style="padding:8px;">
    <h5>杂技演员</h5>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="角色日信件" name="1">
        <el-row>
          <el-col :span="24">
            <el-table :data="letterCN" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item>
                      <v-html contenteditable="true">{{ props.row.letter }}</v-html>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="NO" prop="id" />
              <el-table-column label="年份" prop="year" />
              <el-table-column label="标题" prop="title" />
            </el-table>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
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
          year: '2020',
          title: '给亚瑟·罗素的信',
          letter: '尊敬的亚瑟·罗素先生:\n感谢您上次发来的调查报告，帮助很大。\n关于驯兽师娜塔莉，或玛格丽莎·泽莱，我还想了解她的家庭，在进入喧嚣马戏团之前她的生活是怎样的。\n我将在下周离开一段时间，酬劳的支付方式与之前一致，调查报告不必寄出，我会在之后登门领取。\n\n期待您的回信\n\n您忠诚的\n麦克·莫顿'
        },
        {
          id: 'II',
          year: '2021',
          title: '麦克·莫顿的庄园日记',
          letter: '第四页\n还真是出乎意料的一次聚会啊，没有想到会在这里见到我的“老朋友”!\n这几天我总是隐隐约约看见那熟悉的一瘸一拐的身影，我的心忍不住“砰砰”直跳，但是又不敢相信，他果然还活着！！！不过说起来，这四个丑八怪的脸放在一起还真是好笑，餐桌上他们坐一边的时候我都快要忍不住了，哈哈哈哈哈哈！\n（该页还有一些笔尖戳过的痕迹）\n\n第六页\n呵，那种女人果然一点也不会变，真是令人生气，在餐桌上那么明目张胆，她还以为这里是“喧嚣”呢，妄想再次耍弄她那些小把戏，把这里搞得乌烟瘴气！\n\n第七页\n可恶，他又流露出那种神情，和在“喧嚣”时一模一样，我不能再让那个女人得逞！\n\n第九页\n为什么他们会都在这里，这太不对劲了！难道是有人故意这么安排的？会是谁？\n我想起他们看我时的那种眼神，对，我确定他们晚上一起看着我，难道是那个女人？不对，她也不至于那么聪明，靠的不过是些姿色上的小把戏而已。\n啊，他们那残缺的身体，以前明明能给人带来欢声笑语，为什么现在在这里会这么让人觉得可怕！我不能再想了！\n嗯，我要好好想想对策了。\n(该页下方有一道钢笔划痕)'
        },
        {
          id: 'III',
          year: '2022',
          title: '麦克·莫顿的一页实验档案',
          letter: '编号:8-? -2\n姓名:麦克·莫顿\n\n【测试标记】\n1、天真的复仇者\n2、眷恋家人\n3、思维敏捷\n\n【测试倾向】\n迷路的“家人”，回不去的“喧嚣”。\n\n【测试结果】\n1、整体评价：\n作为8-1-4的对照组，同为“喧嚣”马戏团幸存者的8-?-2没有被施以药剂。在整个游戏过程里，8-?-2的确没有沉浸在故友相聚的氛围中，是头脑最为清晰的实验目标。\n\n2、流程说明：\n8-?-2带着探明真相的目的来到庄园，未想能重见“喧嚣”的诸多旧人。而在8-0-1被袭击的那一刻，8-?-2心中已有了模糊的答案，过往种种黑暗面也随之揭开。在游戏中，8-?-2和8-?-5联手设计的“嘉宾演出”，彻底击碎了8-0-3与8-1-4的合作关系。但面对再度失去8-1-4而消沉的8-0-3，8-? -2选择放弃报复，留在了他怀念已久的舞台上。\n\n3、实验总结:\n曾经乐观率性的8-?-2如何复仇是本组实验最大的悬念之一。而最后8-?-2放弃复仇的选择，并没有脱离他的本性：“喧嚣”马戏团的家人在他心中是第一位的。这种对家庭的依恋幼稚且盲目。当“喧嚣”过往的黑暗面被一一揭开，8-?-2才终于发现自已的快乐舞台只存在于那段表面平静的短暂时光（这点我感同身受）。而信念崩塌的8-?-2没能再成熟地面对现实——这再度证明：天真和乐观在游戏中无法存续。'
        },
        {
          id: 'IV',
          year: '2023',
          title: 'Coming Soon',
          letter: 'Coming Soon'
        },
        {
          id: 'V',
          year: '2024',
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
