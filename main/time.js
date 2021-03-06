function Time( year,month,date,hour,minute,second ) {
  this.year = year;
  this.month = month;
  this.date = date;
  this.hour = hour;
  this.minute = minute;
  this.second = second;
}
Time.prototype.timer = function(){
  var dateDigitToString = function(num){
	return num < 10 ? '0' + num : num;
  }

  var date = new Date();
  var time = new Time(date.getFullYear(),dateDigitToString(date.getMonth()+1),dateDigitToString(date.getDate()),dateDigitToString(date.getHours()),dateDigitToString(date.getMinutes()),dateDigitToString(date.getSeconds()));
  return time.year + '年' + time.month + '月' + time.date + '日 ' + time.hour + ':' + time.minute + ':' + time.second;
}
module.exports= Time;


