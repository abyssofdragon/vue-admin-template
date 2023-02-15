<template>
  <div>
    <h5>玩具商</h5>
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
          title: 'NO.……(律师函信件号，由于反复折叠而产生深深的叠痕，数字已模糊不清)',
          letter: '致：安妮·莱斯特，霍洛威疗养院临时病房\n本人尼古拉斯·奥兹为温蒂·莱斯特代理律师，受温蒂·莱斯特女士委托，指派本人就温蒂·莱斯特女士遗产继承一事致函阁下。我很荣幸再一次为阁下服务。\n自上一次为您转让温蒂·莱斯特女士生前记录在案的50%遗产之后，我便失去了与阁下的联系。曾经的地址已查无此人，而这一地址也是通过阁下过去的一名男性友人找到的，他在一年前曾到访我的律所咨询过遗产继承的相关问题。我很抱歉得知阁下最近的遭遇，望阁下能在霍洛威疗养院的病榻中尽快痊愈，接下来，希望我带来的消息能振奋人心。\n根据遗产继承法，以及温蒂·莱斯特女士的生前遗嘱，我将正式通知阁下，除了温蒂·莱斯特女士生前记录在案的财产之外，尚有30%的隐藏遗产未被记录，包括温蒂·莱斯特女士于海外悉心保管的财物、委托其亲友寄存之贵重物品，这些将全部归阁下所有。关于它们的具体信息我将于信件末尾附上清单，请阁下查阅。很抱歉阁下目前的财产状况临界于我国最低贫困标准，希望它们能帮助阁下度过眼下艰难时期。\n另外，清单中有一架崭新的儿童木制飞机，我反复确认发现并没有出错，它的确属于温蒂·莱斯特女士留给阁下的遗产一部分，望阁下在查阅过程中不要感到意外。\n最后，望阁下痊愈后，欢迎来到本律师事务所，我将协同阁下办理遗产继承相关手续。\n\n阁下可信赖的律师，\n尼古拉斯·奥兹\n\n附件清单：\n古斯塔夫·鲍格朗装饰珠宝，一件\n无标黑玛瑙贝壳雕塑饰品，一套\n……\n……\n……\n12956英镑\n全新儿童木制飞行器，一件'
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
