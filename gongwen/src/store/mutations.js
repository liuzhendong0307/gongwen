import * as types from './mutation-types';

export default {
	// 新增列表
	[types.ADD_STUDENTS](state, arr) {
		state.students = state.students.concat(arr);
	},
	// 清空列表
	[types.CLEAR_STUDENTS](state) {
		state.students = [];
	},

	[types.SHOW_STUDENT](state, obj) {
		state.student = obj;
	},

	//申请列表
	[types.ADD_APPLY_LIST](state, arr) {
		state.applyList = state.applyList.concat(arr);
	},
	[types.CLEAR_APPLY_LIST](state) {
		state.applyList = [];
	},
	[types.SHOW_APPLY_DETAIL](state, obj) {
		state.apply = obj;
	},

	//各种options
	[types.ADD_PUB_BASE](state, obj) {
		state.pubBase[obj.type] = obj.arr;
	},

	[types.SET_PUB_BASE](state, obj) {
		state.pubBase = obj;
	},
	
	
	[types.RESET_FORM_ONE](state, obj) {
		state.form1 = {
			id: '0',
			cjb: [], //三个对应的说明
			cRemark: '',
			isywzl: '',
			ywzlRemark: '',
			xjb: [],
			xRemark: '',
			iszy: '',
			zyRemark: ''
		};
	},

	[types.SET_FORM_ONE](state, obj) {
		state.form1 = obj;
	},

	[types.RESET_FORM_TWO](state, obj) {
		state.form2 = {
			id: '0',
			cjb: [], //三个对应的说明
			cRemark: '',
			isywzl: '',
			ywzlRemark: '',
			xjb: [],
			xRemark: '',
			iszy: '',
			zyRemark: ''
		};
	},

	[types.SET_FORM_TWO](state, obj) {
		state.form2 = obj;
	},
	[types.RESET_FORM_THREE](state, obj) {
		state.form3 = {
			id: '',
			isxy: '', //吸烟
			ishhsxy: '', //互惠生吸烟
			isysxz: '', //
			ysxzRemark: '',
			istsys: '',
			yyhd: [], //
			qtRemark: "",
			ishhscjjthd:'',//是否互惠生参加
			hhscjjthd: "",//参加哪些
			
			iscjxqb: "",
			cjxqbRemark: "",
			cwType: [],
			cwRemark: "",
			isglcw: ""
		};
	},

	[types.SET_FORM_THREE](state, obj) {
		state.form3 = obj;
	},
	[types.RESET_FORM_FOUR](state, obj) {
		state.form4 = {
			id: '0',
			iszjxy: '',
			zjxyRemark: '',
			//					CJZJHD:'0',//参加宗教活动
			iscjzjxy:'',   //少个参数
			cjzjxyRemark: '', //参加哪种
			zjxykf: '', //看法
			hhhszjxykf: '' //对互惠生宗教看法
		};
	},

	[types.SET_FORM_FOUR](state, obj) {
		state.form4 = obj;
	},
	[types.RESET_FORM_FIVE](state, obj) {
		state.form5 = {
			id: 0,
			isjj: '', //英文家教
			isbm: '', //家政服务
			zjyq: '', //整洁要求
			fjqj:'',//房间清洁
			tutorList: [{
				id: '0',
				workContent: "",
				workTime: ""
			}] //家政填写
		};
	},

	[types.SET_FORM_FIVE](state, obj) {
		state.form5 = obj;
	},
	[types.RESET_FORM_SIX](state, obj) {
		state.form6 = {
			ygwhljtj: [], //异国文化

					isjdhhs: '', //是否接待过互惠生
					hhsrs: 0, //几位
					hhsxmsc: '', //总时长
                    hhslznggj:'',                //新增哪个国家的
					hhsSex: '', //互惠生性别
					hhsAge: [], //互惠生年龄
					qtyy: [], //互惠生其他语言
					qtyyRemark: '',
//					加了个其他技能
                    qtjn:[],
                    qtyyRemark:'',
                    
					zstj: [], //住宿条件
					zstjRemark: '', //住宿条件说明
					
					zstjfj:[],
					zstjfjRemark:'',//
					zstjwy:'',
					zstjwyRemark:'',//
					
					
					islxzw: '', //练习中文
					lxzwsj: [], //帮助互惠生练习中文时间
					lxzwsjRemark: '',
					dhhhscx: '', //几次出行
					dhhhscxRemark: '',
					iscdlxfy: '', //承担费用
					zyzz: [], //主要职责
					zyjg: [], //家规 
					mjsj: '', //门禁时间
					//ZYJGRemak: '', //家规补充
					likePlace: [], //吸引力
					knowBATX: [],
					knowBATXRemark: ''
		};
	},

	[types.SET_FORM_SIX](state, obj) {
		state.form6 = obj;
	}

};