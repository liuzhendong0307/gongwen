
var jsBridge = {
    executeCommand: function(name, params) {
        //检查Framework7引用
        if (!Framework7) {
            console.log("缺少Framework7引用");
            return;
        }
        var device = Framework7.prototype.device;
        var params_arry = [];
        for (var key in params) {
            params_arry.push(key + "=" + escape(params[key]));
        }
        if (device.android) {
            Foo[name](params_arry.join('&'));
        } else if (device.ios) {
            location.href = "hybrid:" + (Dom7.parseUrlQuery(window.location.href).cordova ? "//" : "") + name + "?" + params_arry.join('&');
        }
    },
    back:function(){
        this.executeCommand('back');
    }
};

module.exports = jsBridge;