export default {
    host: 'http://10.52.3.91:8010',
    ajaxUrl:"http://10.52.3.94:8081/eom/api/", // 李超-除待办已办详情接口
    ajaxUrl1:'http://10.52.3.94:8081/hbgw/api/', // 李广胜-详情接口
    // ajaxUrl:"http://10.52.3.91:8081/eom/api/", // 李超-除待办已办详情接口
    // ajaxUrl1:'http://10.52.3.91:8081/hbgw/api/', // 李广胜-详情接口
    // 认证接口
    ajaxCertificationUrl: 'http://123.52.105.121:81/Api/json/reply/Authenticate/Authenticate',
    // 获取所有人员接口
    ajaxpersonnelUrl: 'http://123.52.105.121:81/Api/SelectUser',
    username: '', //登录名
    password: '1b9bebd63461548f7ffdc51620e0a97b', // 密码
    orgid: '482', // 部门ID
    toporg: '477', // 最高级部门ID
    signPW: '336397fc6fb98095d045fcf3654abe1c', // 最高级部门ID
    departName: '名称', // 部门名称
    dataObj: {}, // 列表详情
    list: [
        {
            name: 'XXXXX项目',
            preUserName: '叉臂',
            createDate: '2019-05-29 10:00',
            isLimit: true,
            limitTime: '2019-05-31 08:30',
        },
        {
            name: 'XXXXX项目1',
            preUserName: '叉臂',
            createDate: '2019-05-29 09:00',
            isLimit: false,
            limitTime: '2019-05-31 12:30',
        },
        {
            name: 'XXXXX项目2',
            preUserName: '叉臂',
            createDate: '2019-05-29 08:00',
            isLimit: true,
            limitTime: '2019-05-30 11:30',
        },

    ]
};

