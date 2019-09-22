<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <f7-views toolbar-through class="tabs">
                <f7-view id="tab1" main  active class="tab">
                    <f7-pages  navbar-fixed animated>
                        <f7-page tabs pull-to-refresh @ptr:refresh="onRefreshDB" name="daiban" id="daiban">
                            <f7-navbar>
                                <f7-nav-left>
                                    <f7-link icon="icon-back" href="hybrid://back?" class="external"></f7-link>
                                </f7-nav-left>
                                <f7-nav-center>
                                    待办
                                </f7-nav-center>
                                <f7-nav-right v-if="flowTodos.length">
                                    <!--<a href="#" data-popover=".my-popover" class="popover-open">Open Popover</a>-->
                                    <f7-link class="open-popover" data-popover=".my-popover" icon="icon-shaixuan" @click="timeSort(flowTodos)"></f7-link>
                                </f7-nav-right>
                            </f7-navbar>
                            <f7-list media-list style="margin: 0;">
                                <f7-list-item v-for="(item,index) in flowTodos"
                                              :key="index"
                                              link="/daibanDetail/" @click="detailState(item)">
                                    <div slot="inner">
                                        <p style="margin: 5px 0;font-size: 16px;">{{item.name}}</p>
                                        <p style="margin: 5px 0 0 0;color: #999;font-size: 14px;display: flex;justify-content: space-between;">
                                            <span>{{item.preUserName}}</span>
                                            <span>创建时间:{{item.createDate}}</span>
                                        </p>
                                        <p style="margin: 5px 0 0 0;text-align: right;color: red;font-size: 14px;font-weight: 600;" v-if="item.isLimit && item.chaoshiState == '1'"><span style="color: red;">(已超时)&nbsp;</span>限办时间:{{item.limitTime}}</p>
                                        <p style="margin: 5px 0 0 0;text-align: right;color: red;font-size: 14px;font-weight: 600;" v-if="item.isLimit && item.chaoshiState == '0'">限办时间:{{item.limitTime}}</p>
                                        <!--<span style="color: green;">(进行中)&nbsp;</span>-->
                                    </div>
                                </f7-list-item>
                            </f7-list>
                            <f7-block v-if="!flowTodos.length" style="background: #fff;height: 50px;line-height: 50px;text-align: center;margin: 0;">暂无待办</f7-block>
                        </f7-page>
                    </f7-pages>
                </f7-view >
                <f7-view  id="tab2" main class="tab">
                    <f7-pages navbar-fixed animated>
                        <f7-page pull-to-refresh @ptr:refresh="onRefreshDY" id="daiyue" name="daiyue" infinite-scroll @infinite="onInfiniteScrollDY()">
                            <f7-navbar>
                                <f7-nav-left>
                                    <f7-link icon="icon-back" href="hybrid://back?" class="external"></f7-link>
                                </f7-nav-left>
                                <f7-nav-center>
                                    待阅
                                </f7-nav-center>
                            </f7-navbar>
                            <f7-card>
                                <f7-list form>
                                    <f7-list-item>
                                        <f7-label>标题:</f7-label>
                                        <f7-input type="text"  placeholder="请输入要查找的标题" v-model="TitleDY" class="text-anl"></f7-input>
                                        <span solt="after">
                                            <f7-button @click="GetFormReaderD(1)" style="border: none;">
                                                <f7-link class="icon icon-seach"></f7-link>
                                            </f7-button>
                                        </span>
                                    </f7-list-item>
                                </f7-list>
                            </f7-card>
                            <f7-list media-list style="margin: 0;">
                                <f7-list-item v-for="(item,index) in readTods"
                                              :key="index"
                                              link="/daiyueOryiyueDetail/"
                                              @click="readState(item.FRID,item)"
                                              >
                                    <div slot="inner">
                                        <p style="margin: 5px 0;font-size: 16px;">{{item.SFTitle}}</p>
                                        <p style="margin: 5px 0 0 0;text-align: right;color: #999;font-size: 14px;">{{item.CreateTime}}</p>
                                    </div>
                                </f7-list-item>
                            </f7-list>
                            <f7-block v-if="!readTods.length" style="background: #fff;height: 50px;line-height: 50px;text-align: center;margin: 0;">暂无待阅</f7-block>
                        </f7-page>
                    </f7-pages>
                </f7-view>
                <f7-view  id="tab3" main class="tab">
                    <f7-pages navbar-fixed>
                        <f7-page pull-to-refresh @ptr:refresh="onRefreshYD" id="yiban" name="yiban" infinite-scroll @infinite="onInfiniteScrollYD()">
                            <f7-navbar>
                                <f7-nav-left>
                                    <f7-link icon="icon-back" href="hybrid://back?" class="external"></f7-link>
                                </f7-nav-left>
                                <f7-nav-center>
                                    已办
                                </f7-nav-center>
                                <f7-nav-right>
                                    <f7-link :icon="bDFlag ? 'icon-hide': 'icon-seach'" @click="bDFlagChange()"></f7-link>
                                </f7-nav-right>
                            </f7-navbar>
                            <f7-card v-if="bDFlag">
                                <f7-list form>
                                    <f7-list-item>
                                        <f7-label>标题:</f7-label>
                                        <f7-input type="text"  placeholder="请输入要查找的标题" v-model="Title" class="text-anl"></f7-input>
                                        <span solt="after">
                                            <f7-button @click="getflowdones(1)" style="border: none;">
                                                <f7-link class="icon icon-seach"></f7-link>
                                            </f7-button>
                                        </span>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>开始时间:</f7-label>
                                        <f7-input type="datetime-local" v-model="StartDate" class="text-anl"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>结束时间:</f7-label>
                                        <f7-input type="datetime-local" v-model="EndDate" class="text-anl"></f7-input>
                                    </f7-list-item>
                                    <!--<div class="row">-->
                                        <!--<div class="col-50">-->
                                            <!--<f7-list-item>-->
                                                <!--<f7-input type="datetime-local" v-model="StartDate"></f7-input>-->
                                            <!--</f7-list-item>-->
                                        <!--</div>-->
                                        <!--<div class="col-50">-->
                                            <!--<f7-list-item>-->
                                                <!--&lt;!&ndash;<f7-label>意见</f7-label>&ndash;&gt;-->
                                                <!--<f7-input type="datetime-local" v-model="EndDate"></f7-input>-->
                                            <!--</f7-list-item>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                </f7-list>
                            </f7-card>
                            <f7-list media-list style="margin: 0;">
                                <f7-list-item v-for="(item,index) in flowDones"
                                              :key="index"
                                              link="/yibanDetail/"
                                              @click="detailState(item)">
                                    <div slot="inner">
                                        <p style="margin: 5px 0;font-size: 16px;">{{item.name}}</p>
                                        <p style="margin: 5px 0 0 0;text-align: right;color: #999;font-size: 14px;">{{item.createDate}}</p>
                                    </div>
                                </f7-list-item>
                            </f7-list>
                            <f7-block v-if="!flowDones.length" style="background: #fff;height: 50px;line-height: 50px;text-align: center;margin: 0;">暂无已办</f7-block>
                        </f7-page>
                    </f7-pages>
                </f7-view>
                <f7-view  id="tab4" main class="tab">
                    <f7-pages navbar-fixed animated>
                        <f7-page pull-to-refresh @ptr:refresh="onRefreshYY" id="yiyue" name="yiyue" infinite-scroll @infinite="onInfiniteScrollYY()">
                            <f7-navbar>
                                <f7-nav-left>
                                    <f7-link icon="icon-back" href="hybrid://back?" class="external"></f7-link>
                                </f7-nav-left>
                                <f7-nav-center>
                                    已阅
                                </f7-nav-center>
                            </f7-navbar>
                            <f7-card>
                                <f7-list form>
                                    <f7-list-item>
                                        <f7-label>标题:</f7-label>
                                        <f7-input type="text"  placeholder="请输入要查找的标题" v-model="TitleYY" class="text-anl"></f7-input>
                                        <span solt="after">
                                            <f7-button @click="GetFormReaderY(1)" style="border: none;">
                                                <f7-link class="icon icon-seach"></f7-link>
                                            </f7-button>
                                        </span>
                                    </f7-list-item>
                                </f7-list>
                            </f7-card>
                            <f7-list media-list style="margin: 0;">
                                <f7-list-item v-for="(item,index) in readDones"
                                              :key="index"
                                              link="/daiyueOryiyueDetail/"
                                              @click="detailState(item)">
                                    <div slot="inner">
                                        <p style="margin: 5px 0;font-size: 16px;">{{item.SFTitle}}</p>
                                        <p style="margin: 5px 0 0 0;text-align: right;color: #999;font-size: 14px;">{{item.CreateTime}}</p>
                                    </div>
                                </f7-list-item>
                            </f7-list>
                            <f7-block v-if="!readDones.length" style="background: #fff;height: 50px;line-height: 50px;text-align: center;margin: 0;">暂无已阅</f7-block>
                        </f7-page>
                    </f7-pages>
                </f7-view>
                <div class="toolbar tabbar tabbar-labels">
                <div class="toolbar-inner">
                    <a href="#tab1" class="tab-link active">
                        <i class="iconfont icon-daiban font-20"></i>
                        <span class="tabbar-label">待办</span>
                    </a>
                    <a href="#tab2" class="tab-link">
                        <i class="iconfont icon-daiyue font-20">
                            <!--<f7-badge v-if="dycount != 0" color="red" style="position: absolute;">{{dycount}}</f7-badge>-->
                        </i>
                        <span class="tabbar-label">待阅</span>
                    </a>
                    <a href="#tab3" class="tab-link">
                        <i class="iconfont icon-yiban font-20">
                            <!--<f7-badge v-if="ybcount != 0" color="red" style="position: absolute;">{{ybcount}}</f7-badge>-->
                        </i>
                        <span class="tabbar-label">已办</span>

                    </a>
                    <a href="#tab4" class="tab-link">
                        <i class="iconfont icon-yiyue font-20">
                            <!--<f7-badge v-if="yycount != 0" color="red" style="position: absolute;">{{yycount}}</f7-badge>-->
                        </i>
                        <span class="tabbar-label">已阅</span>
                    </a>
                </div>
            </div>
        </f7-views>
        <!-- Popover -->
        <f7-popover class="my-popover">
            <f7-list>
                <f7-list-button @click="timeSort('cj')">创建时间降序</f7-list-button>
                <f7-list-button @click="timeSort('cs')" color="red">创建时间升序</f7-list-button>
                <f7-list-button @click="timeSort('xj')">限办时间降序</f7-list-button>
                <f7-list-button @click="timeSort('xs') "color="red">限办时间升序</f7-list-button>
            </f7-list>
            <!--<a class="link close-popover">Close Popover</a>-->
        </f7-popover>
    </div>

</template>

<script>
    import jsBridge from './config/webapp.hybrid.base.js';
    import commonfun from './config/commonfun'
    import a_bFun from './config/comparisonRQ'
    import CryptoJS from 'crypto-js'
    var com = {}
    com.str = {
        _KEY: "12345678900000001234567890000000",//32位
        _IV: "1234567890000000",//16位
        //+
        Encrypt: function (str) {
            var key = CryptoJS.enc.Utf8.parse(this._KEY);
            var iv = CryptoJS.enc.Utf8.parse(this._IV);

            var encrypted = '';

            var srcs = CryptoJS.enc.Utf8.parse(str);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

            return encrypted.ciphertext.toString();
        },
//jie
        Decrypt: function (str) {
            var key = CryptoJS.enc.Utf8.parse(this._KEY);
            var iv = CryptoJS.enc.Utf8.parse(this._IV);
            var encryptedHexStr = CryptoJS.enc.Hex.parse(str);
            var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
            var decrypt = CryptoJS.AES.decrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
            return decryptedStr.toString();
        }
    }
    export default {
        data(){
            return {
                flowTodos: [], // 待办列表
                flowDones: [], // 已办列表
                readTods:[], // 待阅列表
                readDones:[], // 已阅列表
                Skip: 0, // 从第0挑开始
                Take: 15, // 到15条结束
                DYpage: 1, // 第几页 待阅
                YYpage: 1, // 第几页 已阅
                pageNum: 10, // 一页几条
                ybcount: '', // 已办tab上的数字
                dycount: '', // 已办tab上的数字
                yycount: '', // 已办tab上的数字
                onInfinite: false, // 已办下拉开关（已办）
                onInfiniteDY: false, // 已办下拉开关（待阅）
                onInfiniteYY: false, // 已办下拉开关（已阅）
                StartDate: '', // 查询开始时间
                EndDate: '', // 查询结束时间
                Title: '', // 已办查询内容
                TitleYY: '', // 已阅查询内容
                TitleDY: '', // 待阅查询内容
                bDFlag: false, // 已办搜索栏开关
                RQ: commonfun.getDateDQ(0,true) // 获取当前日期
            }
        },
        created(){
            var that = this;
            this.$store.state.username = localStorage.getItem('username')
            this.$store.state.password = com.str.Decrypt(localStorage.getItem('password'))
            this.$store.state.orgid = localStorage.getItem('orgid')
            this.$store.state.toporg = localStorage.getItem('toporg')
            this.$store.state.signPW = com.str.Decrypt(localStorage.getItem('signPW'))
//            console.log(this.$store.state.password,localStorage.getItem('password'),this.$store.state.signPW,localStorage.getItem('signPW'))
            window.onload = function() {
//                that.Authenticate();
                that.IsToolbar();
                that.InitPage();
            }
        },
        methods:{
            // 切换至待阅时滚动页面
            bDFlagChange() {
                this.$$('.pages .page-content').scrollTop(0, 500)
                this.bDFlag = !this.bDFlag;
            },
            // 存入$store.state
            detailState(data) {
                this.$store.state.dataObj = data;
            },
            // 清空所有查询数据
            clearSeachData() {
                this.StartDate = ''
                this.EndDate = ''
                this.Title = ''
                this.TitleYY = ''
                this.TitleDY = ''
            },
            // 已办列表上拉加载
            onInfiniteScrollYD() {
                if(!this.onInfinite) {
                    this.onInfinite = true;
                    this.Take += 5;
                    console.log('onInfiniteScroll', 'pageIndex', this.Skip);
                    this.getflowdones(2);
                }
            },
            onInfiniteScrollDY() {
                if(!this.onInfiniteDY) {
                    this.onInfiniteDY = true;
                    this.DYpage++;
                    console.log('onInfiniteScroll', 'pageIndex', this.DYpage);
                    this.GetFormReaderD(2);
                }
            },
            onInfiniteScrollYY() {
                if(!this.onInfiniteYY) {
                    this.onInfiniteYY = true;
                    this.YYpage++;
                    console.log('onInfiniteScroll', 'pageIndex', this.YYpage);
                    this.GetFormReaderY(2);
                }
            },
            // 认证一下
            Authenticate() {
                this.$http.get(this.$store.state.ajaxCertificationUrl, { //
                    params: {
                        userName: this.$store.state.username,
                        password: this.$store.state.password
                    }
                }).then(function(res) {

                })
            },
            // 排序
            timeSort(type) {
                var that = this;
                var datas = that.flowTodos
                // 创建时间降序
                if ( type == 'cj' ) {
                    datas.sort(function (a, b) {
                        return b.starttimerStr> a.starttimerStr ? 1 : -1;
                    });
                }
                if ( type == 'cs' ) {
                    datas.sort(function (a, b) {
                        return a.starttimerStr> b.starttimerStr ? 1 : -1;
                    });
                }
                // 限办时间降序
                if ( type == 'xj' ) {
                    datas.sort(function (a, b) {
                        return b.timerStr> a.timerStr ? 1 : -1;
                    });
                }
                if ( type == 'xs' ) {
                    datas.sort(function (a, b) {
                        return a.timerStr> b.timerStr ? 1 : -1;
                    });
                }
                that.flowTodos = datas;
                that.$f7.closeModal('.my-popover')
            },
            // 待办列表
            getflowtodos() {
                var that = this;
//                var datas = this.$store.state.list;
//                datas.forEach(function (value,index) {
//                    value.timerStr = new Date(value.limitTime.replace(/-/g,'/')).getTime()
//                    value.starttimerStr = new Date(value.createDate.replace(/-/g,'/')).getTime()
//                    if ( a_bFun.dateCompare(value.limitTime,that.RQ) > 0 && value.isLimit) {
//                        value.chaoshiState = '1'
//                    }else {
//                        value.chaoshiState = '0'
//                    }
//                })
//                that.flowTodos = datas;
////

                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/GetToDoList', { //
                    params: {
                        userIP: this.$store.state.username,
//                        SysName: 'HBGW'
                    }
                }).then(function(res) {
                    f7.pullToRefreshDone()
                    var resDate = JSON.parse(res.data)

                    var datas = resDate.data
                    console.log(datas)
                    if ( datas.length ) {
                        datas.forEach(function (value,index) {
                            value.timerStr = new Date(value.limitTime.replace(/-/g,'/')).getTime()
                            value.starttimerStr = new Date(value.createDate.replace(/-/g,'/')).getTime()
                            if ( a_bFun.dateCompare(value.limitTime,that.RQ) > 0 && value.isLimit) {
                                value.chaoshiState = '1'
                            }else {
                                value.chaoshiState = '0'
                            }
                        })
                        that.flowTodos = datas;
                    }else {
                        that.flowTodos = []
                    }
                })
            },
            // 已办列表
            getflowdones(flag) {
                if ( flag == 1 ) {
                    this.Skip = 0;
                    this.Take = 15;
                }
                if ( this.StartDate != '' ) {
                    var StartDate = this.StartDate.replace('T',' ') + ':00'
                }
                if ( this.EndDate != '' ) {
                    var EndDate = this.EndDate.replace('T',' ') + ':00'
                }
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl + 'flowdones', { //
                    params: {
                        UserName: this.$store.state.username,
                        SysName: 'HBGW',
                        Skip: this.Skip,
                        Take: this.Take,
                        Title: this.Title,
                        StartDate: StartDate,
                        EndDate: EndDate
                    }
                }).then(function(res) {
                    if(flag == 1) {
                        f7.pullToRefreshDone('#yiban .pull-to-refresh');
                    }
                    if(flag == 2) {
                        that.onInfinite = false;
                    } else {
                        f7.attachInfiniteScroll('#yiban .infinite-scroll'); //开启无限加载
                    }
                        var datas = res.data.flowTodos;
                        if ( datas.length ) {
                            datas.forEach(function (value,index) {
                                if ( value.createDate ) {
                                    value.createDate = commonfun.timeFormat(value.createDate,'strMinute')
                                }
                            })
                        }
                        that.ybcount = res.data.count
                        if(flag == 1) {
                            that.flowDones = datas;
                        } else {
                            that.flowDones = datas;
                        }
                        if(!datas.length && flag == 2) {
                            f7.detachInfiniteScroll('#yiban .infinite-scroll'); //关闭无限加载
                            f7.pullToRefreshDone('#yiban .pull-to-refresh');

                        }
                })
//                    f7.pullToRefreshDone()
//                    var datas = res.data.flowTodos;
//                    if ( datas.length ) {
//                        datas.forEach(function (value,index) {
//                            if ( value.createDate ) {
//                                value.createDate = commonfun.timeFormat(value.createDate)
//                            }
//                        })
//                    }
//                    that.flowDones = datas;
//                    that.count = res.data.count
//                })
            },
            // 更改待阅状态
            readState(id,data) {
                this.$store.state.dataObj = data;
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormReader/EditeReader', { //
                    params: {
                        Creator: this.$store.state.username,
                        FRID: id
                    }
                }).then(function(res) {
                    setTimeout(function () {
                        f7.pullToRefreshTrigger()
                    },1000)
                })
            },
            // 待阅
            GetFormReaderD(flag){
                if ( flag == 1 ) {
                    this.DYpage = 1;
                }
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormReader/GetFormReaderD', { //
                    params: {
                        SFTitle: this.TitleDY,
                        Creator: this.$store.state.username,
                        page: this.DYpage,
                        nums: this.pageNum,
                    }
                }).then(function(res) {
                    if(flag == 1) {
                        f7.pullToRefreshDone('#daiyue .pull-to-refresh');
                    }
                    if(flag == 2) {
                        that.onInfiniteDY = false;
                    } else {
                        f7.attachInfiniteScroll('#daiyue .infinite-scroll'); //开启无限加载
                    }
                    console.log(JSON.parse(res.data),'待阅')
                    var datas = JSON.parse(res.data)
                    if ( datas.res ) {
                        that.dycount = datas.total;
                        if(flag == 1) {
                            that.readTods = datas.entity;
                        } else {
                            datas.entity.forEach(function(value, index) {
                                that.readTods.push(value);
                            });
                        }
                        if(!datas.length && flag == 2) {
                            f7.detachInfiniteScroll('#daiyue .infinite-scroll'); //关闭无限加载
                            f7.pullToRefreshDone('#daiyue .pull-to-refresh');

                        }
                    }
                })
            },
            // 已阅
            GetFormReaderY(flag) {
                if ( flag == 1 ) {
                    this.YYpage = 1;
                }
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormReader/GetFormReaderY', { //
                    params: {
                        SFTitle: this.TitleYY,
                        Creator: this.$store.state.username,
                        page: this.YYpage,
                        nums: this.pageNum,
                    }
                }).then(function(res) {
                    if(flag == 1) {
                        f7.pullToRefreshDone('#yiyue .pull-to-refresh');
                    }
                    if(flag == 2) {
                        that.onInfiniteYY = false;
                    } else {
                        f7.attachInfiniteScroll('#yiyue .infinite-scroll'); //开启无限加载
                    }
                    console.log(JSON.parse(res.data),'待阅')
                    var datas = JSON.parse(res.data)
                    if ( datas.res ) {
                        that.yycount = datas.total;
                        if(flag == 1) {
                            that.readDones = datas.entity;
                        } else {
                            datas.entity.forEach(function(value, index) {
                                that.readDones.push(value);
                            });
                        }
                        if(!datas.length && flag == 2) {
                            f7.detachInfiniteScroll('#yiyue .infinite-scroll'); //关闭无限加载
                            f7.pullToRefreshDone('#yiyue .pull-to-refresh');

                        }
                    }
                })
            },
            onRefreshDY() {
                this.GetFormReaderD(1)
            },
            onRefreshDB() {
                this.getflowtodos();
            },
            onRefreshYD() {
                this.getflowdones(1);
            },
            onRefreshYY() {
                this.GetFormReaderY(1)
            },
            onF7Init(){
                f7.pullToRefreshTrigger('#daiban .pull-to-refresh-content')
            },
            //点击初始化刷新页面
            InitPage(){
                var that = this;
                this.clearSeachData();
                this.$$('#tab1').on('show',function () {
                    f7.pullToRefreshTrigger('#daiban .pull-to-refresh-content')
                });
                this.$$('#tab2').on('show',function () {
                    f7.pullToRefreshTrigger('#daiyue .pull-to-refresh-content')
                });
                this.$$('#tab3').on('show',function () {
                    that.bDFlag = false;
                    that.$$('#yiban .page-content').scrollTop(0, 500)
                    f7.pullToRefreshTrigger('#yiban .pull-to-refresh-content')
                });
                this.$$('#tab4').on('show',function () {
                    f7.pullToRefreshTrigger('#yiyue .pull-to-refresh-content')
                });
            },
            IsToolbar(){
                    console.log('pageAni');
                    var that = this;
                    this.$$(document).on('pageAfterAnimation', function(e) {
                        console.log('pageAfterAnimation');
                        var page = e.detail.page;
                        var name = page.name;
                        var from = page.from;
                        //显示底部工具栏
                        if(from === 'left') {
                            // that.$$('.picker-modal.modal-in').removeClass('modal-in');
                            //返回隐藏picker popup 等 也可写到具体页面中
                            if(name === 'daiban'|| name === 'daiyue'|| name === 'yiban'|| name === 'yiyue') {
                                that.$$('.toolbar').show();
                                that.$f7.showToolbar('.toolbar');
                            }
                        }
                    });
                    this.$$(document).on('pageInit', function(e) {
                        var page = e.detail.page;
                        var name = page.name;
                        var from = page.from;
                        console.log('pagePageInit');
                        //显示底部工具栏
                        if(from === 'right') {
                            if(name != 'daiban' || name != 'daiyue' || name != 'yiban' || name != 'yiyue') {
                                that.$$('.toolbar').hide();
                                that.$f7.hideToolbar('.toolbar');
                            }
                        }
                    });
            }
        }
    }
</script>
<style>
    .infinite-scroll-preloader{
        display: none;
    }
</style>

