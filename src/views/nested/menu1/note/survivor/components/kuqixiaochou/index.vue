<template>
  <div>
    <h3>哭泣小丑</h3>
    <Character :note="note" :description="descriptionCN" :letter="letterCN" :deduction="deductionCN" />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: '',
      descriptionCN: [
        {
          role: '哭泣小丑',
          type: '传闻',
          text: '生就哭丧脸，生就右腿缺失，也许裘克真如他父母所说，天生就是摇钱树。而他也只能用忍让与扮蠢去换取仅存的归属感。'
        },
        {
          role: '哭泣小丑',
          type: '故事背景',
          text: '也许裘克真如他父母所说，天生就是马戏团的摇钱树。而他也只能用忍让与扮蠢去换取仅存的归属感。\n于是一向逆来顺受的裘克“理所当然”成为了马戏团的哭泣小丑，他习惯了一瘸一拐登台表演，习惯了利用自己滑稽的脸和不协调的肢体引观众发笑。\n也许裘克自己都分不清，画上小丑妆后的举止，是有违平日性格的被迫演出，还是内心深处真正的情绪释放。\n就像那天夜里他亲手裁剪的笑脸面具，戴上它，仿佛是另一种新生。不过他依旧分不清，这张面具，是属哭泣小丑裘克，还是属于微笑小丑瑟吉。'
        }
      ],
      deductionCN: [
        {
          role: '哭泣小丑',
          id: 1,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: 2,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: 3,
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '4',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '5',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '6',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '7',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '8',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '9',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: '10',
          title: 'TBD',
          content: 'TBD',
          conclusion: 'TBD'
        }
      ],
      letterCN: [
        {
          role: '哭泣小丑',
          id: 1,
          year: '2020',
          title: '调查报告',
          letter: '尊敬的麦克·莫顿先生:\n警局内部消息称，月亮河惨案中的“无面人”四肢健全，与此前报道中遭镪水毁容的受害者裘克身体状况不符。\n我们仍在调查瑟吉的下落，但以目前掌握的证据来看，我们认为他可能并没有活着离开月亮河公园。\n\n祝安\n您忠诚的\n亚瑟·罗素'
        },
        {
          role: '哭泣小丑',
          id: 2,
          year: '2021',
          title: '被撕掉的一页',
          letter: '晚餐前不知道谁从一堆旧物里找到了一个留声机，他们几个犹豫着将唱针放到唱片上，那“吱吱”的吵声令人烦躁。仅几秒后，身后传来的曲音让我停下了离开的脚步，曲声那么熟悉，但名字到了嘴边就是叫不出来。\n众人陷入了沉默,我想大家和我一样都在思索着，只有瑟吉显得格外雀跃。“天真”与“他”，多么格格不入。只见他双手叉腰，开心地跳了起来。我知道瑟吉绝对不会这样跳舞的，他不明白简单的快乐，他从未真的喜欢过这首曲子，他不会在跳起来的时候让左脚先落地！我想起来了，这是《小丑》波尔卡，是右腿不灵活的裘克最爱的曲子，他喜欢它诙谐的音乐，他喜欢别人为他的笨拙发出愉悦的笑声。\n“哦，瑟吉，你还是那么棒。”角落的女人嗫嗫嚅嚅。她的声音轻柔到失真，却划破了这美好的一切。\n这张我曾经深爱过的面庞，逐渐与马戏团后独自锯木头时那张落寂的脸重叠，然后我看到了从未见过的扭曲与狰狞。\n简单的快乐从来都是如此短暂。'
        },
        {
          role: '哭泣小丑',
          id: 3,
          year: '2022',
          title: '裘克的一页实验档案',
          letter: '编号：8-0-3\n姓名：裘克\n\n【测试标记】\n1、悲观\n2、自卑\n3、脆弱\n\n【测试倾向】\n崩溃边缘的危险制造者\n\n【测试结果】\n1、整体评价:\n毁容事件之前的8-0-3，是用富有喜剧意味的愁苦面孔、为观众们带来欢笑的哭泣小丑，隐藏在哭泣面孔后的是8-0-3的脆弱与自卑。\n月亮河公园惨案碾碎了8-0-3的哭脸面具，戴上笑脸面具的8-0-3开始习惯用暴力去解决问题。\n\n2、流程说明：\n如实验计划所设计的，一张留在桌面上的剧目排演规则成为了“喧嚣”众人意见分歧的开始。\n不出所料，8-0-1对剧目排演兴奋不已，并迅速将规则告知众人。该组其他成员对于排演规则的反应均在预料之中，除了8-0-3。\n8-0-3认定所谓的剧目实际为一场现实中的厮杀，并即刻行动——以搜集“表演灵感” 为由，将该组被边缘化的8-0-1约出，在切断其机械腿后，将其丢出庄园，任由无法行动的8-0- 1在冰天雪地里自生自灭。\n8-0-3的悲观是本组实验的催化剂，加速本组成员间的阵营分化。\n8-0-3的偏激行为则是导致本组实验走向毁灭式结局的元凶。\n\n3、分析总结：\n在最初实验设计上，8-0-3本应是本组最后的幸存者。\n但即便没有施加药物影响，8-0-3的情绪依然不受控制地走向极端。\n究其原因是8-0-3内心深处根深蒂固的自卑。\n旧面具下的8-0-3,依靠的是卑微的讨好。而新面具于8-0-3，不过是一戳即破的谎言。\n实验中，当再次遇到“喧嚣”旧人的8-0-3，发现形势与预期不相符时，不再被动接受现实，而是试图通过暴力手段、成为主导者去获取他想要的结果。\n然而高压环境下，8-0-3脆弱的内心并无法支持他长时间保持足够的强势与警觉，随着马戏团惨案的“情境重现”他的“谎言铠甲”分崩离析。\n真相揭晓后，8-0-3无法面对摘下面具后“赤裸”的自己，情绪失控。最终与被使用药物的8- 1-4走向了相同的结局。\n这一实验结果证明，本质敏感且脆弱的人，无需药物影响，也会在崩溃的边缘跌落，作为药物实验的比照用例，并无法足够准确地提供比照结果，在将来的比照用例选择上，应该尽量避免。'
        },
        {
          role: '哭泣小丑',
          id: 4,
          year: '2023',
          title: 'TBD',
          letter: 'TBD'
        },
        {
          role: '哭泣小丑',
          id: 5,
          year: '2024',
          title: 'TBD',
          letter: 'TBD'
        }
      ]
    }
  }
}
</script>

