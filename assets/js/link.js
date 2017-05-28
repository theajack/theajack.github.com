var tj_links=[
    ["个人主页","Home","J.open('http://www.theajack.com/')"],
    ["个人博客","Blog","J.open('http://www.theajack.com/blog/')"],
    ["jetter.js","jetter.js","J.open('http://www.theajack.com/jetterjs/')"],
    ["bql.js","bql.js","J.open('http://www.theajack.com/bql/')"],
    ["cnchar.js","cnchar.js","J.open('http://www.theajack.com/cnchar/')"],
    ["汉字打字游戏","Typing","J.open('http://www.theajack.com/type/')"],
    ["指纹预测","Fingerprint","J.open('http://www.theajack.com/predict/')"],
    ["摇摆玛丽","Shake mario","J.open('http://www.theajack.com/jjump/')"],
    ["炸弹人大作战","BombBattle","J.open('http://www.theajack.com/bombbattle/')"],
    ["人人单车","Bikeshare","J.open('http://bikeshare.imwork.net')"],
    ["人人单车纯净版","Bike query","J.open('http://www.theajack.com/bike/')"],
    ["迷宫","Maze","J.open('http://www.theajack.com/maze/')"],
    ["2048 plus","2048 plus","J.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.main.theajack')"],
    ["石头理财","Stone finance","J.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.example.stonefinance')"],
    ["突破防线","Break Defence","J.show('In developing')"],
  ];
J.ready(function(){
  var linkWrapper=J.id("tjLinks");
  if(linkWrapper!=undefined){
    J.tag("head").append(J.new("style").html('#tjLinks{margin: 5px;}#tjLinks:before, #tjLinks:after {display: table;content: " ";}#tjLinks:after {clear: both;}.tj-link{text-decoration: underline;margin: 0 5px;font-size: 20px;cursor:pointer;float:left;}.tj-link:hover{color:#aaa;}@media screen and (max-width:1000px) {.tj-link{font-size: 15px;}}'));
    var i=(linkWrapper.attr("link-en")==true||linkWrapper.attr("link-en")=='true')?1:0;
    var str="";
    tj_links.each(function(item){
      str+="<span class='tj-link' onclick=\""+item[2]+"\">"+item[i]+"</span>"
    });
    linkWrapper.html(str);
    if(linkWrapper.attr("link-color")!=null){
      J.class('tj-link').css("color",linkWrapper.attr("link-color"));
    }
  }
})