//name属性    state_name     #statName
var J=J||$J;
J.ready(function(){
  var name;
  var ss=J.tag("script");
  var cookie=J.cookie("stat_mark");
  if(cookie==""){
    J.cookie("stat_mark","true");
    cookie="false";
  }
  for(var i=0;i<ss.length;i++){
    if(ss[i].hasAttr("name")){
      name=ss[i].attr("name");
      break;
    }
  }
  if(typeof name=="undefined"){
    if(typeof stat_name=="undefined"){
      var s_n=J.id("statName");
      if(s_n==null){
        name=J.tag("title").txt();
      }else{
        name=s_n.txt();
      }
    }else{
      name=stat_name;
    }
  }
  J.jsonp({
    url:"http://15h97945z7.iok.la/stat.aspx",
    data:{type:"add",name:name,mark:cookie},
    success:function(data){},
    time:20000,
    timeout:function(err){},
    message:""
  });
});