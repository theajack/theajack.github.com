var height,width;
var floats=[];
var t;
var floatNum=5;
var rate;
var imgs=[
  "app_2048plus",
  "app_bikeshare",
  "app_breakdefence",
  "app_stonefinanace",
  "bikeshare",
  "theajack",
  "bombbattle",
  "jetterjs",
  "maze",
  "bike query",
  "Personal blog",
  "Shake mario",
  "Fingerprint predict",
  "cncharjs",
  "Chinese typing game",
  "bql",
  "jcode",
  "bangzhan_Tech"
];
var click=[
  "J.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.main.theajack')",
  "J.open('http://bikeshare.imwork.net/download.aspx')",
  "J.show('In developing.','info')",
  "J.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.example.stonefinance')",
  "J.open('http://bikeshare.imwork.net')",
  "J.open('http://www.theajack.com/')",
  "J.open('http://www.theajack.com/bombbattle/')",
  "J.open('http://www.theajack.com/jetterjs/')",
  "J.open('http://www.theajack.com/maze/')",
  "J.open('http://www.theajack.com/bike/')",
  "J.open('http://www.theajack.com/blog/')",
  "J.open('http://www.theajack.com/jjump/')",
  "J.open('http://www.theajack.com/predict/')",
  "J.open('http://www.theajack.com/cnchar/')",
  "J.open('http://www.theajack.com/type/')",
  "J.open('http://www.theajack.com/bql/')",
  "J.open('http://www.theajack.com/jcode/')",
  "J.open('http://www.theajack.com/bangzhan/')"
];
J.load(function(){
  setSize();
  var parent=J.id("floats");
  imgs.each(function(item,i){
    var f=J.new("div.float").append([
      J.new("img").attr("src","assets/images/"+imgs[i]+".png").css("margin-top",(25*rate)+"px"),
      J.new("span").txt(imgs[i]).css("font-size",(20*rate)+"px")
    ]).clk(click[i]);
    parent.append(f);
  });
  J.class("float").each(function(item,i){
    floats.append(new Float(item,i));
  });
  setInterval(function(){
    floats.each(function(item){
      item.act();
    });
  },10);
});
function setSize(){
  height=J.height(),width=J.width();
  cx=width/2,cy=height/2;
  rate=((height>width)?width:height)/700;
}
window.onresize=function(){
  setSize();
  floats.each(function(item){
    item.resize();
  });
  J.select(".float img").css("margin-top",(25*rate)+"px");
  J.select(".float span").css("font-size",(20*rate)+"px");
}






