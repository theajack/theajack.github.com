var height,width;
var floats=[];
var t;
var floatNum=5;
var imgs=[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
J.load(function(){
  height=J.height(),width=J.width();
  cx=width/2,cy=height/2;
  var parent=J.id("floats");
  imgs.each(function(item,i){
    parent.append(J.new("img.float").attr('src',"assets/images/image1.png"));
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






