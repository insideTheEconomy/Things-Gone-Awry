var isAttract = true;
vids = ["financial.ogv","911.ogv","katrina.ogv","1907.ogv"];
function init(){
	$("video").on("ended", function(){
		console.log("ended, looping");
		if(!isAttract){
			$("#vid")[0].src="vid/menu.ogv";
			isAttract = true;
		}
		this.load();
	})
	
	$("#wrap").click(function(c){
		
		if(isAttract){
			click();
			isAttract = false;
			m = 1366/4;
			i = ~~( c.clientX/m ) ;
			var v = $("#vid")[0];
			v.src="vid/"+vids[i];
			vid.load();
		}
		
	})
	
}
function click(){
	$("audio")[0].load();
	$("audio")[0].play();
}

$(function(){
	init();
})