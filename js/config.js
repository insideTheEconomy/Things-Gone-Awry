/* - */

//-- Variable Declarations  -- //

//Debug//
var goKiosk;
var hideMouse;

// --------------------------- //

try{
	var user = process.env.USER;
	var homeDir = "/Users/"+user+"/exhibit/";
	var config = "config_awry.json";
	settings = require(homeDir+config);
	console.log("Using config.json Settings: ", settings);
	
	goKiosk = settings.kiosk;
	hideMouse = settings.hideMouse;
}
catch(e){
	settings = require("./config_awry.json");
	console.log("Using DEFAULT cfg: ", settings);
}

// --------------------------- //