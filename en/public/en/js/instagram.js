var Instagram = (function(){

	var _collection = [];

	var preLoad = function(data){
		for(var em in data){
			for(var i=0,len=data[em].srclist.length;i<len;i++){ var="" src="data[em].bigSrclist[i];" img="new" image();="" img.src="src;" }="" render="function(data){" for(var="" em="" in="" data){="" litmpl="" ;="" i="0,len=data[em].srclist.length;i<len;i++){" +="<li>\
								<div class="img-box">\
									<a class="img-bg" rel="example_group" href="" +data[em].bigsrclist[i]+'"="" title="'+data[em].text[i]+'">\
									<img lazy-src="'+data[em].srclist[i]+'" alt="">\
								\
							';
			}
			$('<section class="archives album"><h1 class="year">'+data[em].year+'<em>'+data[em].month+'月</em></h1>\
				<ul class="img-box-ul">'+liTmpl+'</ul>\
				</section>').appendTo($(".instagram"));
		}

		$(".instagram").lazyload();
		changeSize();

		setTimeout(function(){
			preLoad(data);
		},3000);
		
		$("a[rel=example_group]").fancybox();
	}

	var replacer = function(str){
		if(str.indexOf("outbound-distilleryimage") >= 0 ){
			var cdnNum = str.match(/outbound-distilleryimage([\s\S]*?)\//)[1];
			var arr = str.split("/");
			return "http://distilleryimage"+cdnNum+".ak.instagram.com/"+arr[arr.length-1];
		}else{
			var url = "http://photos-g.ak.instagram.com/hphotos-ak-xpf1/";
			var arr = str.split("/");
			return url+arr[arr.length-1];
		}
	}

	var ctrler = function(data){
		var imgObj = {};
		for(var i=0,len=data.length;i</len;i++){>