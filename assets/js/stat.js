J.ready(function(){
  var name;
  if(typeof stat_name=="undefined"){
    var s_n=J.id("statName");
    if(s_n==null){
      name="unknow";
    }else{
      name=s_n.txt();
    }
  }else{
    name=stat_name;
  }
  J.jsonp({
    url:"http://15h97945z7.iok.la/stat.aspx",
    data:{name:name},
    success:function(data){},
    time:20000,
    timeout:function(err){},
    message:""
  });
});