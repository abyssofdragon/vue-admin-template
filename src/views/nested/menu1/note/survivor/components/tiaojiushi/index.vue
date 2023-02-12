<template>
    <div style="padding:16px;">
        <h2>调酒师</h2>
        <iframe src="//player.bilibili.com/player.html?aid=266761451&bvid=BV1xY411i7NE&cid=1004776172&page=1" scrolling="no"
            border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        <el-row :gutter="12">
            <el-col v-for="survivor in survivors" :key="survivor.id" :span="4">
                <el-card shadow="hover" class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{ survivor.job }}</span>
                        <el-button style="float: right; padding: 3px 0" type="text"
                            @click="survivor.method">详情</el-button>
                    </div>
                    {{ survivor.name }}
                </el-card>
            </el-col>
        </el-row>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            survivors: [
                {
                    job: '作曲家',
                    name: '阿尔瓦',
                    method: () => {
                        this.add()
                    }
                },
                {
                    job: '古董商',
                    name: '柯根'
                },
                {
                    job: '教授',
                    name: '“奥尔菲斯”'
                },
                {
                    job: '哭泣小丑',
                    name: '菲利普'
                },
                {
                    job: '“小女孩”',
                    name: '格蕾丝'
                },
                {
                    job: '小说家',
                    name: '威尔三兄弟'
                },
                {
                    job: '病患',
                    name: '珀西'
                },
                {
                    job: '“心理学家”',
                    name: '伽拉泰亚'
                },
                {
                    job: '玩具商',
                    name: '安东尼奥'
                },
                {
                    job: '击球手',
                    name: '安'
                },
                {
                    job: '画家',
                    name: '邦邦'
                },
                {
                    job: '昆虫学者',
                    name: '玛丽'
                },
                {
                    job: '“囚徒”',
                    name: '卢基诺'
                },
                {
                    job: '守墓人',
                    name: '罗比'
                },
                {
                    job: '邮差',
                    name: '伊德海拉'
                },
                {
                    job: '调酒师',
                    name: '巴尔克'
                },
                {
                    job: '大副',
                    name: '约瑟夫'
                },
                {
                    job: '杂技演员',
                    name: '谢必安/范无咎'
                },
                {
                    job: '野人',
                    name: '哈斯塔'
                },
                {
                    job: '咒术师',
                    name: '美智子'
                },
                {
                    job: '勘探员',
                    name: '瓦尔莱塔'
                },
                {
                    job: '入殓师',
                    name: '杰克'
                },
                {
                    job: '先知',
                    name: '班恩'
                },
                {
                    job: '舞女',
                    name: '裘克'
                },
                {
                    job: '牛仔',
                    name: '里奥'
                },
                {
                    job: '调香师',
                    name: '里奥'
                },
                {
                    job: '祭司',
                    name: '里奥'
                },
                {
                    job: '盲女',
                    name: '里奥'
                },
                {
                    job: '前锋',
                    name: '里奥'
                },
                {
                    job: '机械师',
                    name: '里奥'
                },
                {
                    job: '空军',
                    name: '里奥'
                },
                {
                    job: '佣兵',
                    name: '里奥'
                },
                {
                    job: '冒险家',
                    name: '里奥'
                },
                {
                    job: '魔术师',
                    name: '里奥'
                },
                {
                    job: '园丁',
                    name: '里奥'
                },
                {
                    job: '“慈善家”',
                    name: '里奥'
                },
                {
                    job: '律师',
                    name: '里奥'
                },
                {
                    job: '医生',
                    name: '里奥'
                },
                {
                    job: '幸运儿',
                    name: '里奥'
                }
            ]
        }
    }
}
</script>

<style>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 100%;
    margin-bottom: 18px;
}
</style>
