import * as types from './mutation-types';

export default {
	
	
	
	
// 新增培训生
addStudents: ({ commit }, arr) => {
    commit(types.ADD_STUDENTS, arr);
},
//// 修改是否是第一次进入首页
//changeLoadState: ({ commit }) => {
//  commit(types.CHANGE_LOAD_STATE);
//},
// 刷新培训生
clearStudents: ({ commit }) => {
    commit(types.CLEAR_STUDENTS);
},

showStudent: ({ commit }, obj) => {
    commit(types.SHOW_STUDENT, obj);
},
//申请列表
addApplyList: ({ commit }, arr) => {
    commit(types.ADD_APPLY_LIST, arr);
},

clearApplyList: ({ commit }) => {
    commit(types.CLEAR_APPLY_LIST);
},

showApplyDetail: ({ commit }) => {
    commit(types.SHOW_APPLY_DETAIL);
},
//各种options
addPubBase: ({ commit },obj) => {
    commit(types.ADD_PUB_BASE,obj);
},

setPubBase: ({ commit },obj) => {
    commit(types.SET_PUB_BASE,obj);
},

resetForm1: ({ commit }) => {
    commit(types.RESET_FORM_ONE);
},
setForm1: ({ commit },obj) => {
    commit(types.SET_FORM_ONE,obj);
},

resetForm2: ({ commit }) => {
    commit(types.RESET_FORM_TWO);
},
setForm2: ({ commit },obj) => {
    commit(types.SET_FORM_TWO,obj);
},
resetForm3: ({ commit }) => {
    commit(types.RESET_FORM_THREE);
},
setForm3: ({ commit },obj) => {
    commit(types.SET_FORM_THREE,obj);
},
resetForm4: ({ commit }) => {
    commit(types.RESET_FORM_FOUR);
},
setForm4: ({ commit },obj) => {
    commit(types.SET_FORM_FOUR,obj);
},
resetForm5: ({ commit }) => {
    commit(types.RESET_FORM_FIVE);
},
setForm5: ({ commit },obj) => {
    commit(types.SET_FORM_FIVE,obj);
},
resetForm6: ({ commit }) => {
    commit(types.RESET_FORM_SIX);
},
setForm6: ({ commit },obj) => {
    commit(types.SET_FORM_SIX,obj);
}
 
 
 
 
};
