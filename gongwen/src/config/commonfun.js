
var commonfun = {
	//写cookies 

	setCookie: function(name, value) {
		var Days = 16;
		var exp = new Date();
        exp.setHours(exp.getHours() + Days);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},

	//读取cookies 
	getCookie: function(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

		if(arr = document.cookie.match(reg))

			return unescape(arr[2]);
		else
			return null;
	},

	//删除cookies 
	delCookie: function(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = commonfun.getCookie(name);
		if(cval != null)
			document.cookie = name + "=" + 'cval' + ";expires=" + exp.toGMTString();
	},

	finddName: function(id, arr) {
		var dName = '';
		arr.forEach(function(value, index) {
			if(value.dValue == id) {
				dName = value.dName;
			}
		});
		return dName
	},
	getDate: function(time,flag) {
		var d = new Date(parseInt(time));
		var month = d.getMonth() + 1;
		var day = d.getDate();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hour = hour < 10 ? '0' + hour : hour;
		minute = minute < 10 ? '0' + minute : minute;
		var result = '';
		if(flag){
			result = d.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute;
		}else{
			result = d.getFullYear() + '-' + month + '-' + day ;
		}
		//		second = second < 10 ? '0' + second : second;
		return  result
	},
    getDateDQ: function(time,flag) {
        if(time){
            var d = new Date(parseInt(time));
        }else{
            var d = new Date();
        }
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        var result = '';
        if(flag){
            result = d.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }else{
            result = d.getFullYear() + '-' + month + '-' + day ;
        }
        //		second = second < 10 ? '0' + second : second;
        return  result
    },
    timeFormat: function(ms,rule) {
        var date = new Date(parseInt((ms.substr(6,10)) * 1000));
        var year = date.getFullYear();  // 获取完整的年份(4位,1970)
        var month = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var day = date.getDate();  // 获取日(1-31)
        var hour  = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        if(month < 10) {
            month = '0'+ month;
        }
        if(day < 10) {
            day =  '0' + day;
        }
        // if(f7.device.os == 'android') {
        if(rule === 'minute') {
            var a =  ''+year+'-'+month+'-'+day+'T'+hour+':'+minute;
        }else if(rule === 'strMinute') {
            var a = '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }else {
            var a =  ''+year+'-'+month+'-'+day+'';
        }
        // }else if(f7.device.os == 'ios') {
        //    if(rule === 'minute') {
        //        var a =  ''+year+'/'+month+'/'+day+'T'+hour+':'+minute;
        //    }else {
        //        var a =  ''+year+'/'+month+'/'+day+'';
        //    }
        // }


        return a;
    },
    timeFormatEnd: function(ms,rule) {
        var date = new Date(parseInt((ms.substr(5,10)) * 1000));
        var year = date.getFullYear();  // 获取完整的年份(4位,1970)
        var month = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var day = date.getDate();  // 获取日(1-31)
        var hour  = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        if(month < 10) {
            month = '0'+ month;
        }
        if(day < 10) {
            day =  '0' + day;
        }
        // if(f7.device.os == 'android') {
        if(rule === 'minute') {
            var a =  ''+year+'-'+month+'-'+day+'T'+hour+':'+minute;
        }else if(rule === 'strMinute') {
            var a = '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }else {
            var a =  ''+year+'-'+month+'-'+day+'';
        }
        // }else if(f7.device.os == 'ios') {
        //    if(rule === 'minute') {
        //        var a =  ''+year+'/'+month+'/'+day+'T'+hour+':'+minute;
        //    }else {
        //        var a =  ''+year+'/'+month+'/'+day+'';
        //    }
        // }


        return a;
    },
    timeFormat2: function(ms,rule) {
        var ms = ms.toString();
        var date = new Date(parseInt(ms));
        var year = date.getFullYear();  // 获取完整的年份(4位,1970)
        var month = date.getMonth()+1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var day = date.getDate();  // 获取日(1-31)
        var hour  = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        if(month < 10) {
            month = '0'+ month;
        }
        if(day < 10) {
            day =  '0' + day;
        }
        // if(f7.device.os == 'android') {
        if(rule === 'minute') {
            var a =  ''+year+'-'+month+'-'+day+'T'+hour+':'+minute;
        }else if(rule === 'strMinute') {
            var a = '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }else {
            var a =  ''+year+'-'+month+'-'+day+'';
        }
        // }else if(f7.device.os == 'ios') {
        //    if(rule === 'minute') {
        //        var a =  ''+year+'/'+month+'/'+day+'T'+hour+':'+minute;
        //    }else {
        //        var a =  ''+year+'/'+month+'/'+day+'';
        //    }
        // }


        return a;
    },
    getCurrentDate: function(rule) {
        var myDate = new Date();
        var year = myDate.getFullYear() ;
        var mouth = myDate.getMonth()+1 > 9 ? myDate.getMonth()+1 : '0'+(myDate.getMonth()+1);
        var day = myDate.getDate() > 9 ? myDate.getDate() : '0'+myDate.getDate();
        var hour  = myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours();
        var minute = myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
        // var day = myDate.getDate() > 9 ? myDate.getDate() : '0'+myDate.getDate();
        // var day = myDate.getDate() > 9 ? myDate.getDate() : '0'+myDate.getDate();
        if(rule === 'minute') {
            var cureetDate = year+'-'+mouth+'-'+day+'T'+hour+':'+minute;
        }else {
            var cureetDate = year+'-'+mouth+'-'+day;
        }


        return cureetDate;
    },

    XmltoJson: function(xml) {
        var obj = {};
        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }
        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = this.XmltoJson(item);
                } else {
                    if (typeof(obj[nodeName].length) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.XmltoJson(item));
                }
            }
        }
        return obj;
    },

    StringtoXML: function (xmlstring) {
        // for IE
        if (window.ActiveXObject) {
          var xmlobject = new ActiveXObject("Microsoft.XMLDOM");
          xmlobject.async = "false";
          xmlobject.loadXML(xmlstring);
          return xmlobject;
        }
        // for other browsers
        else {
          var parser = new DOMParser();
          var xmlobject = parser.parseFromString(xmlstring, "text/xml");
          return xmlobject;
        }
      },
       IsContain: function (arr,value) {
            for(var i=0;i<arr.length;i++) {
                if(arr[i].userName==value)
                    return {
                        state: true,
                        index: i
                    };
            }
            return {state: false};
        },
        IsContain1: function (arr,value) {
            for(var i=0;i<arr.length;i++) {
                if(arr[i].name==value)
                    return {
                        state: true,
                        index: i
                    };
            }
            return {state: false};
        },
    IsContainxx: function (arr,value,str) {
        for(var i=0;i<arr.length;i++) {
            if(arr[i].name==value && arr[i].orgName==str)
                return {
                    state: true,
                    index: i
                };
        }
        return {state: false};
    },
    formatDte:function (item) {
        item.createDate=new Date(item.createDate)
        let nian=item.createDate.getFullYear();
        let yue=item.createDate.getMonth()+1;
        let ri=item.createDate.getDate();
        let shi=item.createDate.getHours();
        let fen=item.createDate.getMinutes();
        if(fen<10){
            fen="0"+item.createDate.getMinutes()
        }
        let miao=item.createDate.getSeconds();
        if(miao<10){
            miao="0"+item.createDate.getSeconds()
        }
        item.createDate=nian+'/'+yue+"/"+ri+" "+shi+":"+fen+":"+miao
        return item.createDate
    },
    addDate:function (days) {
    if(days == undefined || days == '') {
        days = 1;
    }

    var date = new Date();

    date.setDate(date.getDate() + days);
        var month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1);
        var day = date.getDate() > 9 ? date.getDate() : '0'+date.getDate();
        var hours  = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var second = date.getSeconds()< 10 ? "0" + date.getSeconds() : date.getSeconds();
        var time = date.getFullYear() + "-" + month + "-" + day+ " " + hours + ":" + minutes + ":" + second;

    return time;

}


};

export default commonfun;