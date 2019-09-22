var a_bfun = {
    dateParse:function(dateString){
      var dateArray;
      dateString = dateString.replace(' ','-').replace('T','-').replace(':','-')
      dateArray = dateString.split('-');
    return new Date(dateArray[0], dateArray[1]-1, dateArray[2],dateArray[3],dateArray[4]);
  },
    dateCompare:function (dateString, compareDateString){
      var dateTime = a_bfun.dateParse(dateString).getTime();
      var compareDateTime = a_bfun.dateParse(compareDateString).getTime();
      if(compareDateTime > dateTime){
        return 1;
      }else if(compareDateTime == dateTime){
        return 0;
      }else{
        return -1;
      }
    },
   isDateBetween:function(dateString, startDateString, endDateString){
      var flag = false;
      var startFlag = (a_bfun.dateCompare(dateString, startDateString) < 1);
      var endFlag = (a_bfun.dateCompare(dateString, endDateString) > -1);
      if(startFlag && endFlag){
        flag = true;
        // console.log('在区间')
      }
      return flag;
    }
};

export default a_bfun;
