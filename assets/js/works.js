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
  "ofo query"
];
var click=[
  "Jet.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.main.theajack')",
  "Jet.open('http://bikeshare.imwork.net/download.aspx')",
  "Jet.show('In developing.','info')",
  "Jet.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.example.stonefinance')",
  "Jet.open('http://bikeshare.imwork.net')",
  "Jet.open('https://theajack.github.io')",
  "Jet.open('https://theajack.github.io/bombbattle')",
  "Jet.open('https://theajack.github.io/jetterjs')",
  "Jet.open('https://theajack.github.io/maze')",
  "Jet.open('https://theajack.github.io/ofo')",
];
J.load(function(){
  setSize();
  var parent=J.id("floats");
  imgs.each(function(item,i){
    var f=J.new("div.float").append([
      J.new("img").attr("src","assets/images/"+imgs[i]+".png").css("margin-top",(25*rate)+"px"),
      J.new("span").text(imgs[i]).css("font-size",(20*rate)+"px")
    ]).event("onclick",click[i]);
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






