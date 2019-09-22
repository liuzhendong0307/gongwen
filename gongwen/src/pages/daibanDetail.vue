<template>
    <f7-page no-tabbar>
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon="icon icon-back" back></f7-link>
            </f7-nav-left>
            <f7-nav-center>
                {{roleName}}
            </f7-nav-center>
        </f7-navbar>
        <!--<f7-list form class="accordion-style">-->
            <!--<f7-list-item>-->
                <!--<f7-label class="lable-style" style="color: red!important;">当前环节</f7-label>-->
                <!--<div class="lable-broder-style">{{roleName}}</div>-->
            <!--</f7-list-item>-->
        <!--</f7-list>-->
        <f7-block v-if="FwOrSw == 'FW'&& dataList.entity">
            <f7-list accordion-list class="accordion-style">
                <ul>
                    <li class="accordion-item accordion-item-expanded">
                        <a href="" class="item-link item-content">
                            <div class="item-inner" style="padding-left: 35px;">
                                <div class="item-title">基础信息</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">
                            <f7-list form>
                                <f7-list-item>
                                    <f7-label class="lable-style">公文标题</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FTitle || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.FTitle"></f7-input>

                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">编号</f7-label>
                                    <div class="lable-broder-style">
                                        <span>{{dataList.entity.FZi || ''}}</span>
                                        <span v-if="dataList.entity.FWenHao">{{'['+ dataList.entity.FWenHao + '号]'}}</span>
                                    </div>
                                    <!--<div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FZi || ''}}+</div>-->
                                    <!--<f7-input v-else type="text" v-model="dataList.entity.FZi"></f7-input>-->
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">缓急</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FHuanJi || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.FHuanJi"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">密级</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FMiJi || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.FMiJi"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">保密期限</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FBaoMiQiXian || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.FBaoMiQiXian"></f7-input>

                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">附件</f7-label>
                                    <table class="table" style="margin-bottom: 0;">
                                        <tbody>
                                        <tr v-for="(item,index) in dataList.file">
                                            <td style="color: red;border-top: none;">
                                                <!--<a class="external" :href="item.AFPath || '#'" style="display: block;width: 100%;text-align: left;padding-left: 15px;">{{item.AFName}}</a>-->
                                                <a class="external" :href="'http://10.52.3.94:8081/api/WordTurnPdf?url='+ encodeURIComponent(item.AFPath) + '&linkType=1&linktype=1&nav=1&fileName=' + encodeURIComponent(item.AFName)">{{item.AFName}}</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!--<a class="external" :href="item.AFPath || '#'" :download="item.AFName" style="color: #000;display: block;width: 100%;text-align: right;">{{item.AFName}}</a>-->
                                </f7-list-item>

                            </f7-list>
                        </div>
                    </li>

                    <li class="accordion-item">
                        <a href="" class="item-link item-content">
                            <div class="item-inner" style="padding-left: 35px;">
                                <div class="item-title">其它信息</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">
                            <f7-list form>
                                <f7-list-item>
                                    <f7-label class="lable-style">主送</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FZhuSong || ''}}</div>
                                    <f7-input v-else type="textarea" v-model="dataList.entity.FZhuSong"></f7-input>

                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">抄送</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FChaoSong || ''}}</div>
                                    <f7-input v-else type="textarea" v-model="dataList.entity.FChaoSong"></f7-input>

                                </f7-list-item>
                                <!--<f7-list-item>-->
                                    <!--<f7-label class="lable-style">抄报</f7-label>-->
                                    <!--<div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FChaoBao || ''}}</div>-->
                                    <!--<f7-input v-else type="text" v-model="dataList.entity.FChaoBao"></f7-input>-->

                                <!--</f7-list-item>-->
                                <f7-list-item>
                                    <f7-label class="lable-style">拟稿部门</f7-label>
                                    <div class="lable-broder-style">{{dataList.entity.FNGOrg || ''}}</div>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">拟稿人</f7-label>
                                    <div class="lable-broder-style">{{dataList.entity.FNGPerson || ''}}</div>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">拟稿人电话</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FNGPhone || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.FNGPhone"></f7-input>

                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">备注</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.FMark || ''}}</div>
                                    <f7-input v-else type="textarea" v-model="dataList.entity.FMark"></f7-input>

                                </f7-list-item>
                            </f7-list>
                        </div>
                    </li>
                </ul>
            </f7-list>
        </f7-block>
        <f7-block v-if="FwOrSw == 'SW'&& dataList.entity">
            <f7-list accordion-list class="accordion-style">
                <ul>
                    <li class="accordion-item accordion-item-expanded">
                        <a href="" class="item-link item-content">
                            <div class="item-inner" style="padding-left: 35px;">
                                <div class="item-title">基础信息</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">
                            <f7-list form>
                                <f7-list-item>
                                    <f7-label class="lable-style">来文文号</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.SLWWenHao || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.SLWWenHao"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">来文单位</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.SLWDanWei || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.SLWDanWei"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">收文标题</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.STitile || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.STitile"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">限办日期</f7-label>
                                    <div class="lable-broder-style">{{dataList.entity.SLimitTime || ''}}</div>
                                    <!--<f7-input type="text"></f7-input>-->
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">附件</f7-label>
                                    <table class="table" style="margin-bottom: 0;">
                                        <tbody>
                                        <tr v-for="(item,index) in dataList.file">
                                            <td style="color: red;border-top: none;">
                                                <!--<a class="external" :href="item.AFPath || '#'" :download="item.AFName" style="display: block;width: 100%;text-align: left;padding-left: 15px;">{{item.AFName}}</a>-->
                                                <!--内部查看-->
                                                <a class="external" v-if="!zaixianState" :href="'http://10.52.3.94:8081/api/WordTurnPdf?url='+ encodeURIComponent(item.AFPath) + '&linkType=1&linktype=1&nav=1&fileName=' + encodeURIComponent(item.AFName)">{{item.AFName}}</a>
                                                <!--在线修改-->
                                                <a class="external" v-if="zaixianState">{{item.AFName}}</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <!--<a class="external" :href="item.AFPath || '#'" :download="item.AFName" style="color: #000;display: block;width: 100%;text-align: right;">{{item.AFName}}</a>-->
                                </f7-list-item>

                            </f7-list>
                        </div>
                    </li>

                    <li class="accordion-item">
                        <a href="" class="item-link item-content">
                            <div class="item-inner" style="padding-left: 35px;">
                                <div class="item-title">其它信息</div>
                            </div>
                        </a>
                        <div class="accordion-item-content">
                            <f7-list form>
                                <f7-list-item>
                                    <f7-label class="lable-style">文号</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.SWenHao || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.SWenHao"></f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label class="lable-style">来文日期</f7-label>
                                    <div class="lable-broder-style">{{dataList.entity.SLWRiQi || ''}}</div>
                                    <!--<f7-input type="text"></f7-input>-->
                                </f7-list-item>

                                <f7-list-item>
                                    <f7-label class="lable-style">来文分类</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.SFenLei || ''}}</div>
                                    <f7-input v-else type="text" v-model="dataList.entity.SFenLei"></f7-input>
                                </f7-list-item>

                                <f7-list-item>
                                    <f7-label class="lable-style">收文年份</f7-label>
                                    <div class="lable-broder-style">{{dataList.entity.SNianFen || ''}}</div>
                                    <!--<f7-input type="text"></f7-input>-->
                                </f7-list-item>
                                <!--<f7-list-item>-->
                                <!--<f7-label>实际限办日期</f7-label>-->
                                <!--<div>{{dataList.entity.SActLimitTime || ''}}</div>-->
                                <!--&lt;!&ndash;<f7-input type="text"></f7-input>&ndash;&gt;-->
                                <!--</f7-list-item>-->
                                <f7-list-item>
                                    <f7-label class="lable-style">备注</f7-label>
                                    <div class="lable-broder-style" v-if="!isPowerUser">{{dataList.entity.SMark || ''}}</div>
                                    <f7-input v-else type="textarea" v-model="dataList.entity.SMark"></f7-input>
                                </f7-list-item>
                            </f7-list>
                        </div>
                    </li>
                </ul>

            </f7-list>
        </f7-block>
        <f7-list accordion-list class="accordion-style" v-if="liuChengAll.length">
            <ul>
                <li class="accordion-item">
                    <a href="" class="item-link item-content">
                        <div class="item-inner" style="padding-left: 35px;">
                            <div class="item-title">审批意见</div>
                        </div>
                    </a>
                    <div class="accordion-item-content">
                        <f7-list>
                            <f7-list-item v-for="(item,index) in liuChengAll" :key="index">
                                <f7-label class="lable-style">{{item.lable}}</f7-label>
                                <div style="width: 70%;" v-if="item.idearList">
                                    <div v-for="(item1,index1) in item.idearList" :key="index1"
                                         class="liucehng-style">
                                        <!--:class="(item1.idear != '')? 'liucehng-style': 'liucehng-no-style'"-->
                                        <span v-if="item1.img == ''" style="display: flex;flex-direction: column;">
                                            <span>{{item1.idear}}</span>
                                            <!--<span style="text-align: right;">{{item1.text}}</span>-->
                                        </span>
                                        <!--<span v-if="item1.idear != '' && item1.img == ''">{{item1.idear}}</span>-->
                                        <!--<span v-if="item1.idear != ''">{{item1.idear}}</span>-->
                                        <!--<span v-if="item1.idear != '' && item1.img == ''">{{item1.text}}</span>-->
                                        <span v-if="item1.img != ''">
                                            <span>{{item1.idear}}</span>
                                            <img :src="item1.img" style="width: 100%;height: 60px;"/>
                                        </span>
                                    </div>
                                </div>
                            </f7-list-item>
                        </f7-list>
                    </div>
                </li>
            </ul>

        </f7-list>
        <f7-list accordion-list class="accordion-style">
            <ul>
                <li class="accordion-item">
                    <a href="" class="item-link item-content">
                        <div class="item-inner" style="padding-left: 35px;">
                            <div class="item-title">流程详情</div>
                        </div>
                    </a>
                    <div class="accordion-item-content">
                        <f7-card v-for="(item,index) in liucehngDetailsList" :key="index">
                            <f7-card-header style="font-size: 14px;background: #ebf1ff;color: #417bc5;">
                                <span>{{item.activityName}}</span>
                                <span v-if="item.stepState == '1'">状态: 已审批</span>
                                <span v-if="item.stepState != '1'">状态: 未审批</span>
                            </f7-card-header>
                            <f7-card-content>
                                <p class="row">
                                    <span class="col-40" style="border-right: 1px solid burlywood">审核人: {{item.doUserName}}</span>
                                    <span class="col-60">处理时间:{{item.doneDate}}</span>
                                </p>
                                <p class="row">
                                    <span class="col-40" style="border-right: 1px solid burlywood">超时: 否</span>
                                    <span class="col-60">限办时间: {{item.limitTime}}</span>
                                </p>
                            </f7-card-content>
                        </f7-card>
                        <!--<f7-card v-for="(item,index) in liucehngDetailsList" :key="index">-->
                            <!--<f7-card-header style="font-size: 14px;background: #ebf1ff;color: #417bc5;">-->
                                <!--<span>{{item.activityName}}</span>-->
                                <!--<span v-if="item.stepState == '1'">{{item.doneDate}}</span>-->
                            <!--</f7-card-header>-->
                            <!--<f7-card-content>-->
                                <!--<p class="row">-->
                                    <!--<span class="col-33" style="border-right: 1px solid burlywood">审核人: {{item.doUserName}}</span>-->
                                    <!--<span class="col-33" style="border-right: 1px solid burlywood">状态:-->
                                        <!--<span v-if="item.stepState == '1'">已审批</span>-->
                                        <!--<span v-else>未审批</span>-->
                                    <!--</span>-->
                                    <!--<span class="col-33">超时: 否</span>-->
                                <!--</p>-->
                                <!--<p>限办时间: {{item.limitTime}}</p>-->
                            <!--</f7-card-content>-->
                        <!--</f7-card>-->
                    </div>
                </li>
            </ul>
        </f7-list>
        <!--<f7-block>-->
        <!--<f7-block-title>当前环节: {{roleName}}</f7-block-title>-->
        <!--</f7-block>-->
        <f7-list accordion-list class="accordion-style">
            <ul>
                <li class="accordion-item accordion-item-expanded">
                    <a href="" class="item-link item-content">
                        <div class="item-inner" style="padding-left: 35px;">
                            <div class="item-title">操作内容</div>
                        </div>
                    </a>
                    <div class="accordion-item-content">
                        <f7-list form>
                            <!--<f7-list-item>-->
                                <!--<f7-label class="lable-style">当前环节</f7-label>-->
                                <!--<div class="lable-broder-style">{{roleName}}</div>-->
                            <!--</f7-list-item>-->
                            <f7-list-item v-if="xianban && isSug">
                                <f7-label class="lable-style">填写意见</f7-label>
                                <table class="table" style="margin-bottom: 0;">
                                    <tbody>
                                    <tr>
                                        <td style="border-top: none;">
                                            <f7-input style="margin-left: 15px;" type="textarea" placeholder="请填写意见" readonly v-model="yijian" @click="promptSes()"></f7-input>
                                        </td>
                                    </tr>
                                    <tr @click="changyongClick()" style="text-align: right;">
                                        <div>
                                            <span style="color: #417bc5;">常用意见</span>
                                            <i class="iconfont icon-shouzhi" style="color:#4c9bf7"></i>
                                        </div>
                                    </tr>
                                    </tbody>
                                </table>
                            </f7-list-item>
                            <f7-list-item v-if="xianban && isSign" link="#" class="open-popup" data-popup=".popup-qianzhang" @click="GetUserSignetList()">
                                <f7-label class="lable-style">签章</f7-label>
                                <div style="width: 70%;">
                                    <img v-if="qianzhangImg != ''" :src="qianzhangImg" style="width: 100%;height: 60px;"/>
                                </div>
                            </f7-list-item>
                            <f7-list-item v-if="xianban && bextBtn.isCheckUser">
                                <f7-label class="lable-style">短信提醒</f7-label>
                                <f7-input type="switch" id="mes" name="mes"></f7-input>
                            </f7-list-item>
                            <f7-list-item v-if="xianban">
                                <f7-label class="lable-style">下一环节</f7-label>
                                <table class="table" style="margin-bottom: 0;">
                                    <tbody>
                                    <tr v-for="(option,num) in buttonInfos">
                                        <td style="border-top: none;padding-top: 0;padding-bottom: 0;">
                                            <f7-list-item radio v-model="nextHJ" :checked="nextHJ === option.ruleName" name="my-radio" :value="option.ruleName" :title="option.ruleName" @click="selectChange(option.ruleName)"></f7-list-item>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <!--<f7-input type="select" v-model="nextHJ" @change="selectChange(nextHJ)">-->
                                <!--<option v-for="(option,num) in buttonInfos" :value="option.ruleName">{{option.ruleName}}</option>-->
                                <!--</f7-input>-->
                            </f7-list-item>
                            <f7-list-item v-if="xianban && !bextBtn.isCheckUser">
                                <f7-label class="lable-style">下一处理人</f7-label>
                                <div class="lable-broder-style">{{bextBtn.userName}}</div>
                            </f7-list-item>
                            <f7-list-item v-if="xianban && bextBtn.isCheckUser" @click="submitBtn(bextBtn,'bumen')">
                                <f7-label class="lable-style">人员选择</f7-label>
                                <table class="table" style="margin-bottom: 0;">
                                    <tbody>
                                    <tr>
                                        <td style="border-top: none;">
                                            <f7-input class="font-13" style="margin-left: 15px;" type="textarea" readonly v-model="renStr"></f7-input>
                                        </td>
                                    </tr>
                                    <tr style="text-align: right;">
                                        <div>
                                            <i class="iconfont icon-shouzhi" style="color:#4c9bf7"></i>
                                        </div>
                                    </tr>
                                    </tbody>
                                </table>
                            </f7-list-item>
                            <f7-list-item v-if="isNoPrint" @click="chuanyuerenBtn('bumen')">
                                <f7-label class="lable-style">传阅人</f7-label>
                                <table class="table" style="margin-bottom: 0;">
                                    <tbody>
                                    <tr>
                                        <td style="border-top: none;">
                                            <f7-input class="font-13" style="margin-left: 15px;" type="textarea" readonly v-model="renStr1"></f7-input>
                                        </td>
                                    </tr>
                                    <tr style="text-align: right;">
                                        <div>
                                            <i class="iconfont icon-shouzhi" style="color:#4c9bf7"></i>
                                        </div>
                                    </tr>
                                    </tbody>
                                </table>
                            </f7-list-item>
                        </f7-list>
                    </div>
                </li>
            </ul>
        </f7-list>
        <f7-block style="margin: 30px;margin-bottom: 0;">
            <div class="row">
                <div class="col-100"
                     style="margin-bottom: 15px;">
                    <!--@click="submitBtn(item)"-->
                    <a href="#" class="button button-big active" @click="submitBtnEnd(yigeArr)">{{bextBtn.buttonName}}</a>
                </div>
                <div v-if="roleName !== '领导批示' && roleName !== '签发' && roleName !== '领导签发'" class="col-100"  style="margin-bottom: 15px;">
                    <a href="#" class="button button-big active open-popup" data-popup=".popup-notime">反馈</a>
                </div>
                <!--<div v-if="isPowerUser && xianban" class="col-50"-->
                <!--style="margin-bottom: 15px;"-->
                <!--@click="UpdateFWForm(dataList.entity)">-->
                <!--<a href="#" class="button button-big active">修改并保存</a>-->
                <!--</div>-->
            </div>

        </f7-block>
        <f7-popup class="popup-lugangtong">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-lugangtong" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>填写意见</f7-nav-center>
                        </f7-navbar>

                        <f7-list form>
                            <f7-list-item>
                                <f7-input type="textarea" placeholder="请填写意见" v-model="yijian"></f7-input>
                            </f7-list-item>
                            <f7-list-item @click="changyongClick()">
                                <f7-label>常用意见</f7-label>
                                <!--<f7-input type="select" v-model="changyongyijian" @change="changeYJ(changyongyijian)">-->
                                <!--<option v-for="(option,num) in changyongyijianList"-->
                                <!--:key="num" :value="option.PBValue">{{option.PBValue}}</option>-->
                                <!--</f7-input>-->
                            </f7-list-item>
                            <f7-list-item link="#" v-if="isSign" @click="GetUserSignetList()">
                                <f7-label>签章</f7-label>
                                <div style="width: 70%;">
                                    <img v-if="qianzhangImg != ''" :src="qianzhangImg" style="width: 100%;height: 60px;"/>
                                </div>
                            </f7-list-item>
                        </f7-list>
                        <f7-card>
                            <f7-list form style="padding-bottom: 15px;">
                                <f7-list-item>
                                    <f7-label>签章名称:</f7-label>
                                    <f7-input type="select" v-model="signetId">
                                        <option v-for="(option,num) in SignetList"
                                                :key="num" :value="option.Signet_ID">{{option.Signet_Name}}</option>
                                    </f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label>密码:</f7-label>
                                    <f7-input type="text" placeholder="请输入密码" v-model="password"></f7-input>
                                </f7-list-item>
                                <f7-button active style="margin: 15px 40px 0 40px;" @click="CheckSignetRecord()">验证并盖章</f7-button>
                            </f7-list>
                        </f7-card>

                        <f7-block style="margin:30px;">
                            <div class="row">
                                <div class="col-50"
                                     style="margin-bottom: 15px;"
                                     v-for="(item,index) in buttonInfos"
                                     :key="index"
                                     @click="submitBtn(item)">
                                    <a href="#" :class="['button button-big active',item.buttonType == '100' ? ' color-red' : '']">{{item.buttonName}}</a>
                                </div>
                            </div>
                            <!--<a style="margin: 15px 35px;"-->
                            <!--v-for="(item,index) in buttonInfos"-->
                            <!--class="button button-big button-round active" @click="submitBtn(item)">{{item.buttonName}}</a>-->
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-renyuan">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-renyuan" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>选择人员</f7-nav-center>
                            <f7-nav-right>
                                <f7-link @click="closepopupAbout()">确认</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-subnavbar>
                            <f7-buttons>
                                <f7-button href="#renyuan_1" class="tab-link active" @click="submitBtn(bextBtn,'bumen')">部门/科室用户</f7-button>
                                <f7-button href="#renyuan_2" class="tab-link" @click="submitBtn(bextBtn,'danwei')">单位用户</f7-button>
                            </f7-buttons>
                        </f7-subnavbar>
                        <f7-tabs>
                            <f7-tab id="renyuan_1" active>
                                <div class="list-block accordion-list">
                                    <ul>
                                        <li class="accordion-item accordion-item-expanded">
                                            <label class="label-checkbox item-content">
                                                <!-- Checked by default -->
                                                <input type="checkbox" name="my-checkbox" :value="bumenRYArr.name" :checked="allCheckState" @change="allCheckStateChange(bumenRYArr.ryList)">
                                                <div class="item-media">
                                                    <i class="icon icon-form-checkbox"></i>
                                                </div>
                                                <div class="item-inner">
                                                    <div class="item-title">{{bumenRYArr.name}}</div>
                                                    <div class="item-after">
                                                        <f7-button v-if="benrenState1" @click="chubenren1(benrenState1)" class="baohanbenren">包含本人</f7-button>
                                                        <f7-button v-if="!benrenState1" @click="chubenren1(benrenState1)" class="baohanbenren">除本人</f7-button>
                                                    </div>
                                                </div>
                                            </label>
                                            <div class="accordion-item-content">
                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;">
                                                    <!--(erJrenStr.indexOf(item.userName) != -1) || -->
                                                    <f7-list-item checkbox v-for="(item,index) in bumenRYArr.ryList" :key="index" :name="item.userName" :checked="allCheckState" @click="selectRY(item)">{{item.chName}}</f7-list-item>
                                                </f7-list>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </f7-tab>
                            <f7-tab id="renyuan_2">
                                <div class="list-block accordion-list">
                                    <ul>
                                        <f7-list-item accordion-item
                                                      class="position-item"
                                                      v-for="(item,index) in wuGZrenList1"
                                                      :key="index"
                                                      v-show="item.id != $store.state.orgid"
                                                      @click="item.child.length == 0 ? GetUsersNAO(item.id,$event.target.offsetParent.className) : ''"
                                                      :title="item.name">
                                            <div slot="root-start" class="position-item-child" @click="addBMid(item.id)">
                                                <i class="icon icon-weiren" v-if="BMarr.indexOf(item.id) == -1"></i>
                                                <i class="icon icon-yiren" v-else></i>
                                            </div>
                                            <f7-accordion-content>
                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;" v-if="item.child.length == 0">
                                                    <f7-list-item checkbox
                                                                  v-for="(item2,index2) in wuGZrenList2"
                                                                  :value="item2.chName"
                                                                  :checked="(erJrenStr.indexOf(item2.userName) != -1)"
                                                                  :key="index2"
                                                                  :title="item2.chName" @click="selectRY(item2)"></f7-list-item>
                                                </f7-list>
                                                <div class="list-block accordion-list">
                                                    <ul>
                                                        <f7-list-item accordion-item
                                                                      v-if="item.child"
                                                                      v-for="(item1,index1) in item.child"
                                                                      :key="index1"
                                                                      :title="item1.name" @click="GetUsersNAO(item1.id,$event.target.offsetParent.className)">
                                                            <!--<span slot="media" class="icon icon-yuandian"></span>-->
                                                            <div slot="root-start" class="position-item-child" @click="addBMid(item1.id)">
                                                                <i class="icon icon-weiren" v-if="BMarr.indexOf(item1.id) == -1"></i>
                                                                <i class="icon icon-yiren" v-else></i>
                                                            </div>
                                                            <f7-accordion-content>
                                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;">
                                                                    <f7-list-item checkbox
                                                                                  v-for="(item2,index2) in wuGZrenList2"
                                                                                  :value="item2.chName"
                                                                                  :checked="(erJrenStr.indexOf(item2.userName) != -1)"
                                                                                  :key="index2"
                                                                                  :title="item2.chName" @click="selectRY(item2)"></f7-list-item>
                                                                </f7-list>
                                                            </f7-accordion-content>
                                                        </f7-list-item>
                                                    </ul>
                                                </div>
                                            </f7-accordion-content>
                                        </f7-list-item>
                                    </ul>
                                </div>
                            </f7-tab>
                        </f7-tabs>


                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-about">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-about" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>选择人员</f7-nav-center>
                            <f7-nav-right>
                                <!--<f7-link @click="submitBtnEnd">提交</f7-link>-->
                                <f7-link @click="closepopupAbout()">确认</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-list accordion-list class="tree-style" v-if="personneList">
                            <f7-list-item accordion-item
                                          v-for="(item,index) in personneList.child"
                                          :key="index"
                                          :title="item.text">
                                <span slot="media" class="icon icon-yuandian"></span>
                                <!--<span slot="media"></span>-->
                                <f7-accordion-content>
                                    <f7-list accordion-list style="padding-left: 30px;margin: 0;" v-if="item.child">
                                        <f7-list-item accordion-item
                                                      v-for="(item1,index1) in item.child"
                                                      :key="index1"
                                                      :title="item1.text">
                                            <span slot="media" class="icon icon-yuandian"></span>
                                            <!--<span slot="media" v-else></span>-->
                                            <f7-accordion-content>
                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;" v-if="item1.child">
                                                    <f7-list-item checkbox
                                                                  v-for="(item2,index2) in item1.child"
                                                                  :key="index2"
                                                                  :title="item2.text" @click="selectRY(item2.value)"></f7-list-item>
                                                </f7-list>
                                            </f7-accordion-content>

                                        </f7-list-item>
                                    </f7-list>
                                </f7-accordion-content>
                            </f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-about1">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-about1" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>选择人员</f7-nav-center>
                            <f7-nav-right>
                                <!--<f7-link @click="submitBtnEnd">提交</f7-link>-->
                                <f7-link @click="closepopupAbout1()">确认</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-subnavbar>
                            <f7-buttons>
                                <f7-button href="#chuanyue_1" class="tab-link active" @click="chuanyuerenBtn('bumen')">部门/科室用户</f7-button>
                                <f7-button href="#chuanyue_2" class="tab-link" @click="chuanyuerenBtn('danwei')">单位用户</f7-button>
                            </f7-buttons>
                        </f7-subnavbar>
                        <f7-tabs>
                            <f7-tab id="chuanyue_1" active>
                                <div class="list-block accordion-list">
                                    <ul>
                                        <li class="accordion-item accordion-item-expanded">
                                            <label class="label-checkbox item-content">
                                                <!-- Checked by default -->
                                                <input type="checkbox" name="my-checkbox" :value="bumenRYArr1.name" :checked="allCheckState1" @change="allCheckStateChange1(bumenRYArr1.ryList)">
                                                <div class="item-media">
                                                    <i class="icon icon-form-checkbox"></i>
                                                </div>
                                                <div class="item-inner">
                                                    <div class="item-title">{{bumenRYArr1.name}}</div>
                                                    <div class="item-after">
                                                        <f7-button v-if="benrenState" @click="chubenren(benrenState)" class="baohanbenren">包含本人</f7-button>
                                                        <f7-button v-if="!benrenState" @click="chubenren(benrenState)" class="baohanbenren">除本人</f7-button>
                                                    </div>
                                                </div>
                                            </label>
                                            <div class="accordion-item-content">
                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;">
                                                    <!--(erJrenStr.indexOf(item.userName) != -1) || -->
                                                    <f7-list-item checkbox v-for="(item,index) in bumenRYArr1.ryList" :key="index" :name="item.userName" :value="item.userName" :checked="allCheckState1" @click="selectRY2(item)">{{item.chName}}</f7-list-item>
                                                </f7-list>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </f7-tab>
                            <f7-tab id="chuanyue_2">
                                <div class="list-block accordion-list">
                                    <ul>
                                        <f7-list-item accordion-item
                                                      class="position-item"
                                                      v-for="(item,index) in wuGZrenList1s"
                                                      :key="index"
                                                      v-show="item.id != $store.state.orgid"
                                                      @click="item.child.length == 0 ? GetUsersNAO1(item.id,$event.target.offsetParent.className) : ''"
                                                      :title="item.name">
                                            <div slot="root-start" class="position-item-child" @click="addBMid1(item.id)">
                                                <i class="icon icon-weiren" v-if="BMarr1.indexOf(item.id) == -1"></i>
                                                <i class="icon icon-yiren" v-else></i>
                                            </div>
                                            <f7-accordion-content>
                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;" v-if="item.child.length == 0">
                                                    <f7-list-item checkbox
                                                                  v-for="(item2,index2) in wuGZrenList2s"
                                                                  :checked="(renIdStr1.indexOf(item2.userName) != -1)"
                                                                  :key="index2"
                                                                  :title="item2.chName" @click="selectRY2(item2)"></f7-list-item>
                                                </f7-list>
                                                <div class="list-block accordion-list">
                                                    <ul>
                                                        <f7-list-item accordion-item
                                                                      v-if="item.child"
                                                                      v-for="(item1,index1) in item.child"
                                                                      :key="index1"
                                                                      :title="item1.name" @click="GetUsersNAO(item1.id,$event.target.offsetParent.className)">
                                                            <div slot="root-start" class="position-item-child" @click="addBMid1(item1.id)">
                                                                <i class="icon icon-weiren" v-if="BMarr1.indexOf(item1.id) == -1"></i>
                                                                <i class="icon icon-yiren" v-else></i>
                                                            </div>

                                                            <f7-accordion-content>
                                                                <f7-list accordion-list style="padding-left: 30px;margin: 0;">
                                                                    <f7-list-item checkbox
                                                                                  v-for="(item2,index2) in wuGZrenList2"
                                                                                  :checked="(renIdStr1.indexOf(item2.userName) != -1)"
                                                                                  :key="index2"
                                                                                  :title="item2.chName" @click="selectRY2(item2)"></f7-list-item>
                                                                </f7-list>
                                                            </f7-accordion-content>
                                                        </f7-list-item>
                                                    </ul>
                                                </div>
                                            </f7-accordion-content>
                                        </f7-list-item>
                                    </ul>
                                </div>
                            </f7-tab>
                        </f7-tabs>

                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-ruleuser">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-ruleuser" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>选择人员</f7-nav-center>
                            <f7-nav-right>
                                <!--<f7-link @click="submitBtnEndS">提交</f7-link>-->
                                <f7-link @click="closepopupRuleuser">确认</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <div class="list-block accordion-list" v-if="ruleuser.length">
                            <ul>
                                <f7-list-item accordion-item
                                              v-for="(item,index) in ruleuser"
                                              :key="index"
                                              :title="item.orgName">
                                    <!--<div slot="root-start" class="position-item-child">-->
                                        <!--<input type="checkbox" name="my-checkbox1">-->
                                    <!--</div>-->
                                    <f7-accordion-content>
                                        <f7-list  style="padding-left: 30px;margin: 0;">
                                            <f7-list-item checkbox
                                                          name="renyuannamelist"
                                                          v-for="(item1,index1) in item.children"
                                                          :key="item1.orgOrder+item1.name"
                                                          :title="item1.chname" @click="selectRY1(item1)"></f7-list-item>
                                        </f7-list>
                                    </f7-accordion-content>
                                </f7-list-item>
                            </ul>
                        </div>
                        <!--<f7-list style="margin: 0;" v-if="ruleuser.length">-->
                            <!--<f7-list-item checkbox-->
                                          <!--v-for="(item,index) in ruleuser"-->
                                          <!--:key="item.orgOrder+item.name"-->
                                          <!--:title="item.chname" @click="selectRY1(item)"></f7-list-item>-->
                        <!--</f7-list>-->
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-notime">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-notime" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>填写反馈</f7-nav-center>
                        </f7-navbar>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>反馈原因</f7-label>
                                <f7-input type="textarea" v-model="UDReason"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>办理情况</f7-label>
                                <f7-input type="textarea" v-model="UDStituation"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>预计时间</f7-label>
                                <f7-input type="datetime-local" v-model="UDPlanedTime"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-block style="margin: 30px;">
                            <f7-button active big @click="UnableDoneBack()">提交</f7-button>
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <f7-popup class="popup-qianzhang">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar>
                            <f7-nav-left>
                                <f7-link data-popup=".popup-qianzhang" class="close-popup back-pad"><i class="icon icon-back"></i></f7-link>
                            </f7-nav-left>
                            <f7-nav-center>签章</f7-nav-center>
                        </f7-navbar>
                        <f7-card>
                            <f7-list form style="padding-bottom: 15px;">
                                <f7-list-item>
                                    <f7-label>签章名称:</f7-label>
                                    <f7-input type="select" v-model="signetId">
                                        <option v-for="(option,num) in SignetList"
                                                :key="num" :value="option.Signet_ID">{{option.Signet_Name}}</option>
                                    </f7-input>
                                </f7-list-item>
                                <f7-list-item>
                                    <f7-label>密码:</f7-label>
                                    <f7-input type="password" placeholder="请输入密码" v-model="password"></f7-input>
                                </f7-list-item>
                                <f7-button active style="margin: 15px 40px 0 40px;" @click="CheckSignetRecord()">验证并盖章</f7-button>
                            </f7-list>
                        </f7-card>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
    </f7-page>

</template>
<script>
    import Fun from '../config/commonfun'
    import a_bFun from '../config/comparisonRQ'
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
        data() {
            return{
                benrenState: false,
                benrenState1: false,
                insType: '', // 公文类型
                objId: '', // 公文ID
                stepId: '', // 流程节点ID
                dataList: {}, // 待办详情数据
                buttonInfos: [], // 获取到的按钮LIst
                yijian: '', // 用户输入的意见
                renyuan: [], // 选中的人员
                renyuan1: [], // 选中的人员
                personneList: [], // 不存在规则获取到的人员列表（通讯录）
                personneList1: [], // 不存在规则获取到的人员列表（通讯录）
                RuleObj: {}, // 点击按钮时，存储按钮data
                changyongyijian: '', // 常用意见
                ruleuser: [], // 规则存在时获取到的人员列表
                limitTime: '', // 限办时间
                roleName: '', // 当前环节
                RQ: Fun.getDateDQ(0,true), // 当前日期
                isLimit: false, // 限办时间开关为true时才有意义
                changyongyijianList: [], // 常用意见列表
                SuggestionObj: {}, // 常用意见频率（选择了）
                FwOrSw: 'FW', // 发文，收文类型
                UDReason: '', //不能按时办理原因
                UDStituation: '', //当前办理情况
                UDPlanedTime: '', //预计完成时间
                isSign: '', //是否签章
                SignetList: [], //签章列表
                signetId: '', //签章主键
                password: '', //签章密码
                instanceID: '', //流程ID
                SignetRecordList: [], //所有流程签章图片
                qianzhangImg: '', // 签章图片路径
                isPowerUser: false, // 是否允许修改
                userName: '', // 中文名
                liuChengAll: [], // 所有签章流程
                isSug: false, // 是否填写意见
                xianban: true, // 是否超时
                isNoPrint: false, // 是否传阅
                liucehngDetailsList: [], // 流程详情
                renStr: '', // 选择人员时中文字符串拼接
                renStr1: '', // 传阅人员字符串拼接
                renIdStr1: '',
                renArrStr: '', // 无用
                beifen: '', // 点击的按钮生成备份
                nextHJ: '', // 下一环节处理的名称
                bextBtn: {}, // 按钮里包含的对象
                erJrenStr: '',
                wuGZrenList: [], // 无规则人员的List
                wuGZrenList1: [],// 无规则人员的List
                wuGZrenLists: [],// 无规则人员的List
                wuGZrenList1s: [],// 无规则人员的List
                wuGZrenList2: [{ // 无规则人员的List
                    chName: "",
                    orgID: '',
                    userName: ""
                }],
                wuGZrenList2s: [{
                    chName: "",
                    orgID: '',
                    userName: ""
                }],
                bumenRYArr: {
                    name: "",
                    ryList: []
                },
                bumenRYArr1: {
                    name: "",
                    ryList: []
                },
                allCheckState: false, // 全选开关
                allCheckState1: false, // 全选开关
                BMarr: [], // 部门的ID集合
                BMarr1: [],// 部门的ID集合
                yigeArr : [], // 审核前传入的人员arr
                zaixianState: false, // shi否可以在线修改文件
            }
        },
        created(){
            console.log(this.$store.state.dataObj)
            this.objId = this.$store.state.dataObj.objId
            this.stepId = this.$store.state.dataObj.stepid
            this.limitTime = this.$store.state.dataObj.limitTime
            this.roleName = this.$store.state.dataObj.roleName
            this.isLimit = this.$store.state.dataObj.isLimit
            this.insType = this.$store.state.dataObj.insType
            this.isSign = this.$store.state.dataObj.isSign
            this.isSign = true
            this.isSug = this.$store.state.dataObj.isSug
            this.instanceID = this.$store.state.dataObj.instanceID
            this.isPowerUser = this.$store.state.dataObj.isPowerUser
            this.isNoPrint = this.$store.state.dataObj.isNoPrint

            if ( this.insType.indexOf('FW') != -1) {
                this.FwOrSw = 'FW'
            }else {
                this.FwOrSw = 'SW'
            }

            this.GetFormDetail()
            console.log('截止：',this.limitTime,'当前时间：',this.RQ)
            console.log(a_bFun.dateCompare(this.limitTime,this.RQ))
            if ( a_bFun.dateCompare(this.limitTime,this.RQ) > 0 && this.isLimit) {
                this.xianban = false;
                this.$f7.alert('当前待办已超时')
            }else {
                this.GetNextButtons()
            }
            this.GetSuggestionList()
            this.GetSignetRecord()
            this.HeaderAutoSignet()
            this.IsAppEditOnline();
        },
        methods:{
            // 是否支持在线修改文档
            IsAppEditOnline() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/IsAppEditOnline', {
                    params: {
                        userIP: this.$store.state.username, //用户IP
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    if ( resDate.res ) {
                        if ( that.FwOrSw == 'FW' && resDate.data ) {
                            that.zaixianState = true;
                        }else {
                            that.zaixianState = false;
                        }
                        console.log(resDate,that.FwOrSw,'是否可以在线修改')
                    }
                })
            },
            // 除本人
            chubenren() {
                this.benrenState = !this.benrenState;
                var datas = this.$$('input[name='+ this.$store.state.username +']')
                if ( this.benrenState ) {
                    if ( datas.length ) {
                        datas.attr('checked','false')
                        datas.parent().parent().hide()
                    }
                }else {
                    if ( datas.length ) {
                        datas.attr('checked','true')
                        datas.parent().parent().show()
                    }
                }
//                console.log(this.$$('input[name='+ this.$store.state.username +']'))
//                var datas = this.$$('input[name='+ this.$store.state.username +']')
//                if ( datas.length ) {
//                    datas.attr('checked','false')
//                    datas.parent().parent().hide()
//                }
            },
            // 除本人
            chubenren1() {
                this.benrenState1 = !this.benrenState1;
                var datas = this.$$('input[name='+ this.$store.state.username +']')
                if ( this.benrenState1 ) {
                    if ( datas.length ) {
                        datas.attr('checked','false')
                        datas.parent().parent().hide()
                    }
                }else {
                    if ( datas.length ) {
                        datas.attr('checked','true')
                        datas.parent().parent().show()
                    }
                }
            },
            // 获取是否自动签章
            HeaderAutoSignet() {
//                var resDate = {
//                    res: true,
//                    msg:"成功",
//                    img: "data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D\'0%200%2060%20120\'%20xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\'%3E%3Cpath%20d%3D\'m60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z\'%20fill%3D\'%23c7c7cc\'%2F%3E%3C%2Fsvg%3E"
//                }
//                if ( resDate.res ) {
//                    this.signetId = resDate.signetId
//                    this.qianzhangImg = resDate.img
//                }else {
//                    console.log('未设置自动签章')
//                }

                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/HeaderAutoSignet', {
                    params: {
                        userIP: that.$store.state.username,
                        password: com.str.Encrypt(that.$store.state.signPW)
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    if ( resDate.res ) {
                        that.signetId = resDate.signetId
                        that.qianzhangImg = resDate.img
                    }else {
                        console.log('未设置自动签章')
                    }
                })
            },
            // 选中时加入部门id
            addBMid(id) {
                if ( this.BMarr.length ) {
                    var s = this.BMarr.indexOf(id)
                    if ( s == -1 ) {
                        this.BMarr.push(id)
                    }else {
                        this.BMarr.splice(s,1)
                    }
                }else {
                    this.BMarr.push(id)
                }
                console.log(this.BMarr)

            },
            // 选中时加入部门id
            addBMid1(id) {
                if ( this.BMarr1.length ) {
                    var s = this.BMarr1.indexOf(id)
                    if ( s == -1 ) {
                        this.BMarr1.push(id)
                    }else {
                        this.BMarr1.splice(s,1)
                    }
                }else {
                    this.BMarr1.push(id)
                }
                console.log(this.BMarr1)
            },
            // 本部门下的人员全选操作
            allCheckStateChange(data) {
                var that = this;
                if ( this.allCheckState ) {
                    var array1 = this.renyuan;//数组1
                    var array2 = data;//数组2

//临时数组存放
                    var tempArray1 = [];//临时数组1
                    var tempArray2 = [];//临时数组2

                    for(var i=0;i<array2.length;i++){
                        tempArray1[array2[i].userName]=true;//将数array2 中的元素值作为tempArray1 中的键，值为true；
                    }

                    for(var i=0;i<array1.length;i++){
                        if(!tempArray1[array1[i].userName]){
                            tempArray2.push(array1[i]);//过滤array1 中与array2 相同的元素；
                        }
                    }
//                    console.log(tempArray2)
                    that.renyuan = tempArray2;
//                    console.log(that.renyuan)
                }else {
                    data.forEach(function (value,index) {
                        that.selectRY(value)
                    })
//                    console.log(data,this.allCheckState)
                }

                this.allCheckState = !this.allCheckState
            },
            allCheckStateChange1(data) {
                var that = this;
                if ( this.allCheckState1 ) {
                    var array1 = this.renyuan1;//数组1
                    var array2 = data;//数组2

//临时数组存放
                    var tempArray1 = [];//临时数组1
                    var tempArray2 = [];//临时数组2

                    for(var i=0;i<array2.length;i++){
                        tempArray1[array2[i].userName]=true;//将数array2 中的元素值作为tempArray1 中的键，值为true；
                    }

                    for(var i=0;i<array1.length;i++){
                        if(!tempArray1[array1[i].userName]){
                            tempArray2.push(array1[i]);//过滤array1 中与array2 相同的元素；
                        }
                    }
                    console.log(tempArray2)
                    that.renyuan1 = tempArray2;
                    console.log(that.renyuan1)
                }else {
                    data.forEach(function (value,index) {
                        that.selectRY2(value)
                    })
                    console.log(data,this.allCheckState1)
                }

                this.allCheckState1 = !this.allCheckState1
            },
            //二级单位时生成分发
            InsertShare() {
                let str = this.erJrenStr
                str = str.slice(0,str.length - 1)
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/InsertShare', {
                    params: {
                        stepId: this.stepId, //节点主键
                        objId: this.objId, //审批单主键
                        selUser: str, //选择下步处理人英文逗号隔开
                        userIp: this.$store.state.username, //用户IP
                        userName: this.userName, //用户名称
//                        topOrg: this.$store.state.orgid, //用户顶级部门主键
                    }
                }).then(function(res) {

                })
            },
            // 传阅人员选择按钮
            chuanyuerenBtn(type) {
                var that = this;
                f7.showPreloader('获取人员信息，请耐心等待');
                var bh = ''
                if ( type == 'danwei' && this.$store.state.toporg == 477 ) {
                    bh = 97
                }else {
                    bh = this.$store.state.toporg
                }

                this.$http.get(this.$store.state.ajaxUrl + 'GetSubOrg', {
                    params: {
                        orgid: bh
                    }
                }).then(function(res) {
                    if ( res.data.data.length ) {
                        if ( type == 'danwei' ) {
                            that.wuGZrenLists = res.data.data
                            that.wuGZrenLists.forEach(function (value,index) {
                                value.state = false;
                                that.GetSubOrg1(value.id,index)
                            })
                        }else {
                            var bumenarr = res.data.data
                            var bumenitem = bumenarr.find(x=>x.id == that.$store.state.orgid)
                            if ( bumenitem ) {
                                that.bumenRYArr1.name = bumenitem.name
                                that.$http.get(that.$store.state.ajaxUrl + 'GetUsersNAO', {
                                    params: {
                                        org: bumenitem.id
                                    }
                                }).then(function(res) {
                                    if ( res.data.success ) {
                                        that.bumenRYArr1.ryList = res.data.data
                                        that.$f7.hidePreloader();
                                        that.$f7.popup('.popup-about1')
                                        console.log(that.bumenRYArr1,'部门人员1')
                                    }
                                })
                            }

                        }

                    }else {
                        f7.alert('未获取到人员')
                    }
                })


//                f7.showPreloader('获取人员信息，请耐心等待');
//                this.$http.get(this.$store.state.ajaxpersonnelUrl, { params: {}}).then(function(res) {
//                    if ( res.data.isSuccess ) {
//                        that.$f7.hidePreloader();
//                        that.personneList1 = res.data.data;
////                                that.$f7.closeModal('.popup-lugangtong')
//                        setTimeout(function () {
//                            that.$f7.popup('.popup-about1')
//                        },300)
//                    }
//                })
            },
            selectChange(data) {
                console.log(data)
                this.nextHJ = data
                let item = this.buttonInfos.find(x=>x.ruleName ==data)
                this.bextBtn = item
            },
            promptSes() {

                var that = this;
                setTimeout(function () {
                    that.$$('.yijian-area').val(that.yijian);
                },300)
                f7.modal({
                    title:  '请填写意见',
                    text:'<div><textarea class="yijian-area"></textarea></div>',
                    buttons: [
                        {
                            text: '取消',
                            color: 'red',
                            onClick: function() {

                            }
                        },
                        {
                            text: '确认',
                            onClick: function() {
                                that.yijian = that.$$('.yijian-area').val();
                            }
                        },
                    ]
                })

            },
            // 保存签章记录
            SaveSignetRecord() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/SaveSignetRecord', {
                    params: {
                        instanceId: this.instanceID,
                        stepId: this.stepId,
                        objId: this.objId,
                        signetId:this.signetId,
                        userIP: this.$store.state.username,
                        userName:this.userName,
                        departID:this.$store.state.orgid,
                        departName:this.$store.state.departName,
                    }
                }).then(function(res) {

                })
            },
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
//                        if ( resDate.data.length ) {
                            that.GetAllStepInfo();
//                        }
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
                        that.liucehngDetailsList = res.data.stepInfos
                        if ( that.liucehngDetailsList.length ) {
                            that.liucehngDetailsList.forEach(function (value,index) {
                                value.createDate = Fun.timeFormat(value.createDate,'strMinute')
                                value.doneDate = Fun.timeFormat(value.doneDate,'strMinute')
                                value.limitTime = Fun.timeFormat(value.limitTime,'strMinute')
                            })
                        }
                        if ( res.data.stepInfos.length ) {
                            let arr = that.SignetRecordList;
                            let arr1 = res.data.stepInfos.reverse();
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
                console.log(arr,'流程签章')

                var that = this;
                let datas = []

                arr.forEach(function (value,index) {
                    if ( value.stepState == 1 && ((value.idear != ''&& value.idear) || (value.img != '' && value.img )) ) {
                        let item = datas.find((x,num)=>x.lable == value.activityName)
                        if ( item ) {
                            item.idearList.push({
                                idear: value.idear || '',
                                img: value.img || '',
                                text: '[' + value.doUserName + value.doneDate +']' || ''
                            })
                        }else {
                            datas.push({
                                lable: value.activityName,
                                idearList: [{
                                    idear: value.idear || '',
                                    img: value.img || '',
                                    text: '[' + value.doUserName + value.doneDate +']' || ''
                                }]
                            })
                        }
                    }
                })
                that.liuChengAll = datas
                console.log(datas,'处理后')
            },
            // 获取签章图片（验证）
            CheckSignetRecord() {
                if ( this.signetId == '' ) {
                    f7.alert('请选择签章')
                    return;
                }
                if ( this.password == '' ) {
                    f7.alert('请填写密码')
                    return;
                }
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/CheckSignetRecord', {
                    params: {
                        signetId: this.signetId,
                        userIP: this.$store.state.username,
                        password: com.str.Encrypt(this.password),
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    if ( resDate.res ) {
                        Fun.setCookie('qzpassword',that.password)
                        if ( resDate.img && resDate.img != '' ) {
                            that.$f7.closeModal('.popup-qianzhang')
                            that.qianzhangImg = resDate.img
                        }

//                        that.SignetRecordList = resDate.data;
//                        if ( resDate.data.length ) {
//                            that.GetAllStepInfo();
//                        }
                        console.log(resDate)
                    }else{
                        f7.alert(resDate.msg)
                    }
                })


            },
            // 获取签章列表
            GetUserSignetList() {
                if ( Fun.getCookie('qzpassword') ) {
                    this.password = Fun.getCookie('qzpassword')
                }else {
                    this.password = ''
                }
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/GetUserSignetList', {
                    params: {
                        userIP: this.$store.state.username
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    console.log(resDate)
                    if ( resDate.res ) {
                        var dataDate = JSON.parse(resDate.data)
                        if ( dataDate.length ) {
                            f7.showIndicator();
                            setTimeout(function () {
                                that.signetId = dataDate[0].Signet_ID;
                                f7.hideIndicator()
                            },1000)
                            that.SignetList = dataDate
                        }else {
                            f7.alert('暂无签章信息！',function () {
                                that.$f7.closeModal('.popup-qianzhang')
                            })
                        }
                        console.log(dataDate)
                    }
                })
            },
            // 时间反馈
            UnableDoneBack() {
                var that = this;
                var UDPlanedTime = ''
                if ( this.UDPlanedTime != '' ) {
                    UDPlanedTime = this.UDPlanedTime.replace('T',' ')+ ':00'
                }
                let _data = {
                    UDID: '',
                    FormType: this.FwOrSw, // 公文类型
                    FormID: this.$store.state.dataObj.objId, //公文ID
                    StepID: this.$store.state.dataObj.stepid, //流程ID
                    UDState: this.dataList.entity.SState || this.dataList.entity.FState, //状态
                    UDReason: this.UDReason, //不能按时办理原因
                    UDStituation: this.UDStituation, //当前办理情况
                    UDPlanedTime: UDPlanedTime, //预计完成时间
                    Creator: this.$store.state.dataObj.createUser, //创建人
                    CreatorName: this.$store.state.dataObj.createUserName, //创建人名称
                    CreateTime: this.$store.state.dataObj.createDate, //创建时间
                    Isdel: false, //是否删除
                }
                console.log(_data)
                var unableDone = JSON.stringify(_data)
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/UnableDoneBack', {
                    params: {
                        unableDone: unableDone
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    console.log(resDate)
                    if (resDate.res) {
                        f7.alert('提交成功！',function () {
                            that.$f7.closeModal('.popup-notime')
//                            setTimeout(function() {
//                                that.$router.back();
//                                that.$f7.pullToRefreshTrigger('#daiban .pull-to-refresh-content');
//                            }, 300);
                        })

                    }else{
                        that.$f7.alert(resDate.msg)
                    }
                })
            },
            // 更新常用意见频率
            UpdateSuggestionOrder(data) {
                console.log(data,'这里');
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/UpdateSuggestionOrder', {
                    params: {
                        SuggestionId: data.PBID
                    }
                }).then(function(res) {

                })
            },
            // 发文修改
            UpdateFWForm(data) {
//                data.SID = this.insType
                data.SID = this.dataList.entity.SID
                console.log('FW',data)
                let _data = JSON.stringify(data)
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormDetails/UpdateFWForm', { //
                    params: {
                        JsonFWForm:_data
                    }
                }).then(function(res) {
//                    var resDate = JSON.parse(res.data)
//                    if ( resDate.res ) {
//                        f7.alert('修改成功！')
//                    }else {
//                        f7.alert(resDate.msg)
//                    }

                })

            },
            // 收文修改
            UpdateSWForm(data) {
//                data.SID = this.insType
                data.SID = this.dataList.entity.SID
                console.log('SW',data)
                let _data = JSON.stringify(data)
                this.$http.get(this.$store.state.ajaxUrl1 + 'FormDetails/UpdateSWForm', { //
                    params: {
                        JsonSWForm:_data
                    }
                }).then(function(res) {
//                    var resDate = JSON.parse(res.data)
//                    if ( resDate.res ) {
//                        f7.alert('修改成功！')
//                    }else {
//                        f7.alert(resDate.msg)
//                    }
                })
            },
            // 操作生成按钮
            caozuoClick() {
                var that = this;
                console.log(that.buttonInfos)
                var buttons = []
                var datas = that.buttonInfos
                datas.forEach(function (value,index) {
                    buttons.push(
                        {
                            text: value.buttonName,
                            onClick: function () {
                                that.submitBtn(value)
//                                that.yijian = value.PBValue;
//                                that.SuggestionObj = value;
                                console.log(value)
                            }
                        }
                    )
                })
                if ( that.isPowerUser && that.xianban ) {
                    buttons.push(
                        {
                            text: '修改并保存',
                            onClick: function () {
                                if ( that.FwOrSw == 'FW' ) {
                                    that.UpdateFWForm(that.dataList.entity)
                                }
                                if ( that.FwOrSw == 'SW' ) {
                                    that.UpdateSWForm(that.dataList.entity)
                                }
                            }
                        }
                    )
                }
                buttons.push(
                    {
                        text: '无法按时办结反馈',
                        color: 'red',
                        onClick: function () {
                            that.$f7.popup('.popup-notime')
                        }
                    },
                    {
                        text: '取消',
                        color: 'red'
                    }
                )
                this.$f7.actions(buttons);
            },
            changyongClick() {
                var that = this;
                console.log(that.changyongyijianList)
                var buttons = []
                var datas = that.changyongyijianList
                datas.forEach(function (value,index) {
                    buttons.push(
                        {
                            text: value.PBValue,
                            onClick: function () {
                                that.yijian = value.PBValue;
                                that.SuggestionObj = value;
                                console.log(value)
                            }
                        }
                    )
                })
                buttons.push(
                    {
                        text: '添加常用意见',
                        color: 'red',
                        onClick: function () {
                            that.$f7.prompt('请输入您要添加的常用意见', '添加常用意见',
                                function (value) {
                                    that.SuggestionAdd(value)
//                                    that.$f7.alert('Your name is "' + value + '". You clicked Ok button');
                                },
                                function (value) {
//                                    that.$f7.alert('Your name is "' + value + '". You clicked Cancel button');
                                }
                            );
                        }
                    },
                    {
                        text: '取消',
                        color: 'red'
                    }
                )
                this.$f7.actions(buttons);
            },
            // 添加常用意见
            SuggestionAdd(msg) {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/SuggestionAdd', { //
                    params: {
                        userIP: this.$store.state.username,
                        sug: msg
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    console.log(resDate)
                    if ( resDate.res ) {
                        that.yijian = msg;
                        that.GetSuggestionList()
                    }else {
                        this.$f7.alert(resDate.msg)
                    }
                })
            },
            // 常用意见列表
            GetSuggestionList() {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/GetSuggestionList', { //
                    params: {
                        userIP: this.$store.state.username
                    }
                }).then(function(res) {
                    var resDate = JSON.parse(res.data)
                    console.log(resDate.entity,'常用意见')
                    that.changyongyijianList = resDate.entity
                })
            },
            // 常用意见选择填充textarea
            changeYJ(data) {
                this.yijian = data;
                this.changyongyijian = ''
            },
            // 清空
            clearData() {
                this.renStr = '';
                this.renArrStr = '';
                this.renyuan = [];
                this.yigeArr = [];
            },
            // 获取部门文书
            GetUsersOAR() {
                var that = this;
                if ( this.BMarr.length ) {
                    var arr = this.BMarr
                    var str = ''
                    arr.forEach(function (value,index) {
                        str+=value+','
                    })
                    str = str.slice(0,str.length - 1)
                    this.$http.get(this.$store.state.ajaxUrl + 'GetUsersOAR', {
                        params: {
                            orgids: str,
                            jg: '部门正职',
                            jg0: '部门正职',
                            ej: '二级单位文书',
                            ej0: '二级单位部门主任',
                        }
                    }).then(function(res) {
//                        console.log(res.data.mes)
                        var resDate = JSON.parse(res.data.mes)
                        if ( resDate.length ) {
                            resDate.forEach(function (value,index) {
                                if ( that.yigeArr.indexOf(value.name) == -1 ) {
                                    that.yigeArr.push(value.name)
                                    that.renStr += value.chname+','
                                    that.erJrenStr += value.name+','
                                }

                            })
//                            console.log(that.yigeArr,that.renStr,that.erJrenStr,'注意')
                            that.$f7.closeModal('.popup-renyuan')
                        }else {
//                            f7.alert('请选择人员')
                        }
                    })
                }
            },
            // 获取部门文书
            GetUsersOAR1() {
                var that = this;
                if ( this.BMarr1.length ) {
                    var arr = this.BMarr1
                    var str = ''
                    arr.forEach(function (value,index) {
                        str+=value+','
                    })
                    str = str.slice(0,str.length - 1)
                    this.$http.get(this.$store.state.ajaxUrl + 'GetUsersOAR', {
                        params: {
                            orgids: str,
                            jg: '部门正职',
                            jg0: '部门正职',
                            ej: '二级单位文书',
                            ej0: '二级单位部门主任',
                        }
                    }).then(function(res) {
//                        console.log(res.data.mes)
                        var resDate = JSON.parse(res.data.mes)
                        if ( resDate.length ) {
                            resDate.forEach(function (value,index) {
                                if ( that.renIdStr1.indexOf(value.name) == -1 ) {
                                    that.renIdStr1 += value.name+','
                                    that.renStr1 += value.chname+'，'
                                }
                            })
                            that.$f7.closeModal('.popup-about1')
                        }else {
//                            f7.alert('请选择人员')
                        }
                    })
                }
            },
            closepopupAbout() {
                var that = this;
                if ( !this.renyuan.length && !this.BMarr.length ) {
                    this.$f7.alert('请选择人员！')
                    return;
                }else {
                    var arr = []
                    var _datas = this.renyuan;
                    that.renStr = ''
                    that.erJrenStr = ''
                    that.yigeArr = []
                    if ( that.benrenState ) {
                        _datas.forEach(function (value,index) {
                            if ( value.userName != that.$store.state.username ) {
                                that.yigeArr.push(value.userName)
                                that.renStr += value.chName+','
                                that.erJrenStr += value.userName+','
                            }
                        })
                    }else {
                        _datas.forEach(function (value,index) {
                            that.yigeArr.push(value.userName)
                            that.renStr += value.chName+','
                            that.erJrenStr += value.userName+','
                        })
                    }
//                    this.renArrStr = JSON.stringify(arr).replace(/"/g,'')
                    this.$f7.closeModal('.popup-renyuan')
                }
                this.GetUsersOAR()
            },
            closepopupAbout1() {
                var that = this;
                if ( !this.renyuan1.length && !this.BMarr1.length ) {
                    this.$f7.alert('请选择传阅人员！')
                    return;
                }else {
                    var _datas = this.renyuan1;
                    that.renStr1 = ''
                    if ( that.benrenState ) {
                        _datas.forEach(function (value,index) {
                            if ( value.userName != that.$store.state.username ) {
                                that.renIdStr1 += value.userName+','
                                that.renStr1 += value.chName+'，'
                            }
                        })
                    }else {
                        _datas.forEach(function (value,index) {
                            that.renIdStr1 += value.userName+','
                            that.renStr1 += value.chName+'，'
                        })
                    }
                    this.$f7.closeModal('.popup-about1')
                }
                this.GetUsersOAR1()
            },
            chuanyueFF() {
                if ( this.FwOrSw == 'SW' ) {
                    var str = this.renIdStr1
                    var str1 = this.renStr1
                    str = str.slice(0,str.length - 1)
                    str1 = str1.slice(0,str1.length - 1)

//                let _data ={
//                    cyUserList: str, //被传阅人ip英文逗号隔开
//                    cyUserNameList: str1, //被传阅人姓名中文逗号隔开
//                    stepId: this.stepId, //节点id
//                    objId: this.objId, //审批单id
//                    userIp: this.$store.state.username, //userIp
//                    userName: this.userName, //传阅人名字
//                }
//                console.log(_data)
                    this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/InsertReader', {
                        params: {
                            cyUserList: str, //被传阅人ip英文逗号隔开
                            cyUserNameList: str1, //被传阅人姓名中文逗号隔开
                            stepId: this.stepId, //节点id
                            objId: this.objId, //审批单id
                            userIp: this.$store.state.username, //userIp
                            userName: this.userName, //传阅人名字
                        }
                    }).then(function(res) {

                    })
                }
            },

            closepopupRuleuser() {
                var that = this;
                if ( !this.renyuan.length ) {
                    this.$f7.alert('请选择人员！')
                    return;
                }else {
                    var arr = []
                    var _datas = this.renyuan;
                    for(var i=0; i<_datas.length; i++){
                        //第二层for 用于控制与第一层比较的元素
                        for(var j=i+1; j<_datas.length; j++){
                            //如果相等
                            if(_datas[i].name == _datas[j].name){
                                _datas.splice(j,1);
                                j--;
                            }
                        }
                    }
                    that.renStr = ''
                    that.erJrenStr = ''
                    that.yigeArr = []
                    _datas.forEach(function (value,index) {
//                        arr.push(value.name)
                        that.yigeArr.push(value.name)
                        that.renStr += value.chname+','
                        that.erJrenStr += value.name+','
                    })
//                    console.log(that.renStr)
//                    this.renArrStr = JSON.stringify(arr).replace(/"/g,'')
                    this.$f7.closeModal('.popup-ruleuser')
                }
            },
            // 更新审批单状态
            updateSPForm(id) {
                this.$http.get(this.$store.state.ajaxUrl1 + 'Flow/updateSPForm', {
                    params: {
                        instanceId: id,
                        gWType: this.FwOrSw
                    }
                }).then(function(res) {

                })
            },
            // 不存在规则选人时，调用
            submitBtnEnd(str) {
                var that = this;
                var sug = ''

//                if ( (!this.renyuan.length || !this.BMarr.length) && this.bextBtn.isCheckUser) {
                if ( this.renStr == '' && this.bextBtn.isCheckUser) {
                    this.$f7.alert('请选择人员！')
                    return;
                }
                if ( this.isSug ) {
//                    if ( this.yijian === '' ) {
//                        this.$f7.alert('请填写意见！')
//                        return;
//                    }
                    if ( this.signetId == '' ) {
                        sug = this.yijian + '[' + this.userName +  Fun.getDateDQ(0,true) + ']'
                    }else {
                        sug = this.yijian
                    }
                }
                if ( that.isPowerUser && that.xianban ) {
                    if ( that.FwOrSw == 'FW' ) {
                        that.UpdateFWForm(that.dataList.entity)
                    }
                    if ( that.FwOrSw == 'SW' ) {
                        that.UpdateSWForm(that.dataList.entity)
                    }
                }
//                else {
//                    var arr = []
//                    var _datas = this.renyuan;
//                    _datas.forEach(function (value,index) {
//                        arr.push(value.userIP)
//                    })
//                    var str = JSON.stringify(arr).replace(/"/g,'')
//                }
//                this.dataList.entity
                let IsDefaultLimit,LimitTime
                //不需要选择人员
                if ( this.dataList.entity.SLimitTime == null || this.dataList.entity.LimtDate == null) {
                    IsDefaultLimit = true;
                    LimitTime = Fun.addDate(3)
                    console.log('空')
                }else {
                    console.log('有')
                    IsDefaultLimit = false;
                    LimitTime = this.dataList.entity.SLimitTime || this.dataList.entity.LimtDate
                }
                let _data = {
                    StepID: this.stepId,
                    Sug: sug,
                    User: this.$store.state.username,
                    RuleID: this.bextBtn.ruleID,
                    SelUser: JSON.stringify(str).replace(/"/g,''), // 选中人员
                    ButtonType: this.bextBtn.buttonType, // 按钮类型
                    BusniessType: this.FwOrSw, // 公文类型
                    BusniessLimitTime: LimitTime, // 限办时间
                    IsDefaultLimit: IsDefaultLimit, // 是否默认限办时间
//                        Hashtable: '', //参数
//                        FlowType: 'GW', //流程类型，分为：公文（GW），请休假（QJ）等
                    IsMes: this.$$("input[name=mes]").prop('checked'), //是否发送短信
                }
                console.log(_data)
                this.$http.post(this.$store.state.ajaxUrl + 'RunNextStep', _data).then(function(res) {
                    if ( res.data.success ) {
                        if ( res.data.end ) {
                            that.updateSPForm(res.data.instanceID)
                        }
                        f7.alert('提交成功！',function () {
                            setTimeout(function() {
                                that.$router.back();
                                that.$f7.pullToRefreshTrigger('#daiban .pull-to-refresh-content');
                            }, 300);
                        })
                        if ( that.qianzhangImg != '' ) {
                            that.SaveSignetRecord()
                        }
                        if ( that.FwOrSw == 'SW' && that.bextBtn.isCheckUser ) {
                            that.InsertShare()
                        }
                        if ( that.isNoPrint && that.renIdStr1 != '' && that.renStr1 != '' ) {
                            that.chuanyueFF()
                        }
                        if ( that.SuggestionObj.PBValue && that.yijian == that.SuggestionObj.PBValue ) {
                            that.UpdateSuggestionOrder(that.SuggestionObj)
                        }
                    }
                })
            },
            selectRY2(data) {
                var that = this;
                if ( this.renyuan1.length ) {
                    var flag = Fun.IsContain(this.renyuan1,data.userName)
                    if ( flag.state ) {
                        this.renyuan1.splice(flag.index,1)
                    }else {
                        that.renyuan1.push(data)
                    }
                }else {
                    that.renyuan1.push(data)
                }
//                console.log(data,this.renyuan1)
            },
            // chexbox选中人员保存一份数据(无规则时)
            selectRY(data) {
                var that = this;
                if ( this.renyuan.length ) {
                    var flag = Fun.IsContain(this.renyuan,data.userName)
                    if ( flag.state ) {
                        this.renyuan.splice(flag.index,1)
                    }else {
                        that.renyuan.push(data)
                    }
                }else {
                    that.renyuan.push(data)
                }
//                console.log(data,this.renyuan)
            },
            // chexbox选中人员保存一份数据(有规则时)
            selectRY1(data){
                var that = this;
                if ( this.renyuan.length ) {
                    var flag = Fun.IsContainxx(this.renyuan,data.name,data.orgName)
                    if ( flag.state ) {
                        this.renyuan.splice(flag.index,1)
                    }else {
                        that.renyuan.push(data)
                    }
                }else {
                    that.renyuan.push(data)
                }
                console.log(data,this.renyuan)
            },
            GetUsersNAO(id,event) {
                console.log(id,event)
                if (  event.indexOf('expanded') == -1) {
                    var that = this;
                    f7.showPreloader('获取人员信息，请耐心等待');
                    this.$http.get(this.$store.state.ajaxUrl + 'GetUsersNAO', {
                        params: {
                            org: id
                        }
                    }).then(function(res) {
                        if ( res.data.success ) {
                            that.$f7.hidePreloader();
                            that.wuGZrenList2 = res.data.data;
                        }
                    })
                }

            },
            GetUsersNAO1(id,event) {
                console.log(id,event)
                if (  event.indexOf('expanded') == -1) {
                    var that = this;
                    f7.showPreloader('获取人员信息，请耐心等待');
                    this.$http.get(this.$store.state.ajaxUrl + 'GetUsersNAO', {
                        params: {
                            org: id
                        }
                    }).then(function(res) {
                        if ( res.data.success ) {
                            that.$f7.hidePreloader();
                            that.wuGZrenList2s = res.data.data;
                        }
                    })
                }

            },
            GetSubOrg(data,index) {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl + 'GetSubOrg', {
                    params: {
                        orgid: data
                    }
                }).then(function(res) {
//                    if ( res.data.data.length ) {
                    that.wuGZrenList[index].child = res.data.data;
                    if ( that.wuGZrenList.length == index + 1 ) {
                        that.$f7.hidePreloader();
                        setTimeout(function () {
                            that.wuGZrenList1 = that.wuGZrenList
//                            console.log(that.wuGZrenList)
                            that.$f7.popup('.popup-renyuan')
                        },300)
                    }
//                    }
                })
            },
            GetSubOrg1(data,index) {
                var that = this;
                this.$http.get(this.$store.state.ajaxUrl + 'GetSubOrg', {
                    params: {
                        orgid: data
                    }
                }).then(function(res) {
//                    if ( res.data.data.length ) {
                    that.wuGZrenLists[index].child = res.data.data;
                    if ( that.wuGZrenLists.length == index + 1 ) {
                        that.$f7.hidePreloader();
                        setTimeout(function () {
                            that.wuGZrenList1s = that.wuGZrenLists
//                            console.log(that.wuGZrenList1s)
                            that.$f7.popup('.popup-about1')
                        },300)
                    }
//                    }
                })
            },
            submitBtn(data,type) {
                if ( this.beifen == '' ) {
                    this.beifen= data;
                }else {
                    if ( this.beifen.buttonType != data.buttonType ) {
                        this.clearData()
                        this.beifen= data;
                    }
                }
                console.log(data)
                var that = this;
//                if ( this.isSign ) {
//                    if ( this.qianzhangImg == '' ) {
//                        this.$f7.alert('请验证并盖章！')
//                        return;
//                    }
//                }
                // 需要选择人员
                if ( data.isCheckUser ) {
                    this.RuleObj = data;
                    f7.showPreloader('获取人员信息，请耐心等待');
                    // 如果规则为空
                    if ( data.checkUserRole == '' && type == 'danwei') {
                        var bh = ''
                        if ( this.$store.state.toporg == 477 ) {
                            bh = 97
                        }else {
                            bh = this.$store.state.toporg
                        }
                        this.$http.get(this.$store.state.ajaxUrl + 'GetSubOrg', {
                            params: {
                                orgid: bh
                            }
                        }).then(function(res) {
                            if ( res.data.data.length ) {
                                that.wuGZrenList = res.data.data
                                that.wuGZrenList.forEach(function (value,index) {
                                    value.state = false;
                                    that.GetSubOrg(value.id,index)
                                })
                            }else {
                                f7.alert('未获取到人员')
                            }
                        })

//                        this.$http.get(this.$store.state.ajaxpersonnelUrl, { params: {}}).then(function(res) {
//                            if ( res.data.isSuccess ) {
//                                that.$f7.hidePreloader();
//                                that.personneList = res.data.data;
////                                that.$f7.closeModal('.popup-lugangtong')
//                                setTimeout(function () {
//                                    that.$f7.popup('.popup-about')
//                                },300)
//                            }
//                        })

                    }else
                    if ( data.checkUserRole == '' && type == 'bumen' ) {
                        this.$http.get(this.$store.state.ajaxUrl + 'GetSubOrg', {
                            params: {
                                orgid: this.$store.state.toporg
                            }
                        }).then(function(res) {
                            if ( res.data.data.length ) {
                                var bumenarr = res.data.data
                                var bumenitem = bumenarr.find(x=>x.id == that.$store.state.orgid)
                                if ( bumenitem ) {
                                    that.bumenRYArr.name = bumenitem.name
                                    that.$http.get(that.$store.state.ajaxUrl + 'GetUsersNAO', {
                                        params: {
                                            org: bumenitem.id
                                        }
                                    }).then(function(res) {
                                        if ( res.data.success ) {

                                            let arrNew = res.data.data;
                                            arrNew.forEach(function (value,index) {
                                                value.state = false
                                            })
                                            that.bumenRYArr.ryList = res.data.data
                                            that.$f7.popup('.popup-renyuan')
                                            that.$f7.hidePreloader();
                                            console.log(that.bumenRYArr,'部门人员')
                                        }
                                    })
                                }
//                                    that.wuGZrenList = res.data.data
//                                    that.wuGZrenList.forEach(function (value,index) {
//                                        that.GetSubOrg(value.id,index)
//                                    })
                            }else {
                                that.$f7.hidePreloader();
                                that.$f7.popup('.popup-renyuan')
                                f7.alert('未获取到人员')
                            }
                        })

                    }
                    else{
                        // 规则不为空
                        let _data= {
                            Ruleid: data.ruleID,
                            step: that.stepId,
                            dep: this.$store.state.orgid
                        }
                        this.$http.post(this.$store.state.ajaxUrl + 'GetRuleUser', _data).then(function(res) {
                            console.log(res)
                            if ( res.data.checkUsers.length ) {
                                var datas = res.data.checkUsers;
                                for(var i=0; i<datas.length; i++){
                                    datas[i].children = [];
                                    datas[i].children.push(datas[i])
                                    //第二层for 用于控制与第一层比较的元素
                                    for(var j=i+1; j<datas.length; j++){
                                        //如果相等
                                        if(datas[i].orgName == datas[j].orgName){
                                            datas[i].children.push(datas[j])
                                            datas.splice(j,1);
                                            j--;
                                        }
                                    }
                                }
                                console.log(datas,'这是人员信息')
                                that.ruleuser = datas;
                                that.$f7.hidePreloader();
                                setTimeout(function () {
                                    that.$f7.popup('.popup-ruleuser')
                                },300)
                            }else {
                                that.$f7.hidePreloader();
                                f7.alert('未读取到人员!')
                            }
//                        if ( res.data.isSuccess ){

//                            that.$f7.closeModal('.popup-lugangtong')

//                        }
                        })
                    }
                }else {
                    let IsDefaultLimit,LimitTime
                    //不需要选择人员
                    if ( this.dataList.entity.SLimitTime == null || this.dataList.entity.LimtDate == null) {
                        IsDefaultLimit = true;
                        LimitTime = Fun.addDate(3)
                        console.log('空')
                    }else {
                        console.log('有')
                        IsDefaultLimit = false;
                        LimitTime = this.dataList.entity.SLimitTime || this.dataList.entity.LimtDate
                    }
//                    this.dataList.entity


                    let _data = {
                        StepID: this.stepId,
                        Sug: this.yijian,
                        User: this.$store.state.username,
                        RuleID: data.ruleID,
                        ButtonType: data.buttonType, // 按钮类型
                        BusniessType: this.FwOrSw, // 公文类型
                        BusniessLimitTime: LimitTime, // 限办时间
                        IsDefaultLimit: IsDefaultLimit, // 是否默认限办时间
//                        Hashtable: '', //参数
//                        FlowType: 'GW', //流程类型，分为：公文（GW），请休假（QJ）等
                        IsMes: this.$$("input[name=mes]").prop('checked'), //是否发送短信
                    }
                    console.log(_data)
                    this.$http.post(this.$store.state.ajaxUrl + 'RunNextStep', _data).then(function(res) {
                        if ( res.data.success ) {
                            if ( res.data.end ) {
                                that.updateSPForm(res.data.instanceID)
                            }
                            f7.alert('提交成功！',function () {
//                                that.$f7.closeModal('.popup-lugangtong')
                                setTimeout(function() {
                                    that.$router.back();
                                    that.$f7.pullToRefreshTrigger('#daiban .pull-to-refresh-content');
                                }, 300);
                            })
                            if ( that.qianzhangImg != '' ) {
                                that.SaveSignetRecord()
                            }
//                            if ( that.FwOrSw == 'SW' ) {
//                                that.InsertShare()
//                            }
                            if ( that.isNoPrint && that.renIdStr1 != '' && that.renStr1 != '' ) {
                                that.chuanyueFF()
                            }
                            if ( that.SuggestionObj.PBValue && that.yijian == that.SuggestionObj.PBValue ) {
                                that.UpdateSuggestionOrder(that.SuggestionObj)
                            }
                        }
                    })
                }
            },
            // 获取接下来操作按钮
            GetNextButtons() {
                var that = this;
//                var datas = [
//                                {
//                                    IsCheckUser: true,
//                                    RuleID: 'skdkdjfk',
//                                    buttonName: '交你妈处理',
//                                    buttonType: '200',
//                                    ruleName: '公文书处理',
//                                    userName: 'x处理人',
//                                },{
//                                    IsCheckUser: true,
//                                    RuleID: 'skdkd122jfk',
//                                    buttonName: '处理',
//                                    buttonType: '201',
//                                    ruleName: '砂比处理',
//                                    userName: '2处理人',
//                                },
//                            ]
//                let datasNew = [];
//                for(var i=0; i<datas.length; i++){
//                    //第二层for 用于控制与第一层比较的元素
//                    for(var j=i+1; j<datas.length; j++){
//                        //如果相等
//                        if(datas[i].buttonType == datas[j].buttonType){
//                            datas[i].ruleName += '/'+datas[j].ruleName
//                            datas.splice(j,1);
//                            j--;
//                        }
//                    }
//                }
//                console.log(datas,'新按钮')
//                that.buttonInfos = datas;
//                that.nextHJ = that.buttonInfos[0].ruleName
//                that.bextBtn = that.buttonInfos[0]
//

                this.$http.get(this.$store.state.ajaxUrl + 'NextButtons', { //
                    params: {
                        StepID: this.stepId,
                    }
                }).then(function(res) {
                    var datas = res.data.buttonInfos;
                    let datasNew = [];
                    for(var i=0; i<datas.length; i++){
                        //第二层for 用于控制与第一层比较的元素
                        for(var j=i+1; j<datas.length; j++){
                            //如果相等
                            if(datas[i].buttonType == datas[j].buttonType){
                                datas[i].ruleName += '/'+datas[j].ruleName
                                datas.splice(j,1);
                                j--;
                            }
                        }
                    }
                    console.log(datas,'新按钮')
                    that.buttonInfos = datas;
                    that.nextHJ = that.buttonInfos[0].ruleName
                    that.bextBtn = that.buttonInfos[0]
                })
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
        /*color: red;*/
    }
    .yijian-area{
        height: 100px;
        width: 100%;
        border: 1px solid #999;
    }
</style>