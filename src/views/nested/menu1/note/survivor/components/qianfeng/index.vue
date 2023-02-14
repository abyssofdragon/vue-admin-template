<template>
  <div style="padding:8px;">
    <h5>前锋</h5>
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
          title: '威廉·艾利斯的邀请函',
          letter: '尊敬的威廉·艾利斯先生：\n人们常常谈论您在拉格比足球里获得了“不公平的优势”，而我更愿意将其称为“了不起的革新”。您将深沉的思考隐藏在壮硕的体格之下，成功地让所有人都坚信您只是抱着足球瞎跑的莽汉。\n您善于发掘规则的漏洞，而我们即将开始的游戏中正需要您这样的先遣者，以帮助我们进一步完善规则。一个兼具良好体格与缜密思维的人，是欧利蒂丝庄园寻宝游戏中不可或缺的宝贵助力。\n当然，作为回报，我将无条件全力支持您在拉格比足球协会的一切改革。\n\n静候您的光临\n主持人'
        },
        {
          id: 'II',
          year: '2021',
          title: '前锋日记',
          letter: '12月2日\n雪怎么越下越大了!\n今早收到了通知，说是由于天气原因，游戏恐怕要延期开始。这几天我们都得老老实实地待在屋里，随意出门会受到惩罚……见鬼的惩罚！现在不只是宵禁，连白天的户外活动都没了!\n我真不想继续在这房子里闷着！跟那三个人相处时，屋里的气氛比屋外的天气还要槽糕！今早我又在厨房碰见了那个叫穆罗的家伙，他看了我一眼，话都没说就把自己的早餐端回了房间！唉，真不知道他在防备谁，又或者，他只是单纯的不喜欢我？\n我想起来，昨天早上刚到的时候，房子里只有我和穆罗两个人。他似乎对这里熟悉得很，给我指了房间的方向，一句话都不多说就离开了……威廉·艾利斯，得到友善的对待，为什么总是这么难？\n游戏什么时候开始？我想念球场，想念葡萄酒和烤肉排——等拿了奖金回去，我得叫球队里的家伙们办个派对！该死……我明明只是想来拿那笔钱，怎么能在这种无聊的地方浪费时间!'
        },
        {
          id: 'III',
          year: '2022',
          title: '威廉·艾利斯的一页实验档案',
          letter: '编号：9-?-2\n姓名：威廉·艾利斯\n\n【测试标记】\n1、单纯\n2、冲动鲁莽\n3、不设防\n\n【测试倾向】\n深陷算计的愚者\n\n【测试结果】\n1、整体评价\n与同组参与者相比，9-?-2社会阅历较少，成长环境简单，单纯的个性使他难以被卷入矛盾中。但羊入虎口，思维简单的人在竞争中只会成为他人的踏脚石。\n2、流程说明\n实验中，9-?-2对与他无直接矛盾的人并不设防。他既不排斥与9-?-1接触，又对帮助他的9-?-3轻易产生了信任。\n唯一的不同在他对于9-?-4的态度：由于曾经亲眼所见的那场“舞台事故”，9-?-2对9-?-4十分警惕。这也导致他在中毒后第一时间认为是9-?-4所为，在其他人的刻意引导下，鲁莽地将意外解读为刻意伤害，矛头直指9-?-4。尽管9-?-2并不是真正的刽子手，但仍间接造成了冲突爆发。\n3、分析总结\n出身于校园环境的9-?-2性格较单纯，在长时间相处中很容易对他人产生类似伙伴的情感。气氛紧张时。他仍热心邀请9-?-3分食烤猪、共饮佐餐酒。他不擅长人与人之间的算计，轻信自己认为的“好人”。由于想得到队友们的认同，毫无保留地分享情报，迫切希望证明自己。\n9-?-3正是利用了他的特性，名正言顺地把影响他实施计划的人剔除出局。9-?-2是幸运的，在危险性最高的9-?-3眼中并没构成威胁。最终成为了杀人的刀子而不自知。但即使一无所知，违反规则的人仍然会受到惩罚。他的愚钝使他有了幸存的可能，也注定了他的结局。在人性的审判中，愚者的轻率和鲁莽便是他所犯下的罪行······'
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
