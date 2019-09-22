// 使用 Mock
import Mock from 'mockjs'
Mock.mock('localhost:8089/api/WZSBList.json','get',{
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    'datas|15': [{
        //属性 id 是随机id
        'id': '@id',
        //属性 title 是一个随机长度的标题
        'sjms': '在严禁烟火区域发现抽烟现象',
        //属性 name 是一个随机的名字
        'cjr': '@cname',
        //属性 address 是一个随机地址
        'sjzt': '审批',
        //属性 date 是一个yyyy-MM-dd 的随机日期
        'cjsj': '@date("yyyy-MM-dd")',
        //属性 time 是一个 size, background, text 的随机时间
        'time': '@time("HH:mm:ss")',
    }]
})

