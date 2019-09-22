// 使用 Mock
import Mock from 'mockjs';
var Random = Mock.Random;
Random.boolean();
Mock.mock('localhost:8089/getOrg.json','get',{
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    'OrgChild|30': [{
        //属性 title 是一个随机长度的标题
        'OrgName': '@cname',
        'perId': '@id',
        'isOrg': '@boolean',
        'isSel': false,
        OrgChild:[]
    }]
})

