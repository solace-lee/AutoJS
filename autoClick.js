"auto";

setScreenMetrics(1080, 1920);

console.show();
console.info("按音量下开始(继续)，开始后继续点击音量下加速，单击音量上暂停，双击结束");

events.observeKey();//监听按键状态修改事件
	var i=0;
	var j=0;
	var a=0;
events.onKeyDown("volume_up", function(event){
    if(a==0){
        j++;
        a++;
     }
    else{
        threads.shutDownAll;
        console.info("外挂结束");
        exit();
        }
});

events.onKeyDown("volume_down", function(){
     j=2;
     a=0;
     var c=	cclick();
});
	

function cclick(){
    	threads.start(function(){
         		while(j%2==0){
	         	click(540, 1080);
	         	sleep(100);
         		i++;
         		console.info("点击"+i+"次");
	         	}
          		while(j%2==1){
          		threads.shutDownAll;
				console.info("暂停了");
				break;
          		}
     	});
};