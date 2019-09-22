<template>
    <f7-page no-tabbar>
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon="icon icon-back" back></f7-link>
            </f7-nav-left>
            <f7-nav-center>
                详情
            </f7-nav-center>
        </f7-navbar>
        <f7-block v-if="FwOrSw == 'FW'&& dataList.entity">
            <f7-list form>
                <f7-list-item>
                    <f7-label>编号</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FZi || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FZi"></f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>缓急</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FHuanJi || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FHuanJi"></f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>密级</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FMiJi || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FMiJi"></f7-input>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>保密期限</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FBaoMiQiXian || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FBaoMiQiXian"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>拟稿部门</f7-label>
                    <div>{{dataList.entity.FNGOrg || ''}}</div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>拟稿人</f7-label>
                    <div>{{dataList.entity.FNGPerson || ''}}</div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>拟稿人电话</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FNGPhone || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FNGPhone"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>公文标题</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FTitle || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FTitle"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>主送</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FZhuSong || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FZhuSong"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>抄送</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FChaoSong || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FChaoSong"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>抄报</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FChaoBao || ''}}</div>
                    <f7-input v-else type="text" v-model="dataList.entity.FChaoBao"></f7-input>

                </f7-list-item>
                <f7-list-item>
                    <f7-label>备注</f7-label>
                    <div v-if="!isPowerUser">{{dataList.entity.FMark || ''}}</div>
                    <f7-input v-else type="textarea" v-model="dataList.entity.FMark"></f7-input>

                </f7-list-item>
                <!--<f7-list-item>-->
                <!--<f7-label>限办时间</f7-label>-->
                <!--<div>{{dataList.entity.LimtDate || ''}}</div>-->
                <!--</f7-list-item>-->
                <f7-list-item>
                    <f7-label>领导签发</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ling,x) in lingdao" :key="x">
                            <span>{{ling.idear}}</span>
                            <img v-if="ling.img != ''" :src="ling.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>部门会签</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ni,y) in niban" :key="y">
                            <span>{{ni.idear}}</span>
                            <img v-if="ni.img != ''" :src="ni.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>办公室核稿</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(bu,z) in bumen" :key="z">
                            <span>{{bu.idear}}</span>
                            <img v-if="bu.img != ''" :src="bu.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>部门核稿</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ban,a) in banwen" :key="a">
                            <span>{{ban.idear}}</span>
                            <img v-if="ban.img != ''" :src="ban.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
            </f7-list>
        </f7-block>
        <f7-block v-if="FwOrSw == 'SW'&& dataList.entity">
            <f7-list form>
                <f7-list-item>
                    <f7-label>文号</f7-label>
                    <div>{{dataList.entity.SWenHao || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>来文日期</f7-label>
                    <div>{{dataList.entity.SLWRiQi || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>来文文号</f7-label>
                    <div>{{dataList.entity.SLWWenHao || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>来文分类</f7-label>
                    <div>{{dataList.entity.SFenLei || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>来文单位</f7-label>
                    <div>{{dataList.entity.SLWDanWei || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>收文标题</f7-label>
                    <div>{{dataList.entity.STitile || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>收文年份</f7-label>
                    <div>{{dataList.entity.SNianFen || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>限办日期</f7-label>
                    <div>{{dataList.entity.SLimitTime || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <!--<f7-list-item>-->
                <!--<f7-label>实际限办日期</f7-label>-->
                <!--<div>{{dataList.entity.SActLimitTime || ''}}</div>-->
                <!--&lt;!&ndash;<f7-input type="text"></f7-input>&ndash;&gt;-->
                <!--</f7-list-item>-->
                <f7-list-item>
                    <f7-label>备注</f7-label>
                    <div>{{dataList.entity.SMark || ''}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
                <f7-list-item>
                    <f7-label>领导批示</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ling,x) in lingdao" :key="x">
                            <span>{{ling.idear}}</span>
                            <img v-if="ling.img != ''" :src="ling.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>拟办意见</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ni,y) in niban" :key="y">
                            <span>{{ni.idear}}</span>
                            <img v-if="ni.img != ''" :src="ni.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>部门办理</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(bu,z) in bumen" :key="z">
                            <span>{{bu.idear}}</span>
                            <img v-if="bu.img != ''" :src="bu.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
                <f7-list-item>
                    <f7-label>办文情况</f7-label>
                    <div style="width: 70%;">
                        <div style="width: 100%" v-for="(ban,a) in banwen" :key="a">
                            <span>{{ban.idear}}</span>
                            <img v-if="ban.img != ''" :src="ban.img" style="width: 100%;height: 60px;"/>
                        </div>
                    </div>
                </f7-list-item>
            </f7-list>
        </f7-block>
        <f7-block v-if="dataList.file">
            <f7-block-title>附件</f7-block-title>
            <f7-list form>
                <f7-list-item v-for="(item,index) in dataList.file" :key="index" :link="item.AFPath || '#'">
                    <!--<f7-label>模版名称1</f7-label>-->
                    <div>{{item.AFName}}</div>
                    <!--<f7-input type="text"></f7-input>-->
                </f7-list-item>
            </f7-list>
        </f7-block>
    </f7-page>

</template>
<script>
    import Fun from '../config/commonfun'
    import a_bFun from '../config/comparisonRQ'
    export default {
        data() {
            return{
                insType: '', // 公文类型
                objId: '', // 公文ID
                stepId: '', // 流程节点ID
                dataList: {}, // 待办详情数据
                buttonInfos: [], // 获取到的按钮LIst
                yijian: '', // 用户输入的意见
                renyuan: [], // 选中的人员
                personneList: [], // 不存在规则获取到的人员列表（通讯录）
                RuleObj: {}, // 点击按钮时，存储按钮data
                changyongyijian: '', // 常用意见
                ruleuser: [], // 规则存在时获取到的人员列表
                RQ: Fun.getDateDQ(0,true), // 当前日期
                changyongyijianList: [], // 常用意见列表
                SuggestionObj: {}, // 常用意见频率（选择了）
                FwOrSw: 'FW', // 发文，收文类型
                UDReason: '', //不能按时办理原因
                UDStituation: '', //当前办理情况
                UDPlanedTime: '', //预计完成时间
                SignetList: [], //签章列表
                SignetFlag: false, //签章验证
                signetId: '', //签章主键
                password: '', //签章密码
                instanceID: '', //流程ID
                SignetRecordList: [], //所有流程签章图片
                lingdao: [], //
                niban: [], //
                bumen: [], //
                banwen: [], //
                qianzhangImg: '', // 签章图片路径
                isPowerUser: false, // 是否允许修改
                userName: '', // 中文名
            }
        },
        created(){
            console.log(this.$store.state.dataObj,'待阅页')
            this.objId = this.$store.state.dataObj.SFID
            this.stepId = this.$store.state.dataObj.StepID
            this.insType = this.$store.state.dataObj.InsType
            this.instanceID = this.$store.state.dataObj.InstanceID
            if ( this.insType.indexOf('FW') != -1) {
                this.FwOrSw = 'FW'
            }else {
                this.FwOrSw = 'SW'
            }

            this.GetFormDetail()
            this.GetSignetRecord()
        },
        methods:{

            // 获取整个流程所有签章记录
            GetSignetRecord() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/GetSignetRecord', {
                    params: {
                        instanceId: this.instanceID,
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    if ( resDate.res ) {
                        that.SignetRecordList = resDate.data;
                        if ( resDate.data.length ) {
                            that.GetAllStepInfo();
                        }
                        console.log(resDate)
                    }
                })
            },
            // 获取各签章lable
            GetAllStepInfo() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl + 'GetAllStepInfo', {
                    params: {
                        instanceId: this.instanceID,
                    }
                }).then(function(res) {
                    if ( res.data.success ) {
                        console.log(res.data.stepInfos)
                        if ( res.data.stepInfos.length ) {
                            let arr = that.SignetRecordList;
                            let arr1 = res.data.stepInfos;
                            let user = arr1.find(x=> x.doUser == that.$store.state.username)
                            if ( user ) {
                                that.userName = user.doUserName
                            }
                            console.log('中文名',that.userName)

                            for ( var i = 0; i < arr.length; i++ ) {
                                for( var j = 0; j < arr1.length; j++ ) {
                                    if ( arr[i].stepID == arr1[j].steid ) {
                                        arr1[j].img = arr[i].img
                                    }
                                }
                            }
                            that.classList(arr1)
                        }
                    }
                })
            },
            // 构造新数组
            classList(arr) {
                console.log(arr)
                var that = this;
                let datas = []
                arr.forEach(function (value,index) {
                    if ( value.activityName == '领导批示' || value.activityName == '领导签发' ) {
                        that.lingdao.push({
                            idear: value.idear || '',
                            img: value.img || ''
                        })
                    }
                    if ( value.activityName == '拟办意见' || value.activityName == '会签' ) {
                        that.niban.push({
                            idear: value.idear || '',
                            img: value.img || ''
                        })
                    }
                    if ( value.activityName == '部门办理' || value.activityName == '办公室核稿' ) {
                        that.bumen.push({
                            idear: value.idear || '',
                            img: value.img || ''
                        })
                    }
                    if ( value.activityName == '办理人' || value.activityName == '部门核稿' ) {
                        that.banwen.push({
                            idear: value.idear || '',
                            img: value.img || ''
                        })
                    }


                })
                console.log(that.lingdao)
                //                            {
//                                lable: '',
//                                    idearList: [
//                                {
//                                    idear: '',
//                                    img: ''
//                                }
//                            ],
//                            }
            },
            // 获取待办详情数据
            GetFormDetail() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormDetails/GetFormDetail', { //
                    params: {
                        ObjId: this.objId,
                        insType: this.insType,
                    }
                }).then(function(res) {
                    that.dataList = JSON.parse(res.data)
                    console.log(JSON.parse(res.data))
                })
            }
        }
    }
</script>
<style>
    /*.list-block .item-media+.item-inner{*/
    /*margin-left: 0;*/
    /*}*/
    .list-block .item-title.label{
        width: 25%;
        color: red;
    }
</style>