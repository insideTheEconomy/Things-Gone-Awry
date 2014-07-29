var isAttract = true;
vids = ["financial.ogv","911.ogv","katrina.ogv","1907.ogv"];
function init(){
	$("video").on("ended", function(){
		console.log("ended, looping");
		if(!isAttract){
			$("#vid")[0]="vid/menu.ogv";
			isAttract = true;
		}
		this.load();
	})
	$("#wrap").click(function(c){
		m = 1366/4;
		i = ~~( c.clientX/m ) ;
		isAttract = false;
		var v = $("#vid")[0];
		v.src="vid/"+vids[i];
		vid.load();
	})
}
function playAttract(){
	
}
$(function(){
	init();
})