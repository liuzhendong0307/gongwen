// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/
import iconsStyles from './css/icons.css'
// Import video Style
// require videojs style [and custom videojs theme]
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css');


// Import vue-video-player
// import VueVideoPlayer from 'vue-video-player'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs';
Vue.prototype.$qs = qs;
//import * as echarts from 'echarts';
// Import App Custom Styles
import AppStyles from './css/app.css'
import TableStyle from './css/table.css'
import FontStyle from './css/iconfont.css'
// Import Routes
import Routes from './routes.js'
import store from './store'
// Import App Component
import App from './app'
// process.env.NODE_ENV =='mock' && require('../mock/list.js');
// process.env.NODE_ENV =='mock' && require('../mock/getOrg.js');


// Init F7 Vue Plugin
Vue.use(Framework7Vue);
Vue.use(VueAxios, axios);
function getQueryObj (v) {
    var p = {};
    if (v) {
        var s = v.split('&');
        s.map(function (o) {
            p[o.split('=')[0]] = o.split('=')[1]
        })
    }
    return p
}
var realSearch = window.location.href.split('?')[1]||'';

var queryObj = getQueryObj(realSearch.split('#')[0]);
var username=queryObj.userName?queryObj.userName.split('.')[0]:'';
var password=queryObj.password?queryObj.password:'1b9bebd63461548f7ffdc51620e0a97b';
var orgid=queryObj.orgid?queryObj.orgid:'482';
var toporg=queryObj.toporg?queryObj.toporg:'477';
var signPW=queryObj.signPW?queryObj.signPW:'336397fc6fb98095d045fcf3654abe1c';
if (username) {
    localStorage.setItem('username',username);
}
if (password) {
    localStorage.setItem('password',password);
}
if (orgid) {
    localStorage.setItem('orgid',orgid);
}
if (toporg) {
    localStorage.setItem('toporg',toporg);
}
if (signPW) {
    localStorage.setItem('signPW',signPW);
}
//    ?userName=zhangxy&password=1b9bebd63461548f7ffdc51620e0a97b&orgid=482&toporg=477&signPW=336397fc6fb98095d045fcf3654abe1c
// Vue.use(VueVideoPlayer);
// Init App
new Vue({
    el: '#app',
    template: '<app/>',
    store,
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        pushState: true,
        modalTitle: '提示',
        modalButtonOk: '确定',
        modalButtonCancel: '取消',
        statusbarOverlay: true,
        fastClicks: true,
        routes: Routes,
        animateNavBackIcon: true,
        swipePanel: 'left',
        closeByBackdropClick: false
    },
    // Register App Component
    components: {
        app: App
    }
});

// 阻止物理键
window.app = {
    onBackPressed: function (e) {
        var view = window.f7.getCurrentView();
        if (view.activePage.from == "right") {
            view.back();
            return false;
        }
    }
}

// //import fundebug
// var fundebug = require("fundebug-javascript");
// fundebug.apikey = "d68bdd6bb114341a729798cbe55c0c0ccd0cc3c95f34c37c1c66366f6df98f0b";






