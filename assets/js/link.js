var tj_links=[
    ["个人主页","Home","J.open('https://www.theajack.com/')"],
    ["Jet框架","Jet","J.open('https://www.theajack.com/jet/')"],
    ["奔跑的柴柴","Jet","J.open('https://minapp.com/miniapp/6495/')"],
    ["作品集","Works","J.open('https://www.theajack.com/works.html')"],
    ["个人博客","Blog","J.open('https://www.theajack.com/blog/')"],
    ["JUI","JUI","J.open('https://www.theajack.com/jet/#/jui')"],
    ["jetter.js","jetter.js","J.open('https://www.theajack.com/jetterjs/')"],
    ["bql.js","bql.js","J.open('https://www.theajack.com/bql/')"],
    ["cnchar.js","cnchar.js","J.open('https://www.theajack.com/cnchar/')"],
    ["jcode.js","jcode.js","J.open('https://www.theajack.com/jcode/')"],
    ["微信友评价","comment","J.open('https://minapp.com/miniapp/9053/')"],
    ["汉字打字游戏","Typing","J.open('https://www.theajack.com/type/')"],
    ["指纹预测","Fingerprint","J.open('https://www.theajack.com/predict/')"],
    ["摇摆玛丽","Shake mario","J.open('https://www.theajack.com/jjump/')"],
    ["炸弹人大作战","BombBattle","J.open('https://www.theajack.com/bombbattle/')"],
//    ["人人单车","Bikeshare","J.open('http://bikeshare.imwork.net')"],
//    ["人人单车纯净版","Bike query","J.open('https://www.theajack.com/bike/')"],
    ["迷宫","Maze","J.open('https://www.theajack.com/maze/')"],
    ["2048 plus","2048 plus","J.open('http://sj.qq.com/myapp/detail.htm?apkName=com.main.theajack')"],
    ["石头理财","Stone finance","J.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.example.stonefinance')"],
    ["邦占科技","Bangzhan Tech","J.open('https://www.theajack.com/bangzhan/')"],
    ["突破防线","Break Defence","J.show('In developing')"],
    ["赞助与支持","Donate","J.open('https://www.theajack.com/jet-demo/#/donate')"],
  ];
J.ready(function(){
  var linkWrapper=J.id("tjLinks");
  if(linkWrapper!=undefined){
    J.tag("head").append(J.new("style").html('#tjLinks{margin: 5px;}#tjLinks:before, #tjLinks:after {display: table;content: " ";}#tjLinks:after {clear: both;}.tj-link{text-decoration: underline;margin: 0 5px;font-size: 20px;line-height: 25px;cursor:pointer;float:left;}.tj-link:hover{color:#aaa!important;}@media screen and (max-width:1000px) {.tj-link{font-size: 15px;line-height:18px;}}'));
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