function time(){
  var now= new Date();
  var year=now.getFullYear();
  var month=now.getMonth();
  var date=now.getDate();
//获取相应ID
 document.getElementById("datetime").innerHTML="今天是："+year+"年"+(month+1)+"月"+date+"日";
}